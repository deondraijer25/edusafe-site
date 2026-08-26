import { ui, defaultLang, languages } from './ui';

export function getLangFromUrl(url: URL): 'nl' | 'en' {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as 'nl' | 'en';
  return defaultLang;
}

export function useTranslations(lang: 'nl' | 'en') {
  return function t(key: keyof typeof ui[typeof defaultLang]): string {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

export function getRelativeLocaleUrl(lang: 'nl' | 'en', path: string): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  if (lang === 'nl') {
    return cleanPath;
  }
  return `/en${cleanPath === '/' ? '' : cleanPath}`;
}

// Complete Bidirectional Route Mapping
const routeMapNLtoEN: Record<string, string> = {
  '/': '/en',
  '/bhv-cursus': '/en/bhv-course',
  '/vca-cursus': '/en/vca-course',
  '/ehbo-cursus': '/en/first-aid-course',
  '/offshore-cursus': '/en/offshore-training',
  '/cursusdata': '/en/course-dates',
  '/e-learning': '/en/e-learning',
  '/heftruck-cursus': '/en/forklift-course',
  '/incompany-training': '/en/incompany-training',
  '/ontruiming-cursus': '/en/evacuation-course',
  '/reanimatie-aed-cursus': '/en/cpr-aed-course',
  '/ehak-cursus': '/en/first-aid-children',
  '/rie-audit': '/en/risk-assessment-rie',
  '/brandveiligheid': '/en/fire-safety-equipment',
  '/noodverlichting': '/en/emergency-lighting',
  '/ontruimingsplattegronden': '/en/evacuation-plans',
  '/event-ehbo': '/en/event-first-aid',
  '/dakveiligheid': '/en/roof-safety',
  '/over-ons': '/en/about-us',
  '/contact': '/en/contact',
  '/algemene-voorwaarden': '/en/terms-conditions',
  '/faq': '/en/faq'
};

const routeMapENtoNL: Record<string, string> = {
  '/en': '/',
  '/en/bhv-course': '/bhv-cursus',
  '/en/vca-course': '/vca-cursus',
  '/en/first-aid-course': '/ehbo-cursus',
  '/en/offshore-training': '/offshore-cursus',
  '/en/course-dates': '/cursusdata',
  '/en/e-learning': '/e-learning',
  '/en/forklift-course': '/heftruck-cursus',
  '/en/incompany-training': '/incompany-training',
  '/en/evacuation-course': '/ontruiming-cursus',
  '/en/cpr-aed-course': '/reanimatie-aed-cursus',
  '/en/first-aid-children': '/ehak-cursus',
  '/en/risk-assessment-rie': '/rie-audit',
  '/en/fire-safety-equipment': '/brandveiligheid',
  '/en/emergency-lighting': '/noodverlichting',
  '/en/evacuation-plans': '/ontruimingsplattegronden',
  '/en/event-first-aid': '/event-ehbo',
  '/en/roof-safety': '/dakveiligheid',
  '/en/about-us': '/over-ons',
  '/en/contact': '/contact',
  '/en/terms-conditions': '/algemene-voorwaarden',
  '/en/faq': '/faq'
};

export function getOppositeLocaleUrl(currentUrl: URL): { lang: 'nl' | 'en'; url: string; flag: string; label: string } {
  const currentLang = getLangFromUrl(currentUrl);
  const targetLang = currentLang === 'nl' ? 'en' : 'nl';
  
  // Normalize pathname by stripping trailing slash (unless root '/')
  let pathname = currentUrl.pathname;
  if (pathname.length > 1 && pathname.endsWith('/')) {
    pathname = pathname.slice(0, -1);
  }

  let targetPath = '/';

  if (currentLang === 'nl') {
    // Dynamic registration routes: /inschrijven/1 -> /en/register/1
    if (pathname.startsWith('/inschrijven/')) {
      targetPath = pathname.replace('/inschrijven/', '/en/register/');
    } else if (routeMapNLtoEN[pathname]) {
      targetPath = routeMapNLtoEN[pathname];
    } else {
      // Fallback to English home page if route not found
      targetPath = '/en';
    }
  } else {
    // Dynamic registration routes: /en/register/1 -> /inschrijven/1
    if (pathname.startsWith('/en/register/')) {
      targetPath = pathname.replace('/en/register/', '/inschrijven/');
    } else if (routeMapENtoNL[pathname]) {
      targetPath = routeMapENtoNL[pathname];
    } else {
      // Fallback to Dutch home page
      targetPath = '/';
    }
  }

  return {
    lang: targetLang,
    url: `${targetPath}${currentUrl.search}${currentUrl.hash}`,
    flag: languages[targetLang].flag,
    label: languages[targetLang].name
  };
}
