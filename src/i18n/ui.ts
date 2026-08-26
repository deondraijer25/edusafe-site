export const languages = {
  nl: {
    code: 'nl',
    name: 'Nederlands',
    flag: '🇳🇱',
    countryCode: 'nl'
  },
  en: {
    code: 'en',
    name: 'English',
    flag: '🇬🇧',
    countryCode: 'gb'
  }
};

export const defaultLang = 'nl';

export const ui = {
  nl: {
    // Topbar
    'topbar.follow': 'Volg ons op:',
    'topbar.address': 'Oude Middenweg 241A, Den Haag',
    'topbar.contact': 'Direct Contact',

    // Navbar
    'nav.courses': 'Cursussen',
    'nav.courses_desc': 'Praktijkgerichte en gecertificeerde veiligheidstrainingen.',
    'nav.all_dates': 'Bekijk alle cursusdata',
    'nav.course_dates': 'Cursusdata',
    'nav.elearning': 'E-learning',
    'nav.services': 'Diensten',
    'nav.services_desc': 'Veiligheidsadvies, audits, keuringen en ontruiming.',
    'nav.offshore': 'Offshore',
    'nav.offshore_tag': 'Binnenkort',
    'nav.about_menu': 'Over Ons',
    'nav.about': 'Over Edusafe',
    'nav.about_desc': 'Maak kennis met ons team, onze instructeurs en onze missie.',
    'nav.contact': 'Contact & Locatie',
    'nav.contact_desc': 'Direct contact opnemen met onze cursusadviseurs.',
    'nav.faq': 'Veelgestelde Vragen',
    'nav.faq_desc': 'Antwoorden op vragen over geldigheid, planning en betaling.',
    'nav.login': 'Log in',
    'nav.direct_register': 'Direct Starten',

    // Offshore Under Construction
    'offshore.badge': 'Offshore Veiligheidstrainingen',
    'offshore.title': 'Offshore Trainingen',
    'offshore.under_construction_badge': 'Binnenkort Beschikbaar',
    'offshore.hero_desc': 'Edusafe bereidt momenteel de lancering voor van geaccrediteerde offshore- en maritieme veiligheidstrainingen (conform OPITO, NOGEPA en GWO richtlijnen). Meld u alvast aan voor de wachtlijst of vraag een maatwerk groepsofferte aan.',
    'offshore.waitlist_btn': 'Wachtlijst Aanmelden',
    'offshore.quote_btn': 'Vraag Maatwerk Offerte Aan',
    'offshore.coming_soon_card': 'Binnenkort Boekbaar',

    // General CTAs
    'cta.book_now': 'Direct Boeken',
    'cta.register': 'Inschrijven',
    'cta.quote': 'Offerte Aanvragen',
    'cta.details': 'Bekijk details',
    'cta.back_dates': 'Terug naar alle cursusdata',
    'cta.filter_reset': 'Filters Wissen',
    'cta.search_placeholder': 'Zoek op cursusnaam...',
    'cta.all_courses': 'Alle Cursussen',
    'cta.all_locations': 'Alle Locaties',
    'cta.learn_more': 'Meer informatie',
    'cta.incompany_quote': 'Vraag Incompany Offerte Aan',
    'cta.open_calendar': 'Bekijk alle data & schrijf in',
    'cta.download_brochure': 'Download brochure',

    // Footer
    'footer.tagline': 'Dé specialist in gecertificeerde veiligheidsopleidingen, BHV, EHBO, VCA en Arbo-advies.',
    'footer.rights': 'Alle rechten voorbehouden.',
    'footer.privacy': 'Privacybeleid',
    'footer.terms': 'Algemene Voorwaarden'
  },
  en: {
    // Topbar
    'topbar.follow': 'Follow us:',
    'topbar.address': 'Oude Middenweg 241A, The Hague',
    'topbar.contact': 'Direct Contact',

    // Navbar
    'nav.courses': 'Courses',
    'nav.courses_desc': 'Practical and accredited safety certification courses.',
    'nav.all_dates': 'View all course dates',
    'nav.course_dates': 'Course Dates',
    'nav.elearning': 'E-learning',
    'nav.services': 'Services',
    'nav.services_desc': 'Safety consulting, audits, inspections and emergency plans.',
    'nav.offshore': 'Offshore',
    'nav.offshore_tag': 'Coming Soon',
    'nav.about_menu': 'About Us',
    'nav.about': 'About Edusafe',
    'nav.about_desc': 'Get to know our certified instructors, training vision, and team.',
    'nav.contact': 'Contact & Location',
    'nav.contact_desc': 'Connect directly with our course advisors.',
    'nav.faq': 'Frequently Asked Questions',
    'nav.faq_desc': 'Answers regarding certifications, dates, and group bookings.',
    'nav.login': 'Log in',
    'nav.direct_register': 'Get Started',

    // Offshore Under Construction
    'offshore.badge': 'Offshore Safety Training',
    'offshore.title': 'Offshore Training',
    'offshore.under_construction_badge': 'Coming Soon',
    'offshore.hero_desc': 'Edusafe is currently preparing the launch of accredited offshore and maritime safety courses (OPITO, NOGEPA, and GWO standard compliance). Join our priority notification list or request a customized group quote today.',
    'offshore.waitlist_btn': 'Join Waitlist',
    'offshore.quote_btn': 'Request Custom Quote',
    'offshore.coming_soon_card': 'Booking Soon',

    // General CTAs
    'cta.book_now': 'Book Now',
    'cta.register': 'Register',
    'cta.quote': 'Request Quote',
    'cta.details': 'View details',
    'cta.back_dates': 'Back to all course dates',
    'cta.filter_reset': 'Reset Filters',
    'cta.search_placeholder': 'Search course name...',
    'cta.all_courses': 'All Courses',
    'cta.all_locations': 'All Locations',

    // Footer
    'footer.tagline': 'The leading expert in certified safety training, Emergency Response (BHV), First Aid, VCA, and workplace compliance.',
    'footer.rights': 'All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms & Conditions'
  }
} as const;

export type UiKey = keyof typeof ui[typeof defaultLang];
