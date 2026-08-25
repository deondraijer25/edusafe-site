/**
 * vibe-handler.js — Injected into every preview iframe.
 * Version: 1.2.0
 *
 * Features:
 *  - Element hover/click selection with highlights & tooltips
 *  - React source-info extraction (fiber walker + __jsxSource__)
 *  - Parent <-> Child postMessage protocol (TOGGLE_SELECTOR, ELEMENT_CLICKED, etc.)
 *  - Virtual overrides via Vite HMR WebSocket
 *  - Tailwind CDN injection & config
 *  - Runtime error monitoring (window.onerror, unhandledrejection, vite:error)
 *  - Console output capture (log, warn, error)
 *  - Network request interception (fetch wrapper)
 *  - Scroll position & scrollable detection
 *  - URL change detection & navigation handler
 *  - Keyboard shortcut capture
 *  - LocalStorage bridge
 */

//  CONSTANTS & CONFIG
  function isAllowedOrigin() {
    return true;
  }

  var CONFIG = {
    HIGHLIGHT_COLOR: "hsl(225, 88%, 53%)",
    HIGHLIGHT_BG: "hsla(225, 88%, 53%, 0.1)",
    DEBOUNCE_DELAY: 10,
    Z_INDEX: 10000,
    TOOLTIP_OFFSET: 25,
    MAX_TOOLTIP_WIDTH: 200,
    SCROLL_DEBOUNCE: 420,
    FULL_WIDTH_TOOLTIP_OFFSET: "12px",
    HIGHLIGHT_STYLE: {
      FULL_WIDTH: { OFFSET: "-5px", STYLE: "solid" },
      NORMAL: { OFFSET: "0", STYLE: "solid" },
    },
    SELECTED_ATTR: "data-vb-selected",
    HOVERED_ATTR: "data-vb-hovered",
    PRIMARY_ATTR: "data-vb-primary",
    OVERRIDE_STYLESHEET_ID: "vibe-override",
    INDEX_COMPONENT_NAME: "Index",
    TABLET_BREAKPOINT: "768px",
    INDEX_BORDER_RADIUS: "0.75rem",
  };

  // UTILITY HELPERS

  function postToParent(msg) {
    if (!window.parent || !msg || typeof msg !== "object") return;
    try { window.parent.postMessage(msg, "*"); } catch (e) {}
  }

  function waitForRootMount() {
    return new Promise(function (resolve) {
      var root = document.getElementById("root");
      if (root && root.children.length > 0) {
        resolve();
        return;
      }
      new MutationObserver(function (mutations, observer) {
        var r = document.getElementById("root");
        if (r && r.children.length > 0) {
          observer.disconnect();
          resolve();
        }
      }).observe(document.body, { childList: true, subtree: true });
    });
  }

  function isBlankScreen() {
    var root = document.getElementById("root");
    return root ? root.childElementCount === 0 : false;
  }

  function sanitizePath(path) {
    if (path.includes("dev_server")) {
      path = path.split("dev_server")[1].slice(1);
    }
    if (path.includes("sandbox-scheduler/sandbox")) {
      path = path.split("sandbox-scheduler/")[1].split("/").slice(1).join("/");
    }
    return path.replace(/^\/dev-server\//, "");
  }

  function stripDevServerPrefix(path) {
    return path.replace(/^\/dev-server\//, "");
  }

  var MAX_PAYLOAD_LENGTH = 2000;
  function truncateString(str) {
    return str.length <= MAX_PAYLOAD_LENGTH
      ? str
      : str.slice(0, MAX_PAYLOAD_LENGTH) + "... [truncated]";
  }

  function debounce(fn, delay) {
    var timer = null;
    return function () {
      var args = arguments;
      var ctx = this;
      if (timer) clearTimeout(timer);
      timer = setTimeout(function () { fn.apply(ctx, args); }, delay);
    };
  }

  // NETWORK INTERCEPTION — FETCH WRAPPER

  function isStreamingResponse(response) {
    var contentType = response.headers.get("content-type") || "";
    return (
      contentType.includes("text/event-stream") ||
      contentType.includes("application/stream+json") ||
      contentType.includes("application/x-ndjson")
    );
  }

  function wrapStreamingResponse(response, requestInfo, startTime) {
    if (!response.body) return response;
    var reader = response.body.getReader();
    var decoder = new TextDecoder();
    var fullBody = "";
    var stream = new ReadableStream({
      start: async function (controller) {
        try {
          while (true) {
            var result = await reader.read();
            if (result.done) {
              postToParent({
                type: "NETWORK_REQUEST",
                payload: {
                  ...requestInfo,
                  responseBody: fullBody || "[Streaming completed]",
                  duration: Date.now() - startTime,
                  streaming: true,
                  streamComplete: true,
                },
              });
              controller.close();
              break;
            }
            var chunk = decoder.decode(result.value, { stream: true });
            fullBody += chunk;
            controller.enqueue(result.value);
            postToParent({
              type: "NETWORK_REQUEST_CHUNK",
              payload: { ...requestInfo, chunk: chunk, streaming: true },
            });
          }
        } catch (err) {
          controller.error(err);
          postToParent({
            type: "NETWORK_REQUEST",
            payload: {
              ...requestInfo,
              responseBody: "[Streaming error: " + (err instanceof Error ? err.message : "Unknown") + "]",
              duration: Date.now() - startTime,
              streaming: true,
              streamError: true,
            },
          });
        }
      },
    });
    return new Response(stream, {
      status: response.status,
      statusText: response.statusText,
      headers: response.headers,
    });
  }

  function headersToObject(headers) {
    var obj = {};
    headers.forEach(function (value, key) { obj[key] = value; });
    return obj;
  }

  function initNetworkInterception() {
    var originalFetch = window.fetch;
    window.fetch = async function () {
      var args = arguments;
      var startTime = Date.now();
      try {
        var requestBody;
        if (args[1] && args[1].body) {
          try {
            if (typeof args[1].body === "string") requestBody = args[1].body;
            else if (args[1].body instanceof FormData)
              requestBody = "FormData: " + Array.from(args[1].body.entries()).map(function (e) { return e[0] + "=" + e[1]; }).join("&");
            else if (args[1].body instanceof URLSearchParams)
              requestBody = args[1].body.toString();
            else requestBody = JSON.stringify(args[1].body);
          } catch (e) { requestBody = "Could not serialize request body"; }
        }

        var response = await originalFetch.apply(this, args);
        var urlArg = args[0];
        var requestInfo = {
          url: typeof urlArg === "string" ? urlArg : urlArg instanceof URL ? urlArg.toString() : urlArg instanceof Request ? urlArg.url : response.url,
          method: (args[1] && args[1].method) || "GET",
          status: response.status,
          statusText: response.statusText,
          requestBody: requestBody,
          timestamp: new Date().toISOString(),
          origin: window.location.origin,
          headers: (args[1] && args[1].headers) ? headersToObject(new Headers(args[1].headers)) : {},
        };

        if (isStreamingResponse(response)) {
          postToParent({
            type: "NETWORK_REQUEST",
            payload: { ...requestInfo, responseBody: "[Streaming response - data will follow]", duration: Date.now() - startTime, streaming: true, streamComplete: false },
          });
          return wrapStreamingResponse(response, requestInfo, startTime);
        }

        var responseBody;
        try { response.clone && (responseBody = await response.clone().text()); }
        catch (e) { responseBody = "[Clone failed: " + (e instanceof Error ? e.message : "Unknown error") + "]"; }

        postToParent({ type: "NETWORK_REQUEST", payload: { ...requestInfo, responseBody: responseBody, duration: Date.now() - startTime } });
        return response;
      } catch (err) {
        var errRequestBody;
        if (args[1] && args[1].body) {
          try {
            if (typeof args[1].body === "string") errRequestBody = args[1].body;
            else if (args[1].body instanceof FormData) errRequestBody = "FormData: " + Array.from(args[1].body.entries()).map(function (e) { return e[0] + "=" + e[1]; }).join("&");
            else if (args[1].body instanceof URLSearchParams) errRequestBody = args[1].body.toString();
            else errRequestBody = JSON.stringify(args[1].body);
          } catch (e) { errRequestBody = "Could not serialize request body"; }
        }
        var errInfo = {
          url: args[0],
          method: (args[1] && args[1].method) || "GET",
          origin: window.location.origin,
          timestamp: new Date().toISOString(),
          duration: Date.now() - startTime,
          headers: (args[1] && args[1].headers) ? headersToObject(new Headers(args[1].headers)) : {},
          requestBody: errRequestBody,
        };
        var errorPayload = err instanceof TypeError
          ? { ...errInfo, error: { message: (err && err.message) || "Unknown error", stack: err && err.stack } }
          : { ...errInfo, error: { message: err && typeof err === "object" && "message" in err ? err.message : "Unknown fetch error", stack: err && typeof err === "object" && "stack" in err ? err.stack : "Not available" } };
        postToParent({ type: "NETWORK_REQUEST", payload: errorPayload });
        throw err;
      }
    };
  }

  // ERROR MONITORING — RUNTIME_ERROR, UNHANDLED_PROMISE_REJECTION, vite:error

  var initErrorMonitoring = (function () {
    var initialized = false;

    function buildErrorPayload(event) {
      var scripts = Array.from(document.scripts || []).slice(0, 25).map(function (s) {
        return s.src ? s.src : (s.textContent ? s.textContent.slice(0, 80) : "inline");
      });
      return {
        message: event.message,
        lineno: event.lineno,
        colno: event.colno,
        filename: event.filename,
        stack: event.error ? event.error.stack : undefined,
        readyState: document.readyState,
        userAgent: navigator.userAgent,
        rootPresent: !!document.getElementById("root"),
        reactVersions: window.__REACT_DEVTOOLS_GLOBAL_HOOK__ && window.__REACT_DEVTOOLS_GLOBAL_HOOK__.renderers
          ? Array.from(window.__REACT_DEVTOOLS_GLOBAL_HOOK__.renderers.values()).map(function (r) { return r && r.version; })
          : undefined,
        scripts: scripts,
      };
    }

    return function () {
      if (initialized) return;

      var seen = new Set();
      var dedupKey = function (event) {
        return event.message + "|" + event.filename + "|" + event.lineno + "|" + event.colno;
      };

      initNetworkInterception();

      var isDuplicate = function (key) {
        if (seen.has(key)) return true;
        seen.add(key);
        setTimeout(function () { seen.delete(key); }, 5000);
        return false;
      };

      var handleError = function (event) {
        var key = dedupKey(event);
        if (isDuplicate(key)) return;
        var payload = buildErrorPayload(event);
        var blank = isBlankScreen();
        postToParent({ type: "RUNTIME_ERROR", payload: { ...payload, blankScreen: blank } });
      };

      window.addEventListener("error", handleError);

      window.addEventListener("unhandledrejection", function (event) {
        var reason = event.reason;
        var message = (reason && reason.message) ? reason.message : String(reason || "Unhandled promise rejection");
        var stack = (reason && reason.stack) ? reason.stack : "";
        var key = stack || message;
        if (isDuplicate(key)) return;
        var scripts = Array.from(document.scripts || []).slice(0, 25).map(function (s) {
          return s.src ? s.src : (s.textContent ? s.textContent.slice(0, 80) : "inline");
        });
        var payload = {
          message: message,
          stack: stack,
          readyState: document.readyState,
          userAgent: navigator.userAgent,
          rootPresent: !!document.getElementById("root"),
          scripts: scripts,
        };
        var blank = isBlankScreen();
        postToParent({ type: "UNHANDLED_PROMISE_REJECTION", payload: { ...payload, blankScreen: blank } });
      });

      // Vite HMR compilation errors — shares dedup with runtime errors
      window.addEventListener("vite:error", function (e) {
        var err = e.detail || {};
        var msg = err.message || "Vite compilation error";
        var stack = err.stack || err.frame || "";
        if (err.plugin) msg = "[plugin:" + err.plugin + "] " + msg;
        if (err.id) stack = err.id + "\n" + stack;
        var key = "vite:" + msg + "|" + stack.slice(0, 200);
        if (isDuplicate(key)) return;
        postToParent({ type: "RUNTIME_ERROR", payload: { message: msg, stack: stack } });
      });

      initialized = true;
    };
  })();

  // APP_READY DETECTION — fires after React mount, not DOMContentLoaded

  (function () {
    try {
      var notify = function () {
        postToParent({
          type: "APP_READY",
          payload: {
            readyState: document.readyState,
            blankScreen: isBlankScreen()
          }
        });
      };
      waitForRootMount().then(notify).catch(function() {
        setTimeout(notify, 0);
      });
    } catch (e) {}
  })();

  // CONSOLE OUTPUT CAPTURE

  var SerializeDefaults = { maxDepth: 10, indent: 2, includeSymbols: true, preserveTypes: true, maxStringLength: 10000, maxArrayLength: 100, maxObjectKeys: 100 };

  function CircularRef(path) { this.message = "[Circular Reference to " + path + "]"; }
  function TypedValue(type, value) { this._type = type; this.value = value; }

  function serializeValue(value, opts, seen, path) {
    if (opts === undefined) opts = {};
    if (seen === undefined) seen = new WeakMap();
    if (path === undefined) path = "root";
    var o = { ...SerializeDefaults, ...opts };
    if (path.split(".").length > o.maxDepth) return new TypedValue("MaxDepthReached", "[Max depth of " + o.maxDepth + " reached]");
    if (value === undefined) return new TypedValue("undefined", "undefined");
    if (value === null) return null;
    if (typeof value === "string") return value.length > o.maxStringLength ? new TypedValue("String", value.slice(0, o.maxStringLength) + "... [" + (value.length - o.maxStringLength) + " more characters]") : value;
    if (typeof value === "number") return Number.isNaN(value) ? new TypedValue("Number", "NaN") : Number.isFinite(value) ? value : new TypedValue("Number", value > 0 ? "Infinity" : "-Infinity");
    if (typeof value === "boolean") return value;
    if (typeof value === "bigint") return new TypedValue("BigInt", value.toString());
    if (typeof value === "symbol") return new TypedValue("Symbol", value.toString());
    if (typeof value === "function") return new TypedValue("Function", { name: value.name || "anonymous", stringValue: value.toString().slice(0, o.maxStringLength) });
    if (value && typeof value === "object") {
      if (seen.has(value)) return new CircularRef(seen.get(value));
      seen.set(value, path);
    }
    if (value instanceof Error) {
      var errObj = { name: value.name, message: value.message, stack: value.stack };
      for (var k of Object.getOwnPropertyNames(value)) { if (!errObj[k]) errObj[k] = serializeValue(value[k], o, seen, path + "." + k); }
      return new TypedValue("Error", errObj);
    }
    if (value instanceof Date) return new TypedValue("Date", { iso: value.toISOString(), value: value.valueOf(), local: value.toString() });
    if (value instanceof RegExp) return new TypedValue("RegExp", { source: value.source, flags: value.flags, string: value.toString() });
    if (value instanceof Promise) return new TypedValue("Promise", "[Promise]");
    if (value instanceof WeakMap || value instanceof WeakSet) return new TypedValue(value.constructor.name, "[" + value.constructor.name + "]");
    if (value instanceof Set) {
      var arr = Array.from(value);
      return arr.length > o.maxArrayLength
        ? new TypedValue("Set", { values: arr.slice(0, o.maxArrayLength).map(function (v, i) { return serializeValue(v, o, seen, path + ".Set[" + i + "]"); }), truncated: arr.length - o.maxArrayLength })
        : new TypedValue("Set", { values: arr.map(function (v, i) { return serializeValue(v, o, seen, path + ".Set[" + i + "]"); }) });
    }
    if (value instanceof Map) {
      var entries = {}; var count = 0; var truncated = 0;
      for (var entry of value.entries()) {
        if (count >= o.maxObjectKeys) { truncated++; continue; }
        var keyStr = typeof entry[0] === "object" ? JSON.stringify(serializeValue(entry[0], o, seen, path + ".MapKey")) : String(entry[0]);
        entries[keyStr] = serializeValue(entry[1], o, seen, path + ".Map[" + keyStr + "]");
        count++;
      }
      return new TypedValue("Map", { entries: entries, truncated: truncated || undefined });
    }
    if (ArrayBuffer.isView(value)) {
      return new TypedValue(value.constructor.name, { length: value.length, byteLength: value.byteLength, sample: Array.from(value.slice(0, 10)) });
    }
    if (Array.isArray(value)) {
      return value.length > o.maxArrayLength
        ? value.slice(0, o.maxArrayLength).map(function (v, i) { return serializeValue(v, o, seen, path + "[" + i + "]"); }).concat(["... " + (value.length - o.maxArrayLength) + " more items"])
        : value.map(function (v, i) { return serializeValue(v, o, seen, path + "[" + i + "]"); });
    }
    var result = {};
    var keys = Object.getOwnPropertyNames(value);
    if (o.includeSymbols) keys.push.apply(keys, Object.getOwnPropertySymbols(value).map(function (s) { return s.toString(); }));
    keys.slice(0, o.maxObjectKeys).forEach(function (key) {
      try { result[key] = serializeValue(value[key], o, seen, path + "." + key); }
      catch (e) { result[key] = new TypedValue("Error", "[Unable to serialize: " + (e instanceof Error ? e.message : String(e)) + "]"); }
    });
    if (keys.length > o.maxObjectKeys) result["..."] = (keys.length - o.maxObjectKeys) + " more properties";
    return result;
  }

  var originalConsole = { log: console.log, warn: console.warn, error: console.error };
  var consoleLevelMap = { log: "info", warn: "warning", error: "error" };

  var initConsoleCapture = (function () {
    var initialized = false;
    var messageBuffer = [];
    var flushTimer = null;
    var FLUSH_INTERVAL = 250;

    function flush() {
      if (messageBuffer.length === 0) { flushTimer = null; return; }
      var batch = messageBuffer.slice();
      messageBuffer.length = 0;
      flushTimer = null;
      postToParent({ type: "CONSOLE_OUTPUT", payload: { messages: batch } });
    }

    return function () {
      if (initialized) return;

      function patchLevel(level) {
        console[level] = function () {
          originalConsole[level].apply(console, arguments);
          var stack = null;
          if (level === "warn" || level === "error") {
            var err = new Error();
            if (err.stack) stack = err.stack.split("\n").slice(2).join("\n");
          }
          var raw = Array.from(arguments).map(function (a) { return serializeValue(a, { maxDepth: 5, includeSymbols: true, preserveTypes: true }); });
          var message = raw.map(function (v) { return typeof v === "string" ? v : JSON.stringify(v, null, 2).slice(0, 10000); }).join(" ") + (stack ? "\n" + stack : "");
          var entry = {
            level: consoleLevelMap[level],
            message: message.slice(0, 10000),
            logged_at: new Date().toISOString(),
            raw: raw,
          };
          messageBuffer.push(entry);
          if (flushTimer === null) flushTimer = setTimeout(flush, FLUSH_INTERVAL);
        };
      }

      patchLevel("log");
      patchLevel("warn");
      patchLevel("error");
      initialized = true;
    };
  })();

  // URL CHANGE DETECTION

  function initURLChangeDetection() {
    var onLoad = function () {
      var lastUrl = document.location.href;
      var body = document.querySelector("body");
      var observer = new MutationObserver(function () {
        if (lastUrl !== document.location.href) {
          lastUrl = document.location.href;
          postToParent({ type: "URL_CHANGED", payload: { url: document.location.href } });
        }
      });
      if (body) observer.observe(body, { childList: true, subtree: true });
    };
    window.addEventListener("load", onLoad);
  }

  // NAVIGATION HANDLER (back/forward)

  function initNavigationHandler() {
    var handler = function (event) {
      if (!event || !event.origin || !event.data || !event.data.type || !isAllowedOrigin(event.origin)) return;
      if (event.data.type === "NAVIGATE") {
        var direction = event.data.payload.direction;
        if (direction === "back") window.history.back();
        else if (direction === "forward") window.history.forward();
      }
    };
    window.addEventListener("message", handler);
  }

  // SCROLL REPORTING & SCROLLABLE DETECTION

  function initScrollReporting() {
    var ticking = false;
    var sendPosition = function () {
      postToParent({
        type: "SCROLL_POSITION",
        payload: {
          scrollY: window.scrollY,
          scrollHeight: document.documentElement.scrollHeight,
          clientHeight: window.innerHeight,
          timestamp: Date.now(),
        },
      });
      ticking = false;
    };
    var onScroll = function () {
      if (!ticking) { requestAnimationFrame(sendPosition); ticking = true; }
    };
    window.addEventListener("scroll", onScroll);
  }

  function initScrollableDetection() {
    var sent = false;
    function isScrollable() {
      return document.documentElement.scrollHeight > document.documentElement.clientHeight;
    }
    function check() {
      if (!sent && isScrollable()) {
        sent = true;
        postToParent({ type: "SCROLLABLE" });
      }
    }
    check();
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", check);
    window.addEventListener("load", check);
    setTimeout(check, 500);
  }

  // KEYBOARD SHORTCUT CAPTURE

  function initKeybindCapture() {
    window.addEventListener("keydown", function (event) {
      var modifiers = [];
      if (event.metaKey) modifiers.push("Meta");
      if (event.ctrlKey) modifiers.push("Ctrl");
      if (event.altKey) modifiers.push("Alt");
      if (event.shiftKey) modifiers.push("Shift");

      var key = (event.key !== "Meta" && event.key !== "Control" && event.key !== "Alt" && event.key !== "Shift") ? event.key : "";
      var compositeKey = modifiers.concat(key).filter(Boolean).join("+");

      var blocked = ["Meta+z", "Meta+Backspace", "Meta+d", "Meta+b", "Ctrl+b", "Alt+s"];
      if (blocked.includes(compositeKey)) event.preventDefault();

      if (compositeKey) {
        setTimeout(function () {
          if (event.defaultPrevented) return;
          postToParent({
            type: "KEYBIND",
            payload: {
              compositeKey: compositeKey,
              rawEvent: { key: event.key, code: event.code, metaKey: event.metaKey, ctrlKey: event.ctrlKey, altKey: event.altKey, shiftKey: event.shiftKey },
              timestamp: Date.now(),
            },
          });
        }, 0);
      }
    }, { passive: false });
  }

  // LOCALSTORAGE BRIDGE

  function initLocalStorageHandler() {
    window.addEventListener("message", function (event) {
      if (event.data && event.data.type === "GET_LOCALSTORAGE" && isAllowedOrigin(event.origin)) {
        var key = event.data.key;
        var requestId = event.data.requestId;
        try {
          var value = localStorage.getItem(key);
          postToParent({ type: "LOCALSTORAGE_RESPONSE", requestId: requestId, key: key, value: value });
        } catch (err) {
          postToParent({ type: "LOCALSTORAGE_RESPONSE", requestId: requestId, key: key, value: null, error: err instanceof Error ? err.message : "Unknown error" });
        }
      }
    });
  }

  // REACT FIBER WALKER — SOURCE INFO EXTRACTION

  var FIBER_TAG_FUNCTION_COMPONENT = 0;
  var FIBER_TAG_CLASS_COMPONENT = 1;
  var FIBER_TAG_FORWARD_REF = 11;
  var FIBER_TAG_MEMO = 14;
  var FIBER_TAG_CONTEXT_CONSUMER = 7;
  var FIBER_TAG_CONTEXT_PROVIDER = 10;
  var FIBER_TAG_SUSPENSE = 9;

  function isComponentFiber(fiber) {
    if (!fiber) return false;
    return typeof fiber.type === "function" || [FIBER_TAG_FUNCTION_COMPONENT, FIBER_TAG_CLASS_COMPONENT, FIBER_TAG_FORWARD_REF, FIBER_TAG_MEMO].includes(fiber.tag);
  }

  function isInternalFiber(fiber) {
    if (!fiber) return false;
    return [FIBER_TAG_CONTEXT_CONSUMER, FIBER_TAG_CONTEXT_PROVIDER, FIBER_TAG_SUSPENSE].includes(fiber.tag);
  }

  function getDisplayName(fiber) {
    if (!fiber) return "Unknown";
    if (typeof fiber.type !== "string") return (fiber.type && (fiber.type.displayName || fiber.type.name)) || "Anonymous";
    if (typeof fiber.type === "string") return fiber.type;
    return "Unknown";
  }

  function getFiberFromDOM(element) {
    for (var key in element) {
      if (key.startsWith("__reactFiber$") || key.startsWith("__reactContainer$")) {
        return element[key];
      }
    }
    return null;
  }

  function getSourceFromFiber(fiber) {
    var current = fiber;
    var parent = current.return;
    while (parent && isInternalFiber(parent)) parent = parent.return;
    if (parent && isComponentFiber(parent) && parent._debugSource) {
      return {
        ...parent._debugSource,
        fileName: sanitizePath(stripDevServerPrefix(parent._debugSource.fileName)),
        displayName: getDisplayName(parent),
      };
    }
    current = fiber;
    while (current) {
      if (current._debugSource) {
        return {
          ...current._debugSource,
          fileName: sanitizePath(stripDevServerPrefix(current._debugSource.fileName)),
          displayName: getDisplayName(current),
        };
      }
      current = current.return;
    }
    return null;
  }

  function getElementIdFromDOMViaFiber(element) {
    var fiber = getFiberFromDOM(element);
    if (!fiber) return null;
    var source = getSourceFromFiber(fiber);
    if (!source) return null;
    return {
      filePath: sanitizePath(source.fileName),
      lineNumber: source.lineNumber,
      col: source.columnNumber,
      displayName: source.displayName,
    };
  }

  // Walk fiber._debugOwner chain to find the JSX call site that produced this
  // element. For a shared primitive like <Button> used as <Button>Save</Button>
  // in App.tsx, the rendered <button>'s owner is the Button fiber, whose
  // _debugSource points to App.tsx:15 (the CALL site). That's the per-instance
  // unique location for patching. Only useful when the clicked source is
  // shared across multiple DOM instances (see callers).
  function getOwnerSourceFromFiber(fiber) {
    if (!fiber) return null;
    var owner = fiber._debugOwner;
    while (owner && !owner._debugSource) owner = owner._debugOwner;
    if (!owner || !owner._debugSource) return null;
    return {
      filePath: sanitizePath(stripDevServerPrefix(owner._debugSource.fileName)),
      lineNumber: owner._debugSource.lineNumber,
      col: owner._debugSource.columnNumber,
    };
  }

  function findAllReactRoots() {
    var roots = [];
    var rootEl = document.getElementById("root") || document.body;
    var rootFiber = getFiberFromDOM(rootEl);
    if (rootFiber) {
      var top = rootFiber;
      while (top.return) top = top.return;
      roots.push(top);
    }
    var candidates = document.querySelectorAll('[data-reactroot], #root, [id*="root"]');
    for (var el of Array.from(candidates)) {
      var f = getFiberFromDOM(el);
      if (f) {
        var t = f;
        while (t.return) t = t.return;
        if (!roots.includes(t)) roots.push(t);
      }
    }
    return roots;
  }

  function findFibersMatchingSource(rootFiber, targetSource) {
    var matches = [];
    function walk(fiber) {
      if (!fiber) return;
      if (fiber.stateNode && fiber.stateNode.nodeType === Node.ELEMENT_NODE) {
        var src = getSourceFromFiber(fiber);
        if (src && sanitizePath(src.fileName) === sanitizePath(targetSource.fileName) && src.lineNumber === targetSource.lineNumber && src.columnNumber === targetSource.columnNumber) {
          matches.push(fiber);
        }
      }
      var child = fiber.child;
      while (child) { walk(child); child = child.sibling; }
    }
    walk(rootFiber);
    return matches;
  }

  function findAllElementsByIdViaFiber(id) {
    var targetSource = { fileName: sanitizePath(id.filePath), lineNumber: id.lineNumber, columnNumber: id.col || 0 };
    var results = [];
    var roots = findAllReactRoots();
    for (var root of roots) {
      var fibers = findFibersMatchingSource(root, targetSource);
      results.push.apply(results, fibers);
    }
    return results.map(function (f) { return f.stateNode; }).filter(function (el) { return !!el; });
  }

  // __jsxSource__ based extractor
  var JSX_SOURCE_SYMBOL = Symbol.for("__jsxSource__");

  function getElementIdFromDOMViaJSXSource(element) {
    var source = element[JSX_SOURCE_SYMBOL];
    if (source) {
      return {
        filePath: sanitizePath(source.fileName),
        lineNumber: source.lineNumber,
        col: source.columnNumber,
        displayName: source.displayName,
      };
    }
    var parent = element.parentElement;
    while (parent) {
      var s = parent[JSX_SOURCE_SYMBOL];
      if (s) return { filePath: sanitizePath(s.fileName), lineNumber: s.lineNumber, col: s.columnNumber, displayName: s.displayName };
      parent = parent.parentElement;
    }
    return null;
  }

  function serializeSourceId(id) {
    return id.filePath + ":" + id.lineNumber + ":" + (id.col || 0) + ":" + id.instanceId;
  }

  function findAllElementsByIdViaJSXSource(id) {
    var key = id.filePath + ":" + id.lineNumber + ":" + (id.col || 0);
    var set = window.sourceElementMap && window.sourceElementMap.get(key);
    if (!set) return [];
    var result = [];
    for (var ref of set) {
      var el = ref.deref();
      if (el && document.contains(el)) result.push(el);
      else set.delete(ref);
    }
    if (set.size === 0 && window.sourceElementMap) window.sourceElementMap.delete(key);
    return result;
  }

  var elementIdExtractor = { getElementIdFromDomNode: getElementIdFromDOMViaFiber, findAllElementsById: findAllElementsByIdViaFiber };

  function setupSourceElementMap() {
    if (!Object.getOwnPropertyDescriptor(window, "sourceElementMap")) {
      var _value;
      Object.defineProperty(window, "sourceElementMap", {
        set: function (v) {
          _value = v;
          elementIdExtractor = v
            ? { getElementIdFromDomNode: getElementIdFromDOMViaJSXSource, findAllElementsById: findAllElementsByIdViaJSXSource }
            : { getElementIdFromDomNode: getElementIdFromDOMViaFiber, findAllElementsById: findAllElementsByIdViaFiber };
        },
        get: function () { return _value; },
      });
    }
    if (window.sourceElementMap) {
      elementIdExtractor = { getElementIdFromDomNode: getElementIdFromDOMViaJSXSource, findAllElementsById: findAllElementsByIdViaJSXSource };
    }
  }

  // ELEMENT INFO HELPERS

  function serializeElementKey(id) {
    return id.filePath + ":" + id.lineNumber + ":" + (id.col || 0) + ":" + (id.instanceId || "");
  }

  function deserializeElementKey(key) {
    var parts = key.split(":");
    return { filePath: parts[0], lineNumber: parseInt(parts[1], 10), col: parseInt(parts[2], 10) || 0, instanceId: parts[3] || undefined };
  }

  function getInstanceIndex(element, sourceInfo) {
    var allElements = elementIdExtractor.findAllElementsById({ filePath: sourceInfo.filePath, lineNumber: sourceInfo.lineNumber, col: sourceInfo.col || 0 });
    var idx = allElements.findIndex(function (el) { return el === element; });
    return idx >= 0 ? String(idx) : undefined;
  }

  function getElementSourceInfo(element) {
    var info = elementIdExtractor.getElementIdFromDomNode(element) || null;
    return { filePath: info ? info.filePath : "", lineNumber: info ? info.lineNumber : 0, col: info ? info.col : 0, displayName: info ? info.displayName : undefined };
  }

  function getElementFullId(element) {
    var info = getElementSourceInfo(element);
    return { ...info, instanceId: getInstanceIndex(element, info) };
  }

  function getParentElement(element) {
    var parent = element && element.parentElement;
    if (!parent || parent.id === "root" || ["HTML", "BODY"].includes(parent.tagName)) return null;
    return parent;
  }

  function getComponentDisplayName(element) {
    var tagName = element.tagName.toLowerCase();
    var iconOverride = element.getAttribute("data-updated-icon-name");
    return iconOverride || (elementIdExtractor.getElementIdFromDomNode(element) && elementIdExtractor.getElementIdFromDomNode(element).displayName) || tagName;
  }

  function markFullWidthAndIndex(element) {
    if (Math.abs(element.getBoundingClientRect().width - window.innerWidth) < 5) {
      element.setAttribute("data-full-width", "true");
    }
    if (getComponentDisplayName(element) === CONFIG.INDEX_COMPONENT_NAME) {
      element.setAttribute("data-vb-index", "true");
    }
  }

  function isSameSourceInfo(a, b) {
    return a && b && a.filePath === b.filePath && a.lineNumber === b.lineNumber && a.col === b.col;
  }

  function extractCSSVariables(element) {
    var vars = {};
    try {
      if (!(element instanceof HTMLElement)) return vars;
      function extractFromStyle(style) {
        var result = {};
        for (var i = 0; i < style.length; i++) {
          var prop = style[i];
          if (prop && prop.startsWith("--")) {
            try { var val = style.getPropertyValue(prop).trim(); if (val) result[prop] = val; } catch (e) {}
          }
        }
        return result;
      }
      Object.assign(vars, extractFromStyle(window.getComputedStyle(document.documentElement)));
      Object.assign(vars, extractFromStyle(window.getComputedStyle(element)));
      var inlineStyle = element.style;
      for (var i = 0; i < inlineStyle.length; i++) {
        var prop = inlineStyle[i];
        if (prop && prop.startsWith("--")) {
          try { var val = inlineStyle.getPropertyValue(prop).trim(); if (val) vars[prop] = val; } catch (e) {}
        }
      }
    } catch (e) { console.warn("Error extracting CSS variables:", e); }
    return vars;
  }

  var URL_REGEX = /url\((?:"([^"]*)"|'([^']*)'|([^)]*))\)/;
  var TAILWIND_BG_REGEX = /bg-\[url\((?:"([^"]*)"|'([^']*)'|([^)]*))\)\]/;

  function extractUrlMatch(match) {
    return match && (match[1] || match[2] || match[3]) || "";
  }

  function resolveBackgroundUrl(url, source) {
    if (!url) return null;
    try { return { url: new URL(url, window.location.href).href, source: source }; } catch (e) { return { url: url, source: source }; }
  }

  function extractBackgroundImage(element) {
    if (!(element instanceof HTMLElement)) return null;
    var className = element.getAttribute("class") || "";
    if (element.style.backgroundImage && element.style.backgroundImage !== "none") {
      var m = element.style.backgroundImage.match(URL_REGEX);
      var resolved = resolveBackgroundUrl(extractUrlMatch(m), "inline");
      if (resolved) return resolved;
    }
    var twMatch = className.match(TAILWIND_BG_REGEX);
    var twResolved = resolveBackgroundUrl(extractUrlMatch(twMatch), "tailwind");
    if (twResolved) return twResolved;
    try {
      var computed = window.getComputedStyle(element);
      if (computed.backgroundImage && computed.backgroundImage !== "none") {
        var cm = computed.backgroundImage.match(URL_REGEX);
        var cResolved = resolveBackgroundUrl(extractUrlMatch(cm), "css");
        if (cResolved) return cResolved;
      }
    } catch (e) {}
    return null;
  }

  function getTextNodes(element) {
    var nodes = [];
    var index = 0;
    for (var child of Array.from(element.childNodes)) {
      if (child.nodeType === Node.TEXT_NODE) {
        var text = (child.textContent || "").trim();
        if (text) { nodes.push({ type: "text", content: text, editable: true, index: index }); index++; }
      } else if (child.nodeType === Node.ELEMENT_NODE) {
        var el = child;
        nodes.push({ type: "element", tagName: el.tagName.toLowerCase(), textContent: truncateString(el.textContent || ""), editable: false, index: index });
        index++;
      }
    }
    return nodes;
  }

  function getElementDetails(element) {
    var tagName = element.tagName.toLowerCase();
    var displayName = getComponentDisplayName(element);
    var bgImage = extractBackgroundImage(element);
    var cssVars = extractCSSVariables(element);

    // Resolve source once, then derive both instanceId and instanceCount
    // from a single findAllElementsById pass (the extractor does non-trivial
    // work — fiber tree walk for the Fiber extractor, or WeakRef scrub for
    // the JSXSource extractor). Previously we called it twice via
    // getElementFullId(...) + the instanceCount lookup below.
    var sourceInfo = getElementSourceInfo(element);
    var allMatches = elementIdExtractor.findAllElementsById({
      filePath: sourceInfo.filePath, lineNumber: sourceInfo.lineNumber, col: sourceInfo.col || 0,
    });
    var instanceCount = allMatches.length;
    var instanceIdx = allMatches.indexOf(element);
    var instanceId = instanceIdx >= 0 ? String(instanceIdx) : undefined;
    var fullId = {
      filePath: sourceInfo.filePath, lineNumber: sourceInfo.lineNumber, col: sourceInfo.col,
      displayName: sourceInfo.displayName, instanceId: instanceId,
    };

    // When > 1, the clicked element is a shared primitive (e.g. shadcn
    // <Button> used in multiple places). Resolve ownerSource — the JSX call
    // site in the consumer file — via React Fiber's `_debugOwner` chain so
    // the AST patcher can target the per-instance JSX (e.g. add className
    // at the usage site, merged via shadcn's `cn()`) instead of the shared
    // component file.
    var ownerSource = null;
    if (instanceCount > 1) {
      ownerSource = getOwnerSourceFromFiber(getFiberFromDOM(element));
      // Guard against owner being in the same file as clicked (rare; means
      // the "shared" source is just recursion inside the same component).
      if (ownerSource && ownerSource.filePath === fullId.filePath) ownerSource = null;
    }

    var children = Array.from(element.children)
      .filter(function (child) { return !isSameSourceInfo(getElementSourceInfo(child), getElementSourceInfo(element)); })
      .filter(function (child, idx, arr) { return idx === arr.findIndex(function (c) { return isSameSourceInfo(getElementSourceInfo(c), getElementSourceInfo(child)); }); })
      .map(function (child) {
        var childId = getElementFullId(child);
        var childBg = extractBackgroundImage(child);
        var childCssVars = extractCSSVariables(child);
        return {
          filePath: childId.filePath, lineNumber: childId.lineNumber, col: childId.col, instanceId: childId.instanceId,
          elementType: child.tagName.toLowerCase(),
          componentName: getComponentDisplayName(child),
          className: child.getAttribute("class") || "",
          textContent: truncateString(child.textContent || ""),
          textNodes: getTextNodes(child),
          attrs: (function () {
            var out = {};
            var names = child.getAttributeNames ? child.getAttributeNames() : [];
            for (var i = 0; i < names.length; i++) {
              var n = names[i];
              if (n === "class" || n === "style") continue;
              if (n.indexOf("data-vibe-") === 0) continue;
              out[n] = child.getAttribute(n) || "";
            }
            if (child.tagName.toLowerCase() === "img" && out.src) {
              try { out.src = new URL(out.src, window.location.href).href; } catch (e) {}
            }
            out.backgroundImage = childBg ? childBg.url : "";
            out.backgroundImageSource = childBg ? childBg.source : "";
            return out;
          })(),
          cssVariables: childCssVars,
        };
      });

    return {
      filePath: fullId.filePath, lineNumber: fullId.lineNumber, col: fullId.col, instanceId: fullId.instanceId,
      instanceCount: instanceCount,
      ownerSource: ownerSource,
      elementType: tagName, componentName: displayName, children: children,
      className: element.getAttribute("class") || "",
      textContent: truncateString(element.textContent || ""),
      textNodes: getTextNodes(element),
      attrs: (function () {
        var out = {};
        var names = element.getAttributeNames ? element.getAttributeNames() : [];
        for (var i = 0; i < names.length; i++) {
          var n = names[i];
          if (n === "class" || n === "style") continue;
          if (n.indexOf("data-vibe-") === 0) continue;
          out[n] = element.getAttribute(n) || "";
        }
        if (tagName === "img" && out.src) {
          try { out.src = new URL(out.src, window.location.href).href; } catch (e) {}
        }
        out.backgroundImage = bgImage ? bgImage.url : "";
        out.backgroundImageSource = bgImage ? bgImage.source : "";
        return out;
      })(),
      cssVariables: cssVars,
    };
  }

  // TAILWIND CDN INJECTION

  var TAILWIND_CDN_URL = "https://cdn.tailwindcss.com";
  var tailwindInjected = false;

  var defaultTailwindConfig = {
    darkMode: ["class"],
    theme: {
      container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
      extend: {
        colors: {
          border: "hsl(var(--border))", input: "hsl(var(--input))", ring: "hsl(var(--ring))",
          background: "hsl(var(--background))", foreground: "hsl(var(--foreground))",
          primary: { DEFAULT: "hsl(var(--primary))", foreground: "hsl(var(--primary-foreground))" },
          secondary: { DEFAULT: "hsl(var(--secondary))", foreground: "hsl(var(--secondary-foreground))" },
          destructive: { DEFAULT: "hsl(var(--destructive))", foreground: "hsl(var(--destructive-foreground))" },
          muted: { DEFAULT: "hsl(var(--muted))", foreground: "hsl(var(--muted-foreground))" },
          accent: { DEFAULT: "hsl(var(--accent))", foreground: "hsl(var(--accent-foreground))" },
          popover: { DEFAULT: "hsl(var(--popover))", foreground: "hsl(var(--popover-foreground))" },
          card: { DEFAULT: "hsl(var(--card))", foreground: "hsl(var(--card-foreground))" },
          sidebar: {
            DEFAULT: "hsl(var(--sidebar-background))", foreground: "hsl(var(--sidebar-foreground))",
            primary: "hsl(var(--sidebar-primary))", "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
            accent: "hsl(var(--sidebar-accent))", "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
            border: "hsl(var(--sidebar-border))", ring: "hsl(var(--sidebar-ring))",
          },
        },
        borderRadius: { lg: "var(--radius)", md: "calc(var(--radius) - 2px)", sm: "calc(var(--radius) - 4px)" },
        keyframes: { "accordion-down": { from: { height: "0" }, to: { height: "var(--radix-accordion-content-height)" } }, "accordion-up": { from: { height: "var(--radix-accordion-content-height)" }, to: { height: "0" } } },
        animation: { "accordion-down": "accordion-down 0.2s ease-out", "accordion-up": "accordion-up 0.2s ease-out" },
      },
    },
  };

  function updateTailwindConfig(config) {
    if (typeof window.tailwind !== "undefined") window.tailwind.config = config;
    else console.warn("[Tailwind JIT] Cannot update config - Tailwind not loaded yet");
  }

  function injectTailwindCDN() {
    if (tailwindInjected) return;
    if (document.querySelector("script[data-tailwind-jit]")) { tailwindInjected = true; return; }
    var script = document.createElement("script");
    script.src = TAILWIND_CDN_URL;
    script.setAttribute("data-tailwind-jit", "true");
    script.onload = function () { if (typeof window.tailwind !== "undefined") window.tailwind.config = defaultTailwindConfig; };
    document.head.appendChild(script);
    tailwindInjected = true;
  }

  function initTailwindConfigListener() {
    window.addEventListener("message", function (event) {
      if (!event.origin || !isAllowedOrigin(event.origin)) return;
      switch (event.data && event.data.type) {
        case "INJECT_TAILWIND_CDN": injectTailwindCDN(); break;
        case "UPDATE_TAILWIND_CONFIG": updateTailwindConfig(event.data.payload); break;
      }
    });
  }

  // VIRTUAL OVERRIDES — VITE HMR WEBSOCKET

  var hmrSocket = null;
  var hmrQueue = [];
  var hmrRetryTimer = null;
  var hmrRetryDelay = 1000;
  var HMR_MAX_RETRY_DELAY = 30000;

  function connectHMR() {
    if (hmrSocket && (hmrSocket.readyState === WebSocket.CONNECTING || hmrSocket.readyState === WebSocket.OPEN)) return;
    var proto = window.location.protocol === "https:" ? "wss:" : "ws:";
    var url = proto + "//" + window.location.host;
    try { hmrSocket = new WebSocket(url, "vite-hmr"); } catch (e) { console.warn("vibe-handler.js: Could not create HMR WebSocket:", e.message); return; }
    hmrSocket.onopen = function () {
      hmrRetryDelay = 1000;
      hmrQueue.forEach(function (msg) { hmrSocket.send(msg); });
      hmrQueue = [];
    };
    hmrSocket.onclose = function () { hmrSocket = null; };
    hmrSocket.onerror = function () {
      hmrSocket = null;
      if (hmrRetryTimer) return;
      hmrRetryTimer = setTimeout(function () {
        hmrRetryTimer = null;
        if (hmrQueue.length > 0) connectHMR();
      }, hmrRetryDelay);
      hmrRetryDelay = Math.min(hmrRetryDelay * 2, HMR_MAX_RETRY_DELAY);
    };
  }

  function sendHMR(event, data) {
    var msg = JSON.stringify({ type: "custom", event: event, data: data });
    if (hmrSocket && hmrSocket.readyState === WebSocket.OPEN) hmrSocket.send(msg);
    else { hmrQueue.push(msg); connectHMR(); }
  }

  function initVirtualOverrides() {
    window.addEventListener("message", function (event) {
      if (!event.origin || !isAllowedOrigin(event.origin)) return;
      switch (event.data && event.data.type) {
        case "VIRTUAL_OVERRIDE":
          if (event.data.payload && event.data.payload.path && event.data.payload.content !== undefined)
            sendHMR("vibe:override", event.data.payload);
          break;
        case "CLEAR_VIRTUAL_OVERRIDE":
          if (event.data.payload && event.data.payload.path) sendHMR("vibe:clear-override", event.data.payload);
          break;
        case "CLEAR_ALL_VIRTUAL_OVERRIDES":
          sendHMR("vibe:clear-all-overrides", {});
          break;
      }
    });
  }

  // SELECTOR SCRIPT (interactive selection, tooltips, inline editing)
  // Abbreviated — handles TOGGLE_SELECTOR, ELEMENT_CLICKED, UPDATE_SELECTED_ELEMENTS,
  // SET_ELEMENT_CONTENT, SET_ELEMENT_ATTRS, SET_ELEMENT_ICON, SET_STYLESHEET,
  // EDIT_TEXT_REQUESTED, HOVER/UNHOVER, GET_PARENT_ELEMENT

  var SCRIPT_VERSION = "1.5.3";
  window.vb_SELECTOR_SCRIPT_VERSION = SCRIPT_VERSION;
  console.log("Vibe handler v" + SCRIPT_VERSION);

  function initSelectorScript() {
    setupSourceElementMap();

    var state = {
      hoveredElement: null,
      isActive: false,
      selectedTooltips: new Map(),
      clickedElementMap: new Map(),
      scrollTimeout: null,
      mouseX: 0,
      mouseY: 0,
      styleElement: null,
      mouseDownElement: null,
      resizeObserver: null,
      primarySelectedElement: null,
    };

    function resetState() {
      state.hoveredElement = null;
      state.scrollTimeout = null;
      state.selectedTooltips.forEach(function (tooltip) { tooltip.remove(); });
      state.selectedTooltips.clear();
      if (state.resizeObserver) { state.resizeObserver.disconnect(); state.resizeObserver = null; }
      state.primarySelectedElement = null;
    }

    function updatePrimaryBounds() {
      if (!state.primarySelectedElement || !document.contains(state.primarySelectedElement)) return;
      var rect = state.primarySelectedElement.getBoundingClientRect();
      postToParent({ type: "SELECTED_ELEMENT_BOUNDS_UPDATED", payload: { rect: rect } });
    }

    function setPrimaryElement(element) {
      if (state.resizeObserver) state.resizeObserver.disconnect();
      state.primarySelectedElement = element;
      if (!element) { state.resizeObserver = null; return; }
      state.resizeObserver = new ResizeObserver(function () { updatePrimaryBounds(); });
      state.resizeObserver.observe(element);
    }

    function isPureTextElement(el) {
      if (!el || !(el instanceof HTMLElement)) return false;
      var t = el.tagName.toLowerCase();
      if (t === "style" || t === "script" || t === "img" || el.childElementCount > 0) return false;
      return Array.from(el.childNodes).every(function(n) { return n.nodeType === Node.TEXT_NODE; });
    }

    function injectStyles() {
      var style = document.createElement("style");
      style.id = "vibe-selector-styles";
      var nr = ":not(input):not(img):not(textarea):not(select):not(video):not(audio):not(iframe):not(canvas):not(svg)";
      style.textContent = [
        "@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@700&display=swap');",
        ".gpt-selected-tooltip { position:fixed; z-index:" + CONFIG.Z_INDEX + "; pointer-events:none; background-color:" + CONFIG.HIGHLIGHT_COLOR + "; color:white; padding:4px 8px; border-radius:4px; font-family:'Roboto Mono',monospace; font-size:14px; font-weight:bold; line-height:1; white-space:nowrap; display:block; box-shadow:0 2px 4px rgba(0,0,0,0.2); margin:-2px 0 0 -2px; border:1px solid rgba(255,255,255,0.3); }",
        "[" + CONFIG.HOVERED_ATTR + "][" + CONFIG.PRIMARY_ATTR + "]" + nr + " { outline:2px solid " + CONFIG.HIGHLIGHT_COLOR + " !important; outline-offset:" + CONFIG.HIGHLIGHT_STYLE.NORMAL.OFFSET + " !important; }",
        "[" + CONFIG.HOVERED_ATTR + "]:not([" + CONFIG.PRIMARY_ATTR + "])" + nr + " { outline:2px dotted " + CONFIG.HIGHLIGHT_COLOR + " !important; outline-offset:" + CONFIG.HIGHLIGHT_STYLE.NORMAL.OFFSET + " !important; }",
        "[" + CONFIG.SELECTED_ATTR + "][" + CONFIG.PRIMARY_ATTR + "]" + nr + " { outline:1px solid " + CONFIG.HIGHLIGHT_COLOR + " !important; outline-offset:1px !important; }",
        "[" + CONFIG.SELECTED_ATTR + "]:not([" + CONFIG.PRIMARY_ATTR + "])" + nr + " { outline:1px dotted " + CONFIG.HIGHLIGHT_COLOR + " !important; outline-offset:1px !important; }",
        ":is(input,img,textarea,select,video,audio,iframe,canvas,svg)[" + CONFIG.HOVERED_ATTR + "][" + CONFIG.PRIMARY_ATTR + "] { outline:2px solid " + CONFIG.HIGHLIGHT_COLOR + " !important; outline-offset:" + CONFIG.HIGHLIGHT_STYLE.NORMAL.OFFSET + " !important; }",
        ":is(input,img,textarea,select,video,audio,iframe,canvas,svg)[" + CONFIG.SELECTED_ATTR + "][" + CONFIG.PRIMARY_ATTR + "] { outline:1px solid " + CONFIG.HIGHLIGHT_COLOR + " !important; outline-offset:1px !important; }",
        "[" + CONFIG.SELECTED_ATTR + "][contenteditable] { outline:none !important; }",
        "[" + CONFIG.HOVERED_ATTR + "][data-full-width]" + nr + " { outline-offset:" + CONFIG.HIGHLIGHT_STYLE.FULL_WIDTH.OFFSET + " !important; }",
        "[" + CONFIG.HOVERED_ATTR + "] > *" + nr + " { outline:1px dotted " + CONFIG.HIGHLIGHT_COLOR + " !important; outline-offset:1px !important; }",
        ":is(button,a,[role='button'],[role='link']) svg { pointer-events:auto !important; }",
      ].join("\n");
      document.head.appendChild(style);
    }

    function isInsideSVG(el) { return el.tagName.toLowerCase() !== "svg" && el.closest("svg") !== null; }

    // Recognise the common Tailwind hover-tint pattern: a `<div class="absolute
    // inset-0 group-hover:bg-black/20">` sitting above an <img> as a sibling.
    // Such a div is positioned absolute/fixed, has no own content (no text,
    // no element children), and is fully transparent (no bg colour, no
    // bg-image, no visible border). Without this filter every click lands on
    // the overlay and never reaches the image the user is actually trying
    // to edit.
    function getColorAlpha(c) {
      if (!c) return 0;
      c = c.trim();
      if (c === "transparent") return 0;
      // rgba(r, g, b, a) — legacy comma form.
      var commaMatch = c.match(/^rgba?\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*,\s*([\d.]+)\s*\)$/);
      if (commaMatch) return parseFloat(commaMatch[1]);
      // rgb(r g b / a) — CSS Color Level 4 form (Tailwind `bg-{color}/{n}`).
      var modernMatch = c.match(/^rgba?\(\s*\d+\s+\d+\s+\d+\s*\/\s*([\d.]+)\s*\)$/);
      if (modernMatch) return parseFloat(modernMatch[1]);
      // rgb(r, g, b) / rgb(r g b) without alpha → opaque.
      return 1;
    }
    function isTransparentOverlay(el) {
      if (!(el instanceof HTMLElement)) return false;
      // Cheap rejects first — vast majority of elements bail here.
      if (el.childElementCount > 0) return false;
      if (el.textContent && el.textContent.trim().length > 0) return false;
      var style = window.getComputedStyle(el);
      if (style.position !== "absolute" && style.position !== "fixed") return false;
      // background-image (gradient, url) is real content, not a veil.
      if (style.backgroundImage && style.backgroundImage !== "none") return false;
      // Anything not fully opaque is a veil/tint sitting over real content.
      // We previously required alpha === 0 strictly, but the overwhelmingly
      // common pattern is `group-hover:bg-black/20` (alpha 0.2) — by the
      // time the user's click lands the parent's :hover state is active
      // and the overlay's computed bg is no longer transparent. Treat any
      // alpha < 1 as overlay; opaque backgrounds remain content.
      if (getColorAlpha(style.backgroundColor) >= 1) return false;
      // A visible solid border is content — keep it as the target.
      var bw = parseFloat(style.borderTopWidth || "0");
      if (bw > 0 && getColorAlpha(style.borderTopColor) >= 1) return false;
      return true;
    }
    function peekBelowOverlay(overlay, coords) {
      // Briefly hide the overlay to find what was beneath it. Prefer the
      // event's own coords (most accurate) over state.mouseX/Y (which
      // may not have been written if mousemove never fired on this
      // handler instance — e.g. the script re-mounting on HMR), with a
      // final fall-back to the overlay's geometric centre.
      var x = (coords && typeof coords.x === "number") ? coords.x : state.mouseX;
      var y = (coords && typeof coords.y === "number") ? coords.y : state.mouseY;
      if (!x && !y) {
        var rect = overlay.getBoundingClientRect();
        x = rect.left + rect.width / 2;
        y = rect.top + rect.height / 2;
      }
      var prev = overlay.style.display;
      overlay.style.display = "none";
      try {
        var below = document.elementFromPoint(x, y);
        if (!below || below === document.documentElement || below === document.body) return null;
        return below === overlay ? null : below;
      } finally {
        overlay.style.display = prev;
      }
    }

    var _overlayLogged = false;
    function resolveTarget(el, coords) {
      if (el.tagName.toLowerCase() === "html") return null;
      var resolved = isInsideSVG(el) ? el.closest("svg") : el;
      if (resolved instanceof HTMLElement && isTransparentOverlay(resolved)) {
        if (!_overlayLogged) {
          // One-shot breadcrumb so we can tell from the iframe console
          // whether the predicate ever matches in production. Throttled
          // to a single message per handler lifetime.
          try { console.log("[vibe] transparent overlay detected:", resolved.className); } catch (_) {}
          _overlayLogged = true;
        }
        var beneath = peekBelowOverlay(resolved, coords);
        if (beneath) return isInsideSVG(beneath) ? beneath.closest("svg") : beneath;
      }
      return resolved;
    }

    function applyHover(el, isPrimary) {
      el.setAttribute(CONFIG.HOVERED_ATTR, "true");
      if (isPrimary) el.setAttribute(CONFIG.PRIMARY_ATTR, "true");
      else el.removeAttribute(CONFIG.PRIMARY_ATTR);
      markFullWidthAndIndex(el);
    }

    function removeHover(el) {
      el.removeAttribute(CONFIG.HOVERED_ATTR);
      if (!el.hasAttribute(CONFIG.SELECTED_ATTR)) {
        el.removeAttribute("data-full-width");
        el.removeAttribute("data-vb-index");
        el.removeAttribute(CONFIG.PRIMARY_ATTR);
      }
      if (el instanceof HTMLElement) el.style.cursor = "";
    }

    function createTooltip(element, key) {
      var tooltip = document.createElement("div");
      tooltip.className = "gpt-selected-tooltip";
      tooltip.setAttribute("role", "tooltip");
      document.body.appendChild(tooltip);
      updateTooltipPosition(tooltip, element);
      state.selectedTooltips.set(key, tooltip);
      return tooltip;
    }

    function updateTooltipPosition(tooltip, element) {
      if (!tooltip || !element) return;
      try {
        var rect = element.getBoundingClientRect();
        var name = element.getAttribute("data-vb-icon-preview") || getComponentDisplayName(element);
        var isFullWidth = Math.abs(rect.width - window.innerWidth) < 5;
        tooltip.style.maxWidth = CONFIG.MAX_TOOLTIP_WIDTH + "px";
        if (isFullWidth) {
          tooltip.style.left = CONFIG.FULL_WIDTH_TOOLTIP_OFFSET;
          tooltip.style.top = CONFIG.FULL_WIDTH_TOOLTIP_OFFSET;
        } else {
          tooltip.style.left = rect.left + "px";
          tooltip.style.top = (rect.top - CONFIG.TOOLTIP_OFFSET) + "px";
        }
        tooltip.textContent = name;
      } catch (e) { console.error("Error updating tooltip:", e); tooltip.remove(); }
    }

    function makeEditable(element, id, allInstances, textNodeIndex, autoFocus, coords) {
      if (!(element instanceof HTMLElement)) return;
      if (element.getAttribute("contenteditable") === "true") { if (autoFocus) element.focus(); return; }
      element.setAttribute("contenteditable", "true");
      var computed = window.getComputedStyle(element);
      var isTransparentText = computed.webkitTextFillColor === "transparent" || computed.color === "rgba(0, 0, 0, 0)";
      var isClipText = computed.backgroundClip === "text" || computed.webkitBackgroundClip === "text";
      if (isTransparentText || isClipText) {
        var isDark = document.documentElement.classList.contains("dark") || window.matchMedia("(prefers-color-scheme: dark)").matches;
        element.style.caretColor = isDark ? "#fff" : "#000";
      }
      if (autoFocus) {
        element.focus();
        // Place the caret at the click point when coords are available.
        // Without this, focus drops the caret at the start of the text,
        // which feels jumpy when the user double-clicked mid-word.
        if (coords && typeof coords.clientX === "number" && typeof coords.clientY === "number") {
          try {
            var range = null;
            if (typeof document.caretRangeFromPoint === "function") {
              range = document.caretRangeFromPoint(coords.clientX, coords.clientY);
            } else if (typeof document.caretPositionFromPoint === "function") {
              var pos = document.caretPositionFromPoint(coords.clientX, coords.clientY);
              if (pos) { range = document.createRange(); range.setStart(pos.offsetNode, pos.offset); }
            }
            if (range) {
              range.collapse(true);
              var sel2 = window.getSelection();
              if (sel2) { sel2.removeAllRanges(); sel2.addRange(range); }
            }
          } catch (_) { /* noop — fall back to default focus caret */ }
        }
      }

      var onInput = function () {
        var edits = [];
        var idx = 0;
        for (var i = 0; i < element.childNodes.length; i++) {
          var child = element.childNodes[i];
          if (child.nodeType === Node.TEXT_NODE) {
            var text = child.textContent || "";
            if (text.trim() === "") continue;
            edits.push({ textNodeIndex: idx, content: text });
            idx++;
          } else if (child.nodeType === Node.ELEMENT_NODE) {
            var tag = child.tagName.toLowerCase();
            if (tag !== "br") {
              edits.push({ textNodeIndex: idx, content: child.innerText || "" });
            }
            idx++;
          }
        }
        postToParent({ type: "ELEMENT_TEXT_UPDATED", payload: { id: id, content: element.innerText, textNodeIndex: textNodeIndex, textEdits: edits } });
      };
      var onKeydown = function (e) { if (e.target === element) { e.stopPropagation(); if (e.key === "Escape") { e.preventDefault(); allInstances.forEach(function (inst) { if (inst instanceof HTMLElement) inst.blur(); }); } } };
      var onBlur = function () {
        element.removeAttribute("contenteditable");
        element.style.caretColor = "";
        element.removeEventListener("input", onInput);
        document.removeEventListener("keydown", onKeydown, { capture: true });
        element.removeEventListener("blur", onBlur);
      };
      element.addEventListener("input", onInput);
      document.addEventListener("keydown", onKeydown, { capture: true });
      element.addEventListener("blur", onBlur);
    }

    function findMatchingElement(id, allElements) {
      var key = serializeElementKey(id);
      var cached = state.clickedElementMap.get(key);
      if (cached instanceof HTMLElement && document.contains(cached) && allElements.includes(cached)) return cached;
      if (id.instanceId) {
        var match = allElements.find(function (el) {
          return getInstanceIndex(el, { filePath: id.filePath, lineNumber: id.lineNumber, col: id.col || 0 }) === id.instanceId;
        });
        if (match) return match;
      }
      return allElements[0] || null;
    }

    // Mirrors lovable's selection-target resolver. Used by
    // UPDATE_SELECTED_ELEMENTS (and any other sender that hands us an
    // element identity from the host). Priority:
    //   1. cached DOM node for this exact id (last-clicked instance)
    //   2. host-supplied CSS selector (handles cases where the click
    //      happened on a tab/screen that wasn't open when this iframe
    //      mounted — no cache, but the host still knows the path)
    //   3. findMatchingElement: source-location lookup +
    //      getInstanceIndex disambiguation for shared components
    //   4. null when nothing resolves; caller decides what to do
    function resolveSelectionTarget(id, selector, hasSourceLoc) {
      var key = serializeElementKey(id);
      var cached = state.clickedElementMap.get(key);
      if (cached instanceof Element && document.contains(cached)) return cached;
      if (selector) {
        try {
          var bySelector = document.querySelector(selector);
          if (bySelector instanceof Element) return bySelector;
        } catch (_) { /* invalid selector — fall through */ }
      }
      if (hasSourceLoc) {
        var elements = elementIdExtractor.findAllElementsById({
          filePath: id.filePath,
          lineNumber: id.lineNumber,
          col: id.col || 0,
        });
        if (elements.length === 0) return null;
        return findMatchingElement(id, elements);
      }
      return null;
    }

    // Event listeners, activate/deactivate, and message handler
    // (full implementation preserved from original hl-vibe-handler.js)

    var onMouseOver = debounce(function (event) {
      if (!state.isActive || state.mouseDownElement) return;
      var target = event.target;
      if (!(target instanceof Element)) return;
      var resolved = resolveTarget(target, { x: event.clientX, y: event.clientY });
      if (!resolved) return;
      if (state.hoveredElement) {
        elementIdExtractor.findAllElementsById(getElementSourceInfo(state.hoveredElement)).forEach(removeHover);
      }
      state.hoveredElement = resolved;
      var allInstances = elementIdExtractor.findAllElementsById(getElementSourceInfo(state.hoveredElement));
      if (allInstances) allInstances.forEach(function (el) { applyHover(el, el === resolved); });
    }, CONFIG.DEBOUNCE_DELAY);

    var onMouseOut = debounce(function () {
      if (!state.isActive || !state.hoveredElement) return;
      var allInstances = elementIdExtractor.findAllElementsById(getElementSourceInfo(state.hoveredElement));
      if (allInstances) allInstances.forEach(function (el) { el.removeAttribute(CONFIG.HOVERED_ATTR); if (!el.hasAttribute(CONFIG.SELECTED_ATTR)) { el.removeAttribute(CONFIG.PRIMARY_ATTR); removeHover(el); } });
      state.hoveredElement = null;
    }, CONFIG.DEBOUNCE_DELAY);

    function onScroll() {
      if (state.scrollTimeout) clearTimeout(state.scrollTimeout);
      if (state.isActive) { postToParent({ type: "SCROLL_HAPPENED" }); updatePrimaryBounds(); }
      state.selectedTooltips.forEach(function (tooltip, key) {
        var el = state.clickedElementMap.get(key);
        if (el && document.contains(el)) updateTooltipPosition(tooltip, el);
        else {
          var elements = elementIdExtractor.findAllElementsById(deserializeElementKey(key));
          if (elements.length > 0) updateTooltipPosition(tooltip, elements[0]);
        }
      });
      if (state.hoveredElement) removeHover(state.hoveredElement);
      state.scrollTimeout = setTimeout(function () {
        state.scrollTimeout = null;
        var el = document.elementFromPoint(state.mouseX, state.mouseY);
        if (el && state.isActive) onMouseOver({ target: el });
      }, CONFIG.SCROLL_DEBOUNCE);
    }

    function onMouseDown(event) {
      if (!state.isActive) { state.mouseDownElement = null; return; }
      var target = event.target;
      if (!(target instanceof Element)) { state.mouseDownElement = null; return; }
      state.mouseDownElement = resolveTarget(target, { x: event.clientX, y: event.clientY });
      // Browser-flagged double-click (event.detail >= 2): clear any partial
      // text selection so the upcoming dblclick handler's caret placement
      // lands cleanly. Matches lovable's pattern of pre-empting the start
      // of a double-click before it reaches click+dblclick.
      if (event.detail >= 2 && state.mouseDownElement) {
        try { var sel = window.getSelection(); if (sel) sel.removeAllRanges(); } catch (_) { /* noop */ }
      }
      if (event.target instanceof HTMLElement && ["input", "textarea", "select"].includes(event.target.tagName.toLowerCase())) event.preventDefault();
    }

    function onClick(event) {
      if (!state.isActive) return;
      if (event.target instanceof HTMLElement && (event.target.isContentEditable || event.target.closest("[contenteditable]"))) return;
      var target = event.target;
      if (!(target instanceof Element)) return;
      var resolved = resolveTarget(target, { x: event.clientX, y: event.clientY });
      if (!resolved) return;
      event.preventDefault();
      event.stopPropagation();
      if (state.mouseDownElement !== resolved) { state.mouseDownElement = null; return; }
      state.mouseDownElement = null;

      var isMultiSelect = event.metaKey || event.ctrlKey;
      var details = getElementDetails(resolved);
      var rect = resolved.getBoundingClientRect();
      var key = serializeElementKey({ filePath: details.filePath, lineNumber: details.lineNumber, col: details.col, instanceId: details.instanceId });

      state.clickedElementMap.set(key, resolved);
      if (!isMultiSelect) setPrimaryElement(resolved);

      elementIdExtractor.findAllElementsById(getElementSourceInfo(resolved)).forEach(function (el) {
        el.setAttribute(CONFIG.SELECTED_ATTR, "true");
        if (el === resolved) el.setAttribute(CONFIG.PRIMARY_ATTR, "true");
        else el.removeAttribute(CONFIG.PRIMARY_ATTR);
        markFullWidthAndIndex(el);
      });

      postToParent({ type: "ELEMENT_CLICKED", payload: { element: details, rect: rect, isMultiSelect: isMultiSelect } });

      // NOTE: single click intentionally does NOT engage contenteditable.
      // Matches lovable's UX — a single click selects, a double click
      // (handled by onDoubleClick below) engages inline editing. Auto-
      // engaging on click made the caret jump for any selection on
      // text-bearing elements and broke shared-component disambiguation
      // when two paths (this + parent's auto editTextRequested) raced.
    }

    function onDoubleClick(event) {
      if (!state.isActive) return;
      var target = event.target;
      if (!(target instanceof Element)) return;
      var resolved = resolveTarget(target, { x: event.clientX, y: event.clientY });
      if (!resolved || !(resolved instanceof HTMLElement)) return;
      // Only engage edit-mode for elements that actually carry text. Avoids
      // putting an empty <div> into contenteditable just because the user
      // double-clicked it.
      if (!resolved.innerText || resolved.innerText.trim().length === 0) return;
      event.preventDefault();
      event.stopPropagation();
      var fullId = getElementFullId(resolved);
      var allInstances = elementIdExtractor.findAllElementsById(fullId);
      // Pass the click coordinates so the caret lands at the click point
      // rather than at the start of the text. Mirrors lovable's signature
      // Cr(el, id, [el], undefined, true, {clientX, clientY}).
      makeEditable(resolved, fullId, allInstances, undefined, true, { clientX: event.clientX, clientY: event.clientY });
      // Mirror lovable's outbound event so the parent can react to a
      // double-click in the iframe (e.g. focus the panel's text-edit
      // affordance, or surface a "you're now editing" status).
      var details = getElementDetails(resolved);
      var rect = resolved.getBoundingClientRect();
      postToParent({ type: "ELEMENT_DOUBLE_CLICKED", payload: { element: details, rect: rect, isMultiSelect: false } });
    }

    function preventDefaultHandler(event) {
      if (!state.isActive) return;
      // No contenteditable bypass — match lovable. preventDefault on
      // `click` doesn't disrupt caret placement (that's `mousedown`)
      // or text selection (that's `selectstart`), so we can safely
      // suppress every click while the selector is active. The bypass
      // we used to have leaked navigation through any react-router
      // <Link>-wrapped element: a click bubbling from inside a
      // contenteditable to its <a> ancestor skipped preventDefault,
      // and Link.handleClick saw defaultPrevented === false and ran
      // navigate(), redirecting the preview iframe.
      event.preventDefault();
      event.stopPropagation();
      return false;
    }

    function onKeydown(event) {
      if (!state.isActive || event.key !== "ArrowUp") return;
      var active = document.activeElement;
      if (active instanceof HTMLElement && (active.isContentEditable || active.tagName === "INPUT" || active.tagName === "TEXTAREA" || active.tagName === "SELECT")) return;
      if (state.selectedTooltips.size !== 1) return;
      event.preventDefault();
      event.stopPropagation();
      var selectedKey = Array.from(state.selectedTooltips.keys())[0];
      var elements = elementIdExtractor.findAllElementsById(deserializeElementKey(selectedKey));
      if (elements.length === 0) return;
      var parent = getParentElement(elements[0]);
      if (!parent) return;
      var parentDetails = getElementDetails(parent);
      var parentRect = parent.getBoundingClientRect();
      postToParent({ type: "ELEMENT_CLICKED", payload: { element: parentDetails, rect: parentRect, isMultiSelect: false } });
    }

    function onResize() {
      state.selectedTooltips.forEach(function (tooltip, key) {
        var el = state.clickedElementMap.get(key);
        if (el && document.contains(el)) updateTooltipPosition(tooltip, el);
        else {
          var elements = elementIdExtractor.findAllElementsById(deserializeElementKey(key));
          if (elements.length > 0) updateTooltipPosition(tooltip, elements[0]);
        }
      });
    }

    function activate() {
      document.addEventListener("mouseover", onMouseOver);
      document.addEventListener("mouseout", onMouseOut);
      document.addEventListener("click", onClick, true);
      // dblclick is registered in capture phase so we run before the host
      // app's own dblclick handlers (e.g. text-selection inside buttons).
      document.addEventListener("dblclick", onDoubleClick, true);
      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", onResize, { passive: true });
      document.addEventListener("mousedown", onMouseDown, true);
      document.addEventListener("keydown", onKeydown, { capture: true });
      var style = document.createElement("style");
      // While the selector is active we override a small set of host-app
      // behaviors:
      //  - scroll-behavior: auto so programmatic scrolls during element
      //    selection don't smooth-animate and miss the user's click.
      //  - cursor: crosshair on every element to make it obvious the
      //    page is in pick-an-element mode (prevents "is this disabled?"
      //    confusion when hovering over inputs/links).
      //  - For [contenteditable="true"] elements (inline text-editing
      //    targets), restore the text caret cursor and strip the host
      //    app's focus outline / shadow so editing feels native instead
      //    of selecting.
      //  - SVGs inside interactive elements get pointer-events: auto so
      //    icons (like a lucide chevron in a button) are clickable
      //    selection targets and not pass-through.
      // The whole block is appended in activate() and removed in
      // deactivate(); no separate cleanup needed.
      style.textContent =
        "* { scroll-behavior: auto !important; cursor: crosshair !important; }" +
        "[contenteditable=\"true\"], [contenteditable=\"true\"] * { cursor: text !important; }" +
        "[contenteditable=\"true\"]:focus, [contenteditable=\"true\"]:focus-visible { outline: none !important; box-shadow: none !important; }" +
        ":is(button, a, [role=\"button\"], [role=\"link\"]) svg { pointer-events: auto !important; }";
      document.head.appendChild(style);
      state.styleElement = style;
      document.addEventListener("click", preventDefaultHandler, true);
      document.addEventListener("submit", preventDefaultHandler, true);
      document.addEventListener("touchstart", preventDefaultHandler, true);
      document.addEventListener("touchend", preventDefaultHandler, true);
    }

    function deactivate() {
      document.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseout", onMouseOut);
      document.removeEventListener("click", onClick, true);
      document.removeEventListener("dblclick", onDoubleClick, true);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("mousedown", onMouseDown, true);
      document.removeEventListener("keydown", onKeydown, { capture: true });
      document.removeEventListener("click", preventDefaultHandler, true);
      document.removeEventListener("submit", preventDefaultHandler, true);
      document.removeEventListener("touchstart", preventDefaultHandler, true);
      document.removeEventListener("touchend", preventDefaultHandler, true);
      if (state.styleElement) { state.styleElement.remove(); state.styleElement = null; }
      state.selectedTooltips.forEach(function (t) { t.remove(); });
      state.selectedTooltips.clear();
      if (state.resizeObserver) { state.resizeObserver.disconnect(); state.resizeObserver = null; }
      state.primarySelectedElement = null;
      document.body.style.cursor = "";
      if (state.hoveredElement) {
        if (!state.hoveredElement.hasAttribute(CONFIG.SELECTED_ATTR)) removeHover(state.hoveredElement);
        state.hoveredElement = null;
      }
    }

    function handleMessage(event) {
      try {
        if (!event || !event.origin || !event.data || !event.data.type || !isAllowedOrigin(event.origin)) return;

        switch (event.data.type) {
          case "TOGGLE_SELECTOR": {
            var isActive = !!event.data.payload.isActive;
            if (state.isActive !== isActive) {
              state.isActive = isActive;
              if (state.isActive) {
                activate();
                document.body.setAttribute("data-selector-active", "true");
                waitForRootMount().then(function () {
                  document.querySelectorAll("button[disabled]").forEach(function (btn) {
                    btn.removeAttribute("disabled");
                    btn.setAttribute("data-vb-disabled", "");
                  });
                }).catch(function () {});
              } else {
                deactivate();
                document.body.removeAttribute("data-selector-active");
                document.querySelectorAll("[data-vb-disabled]").forEach(function (btn) {
                  btn.removeAttribute("data-vb-disabled");
                  btn.setAttribute("disabled", "");
                });
                document.querySelectorAll("[" + CONFIG.HOVERED_ATTR + "],[data-full-width],[" + CONFIG.PRIMARY_ATTR + "]").forEach(function (el) {
                  if (!el.hasAttribute(CONFIG.SELECTED_ATTR)) {
                    el.removeAttribute(CONFIG.PRIMARY_ATTR);
                    removeHover(el);
                  }
                });
                resetState();
              }
            }
            break;
          }

          case "UPDATE_SELECTED_ELEMENTS": {
            if (!Array.isArray(event.data.payload)) {
              console.error("[vibe] Invalid payload for UPDATE_SELECTED_ELEMENTS");
              return;
            }
            state.selectedTooltips.forEach(function (t) { t.remove(); });
            state.selectedTooltips.clear();
            document.querySelectorAll("[" + CONFIG.SELECTED_ATTR + "],[" + CONFIG.HOVERED_ATTR + "]").forEach(function (el) {
              el.removeAttribute(CONFIG.SELECTED_ATTR);
              el.removeAttribute(CONFIG.HOVERED_ATTR);
              el.removeAttribute(CONFIG.PRIMARY_ATTR);
              el.removeAttribute("data-full-width");
              el.removeAttribute("data-vb-index");
            });
            var primaryEl = null;
            event.data.payload.forEach(function (item) {
              if (!item) {
                console.error("[vibe] Invalid element data:", item);
                return;
              }
              var hasSourceLoc = !!(item.filePath && item.lineNumber);
              var id = {
                filePath: item.filePath || "",
                lineNumber: item.lineNumber || 0,
                col: item.col || 0,
                instanceId: item.instanceId,
              };
              // Resolution priority — mirrors lovable's selection resolver:
              //   1. cached DOM node from the click that produced this selection
              //   2. CSS selector path from the host (`item.selector`)
              //   3. findAllElementsById + instanceId disambiguation
              //   4. first source match as last resort
              // We always mark exactly the resolved target as SELECTED +
              // PRIMARY — never tag sibling instances of a shared
              // component, which would paint extra rings on copies the
              // user isn't editing.
              var target = resolveSelectionTarget(id, item.selector, hasSourceLoc);
              if (!target) {
                console.error("[vibe] No matching element found for selection data:", item);
                return;
              }
              var key = serializeElementKey(id);
              target.setAttribute(CONFIG.SELECTED_ATTR, "true");
              target.setAttribute(CONFIG.PRIMARY_ATTR, "true");
              markFullWidthAndIndex(target);
              createTooltip(target, key);
              if (!primaryEl) primaryEl = target;
            });
            setPrimaryElement(primaryEl);
            break;
          }

          case "SET_ELEMENT_CONTENT": {
            var data = event.data.payload;
            var elements = elementIdExtractor.findAllElementsById({ filePath: data.id.filePath, lineNumber: data.id.lineNumber, col: data.id.col || 0 });
            var targets = data.id.instanceId !== undefined ? (function () { var m = findMatchingElement(data.id, elements); return m ? [m] : []; })() : elements;
            targets.forEach(function (el) {
              if (data.textNodeIndex !== undefined) {
                var idx = 0; var found = false;
                for (var i = 0; i < el.childNodes.length; i++) {
                  var node = el.childNodes[i];
                  if (node.nodeType === Node.TEXT_NODE) {
                    var text = node.textContent || "";
                    if (text.trim() === "") continue;
                    if (idx === data.textNodeIndex) {
                      var leading = text.match(/^\s*/)[0] || "";
                      var trailing = text.match(/\s*$/)[0] || "";
                      node.textContent = leading + data.content + trailing;
                      found = true; break;
                    }
                    idx++;
                  } else if (node.nodeType === Node.ELEMENT_NODE) idx++;
                }
                if (!found) el.innerHTML = data.content;
              } else el.innerHTML = data.content;
            });
            break;
          }

          case "SET_ELEMENT_ATTRS": {
            var data = event.data.payload;
            var elements = elementIdExtractor.findAllElementsById({ filePath: data.id.filePath, lineNumber: data.id.lineNumber, col: data.id.col || 0 });
            elements.forEach(function (el) {
              Object.keys(data.attrs).forEach(function (attr) {
                var val = data.attrs[attr];
                if (attr === "backgroundImage" && el instanceof HTMLElement) {
                  el.style.backgroundImage = val ? "url(" + JSON.stringify(val) + ")" : "";
                } else if (val === "" || val == null) {
                  // Empty value → remove attribute so element reverts to class-based styles
                  el.removeAttribute(attr);
                } else {
                  el.setAttribute(attr, val);
                }
              });
            });
            break;
          }

          case "SET_ELEMENT_ICON": {
            // Live-preview swap of a lucide icon's contents. lucide icons
            // render as <svg> with a fixed set of inner <path>/<circle>/etc.
            // children — we fetch the raw SVG from lucide-static on unpkg
            // and copy its innerHTML over, preserving classNames, sizing,
            // and other attrs already on the rendered element. The committed
            // source change (JSX component rename + import update) lands
            // separately via the LLM patch flow.
            var data = event.data.payload;
            var iconName = data.iconName;
            var elements = elementIdExtractor.findAllElementsById({ filePath: data.id.filePath, lineNumber: data.id.lineNumber, col: data.id.col || 0 });
            var targets = data.id.instanceId !== undefined ? (function () { var m = findMatchingElement(data.id, elements); return m ? [m] : []; })() : elements;
            var kebab = String(iconName).replace(/([A-Z])/g, "-$1").toLowerCase().replace(/^-/, "");
            var url = "https://unpkg.com/lucide-static@latest/icons/" + encodeURIComponent(kebab) + ".svg";
            (function () {
              var ctrl = (typeof AbortController !== "undefined") ? new AbortController() : null;
              var timer = ctrl ? setTimeout(function () { ctrl.abort(); }, 5000) : null;
              fetch(url, ctrl ? { signal: ctrl.signal } : undefined)
                .then(function (resp) {
                  if (timer) clearTimeout(timer);
                  if (!resp.ok) {
                    console.warn("[vibe] icon fetch failed", iconName, resp.status);
                    return null;
                  }
                  return resp.text();
                })
                .then(function (svgText) {
                  if (!svgText) return;
                  var doc = new DOMParser().parseFromString(svgText, "image/svg+xml");
                  if (doc.querySelector("parsererror")) return;
                  var parsed = doc.querySelector("svg");
                  if (!parsed || !parsed.innerHTML) return;
                  var newViewBox = parsed.getAttribute("viewBox");
                  targets.forEach(function (el) {
                    if (!el || el.tagName.toLowerCase() !== "svg") return;
                    el.innerHTML = parsed.innerHTML;
                    if (newViewBox) el.setAttribute("viewBox", newViewBox);
                    el.setAttribute("data-vibe-icon-preview", iconName);
                  });
                })
                .catch(function (err) {
                  if (timer) clearTimeout(timer);
                  console.warn("[vibe] icon swap failed", iconName, err && err.message);
                });
            })();
            break;
          }

          case "SET_STYLESHEET": {
            var data = event.data.payload;
            var existingFonts = Array.from(document.querySelectorAll('link[id^="vibe-font-"]'));
            var activeFontIds = new Set();
            (data.fontLinks || []).forEach(function (link) {
              if (link.fontUrl && link.linkId) {
                var id = "vibe-font-" + link.linkId;
                activeFontIds.add(id);
                if (!document.getElementById(id)) {
                  var el = document.createElement("link");
                  el.id = id; el.rel = "stylesheet"; el.href = link.fontUrl;
                  document.head.appendChild(el);
                }
              }
            });
            existingFonts.forEach(function (el) { if (!activeFontIds.has(el.id)) el.remove(); });
            var styleEl = document.getElementById(CONFIG.OVERRIDE_STYLESHEET_ID);
            if (!styleEl) { styleEl = document.createElement("style"); styleEl.id = CONFIG.OVERRIDE_STYLESHEET_ID; document.head.appendChild(styleEl); }
            styleEl.innerHTML = data.stylesheet;
            break;
          }

          case "EDIT_TEXT_REQUESTED": {
            var data = event.data.payload;
            var elements = elementIdExtractor.findAllElementsById({ filePath: data.id.filePath, lineNumber: data.id.lineNumber, col: data.id.col || 0 });
            var target = findMatchingElement(data.id, elements);
            if (target) makeEditable(target, data.id, elements, undefined, true);
            break;
          }

          case "HOVER_ELEMENT_REQUESTED": {
            document.querySelectorAll("[" + CONFIG.HOVERED_ATTR + "]").forEach(function (el) { el.removeAttribute(CONFIG.HOVERED_ATTR); el.removeAttribute(CONFIG.PRIMARY_ATTR); });
            elementIdExtractor.findAllElementsById({ filePath: event.data.payload.id.filePath, lineNumber: event.data.payload.id.lineNumber, col: event.data.payload.id.col || 0 }).forEach(function (el, idx) {
              el.setAttribute(CONFIG.HOVERED_ATTR, "true");
              if (idx === 0) el.setAttribute(CONFIG.PRIMARY_ATTR, "true");
            });
            break;
          }

          case "UNHOVER_ELEMENT_REQUESTED": {
            elementIdExtractor.findAllElementsById({ filePath: event.data.payload.id.filePath, lineNumber: event.data.payload.id.lineNumber, col: event.data.payload.id.col || 0 }).forEach(function (el) {
              el.removeAttribute(CONFIG.HOVERED_ATTR);
              if (!el.hasAttribute(CONFIG.SELECTED_ATTR)) el.removeAttribute(CONFIG.PRIMARY_ATTR);
            });
            break;
          }

          case "GET_PARENT_ELEMENT": {
            var elements = elementIdExtractor.findAllElementsById({ filePath: event.data.payload.id.filePath, lineNumber: event.data.payload.id.lineNumber, col: event.data.payload.id.col || 0 });
            if (elements.length === 0) { postToParent({ type: "PARENT_ELEMENT", payload: { element: null } }); break; }
            var parent = getParentElement(elements[0]);
            if (!parent) postToParent({ type: "PARENT_ELEMENT", payload: { element: null } });
            else {
              var rect = parent.getBoundingClientRect();
              var details = getElementDetails(parent);
              postToParent({ type: "PARENT_ELEMENT", payload: { element: details, rect: rect } });
            }
            break;
          }

          case "SCROLL_TO": {
            // Scroll the iframe to a specific element (by CSS selector) or
            // to a fixed top offset. Mirrors lovable's protocol so the host
            // can drive scrolling from the panel (e.g. tab switches in a
            // selection list, "scroll to error" affordances).
            var scrollPayload = event.data.payload || {};
            var scrollEl = null;
            if (scrollPayload.selector) {
              try { scrollEl = document.querySelector(scrollPayload.selector); } catch (_) { /* invalid selector */ }
            }
            if (scrollEl) {
              scrollEl.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
            } else if (typeof scrollPayload.top === "number") {
              window.scrollTo({ top: scrollPayload.top, behavior: "smooth" });
            }
            break;
          }

          case "GET_THEME_COLORS": {
            // Read all CSS custom properties from computed :root styles so the
            // Visual Edits ColorPicker's "Theme" tab can show the project's
            // real Tailwind theme vars (--primary, --secondary, …). Skip
            // --tw-* internals.
            var themeVars = {};
            try {
              var rootStyle = getComputedStyle(document.documentElement);
              for (var i = 0; i < rootStyle.length; i++) {
                var prop = rootStyle[i];
                if (prop && prop.startsWith("--") && !prop.startsWith("--tw-")) {
                  var val = rootStyle.getPropertyValue(prop).trim();
                  if (val) themeVars[prop] = val;
                }
              }
            } catch (e) { console.error("Error reading theme colors:", e); }
            postToParent({ type: "THEME_COLORS_RESPONSE", payload: themeVars });
            break;
          }

          case "INJECT_TAILWIND_CDN":
          case "GET_LOCALSTORAGE":
          case "UPDATE_TAILWIND_CONFIG":
            break;
        }
      } catch (err) {
        console.error("Error handling message:", err);
        deactivate();
        resetState();
      }
    }

    injectStyles();
    initKeybindCapture();
    window.addEventListener("message", handleMessage);
    document.addEventListener("mousemove", function (e) { state.mouseX = e.clientX; state.mouseY = e.clientY; });
    postToParent({ type: "SELECTOR_SCRIPT_LOADED", payload: { version: window.vb_SELECTOR_SCRIPT_VERSION } });
    waitForRootMount().then(function () {
      postToParent({ type: "REQUEST_PICKER_STATE" });
      postToParent({ type: "REQUEST_SELECTED_ELEMENTS" });
    }).catch(function () {});
  }

  // MAIN ENTRY POINT

  var main = function () {
    if (window.location.search.includes("vb-override-script")) {
      var overrideUrl = "http://localhost:8001/vibe.js";
      console.log("Overriding vibe.js script with:", overrideUrl);
      var script = document.createElement("script");
      script.type = "module";
      script.src = overrideUrl;
      document.body.appendChild(script);
      return;
    }

    if (window.top === window.self) return;

    var originalFocus = HTMLElement.prototype.focus;
    HTMLElement.prototype.focus = function (opts) {
      if (document.hasFocus()) originalFocus.call(this, opts);
    };

    initURLChangeDetection();
    initNavigationHandler();
    initScrollReporting();
    initScrollableDetection();
    initErrorMonitoring();
    initConsoleCapture();
    initSelectorScript();
    injectTailwindCDN();
    initTailwindConfigListener();
    initVirtualOverrides();
    initLocalStorageHandler();
  };

  main();
