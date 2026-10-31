/* ==========================================================================
   EDUSAFE ONLINE LEEROMGEVING — GHL CLIENT PORTAL AUTH ENHANCEMENT
   Locatie: Client Portal - Settings - Branding - Advanced - Custom JS
   Let op:  Bevat bewust geen HTML-haakjes zodat de GHL Custom JS-parser
            geen enkel teken stript. Wacht netjes op Vue 3 SSR-hydratie en
            werkt uitsluitend op .auth-page routes.
   ========================================================================== */
(function () {
  var SITE_URL = 'https://www.edusafe.nl';
  var FONT_HREF =
    'https://fonts.googleapis.com/css2?family=Outfit:wght@500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600&display=swap';
  var rafPending = false;

  function ensureEdusafeFonts() {
    var head = document.head || document.getElementsByTagName('head')[0];
    if (!head || document.getElementById('edusafe-auth-fonts')) {
      return;
    }
    var pre1 = document.createElement('link');
    pre1.rel = 'preconnect';
    pre1.href = 'https://fonts.googleapis.com';
    head.appendChild(pre1);

    var pre2 = document.createElement('link');
    pre2.rel = 'preconnect';
    pre2.href = 'https://fonts.gstatic.com';
    pre2.crossOrigin = 'anonymous';
    head.appendChild(pre2);

    var fontLink = document.createElement('link');
    fontLink.id = 'edusafe-auth-fonts';
    fontLink.rel = 'stylesheet';
    fontLink.href = FONT_HREF;
    head.appendChild(fontLink);
  }

  function makeEl(tag, className, text) {
    var el = document.createElement(tag);
    if (className) {
      el.className = className;
    }
    if (typeof text === 'string') {
      el.textContent = text;
    }
    return el;
  }

  function buildContactCol(label, value, href, extraLinkClass, external) {
    var col = makeEl('div', 'edusafe-contact-col');
    var lbl = makeEl('span', 'edusafe-contact-label', label);
    var lnk = makeEl(
      'a',
      extraLinkClass ? 'edusafe-contact-link ' + extraLinkClass : 'edusafe-contact-link',
      value
    );
    lnk.href = href;
    if (external) {
      lnk.target = '_blank';
      lnk.rel = 'noopener';
    }
    col.appendChild(lbl);
    col.appendChild(lnk);
    return col;
  }

  function buildContactGrid() {
    var grid = makeEl('div', 'edusafe-contact-grid edusafe-footer-item');
    grid.appendChild(
      buildContactCol('Telefoon', '070 - 444 77 95', 'tel:0704447795', 'edusafe-contact-link--phone', false)
    );
    grid.appendChild(
      buildContactCol('E-mail', 'info@edusafe.nl', 'mailto:info@edusafe.nl', '', false)
    );
    grid.appendChild(
      buildContactCol('Website', 'www.edusafe.nl', SITE_URL, '', true)
    );
    return grid;
  }

  function cleanupAuthEnhancements() {
    var nodes = document.querySelectorAll('.edusafe-contact-grid');
    Array.prototype.forEach.call(nodes, function (node) {
      if (node && node.parentNode) {
        node.parentNode.removeChild(node);
      }
    });

    var readyFooters = document.querySelectorAll('.edusafe-footer-ready');
    Array.prototype.forEach.call(readyFooters, function (el) {
      el.classList.remove('edusafe-footer-ready');
    });
  }

  function bindHeaderLogoClick(root) {
    var avatars = root.querySelectorAll('.cp-avatar--square');
    Array.prototype.forEach.call(avatars, function (avatar) {
      var headerRow = avatar.parentElement;
      if (headerRow && !headerRow.getAttribute('data-edusafe-logo-bound')) {
        headerRow.setAttribute('data-edusafe-logo-bound', '1');
        headerRow.addEventListener('click', function (ev) {
          var rect = headerRow.getBoundingClientRect();
          if (ev.clientX - rect.left <= 140) {
            window.open(SITE_URL, '_blank', 'noopener');
          }
        });
      }
    });
  }

  function applyEdusafeAuth() {
    var nuxtRoot = document.getElementById('__nuxt');
    if (nuxtRoot && !nuxtRoot.__vue_app__) {
      window.setTimeout(applyEdusafeAuth, 80);
      return;
    }

    var root = document.getElementById('cp-root-container');
    if (!root || !root.classList.contains('auth-page')) {
      cleanupAuthEnhancements();
      return;
    }

    ensureEdusafeFonts();

    if (document.title && document.title.indexOf('Welkom bij EDUSAFE!') !== -1) {
      document.title = document.title.replace('Welkom bij EDUSAFE!', 'Edusafe Online Leeromgeving');
    }

    bindHeaderLogoClick(root);

    var footer = document.getElementById('cp-auth-footer');
    if (footer) {
      if (!footer.querySelector('.edusafe-contact-grid')) {
        footer.appendChild(buildContactGrid());
      }
      if (!footer.classList.contains('edusafe-footer-ready')) {
        footer.classList.add('edusafe-footer-ready');
      }
    }
  }

  function scheduleApply() {
    if (rafPending) {
      return;
    }
    rafPending = true;
    window.requestAnimationFrame(function () {
      rafPending = false;
      applyEdusafeAuth();
    });
  }

  if (window.__edusafeAuthObserver) {
    try {
      window.__edusafeAuthObserver.disconnect();
    } catch (e) {}
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyEdusafeAuth);
  } else {
    applyEdusafeAuth();
  }

  var observeTarget = document.getElementById('__nuxt') || document.body || document.documentElement;
  if (observeTarget && typeof MutationObserver !== 'undefined') {
    var observer = new MutationObserver(scheduleApply);
    observer.observe(observeTarget, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['class']
    });
    window.__edusafeAuthObserver = observer;
  }
})();
