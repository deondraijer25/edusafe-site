export interface SubCourse {
  slug: string;
  category: 'BHV' | 'EHBO' | 'VCA' | 'Transport' | 'Offshore';
  categoryTitle: string;
  categoryUrl: string;
  title: string;
  shortTitle: string;
  tagline: string;
  price: string;
  duration: string;
  spotsText: string;
  languages?: string[];
  target: string;
  requirements: string;
  exam: string;
  certification: string;
  inclusions: string[];
  modules: { name: string; description?: string }[];
  heroBullets?: string[];
  suitableForHtml?: string[];
  learningOutcomes?: string[];
  programIntro?: string;
  programSteps?: {
    title: string;
    description: string;
    items?: string[];
  }[];
  image: string;
  /** Keywords to match against live GHL events (category + title keywords) */
  eventFilter: {
    categories: string[];
    titleKeywords?: string[];
    excludeKeywords?: string[];
  };
}

export interface ServicePillar {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  icon: string;
  badge: string;
  url: string;
  image: string;
  items: {
    name: string;
    description: string;
    norm?: string;
  }[];
  benefits: string[];
}

export const courseCatalog: SubCourse[] = [
  // ==========================================
  // 1. BHV
  // ==========================================
  {
    slug: 'bhv-basis',
    category: 'BHV',
    categoryTitle: 'BHV Opleidingen',
    categoryUrl: '/bhv-cursus',
    title: 'BHV Basis',
    shortTitle: 'BHV Basis',
    tagline: 'Volledige basisopleiding Bedrijfshulpverlener voor een veilige werkvloer',
    price: '€ 195,00',
    duration: 'E-learning + 1 praktijkdag',
    spotsText: 'E-learning + Praktijk',
    languages: ['Nederlands', 'Engels'],
    target: 'Voor werknemers die voor het eerst bedrijfshulpverlener (BHV) worden en een officieel erkend Arbowet-certificaat willen behalen. Je doorloopt eerst flexibel de online e-learning en oefent daarna één dag praktijkgericht op locatie.',
    requirements: 'Geen vooropleiding of ervaring vereist',
    exam: 'Praktijkbeoordeling (geen schriftelijk examen)',
    certification: 'Officieel Arbowet-certificaat + pasje (1 jaar)',
    inclusions: [
      'E-learning & lesmateriaal',
      '1 volledige praktijkdag',
      'Officieel BHV-pasje & certificaat',
      'Lunch, koffie/thee & parkeren'
    ],
    heroBullets: [
      'E-learning + 1 praktijkdag',
      'Officieel Arbowet-certificaat',
      'Incl. lesmateriaal & lunch',
      'Den Haag of Incompany'
    ],
    suitableForHtml: [
      'Wil jij het verschil kunnen maken in geval van nood op de werkvloer en voorafgaand aan de praktijkdag flexibel online met de theorie aan de slag gaan? Dan is deze <strong>BHV Basiscursus met e-learning en 1 praktijkdag</strong> geschikt voor jou. Je hebt geen vooropleiding nodig, maar je moet wel fysiek in staat zijn om levensreddende handelingen uit te voeren. Het officiële BHV-certificaat is 1 jaar geldig.',
      'Heb je al een geldig (of recent verlopen) BHV-diploma en wil je jouw certificaat met een jaar verlengen? Kies dan voor onze <a href="/cursussen/bhv-herhaling" class="text-brand-primary font-semibold underline hover:text-brand-secondary">BHV Herhalingscursus</a>. Geef jij tijdens een calamiteit leiding aan het BHV-team? Bekijk dan de opleiding <a href="/cursussen/bhv-ploegleider" class="text-brand-primary font-semibold underline hover:text-brand-secondary">BHV Ploegleider</a>.',
      'Wil je naast bedrijfshulpverlening nog dieper ingaan op ziektebeelden en uitgebreide eerste hulp? Bekijk dan ook onze <a href="/cursussen/ehbo-basis" class="text-brand-primary font-semibold underline hover:text-brand-secondary">EHBO Basiscursus</a> of vraag een <a href="/incompany-training" class="text-brand-primary font-semibold underline hover:text-brand-secondary">Incompany training op maat</a> aan.'
    ],
    learningOutcomes: [
      'Een beginnende brand effectief bestrijden en veilig handelen bij rook- of brandgevaar',
      'Een gebouw snel en gestructureerd ontruimen met oog voor de veiligheid van alle aanwezigen',
      'Een slachtoffer zonder ademhaling direct reanimeren met én zonder gebruik van een AED',
      'Levensreddend handelen bij verstikking, verslikking, shock en ernstige bloedingen',
      'Essentiële eerste hulp en wondverzorging verlenen bij niet-spoedeisende bedrijfsongevallen'
    ],
    programIntro: 'De BHV Basiscursus bij Edusafe bestaat uit een flexibele online voorbereiding (e-learning) en één praktijkgerichte cursusdag op ons opleidingscentrum in Den Haag (of Incompany op uw eigen locatie). Zo combineren we tijdsbesparing met maximaal praktisch oefenen.',
    programSteps: [
      {
        title: '1. Voorbereiding: Online E-learning',
        description: 'Voorafgaand aan de praktijkdag ontvang je direct toegang tot onze online leeromgeving. In je eigen tempo doorloop je de voorbereidende theoriemodules:',
        items: [
          'Jouw wettelijke rol en taken als BHV’er (Artikel 15 Arbowet)',
          'Branddriehoek, rookgevaar, deurprocedure en ontruimingsprincipes',
          'Theorie spoedeisende en niet-spoedeisende eerste hulp'
        ]
      },
      {
        title: '2. Praktijkdag op locatie (08:30 – 16:00 uur)',
        description: 'De lesdag staat volledig in het teken van praktisch handelen en realistische scenario’s. Onze ervaren instructeurs begeleiden en toetsen je gedurende de dag op:',
        items: [
          'Veilig een ruimte verkennen en blussen met schuim, CO2 en blusdeken',
          'Een ontruiming alarmeren, begeleiden en overdragen aan de hulpdiensten',
          'Reanimeren op reanimatiepoppen, gebruik van de AED en stabiele zijligging',
          'Verbinden van wonden, brandwonden, botbreuken en oogletsel'
        ]
      },
      {
        title: '3. Certificering & Jaarlijkse Verlenging',
        description: 'Wanneer je de praktijkdag succesvol afrondt, voldoe je direct aan de eisen van de Arbowet en de Arbeidsinspectie:',
        items: [
          'Ontvangst van je erkende BHV-certificaat + pasje (1 jaar geldig)',
          'Automatische herinnering vóór het verlopen van je certificaat'
        ]
      }
    ],
    modules: [
      {
        name: 'Spoedeisende Eerste Hulp',
        description: 'Reanimatie, gebruik van de AED en handelen bij verstikking of shock.'
      },
      {
        name: 'Niet-spoedeisende Eerste Hulp',
        description: 'Wondverzorging, verbandleer en hulp bij brandwonden of botbreuken.'
      },
      {
        name: 'Brandbestrijding',
        description: 'Gevaarherkenning bij rook en praktisch blussen van een beginnende brand.'
      },
      {
        name: 'Ontruiming & Alarmering',
        description: 'Alarmeren, veilig ontruimen en overdracht aan de professionele hulpdiensten.'
      }
    ],
    image: '/assets/images/hero_poster.webp',
    eventFilter: {
      categories: ['BHV'],
      titleKeywords: ['basis']
    }
  },
  {
    slug: 'bhv-herhaling',
    category: 'BHV',
    categoryTitle: 'BHV Opleidingen',
    categoryUrl: '/bhv-cursus',
    title: 'BHV Herhaling',
    shortTitle: 'BHV Herhaling',
    tagline: 'Verleng je BHV-certificaat met 1 jaar en fris alle levensreddende vaardigheden praktijkgericht op',
    price: '€ 145,00',
    duration: '1 praktijkdag (of dagdeel)',
    spotsText: 'Jaarlijkse verlenging',
    languages: ['Nederlands', 'Engels'],
    target: 'Voor gecertificeerde BHV-ers die hun praktische vaardigheden willen opfrissen en hun BHV-diploma conform de Arbowet met een jaar willen verlengen.',
    requirements: 'Geldig (of recent verlopen) BHV-certificaat',
    exam: 'Praktijkbeoordeling (geen theorie-examen)',
    certification: 'Verlenging officieel BHV-diploma + pasje (1 jaar)',
    inclusions: [
      'Praktijkgerichte scenariotraining',
      'Officiële verlenging (1 jaar)',
      'Nieuw fysiek & digitaal BHV-pasje',
      'Lunch, koffie/thee & parkeren'
    ],
    heroBullets: [
      '1 praktijkdag (of dagdeel)',
      'Direct 1 jaar verlenging',
      'Geen theorie-examen',
      'Incl. nieuw pasje & lunch'
    ],
    suitableForHtml: [
      'Ben je al in het bezit van een BHV-certificaat en wil je jouw kennis en vaardigheden scherp houden? Met de <strong>BHV Herhalingscursus</strong> zorg je ervoor dat je in noodsituaties direct en zelfverzekerd kunt handelen én dat jouw organisatie blijft voldoen aan de Arbowet. Na afloop is je BHV-diploma weer 1 jaar geldig.',
      'Heb je nog géén BHV-diploma of is je certificaat al zeer lange tijd verlopen? Schrijf je dan in voor de <a href="/cursussen/bhv-basis" class="text-brand-primary font-semibold underline hover:text-brand-secondary">BHV Basiscursus</a>. Wil je doorgroeien naar een coördinerende rol binnen het BHV-team? Bekijk dan <a href="/cursussen/bhv-ploegleider" class="text-brand-primary font-semibold underline hover:text-brand-secondary">BHV Ploegleider</a>.'
    ],
    learningOutcomes: [
      'Zelfverzekerd reanimeren en een AED bedienen volgens de nieuwste richtlijnen',
      'Effectief ingrijpen bij een beginnende brand met verschillende blusmiddelen',
      'Besluitvaardig handelen en communiceren tijdens realistische ontruimingsscenario’s',
      'Direct eerste hulp toepassen bij acute en niet-spoedeisende letsels op de werkvloer'
    ],
    programIntro: 'Tijdens de BHV Herhalingscursus herhalen we geen droge theorie uit een boekje, maar ga je direct praktisch aan de slag met realistische praktijkscenario’s rondom EHBO, reanimatie, brandbestrijding en ontruiming.',
    programSteps: [
      {
        title: '1. Opfrissen Levensreddend Handelen & AED',
        description: 'In het eerste dagdeel oefen je hands-on met acute medische noodsituaties op de werkvloer:',
        items: [
          'Reanimatie en AED-inzet onder tijdsdruk',
          'Handelen bij verstikking, bewusteloosheid, beroerte en ernstige bloedingen',
          'Praktijkcases rondom wondbehandeling en stabiele zijligging'
        ]
      },
      {
        title: '2. Praktische Brandbestrijding & Ontruiming',
        description: 'In het tweede dagdeel trainen we op brand- en ontruimingsscenario’s:',
        items: [
          'Deurprocedure, rookgevaar en blusoefeningen met echte blusmiddelen',
          'Alarmering, ontruimingscommunicatie en opvang van hulpdiensten'
        ]
      },
      {
        title: '3. Directe Verlenging van je Certificaat',
        description: 'Onze instructeur beoordeelt je deelname gedurende de praktijkdag:',
        items: [
          'Directe verlenging van je officiële BHV-certificaat met 12 maanden',
          'Wij herinneren je volgend jaar automatisch op tijd voor de volgende verlenging'
        ]
      }
    ],
    modules: [
      {
        name: 'EHBO, Reanimatie & AED',
        description: 'Praktisch opfrissen van reanimatie, AED-inzet en acute eerste hulp.'
      },
      {
        name: 'Praktische Blusoefeningen',
        description: 'Hands-on blussen van een beginnende brand met verschillende blusmiddelen.'
      },
      {
        name: 'Ontruimingsscenario’s',
        description: 'Veilig verkennen van ruimtes, deurprocedure en begeleiden van een ontruiming.'
      },
      {
        name: 'Actualiteiten & Richtlijnen',
        description: 'Nieuwste inzichten en praktijkcases afgestemd op uw eigen werkomgeving.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?auto=format&fit=crop&q=80&w=800',
    eventFilter: {
      categories: ['BHV'],
      titleKeywords: ['herhaling']
    }
  },
  {
    slug: 'hoofd-bhv',
    category: 'BHV',
    categoryTitle: 'BHV Opleidingen',
    categoryUrl: '/bhv-cursus',
    title: 'Hoofd BHV',
    shortTitle: 'Hoofd BHV',
    tagline: 'Beleidsmatig opzetten, aansturen en beheren van een sluitende BHV-organisatie',
    price: '€ 495,00',
    duration: '2 tot 3 bijeenkomsten',
    spotsText: 'Beleids- & coördinatieniveau',
    languages: ['Nederlands', 'Engels'],
    target: 'Voor preventiemedewerkers, HR-managers, facilitair managers of veiligheidscoördinatoren die verantwoordelijk zijn voor het BHV-beleid en het beheer van de BHV-organisatie.',
    requirements: 'Geen specifieke vooropleiding vereist',
    exam: 'Praktijkopdracht: opstellen eigen BHV-beleidsplan',
    certification: 'Officieel diploma Hoofd BHV / Coördinator',
    inclusions: [
      'Cursusmap & sjablonen BHV-plan',
      'Begeleiding door veiligheidskundige',
      'Officieel diploma Hoofd BHV',
      'Lunch, koffie/thee & parkeren'
    ],
    heroBullets: [
      '2 tot 3 bijeenkomsten',
      'Incl. sjablonen BHV-plan',
      'Officieel diploma Hoofd BHV',
      'Koppeling met uw RI&E'
    ],
    suitableForHtml: [
      'Ben jij binnen jouw organisatie eindverantwoordelijk voor het opzetten, onderhouden en begroten van de BHV-organisatie? Dan is de opleiding <strong>Hoofd BHV</strong> voor jou ontwikkeld. Je leert hoe je vanuit de Risico-Inventarisatie & Evaluatie (RI&E) bepaalt hoeveel BHV’ers en middelen nodig zijn.',
      'Geef je liever operationeel leiding op de vloer tijdens een daadwerkelijke inzet of ontruiming? Bekijk dan de praktijkopleiding <a href="/cursussen/bhv-ploegleider" class="text-brand-primary font-semibold underline hover:text-brand-secondary">BHV Ploegleider</a>. Wil je ook je <a href="/diensten/rie" class="text-brand-primary font-semibold underline hover:text-brand-secondary">RI&E of BHV-plan door Edusafe laten opstellen</a>? Ook daar ondersteunen wij bij.'
    ],
    learningOutcomes: [
      'Een volledig BHV-beleidsplan en opleidingsplan opstellen op basis van de RI&E',
      'Exact bepalen welke BHV-bezetting, blusmiddelen en AED’s wettelijk nodig zijn',
      'Jaarlijkse ontruimingsoefeningen organiseren, begeleiden en evalueren',
      'Het management adviseren over Arbowet-verplichtingen, budget en aansprakelijkheid'
    ],
    programIntro: 'Tijdens de opleiding Hoofd BHV vertalen we de wettelijke kaders uit de Arbowet en het Bouwbesluit rechtstreeks naar jouw eigen bedrijfssituatie.',
    programSteps: [
      {
        title: '1. Wettelijk kader, RI&E & Restrisico’s',
        description: 'Je leert hoe de Arbowet werkt en hoe je restrisico’s uit de RI&E vertaalt naar concrete BHV-maatregelen.'
      },
      {
        title: '2. Inrichten & Beheren van de BHV-organisatie',
        description: 'Opstellen van het BHV-beleidsplan, kiezen van alarmerings- en communicatiemiddelen en borgen van certificeringen.'
      },
      {
        title: '3. Oefenbeleid, Evaluatie & Certificering',
        description: 'Uitwerken van je eigen praktijkopdracht en ontvangst van het officiële diploma Hoofd BHV.'
      }
    ],
    modules: [
      {
        name: 'Wetgeving & Aansprakelijkheid',
        description: 'Arbowet, Bouwbesluit en de wettelijke zorgplicht van de werkgever.'
      },
      {
        name: 'BHV-Beleidsplan & RI&E',
        description: 'Vertalen van restrisico’s uit de RI&E naar een sluitend BHV-plan.'
      },
      {
        name: 'Bezetting & Middelenbeheer',
        description: 'Vaststellen van benodigde BHV’ers, blusmiddelen, AED’s en portofoons.'
      },
      {
        name: 'Opleidings- & Oefenbeleid',
        description: 'Plannen, organiseren en evalueren van trainingen en ontruimingsoefeningen.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800',
    eventFilter: {
      categories: ['BHV'],
      titleKeywords: ['hoofd']
    }
  },
  {
    slug: 'bhv-ploegleider',
    category: 'BHV',
    categoryTitle: 'BHV Opleidingen',
    categoryUrl: '/bhv-cursus',
    title: 'BHV Ploegleider',
    shortTitle: 'BHV Ploegleider',
    tagline: 'Stuur tijdens een calamiteit effectief, gestructureerd en besluitvaardig je BHV-ploeg aan',
    price: '€ 345,00',
    duration: '2 praktijkdagen (of 1 dag herhaling)',
    spotsText: 'Leidinggevende rol',
    languages: ['Nederlands', 'Engels'],
    target: 'Voor ervaren BHV-ers die tijdens een inzet of ontruiming de operationele leiding en coördinatie hebben over een ploeg bedrijfshulpverleners.',
    requirements: 'Geldig BHV Basis- of Herhalingscertificaat',
    exam: 'Praktische inzettoetsing & scenario-beoordeling',
    certification: 'Officieel diploma Ploegleider BHV + pasje (1 jaar)',
    inclusions: [
      'Lesmateriaal & BHV-inzetkaarten',
      'Table-top & praktijkscenario’s',
      'Officieel diploma Ploegleider BHV',
      'Lunch, koffie/thee & parkeren'
    ],
    heroBullets: [
      'Operationeel leidinggeven',
      'Trainen volgens BOB-model',
      'Officieel Ploegleider-diploma',
      'Incl. lesmateriaal & lunch'
    ],
    suitableForHtml: [
      'Heeft jouw organisatie meerdere BHV’ers in dienst en ben jij degene die bij een incident het overzicht moet bewaren en de taken verdeelt? Dan is de cursus <strong>BHV Ploegleider</strong> precies wat je nodig hebt. Om deel te nemen heb je een geldig <a href="/cursussen/bhv-basis" class="text-brand-primary font-semibold underline hover:text-brand-secondary">BHV Basis</a> of <a href="/cursussen/bhv-herhaling" class="text-brand-primary font-semibold underline hover:text-brand-secondary">BHV Herhaling</a> certificaat nodig.',
      'Ben je naast de operationele aansturing ook beleidsmatig verantwoordelijk voor het opstellen van het BHV-plan? Bekijk dan onze cursus <a href="/cursussen/hoofd-bhv" class="text-brand-primary font-semibold underline hover:text-brand-secondary">Hoofd BHV</a> of combineer deze training met een <a href="/cursussen/ontruimingsoefening" class="text-brand-primary font-semibold underline hover:text-brand-secondary">Ontruimingsoefening op locatie</a>.'
    ],
    learningOutcomes: [
      'Een BHV-inzet gestructureerd aansturen volgens Beeldvorming, Oordeelsvorming en Besluitvorming (BOB)',
      'Helder en foutloos communiceren met je BHV-ploeg via portofoons',
      'Professionele hulpdiensten (brandweer, politie, ambulance) opvangen en informeren',
      'Na afloop van een incident de evaluatie, rapportage en nazorg voor het team verzorgen'
    ],
    programIntro: 'Als Ploegleider BHV blus je niet altijd zelf, maar zorg je dat de juiste BHV’ers op de juiste plek worden ingezet en dat iedereen veilig werkt.',
    programSteps: [
      {
        title: '1. Beeldvorming, Oordeelsvorming & Besluitvorming (BOB)',
        description: 'Je leert hoe je onder druk snel informatie verzamelt, prioriteiten stelt en duidelijke opdrachten geeft aan je BHV-team.'
      },
      {
        title: '2. Scenario-oefeningen & Portofooncommunicatie',
        description: 'Aan de hand van table-top maquettes en realistische praktijkscenario’s oefen je complexe calamiteiten met meerdere incidenten tegelijk.'
      },
      {
        title: '3. Overdracht Hulpdiensten, Nazorg & Certificering',
        description: 'Je traint de warme overdracht aan de bevelvoerder van de brandweer en rondt de training af met het officiële diploma Ploegleider BHV.'
      }
    ],
    modules: [
      {
        name: 'Leidinggeven & Taakverdeling',
        description: 'Coördineren van de BHV-ploeg en bewaken van de veiligheid tijdens inzet.'
      },
      {
        name: 'Besluitvorming (BOB-model)',
        description: 'Snel beeldvormen, oordelen en besluiten nemen onder tijdsdruk.'
      },
      {
        name: 'Portofoon & Hulpdiensten',
        description: 'Gestructureerd portofoonverkeer en warme overdracht aan de brandweer.'
      },
      {
        name: 'Evaluatie & Nazorg',
        description: 'Afronden van een inzet, opvang van betrokkenen en incidentrapportage.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800',
    eventFilter: {
      categories: ['BHV'],
      titleKeywords: ['ploegleider']
    }
  },
  {
    slug: 'brand-en-ontruiming',
    category: 'BHV',
    categoryTitle: 'BHV Opleidingen',
    categoryUrl: '/bhv-cursus',
    title: 'Brand en Ontruiming',
    shortTitle: 'Brand & Ontruiming',
    tagline: 'Specialistische praktijktraining gericht op beginnende brandbestrijding en veilige pandontruiming',
    price: '€ 135,00',
    duration: '1 dagdeel (4 uur)',
    spotsText: 'Praktijkgericht',
    languages: ['Nederlands', 'Engels'],
    target: 'Voor medewerkers en BHV-ers die specifiek getraind willen worden op het bestrijden van een beginnende brand en het snel en veilig ontruimen van het pand.',
    requirements: 'Geen specifieke vooropleiding vereist',
    exam: 'Praktijkbeoordeling door brandweerinstructeur',
    certification: 'Deelcertificaat Brand & Ontruiming (1 jaar)',
    inclusions: [
      'Blusoefeningen op echt vuur',
      'Training deur- & ontruimingsprocedure',
      'Deelcertificaat Brand & Ontruiming',
      'Koffie, thee & gratis parkeren'
    ],
    heroBullets: [
      '1 dagdeel (4 uur)',
      'Hands-on blussen op vuur',
      'Officieel deelcertificaat',
      'Den Haag of Incompany'
    ],
    suitableForHtml: [
      'Hebben medewerkers binnen jouw organisatie al een geldig EHBO-diploma en willen zij alleen het onderdeel Brand & Ontruiming behalen om volwaardig BHV’er te zijn? Of wil je jouw team extra scherp trainen op brandveiligheid? Dan is deze <strong>deeltraining Brand & Ontruiming (4 uur)</strong> de juiste keuze.',
      'Zoek je de volledige BHV-opleiding inclusief Spoedeisende Eerste Hulp en reanimatie? Kies dan voor onze <a href="/cursussen/bhv-basis" class="text-brand-primary font-semibold underline hover:text-brand-secondary">BHV Basiscursus</a>.'
    ],
    learningOutcomes: [
      'De gevaren van rook, hitte en koolmonoxide direct herkennen en inschatten',
      'Veilig een gesloten ruimte benaderen via de officiële deurprocedure',
      'Een beginnende brand blussen met het juiste blusmiddel (schuim, CO2, blusdeken)',
      'Een gestructureerde pandontruiming starten en begeleiden naar de verzamelplaats'
    ],
    programIntro: 'In één intensief en praktijkgericht dagdeel (4 uur) train je onder leiding van ervaren brandweerinstructeurs zowel actieve brandbestrijding als veilige ontruiming.',
    programSteps: [
      {
        title: '1. Brandklassen, Rookgevaar & Deurprocedure',
        description: 'Korte interactieve instructie over hoe een beginnende brand zich ontwikkelt en hoe je eigen veiligheid vooropstaat:',
        items: [
          'Herkennen van brandklassen (A, B, C, D, F) en gevaar van giftige rookgassen',
          'Toepassen van de veilige deurprocedure zonder steekvlamrisico'
        ]
      },
      {
        title: '2. Hands-on Blusoefeningen op Echt Vuur',
        description: 'Iedere deelnemer oefent zelf meerdere bluspogingen op realistische vuurhaarden:',
        items: [
          'Effectief blussen met schuimblusser, CO2-blusser en brandslanghaspel',
          'Vlam-in-de-pan en personenbrand doven met een blusdeken'
        ]
      },
      {
        title: '3. Ontruimingsscenario & Deelcertificaat',
        description: 'Je oefent het alarmeren, controleren van ruimtes en begeleiden naar de verzamelplaats, afgesloten met het officiële Deelcertificaat Brand & Ontruiming.'
      }
    ],
    modules: [
      {
        name: 'Branddriehoek & Rookgevaar',
        description: 'Herkennen van brandklassen, rookontwikkeling en veiligheidsrisico’s.'
      },
      {
        name: 'Praktisch Blussen',
        description: 'Zelf blussen met schuimblusser, CO2-blusser en blusdeken.'
      },
      {
        name: 'Deurprocedure & Verkenning',
        description: 'Veilig benaderen en controleren van afgesloten ruimtes bij brandmelding.'
      },
      {
        name: 'Alarmering & Ontruiming',
        description: 'Starten van een ontruiming en begeleiden van aanwezigen naar buiten.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&q=80&w=800',
    eventFilter: {
      categories: ['BHV', 'ONTRUIMING'],
      titleKeywords: ['brand', 'ontruiming']
    }
  },
  {
    slug: 'ontruimingsoefening',
    category: 'BHV',
    categoryTitle: 'BHV Opleidingen',
    categoryUrl: '/bhv-cursus',
    title: 'Ontruimingsoefening op Locatie',
    shortTitle: 'Ontruimingsoefening',
    tagline: 'Test uw noodplan en BHV-organisatie in de praktijk met een realistische oefening op locatie',
    price: 'Offerte op maat',
    duration: 'Op uw eigen bedrijfslocatie',
    spotsText: 'Incompany & Verslaglegging',
    languages: ['Nederlands', 'Engels'],
    target: 'Voor bedrijven, scholen, zorginstellingen en kantoren die jaarlijks hun verplichte ontruimingsoefening willen laten begeleiden en officieel rapporteren.',
    requirements: 'Aanwezigheid BHV-team op eigen locatie',
    exam: 'Praktijkobservatie & tijdsregistratie op locatie',
    certification: 'Officieel evaluatierapport conform Arbowet',
    inclusions: [
      'Oefendraaiboek op maat van uw pand',
      'Inzet rookmachines & enscenering',
      'Begeleiding door oefenleiders',
      'Officieel Arbowet-evaluatierapport'
    ],
    heroBullets: [
      'Op uw eigen bedrijfslocatie',
      'Fase 0 t/m Fase 4 oefeningen',
      'Incl. rook & enscenering',
      'Officieel evaluatierapport'
    ],
    suitableForHtml: [
      'Een BHV-plan op papier werkt pas echt als iedereen in het pand weet wat hij moet doen zodra het ontruimingsalarm afgaat. Met een <strong>begeleide Ontruimingsoefening op locatie</strong> toetsen onze veiligheidskundigen jullie BHV-organisatie, communicatie en vluchtwegen in de praktijk.',
      'Hebben jullie nog geen actueel ontruimingsplan of vluchtwegplattegronden? Bekijk dan onze dienst <a href="/ontruimingsplattegronden" class="text-brand-primary font-semibold underline hover:text-brand-secondary">Vluchtwegplattegronden (NEN 1414)</a>.'
    ],
    learningOutcomes: [
      'Exact weten binnen hoeveel minuten jullie pand veilig en volledig ontruimd is',
      'Knelpunten in alarmering, portofoonverkeer en vluchtroutes direct blootleggen',
      'Voldoen aan de jaarlijkse oefenplicht richting Arbeidsinspectie en brandverzekeraar',
      'Praktische rust en routine opbouwen bij zowel BHV’ers als alle overige medewerkers'
    ],
    programIntro: 'Wij stemmen elke ontruimingsoefening af op het ervaringsniveau van jullie organisatie (Fase 0 table-top tot en met Fase 4 onaangekondigde praktijkoefening) zonder onnodige bedrijfsstilstand.',
    programSteps: [
      {
        title: '1. Voorbereiding & Scenario-ontwerp',
        description: 'Onze oefenleider bespreekt vooraf jullie ontruimingsplan, specifieke gebouwrisico’s en het gewenste oefendoel (incl. afmelding bij RAC/PAC meldkamer).'
      },
      {
        title: '2. Uitvoering met Rook, Slachtoffers & Waarnemers',
        description: 'We ensceneren een realistische calamiteit met veilige oefenrook en oefenslachtoffers, terwijl onze waarnemers reactietijden, communicatie en ontruimingstijd meten.'
      },
      {
        title: '3. Directe Nabespreking & Officieel Evaluatierapport',
        description: 'Na afloop evalueren we direct met het BHV-team en ontvangt u een officieel schriftelijk evaluatieverslag met verbeterpunten voor uw Arbo- en verzekeringsdossier.'
      }
    ],
    modules: [
      {
        name: 'Fase 0/1: Table-top & Deeloefening',
        description: 'Toetsen van procedures en rollen per afdeling of bouwdeel.'
      },
      {
        name: 'Fase 2/3: Volledige Pandontruiming',
        description: 'Realistische oefening met rooksimulatie en oefenslachtoffers.'
      },
      {
        name: 'Toetsing Vluchtwegen & Alarm',
        description: 'Tijdmeting en controle van verzamelplaats en communicatie.'
      },
      {
        name: 'Evaluatie & Rapportage',
        description: 'Nabespreking met het team en officieel verslag voor de Arbeidsinspectie.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&q=80&w=800',
    eventFilter: {
      categories: ['ONTRUIMING'],
      titleKeywords: ['ontruimingsoefening']
    }
  },
  {
    slug: 'kleine-blusmiddelen',
    category: 'BHV',
    categoryTitle: 'BHV Opleidingen',
    categoryUrl: '/bhv-cursus',
    title: 'Training Kleine Blusmiddelen',
    shortTitle: 'Kleine blusmiddelen',
    tagline: 'Leer zelfverzekerd en veilig blussen met handblussers, brandslanghaspels en blusdekens',
    price: '€ 115,00',
    duration: '1 dagdeel (ca. 3 uur)',
    spotsText: 'Hands-on Vuurtraining',
    languages: ['Nederlands', 'Engels'],
    target: 'Voor medewerkers die in korte tijd praktisch willen leren omgaan met alle aanwezige kleine blusmiddelen op de werkvloer.',
    requirements: 'Geen specifieke vooropleiding vereist',
    exam: 'Praktische blusoefeningen met instructeur',
    certification: 'Officieel Certificaat Kleine Blusmiddelen',
    inclusions: [
      'Oefenen met echte blusmiddelen',
      'Begeleiding door brandweerinstructeur',
      'Certificaat Kleine Blusmiddelen',
      'Koffie, thee & gratis parkeren'
    ],
    heroBullets: [
      '1 dagdeel (ca. 3 uur)',
      'Blussen op echt vuur',
      'Officieel deelcertificaat',
      'Den Haag of Incompany'
    ],
    suitableForHtml: [
      'Op elke werkvloer hangen brandblussers en brandslanghaspels, maar weinig medewerkers hebben er ooit echt mee geblust. Tijdens de <strong>Training Kleine Blusmiddelen</strong> ervaar je in één kort, krachtig dagdeel hoe elk blusmiddel werkt en wanneer je wel of juist géén bluspoging onderneemt.',
      'Wil je naast het blussen ook een volledige ontruiming leren begeleiden? Kies dan voor <a href="/cursussen/brand-en-ontruiming" class="text-brand-primary font-semibold underline hover:text-brand-secondary">Brand en Ontruiming</a> of de volledige <a href="/cursussen/bhv-basis" class="text-brand-primary font-semibold underline hover:text-brand-secondary">BHV Basiscursus</a>.'
    ],
    learningOutcomes: [
      'Verschillende brandklassen (A, B, C, D, F) herkennen en direct de juiste blusser kiezen',
      'Veilig en doeltreffend blussen met schuim, CO2, poeder en de brandslanghaspel',
      'Vlam-in-de-pan of kledingbrand blussen met een blusdeken',
      'Eigen veiligheid waarborgen bij rookontwikkeling, hitte en elektriciteitsbranden'
    ],
    programIntro: 'Deze praktische blustraining duurt circa 3 uur en bestaat voor het overgrote deel uit zelf oefenen met echte blusmiddelen op verschillende typen vuurhaarden.',
    programSteps: [
      {
        title: '1. Korte Theorie: Brandklassen & Juiste Blusser Kiezen',
        description: 'In 30 minuten leer je welk blusmiddel werkt bij vaste stoffen, vloeistoffen, gassen, vetten en elektrische apparatuur — en welk middel gevaar oplevert.'
      },
      {
        title: '2. Praktijkronde met Schuim, CO2, Haspel & Blusdeken',
        description: 'Buiten op de oefenplaats blus je zelf diverse gecontroleerde brandscenario’s onder directe coaching van een brandweerinstructeur.'
      },
      {
        title: '3. Evaluatie & Uitreiking Certificaat',
        description: 'Na het succesvol uitvoeren van de blustechnieken ontvang je het officiële Edusafe Certificaat Kleine Blusmiddelen.'
      }
    ],
    modules: [
      {
        name: 'Brandklassen & Blusmiddelkeuze',
        description: 'Direct de juiste blusser kiezen bij vaste stoffen, vloeistoffen of elektra.'
      },
      {
        name: 'Blussen met Schuim & CO2',
        description: 'Praktisch oefenen op echt vuur met schuim- en koolzuursneeuwblussers.'
      },
      {
        name: 'Brandslanghaspel & Blusdeken',
        description: 'Effectief inzetten van de haspel en veilig afdekken met een blusdeken.'
      },
      {
        name: 'Eigen Veiligheid & Rook',
        description: 'Inschatten wanneer u veilig kunt blussen en wanneer u direct ontruimt.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&q=80&w=800',
    eventFilter: {
      categories: ['BHV'],
      titleKeywords: ['blusmiddel']
    }
  },
  {
    slug: 'portotraining',
    category: 'BHV',
    categoryTitle: 'BHV Opleidingen',
    categoryUrl: '/bhv-cursus',
    title: 'Portofoontraining (Portotraining)',
    shortTitle: 'Portotraining',
    tagline: 'Heldere en gestructureerde noodcommunicatie via de portofoon tijdens calamiteiten',
    price: '€ 115,00',
    duration: '1 dagdeel (ca. 3 uur)',
    spotsText: 'Cruciaal bij Calamiteiten',
    languages: ['Nederlands', 'Engels'],
    target: 'Voor BHV-ers, ploegleiders, receptiemedewerkers en beveiligers die tijdens een incident met portofoons communiceren.',
    requirements: 'Geen specifieke vooropleiding vereist',
    exam: 'Praktische communicatie- en scenario-oefeningen',
    certification: 'Officieel Certificaat Portofooncommunicatie',
    inclusions: [
      'Gebruik professionele portofoonsets',
      'Praktijkscenario’s op maat',
      'NATO-zakkaartje & certificaat',
      'Koffie, thee & gratis parkeren'
    ],
    heroBullets: [
      '1 dagdeel (ca. 3 uur)',
      'Oefenen met portofoonsets',
      'Incl. NATO-zakkaartje',
      'Den Haag of Incompany'
    ],
    suitableForHtml: [
      'Tijdens een brand of ontruiming valt of staat een succesvolle BHV-inzet met rustige, verstaanbare communicatie. In de <strong>Portofoontraining (Portotraining)</strong> leert jullie team hoe je voorkomt dat iedereen door elkaar praat op het noodkanaal en hoe je meldingen direct en foutloos doorgeeft.',
      'Deze training sluit uitstekend aan op onze opleiding <a href="/cursussen/bhv-ploegleider" class="text-brand-primary font-semibold underline hover:text-brand-secondary">BHV Ploegleider</a> en kan ook gecombineerd worden met een <a href="/cursussen/ontruimingsoefening" class="text-brand-primary font-semibold underline hover:text-brand-secondary">Ontruimingsoefening op locatie</a>.'
    ],
    learningOutcomes: [
      'De portofoon technisch blindelings bedienen (kanalen, spreeksleutel en noodknop)',
      'Strikt volgens etherdiscipline communiceren zonder het kanaal te blokkeren',
      'Noodberichten gestructureerd opbouwen (wie, waar, wat, slachtoffers, hulpmiddelen)',
      'Het NATO-spelalfabet en standaard oproepprocedures foutloos toepassen'
    ],
    programIntro: 'In een interactief dagdeel van 3 uur oefen je met professionele BHV-portofoonsets in realistische calamiteitenscenario’s over meerdere ruimtes of verdiepingen.',
    programSteps: [
      {
        title: '1. Portofoontechniek & Etherdiscipline',
        description: 'Uitleg over zendbereik, spreeksleutel (eerst drukken, kort wachten, dan spreken), kanaalkeuze en kort en zakelijk taalgebruik.'
      },
      {
        title: '2. Praktijkoefeningen NATO-alfabet & Noodoproepen',
        description: 'In tweetallen en kleine ploegen oefen je het foutloos doorgeven van locaties, slachtofferinformatie en urgente noodmeldingen onder tijdsdruk.'
      },
      {
        title: '3. Coördinatiescenario & Certificering',
        description: 'Eindoefening waarbij een ploegleider een volledige pandcontrole aanstuurt via de portofoon, inclusief NATO-steekkaart en certificaat.'
      }
    ],
    modules: [
      {
        name: 'Techniek & Bediening',
        description: 'Blindelings bedienen van kanalen, spreeksleutel (PTT) en noodknop.'
      },
      {
        name: 'Etherdiscipline',
        description: 'Kort, bondig en foutloos communiceren zonder het kanaal te blokkeren.'
      },
      {
        name: 'NATO-Spelalfabet & Oproepen',
        description: 'Standaard oproepprocedures en foutloos spellen onder druk.'
      },
      {
        name: 'Noodmeldingen & Coördinatie',
        description: 'Prioriteit geven aan noodberichten en aansturen van een ontruiming.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800',
    eventFilter: {
      categories: ['BHV'],
      titleKeywords: ['porto']
    }
  },

  // ==========================================
  // 2. EHBO
  // ==========================================
  {
    slug: 'ehbo-basis',
    category: 'EHBO',
    categoryTitle: 'EHBO Opleidingen',
    categoryUrl: '/ehbo-cursus',
    title: 'EHBO Basis (Het Oranje Kruis)',
    shortTitle: 'EHBO Basis',
    tagline: 'Het officiële en meest complete Diploma Eerste Hulp van Het Oranje Kruis',
    price: '€ 285,00',
    duration: 'E-learning + praktijkdagen',
    spotsText: 'Oranje Kruis Erkend',
    languages: ['Nederlands', 'Engels'],
    target: 'Voor werknemers, vrijwilligers, sportverenigingen en particulieren die allround gediplomeerd eerstehulpverlener willen worden. Door veel zorgverzekeraars (deels) vergoed vanuit de aanvullende verzekering.',
    requirements: 'Geen vooropleiding vereist (vanaf 16 jaar)',
    exam: 'Officieel praktijkexamen door examinator Het Oranje Kruis',
    certification: 'Officieel Diploma Eerste Hulp Het Oranje Kruis (2 jaar)',
    inclusions: [
      'Oranje Kruis lesboek & e-learning',
      'Praktijk met LOTUS-slachtoffers',
      'Officieel Oranje Kruis examen',
      'Lunch, koffie/thee & parkeren'
    ],
    heroBullets: [
      'E-learning + praktijkdagen',
      'Officieel Oranje Kruis diploma',
      'Vergoeding zorgverzekering',
      'Incl. examen, boek & lunch'
    ],
    suitableForHtml: [
      'Wil je niet alleen basis-eerste-hulp kunnen verlenen op het werk, maar overal zelfverzekerd kunnen handelen bij zware verwondingen, botbreuken en plotselinge ziektebeelden? Dan is <strong>EHBO Basis (Het Oranje Kruis)</strong> dé landelijke standaard. Dankzij de officiële erkenning vergoeden veel zorgverzekeraars deze cursus (geheel of gedeeltelijk) vanuit het aanvullende pakket.',
      'Heb je al een geldig Diploma Eerste Hulp? Schrijf je dan in voor <a href="/cursussen/ehbo-herhaling" class="text-brand-primary font-semibold underline hover:text-brand-secondary">EHBO Herhaling</a>. Werk je in de kinderopvang of met jonge kinderen? Bekijk dan onze Wet IKK-erkende cursus <a href="/cursussen/ehak" class="text-brand-primary font-semibold underline hover:text-brand-secondary">EHAK (Eerste Hulp aan Kinderen)</a>.',
      'Zoek je specifiek een wettelijk verplicht certificaat voor bedrijfshulpverlening inclusief brand en ontruiming? Bekijk dan onze <a href="/cursussen/bhv-basis" class="text-brand-primary font-semibold underline hover:text-brand-secondary">BHV Basiscursus</a>.'
    ],
    learningOutcomes: [
      'De vijf belangrijke punten bij het verlenen van eerste hulp gestructureerd toepassen',
      'Direct reanimeren en een AED aansluiten bij volwassenen en kinderen',
      'Ernstige bloedingen stelpen, shock bestrijden en professionele wondverbanden aanleggen',
      'Doortastend handelen bij botbreuken, brandwonden, vergiftigingen en wervelletsel',
      'Acute ziektebeelden zoals een beroerte, hartinfarct, epilepsie en diabetes herkennen'
    ],
    programIntro: 'Bij Edusafe combineer je online zelfstudie (e-learning + het officiële Oranje Kruis lesboek) met intensieve praktijkdagen waarin je oefent met professionele LOTUS-slachtoffers.',
    programSteps: [
      {
        title: '1. Online Voorbereiding & Oranje Kruis Lesboek',
        description: 'Je bestudeert vooraf flexibel de medische basistheorie, de vijf regels van EHBO en veelvoorkomende ziektebeelden via onze e-learning.'
      },
      {
        title: '2. Praktijkdagen met LOTUS-slachtoffers (08:30 – 16:30 uur)',
        description: 'Onder begeleiding van een gecertificeerd Instructeur Eerste Hulp oefen je alle handelingen levensecht in kleine groepen:',
        items: [
          'Reanimatie, AED-bediening, stabiele zijligging en luchtwegobstructie',
          'Wondverzorging, drukverbanden, brandwonden en oogletsels',
          'Realistische casussen met gegrimeerde LOTUS-slachtoffers'
        ]
      },
      {
        title: '3. Onafhankelijk Praktijkexamen Het Oranje Kruis',
        description: 'Je sluit de opleiding af met het officiële praktijkexamen door examinatoren van Het Oranje Kruis en ontvangt het 2 jaar geldige Diploma Eerste Hulp.'
      }
    ],
    modules: [
      {
        name: 'Vitale Functies, Reanimatie & AED',
        description: 'Bewustzijn en ademhaling controleren, reanimeren (30:2) en AED inzetten.'
      },
      {
        name: 'Bloedingen, Wondzorg & Shock',
        description: 'Actieve bloedingen stelpen, snelverbanden aanleggen en shock herkennen.'
      },
      {
        name: 'Botbreuken, Gewrichten & Wervelletsel',
        description: 'Stabiliseren van breuken, ontwrichtingen, kneuzingen en nek-/rugletsel.'
      },
      {
        name: 'Brandwonden, Vergiftiging & Oogletsel',
        description: 'Juist koelen, handelen bij gevaarlijke stoffen en spoelen van oogletsel.'
      },
      {
        name: 'Acute Ziektebeelden & LOTUS-casuïstiek',
        description: 'Herkennen van hartinfarct, beroerte (FAST), epilepsie, allergie en diabetes.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&q=80&w=800',
    eventFilter: {
      categories: ['EHBO'],
      titleKeywords: ['basis']
    }
  },
  {
    slug: 'ehbo-herhaling',
    category: 'EHBO',
    categoryTitle: 'EHBO Opleidingen',
    categoryUrl: '/ehbo-cursus',
    title: 'EHBO Herhaling (Het Oranje Kruis)',
    shortTitle: 'EHBO Herhaling',
    tagline: 'Houd uw eerste-hulpvaardigheden scherp en verleng uw officiële Oranje Kruis diploma',
    price: '€ 145,00',
    duration: '1 praktijkdag',
    spotsText: 'Diploma Verlenging',
    languages: ['Nederlands', 'Engels'],
    target: 'Voor gediplomeerde EHBO’ers die hun verplichte competenties willen aftoetsen en hun Diploma Eerste Hulp van Het Oranje Kruis tijdig met 2 jaar willen verlengen.',
    requirements: 'Geldig Diploma Eerste Hulp (Het Oranje Kruis)',
    exam: 'Continue praktijkbeoordeling (geen schriftelijk examen)',
    certification: 'Officiële herregistratie Het Oranje Kruis (2 jaar)',
    inclusions: [
      'Praktijkdag met LOTUS-slachtoffers',
      'Herregistratie Het Oranje Kruis',
      'Alle verband- & oefenmaterialen',
      'Lunch, koffie/thee & parkeren'
    ],
    heroBullets: [
      '1 volledige praktijkdag',
      'Geen schriftelijk examen',
      'Verlenging Het Oranje Kruis',
      'Oefenen met LOTUS-acteurs'
    ],
    suitableForHtml: [
      'Het officiële Diploma Eerste Hulp van Het Oranje Kruis is 2 jaar geldig, mits je aantoonbaar je praktische competenties bijhoudt. Tijdens onze <strong>1-daagse EHBO Herhaling</strong> toetsen en actualiseren we alle verplichte vaardigheden in één overzichtelijke praktijkdag — inclusief afmelding bij Het Oranje Kruis.',
      'Is jouw diploma al langere tijd verlopen of heb je nog geen EHBO-diploma? Bekijk dan onze volledige opleiding <a href="/cursussen/ehbo-basis" class="text-brand-primary font-semibold underline hover:text-brand-secondary">EHBO Basis (Het Oranje Kruis)</a> of vraag een <a href="/incompany-training" class="text-brand-primary font-semibold underline hover:text-brand-secondary">Incompany EHBO-herhaling</a> aan voor jouw team.'
    ],
    learningOutcomes: [
      'Reanimatie- en AED-vaardigheden foutloos uitvoeren volgens de actuele NRR-richtlijnen',
      'Complexe en onverwachte ongevalsscenario’s zelfstandig beoordelen en stabiliseren',
      'Verbandtechnieken en wondbehandeling snel en hygiënisch toepassen',
      'Op de hoogte zijn van de nieuwste Nederlandse Richtlijnen Eerste Hulp'
    ],
    programIntro: 'Geen droge theorie of schriftelijke toets: tijdens de EHBO Herhaling draait de hele dag om levensechte casussen, directe feedback en het aftoetsen van je competenties.',
    programSteps: [
      {
        title: '1. Actualiteiten & Richtlijnen Update',
        description: 'We starten met belangrijke wijzigingen in de Nederlandse Richtlijnen Eerste Hulp en ervaringen uit de praktijk.'
      },
      {
        title: '2. Verplichte Competentietoetsing Reanimatie & Verbandleer',
        description: 'Je oefent intensief op QCPR-reanimatiepoppen met AED, ernstige bloedingen, verstikking en immobilisatietechnieken.'
      },
      {
        title: '3. LOTUS-scenario’s & Herregistratie Oranje Kruis',
        description: 'In het middagprogramma los je realistische ongevallen op met LOTUS-slachtoffers, waarna wij direct je verlenging registreren bij Het Oranje Kruis.'
      }
    ],
    modules: [
      {
        name: 'Reanimatie & AED Competentietoets',
        description: 'Jaarlijkse toetsing van borstcompressies, beademing en AED-gebruik conform NRR.'
      },
      {
        name: 'LOTUS Praktijkcasussen',
        description: 'Levensechte ongevalsscenario’s met professioneel gegrimeerde acteurs.'
      },
      {
        name: 'Verbandleer & Wondzorg',
        description: 'Opfrissen van snelverbanden, drukverbanden, brandwonden en spalken.'
      },
      {
        name: 'Nieuwe Richtlijnen Eerste Hulp',
        description: 'Praktische doorvertaling van de nieuwste medische eerste-hulprichtlijnen.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80&w=800',
    eventFilter: {
      categories: ['EHBO'],
      titleKeywords: ['herhaling']
    }
  },
  {
    slug: 'ehak',
    category: 'EHBO',
    categoryTitle: 'EHBO Opleidingen',
    categoryUrl: '/ehbo-cursus',
    title: 'EHAK (Eerste Hulp aan Kinderen)',
    shortTitle: 'EHAK',
    tagline: 'Geregistreerde kinder-EHBO conform de Wet IKK voor kinderopvang, gastouders en ouders',
    price: '€ 145,00',
    duration: 'E-learning + 1 praktijkdag',
    spotsText: 'Voldoet aan Wet IKK',
    languages: ['Nederlands', 'Engels'],
    target: 'Voor pedagogisch medewerkers in kinderdagverblijven en BSO’s, gastouders, leerkrachten in het basisonderwijs en (groot)ouders die doortastend willen handelen bij ongevallen bij baby’s en kinderen.',
    requirements: 'Geen specifieke vooropleiding vereist',
    exam: 'Online theorietoets + praktijkbeoordeling op lesdag',
    certification: 'Officieel Wet IKK-erkend certificaat Het Oranje Kruis (2 jaar)',
    inclusions: [
      'Online e-learning Kinder-EHBO',
      'Oefenen op baby- & kinderpoppen',
      'Officieel Wet IKK-certificaat',
      'Lunch, koffie/thee & parkeren'
    ],
    heroBullets: [
      'E-learning + 1 praktijkdag',
      '100% Wet IKK & GGD erkend',
      'Baby- & kinderreanimatie',
      'Vaak vergoed door verzekeraar'
    ],
    suitableForHtml: [
      'In de kinderopvang (KDV, BSO en gastouderopvang) is het volgens de <strong>Wet IKK (Innovatie en Kwaliteit Kinderopvang)</strong> wettelijk verplicht dat er tijdens openingsuren altijd minimaal één medewerker aanwezig is met een geldig en geregistreerd certificaat Eerste Hulp aan Kinderen. Ons Oranje Kruis <strong>EHAK-certificaat</strong> staat op de officiële lijst van de Rijksoverheid en wordt 100% goedgekeurd door de GGD en het Landelijk Register Kinderopvang (LRK).',
      'Ook voor jonge ouders, grootouders en leerkrachten geeft deze training onmisbare rust: veel aanvullende zorgverzekeringen vergoeden de cursus bovendien (deels of volledig). Wil je een heel team op jullie eigen opvanglocatie of school laten certificeren? Vraag dan een <a href="/incompany-training" class="text-brand-primary font-semibold underline hover:text-brand-secondary">Incompany EHAK-training</a> aan of bekijk <a href="/cursussen/aed-reanimatie" class="text-brand-primary font-semibold underline hover:text-brand-secondary">AED / Reanimatie</a>.'
    ],
    learningOutcomes: [
      'Verslikking en ernstige verstikking bij zuigelingen (0–1 jaar) en kinderen direct verhelpen',
      'Baby- en kinderreanimatie (15:2 met 5 initiële beademingen) + kinder-AED correct uitvoeren',
      'Koortsstuipen, pseudokroep, allergische reacties en hersenschudding tijdig herkennen',
      'Juist handelen bij valpartijen, brandwonden, vergiftiging, bloedneus en tandletsel'
    ],
    programIntro: 'Je volgt de theorie over kinderziekten en anatomische verschillen vooraf op je gemak online, zodat we tijdens de praktijkdag volop oefenen op speciale baby- en kinderreanimatiepoppen.',
    programSteps: [
      {
        title: '1. Voorbereiding: Interactieve E-learning (ca. 3 tot 4 uur)',
        description: 'Thuis doorloop je video’s en kennisvragen over veelvoorkomende kinderongevallen, preventie en anatomie van baby’s en kinderen.'
      },
      {
        title: '2. Praktijkdag Kinder-EHBO & PBLS Reanimatie',
        description: 'Op de lesdag oefen je alle levensreddende handelingen stap voor stap onder begeleiding van onze gecertificeerde instructeur:',
        items: [
          'Rugslagen en borst-/buikstoten bij verslikking van baby’s en peuters',
          'Reanimeren op baby- en kindertorso’s en werken met kinderelektroden op de AED',
          'Wondverzorging, verbinden, koelen van brandwonden en omgaan met paniek'
        ]
      },
      {
        title: '3. Officieel Wet IKK Certificaat (Het Oranje Kruis)',
        description: 'Na succesvolle afronding ontvang je het landelijk geregistreerde certificaat Eerste Hulp aan Kinderen (2 jaar geldig voor GGD & LRK).'
      }
    ],
    modules: [
      {
        name: 'Baby- & Kinderreanimatie + AED',
        description: '5 initiële beademingen, 15:2 compressies en gebruik van kinder-AED.'
      },
      {
        name: 'Verslikking & Luchtwegobstructie',
        description: 'Levensreddend handelen bij verstikking bij zuigelingen en kinderen.'
      },
      {
        name: 'Kinderziekten & Acute Klachten',
        description: 'Herkennen van koortsstuipen, pseudokroep, benauwdheid en allergie.'
      },
      {
        name: 'Valpartijen, Brandwonden & Vergiftiging',
        description: 'Hoofdletsel, hersenschudding, hete vloeistoffen, schoonmaakmiddelen en tandletsel.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&q=80&w=800',
    eventFilter: {
      categories: ['EHAK', 'EHBO'],
      titleKeywords: ['ehak', 'kinder']
    }
  },
  {
    slug: 'aed-reanimatie',
    category: 'EHBO',
    categoryTitle: 'EHBO Opleidingen',
    categoryUrl: '/ehbo-cursus',
    title: 'AED & Reanimatie Cursus (NRR)',
    shortTitle: 'AED / Reanimatie',
    tagline: 'Leer binnen één dagdeel levensreddend reanimeren en een AED bedienen binnen de 6-minutenzone',
    price: '€ 95,00',
    duration: '1 dagdeel (3,5 tot 4 uur)',
    spotsText: 'NRR Gecertificeerd',
    languages: ['Nederlands', 'Engels'],
    target: 'Voor medewerkers, sportverenigingen, burgerhulpverleners (HartslagNu) en particulieren die bij een acute hartstilstand zonder twijfel willen kunnen reanimeren.',
    requirements: 'Geen vooropleiding nodig (vanaf 14 jaar)',
    exam: 'Praktijktoets op QCPR-reanimatiepoppen',
    certification: 'Officieel NRR-erkend certificaat BLS & AED (2 jaar)',
    inclusions: [
      'Oefenen op QCPR-poppen & AED’s',
      'NRR-gecertificeerde instructeur',
      'Officieel NRR-certificaat (HartslagNu)',
      'Koffie, thee & gratis parkeren'
    ],
    heroBullets: [
      '1 dagdeel (3,5 – 4 uur)',
      'Officieel NRR-certificaat',
      'Aanmelden bij HartslagNu',
      'Directe QCPR-feedback'
    ],
    suitableForHtml: [
      'Elke week krijgen ruim 300 mensen in Nederland buiten het ziekenhuis een hartstilstand. Start je binnen 6 minuten met reanimeren en sluit je een AED aan, dan verdubbelt de overlevingskans direct. In onze <strong>NRR-gecertificeerde AED & Reanimatiecursus (Basic Life Support)</strong> leer je deze vaardigheden in één krachtig dagdeel beheersen.',
      'Met het behaalde NRR-certificaat kun je je direct registreren als burgerhulpverlener bij <strong>HartslagNu</strong> en bij veel zorgverzekeraars de factuur declareren. Zoek je een bredere opleiding inclusief wondzorg of brandbestrijding? Bekijk dan <a href="/cursussen/ehbo-basis" class="text-brand-primary font-semibold underline hover:text-brand-secondary">EHBO Basis</a> of <a href="/cursussen/bhv-basis" class="text-brand-primary font-semibold underline hover:text-brand-secondary">BHV Basis</a>.'
    ],
    learningOutcomes: [
      'Een circulatiestilstand binnen seconden herkennen en direct 112 laten alarmeren',
      'Borstcompressies op de juiste diepte (5–6 cm) en snelheid (100–120/min) uitvoeren met beademing (30:2)',
      'Elk type en merk AED veilig, snel en zonder aarzeling aansluiten en bedienen',
      'Een bewusteloos slachtoffer met normale ademhaling in de stabiele zijligging leggen en handelen bij verstikking'
    ],
    programIntro: 'In 3,5 tot 4 uur krijg je persoonlijke praktijkbegeleiding in kleine groepen op moderne reanimatiepoppen met realtime digitale kwaliteitsmeting (QCPR).',
    programSteps: [
      {
        title: '1. Herkennen Hartstilstand & Keten van Overleven',
        description: 'Hoe controleer je veilig bewustzijn en ademhaling (niet te verwarren met gasping) en schakel je direct 112 en omstanders in?'
      },
      {
        title: '2. Intensief Oefenen: Borstcompressies, Beademing & AED',
        description: 'Je traint meerdere cycli alleen én in tweetallen met diverse trainings-AED’s, inclusief bijzondere situaties (natte ondergrond, pacemaker, pleisters).'
      },
      {
        title: '3. Verstikking, Stabiele Zijligging & NRR-Certificering',
        description: 'Na het oefenen van de Heimlich-greep en stabiele zijligging ontvang je het officiële NRR Basic Life Support certificaat.'
      }
    ],
    modules: [
      {
        name: 'Herkenning & 112-Alarmering',
        description: 'Snel vaststellen van bewusteloosheid en afwezige normale ademhaling.'
      },
      {
        name: 'Reanimatie (30:2) met QCPR',
        description: 'Effectieve borstcompressies en beademingen met realtime diepte- en tempofeedback.'
      },
      {
        name: 'Veilig Gebruik van de AED',
        description: 'Elektroden plaatsen, veiligheidsprotocol bewaken en schok toedienen.'
      },
      {
        name: 'Stabiele Zijligging & Verstikking',
        description: 'Luchtweg vrijhouden bij bewusteloosheid en rugslagen/buikstoten bij verslikking.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1571772996211-2f02c9727629?auto=format&fit=crop&q=80&w=800',
    eventFilter: {
      categories: ['AED/REANIMATIE', 'REANIMATIE', 'AED'],
      titleKeywords: ['reanimatie', 'aed']
    }
  },

  // ==========================================
  // 3. VCA
  // ==========================================
  {
    slug: 'vca-basis',
    category: 'VCA',
    categoryTitle: 'VCA Opleidingen',
    categoryUrl: '/vca-cursus',
    title: 'VCA Basis (B-VCA)',
    shortTitle: 'VCA Basis',
    tagline: 'Het officiële SSVV veiligheidscertificaat in 1 dag voor uitvoerende vakmensen in bouw en techniek',
    price: '€ 195,00',
    duration: '1 cursusdag + direct examen',
    spotsText: 'Inclusief CBT Examen',
    languages: ['Nederlands', 'Engels'],
    target: 'Voor uitvoerende medewerkers, monteurs, bouwvakkers, installateurs en logistiek personeel die veilig willen werken op VCA-verplichte projectlocaties en in één dag hun diploma willen behalen.',
    requirements: 'Geen specifieke vooropleiding vereist',
    exam: 'Officieel SSVV CBT-examen (40 vragen, 60 min, ≥64,5%)',
    certification: 'Officieel B-VCA diploma + CDR-registratie (10 jaar)',
    inclusions: [
      '1-daagse klassikale training',
      'Lesmateriaal & oefenexamens',
      'Officieel SSVV CBT-examen',
      'CDR-registratie, lunch & parkeren'
    ],
    heroBullets: [
      '1 cursusdag + direct examen',
      'Officieel SSVV & CDR erkend',
      '10 jaar landelijk geldig',
      'Voorleesexamen mogelijk'
    ],
    suitableForHtml: [
      'Werk je als uitvoerend vakman of medewerker in dienstverband op een bouwplaats, in de techniek, industrie, infra of groenvoorziening? Dan vragen opdrachtgevers vrijwel altijd om een geldig <strong>Basisveiligheid VCA (B-VCA)</strong> certificaat. Bij Edusafe volg je overdag een heldere, praktijkgerichte examentraining en leg je aan het einde van de middag direct het officiële SSVV-examen af (ook beschikbaar als gratis voorleesexamen met koptelefoon).',
      'Geef je leiding aan medewerkers op de werkvloer óf werk je als zelfstandige (<strong>ZZP’er</strong>)? Kies dan niet voor VCA Basis, maar voor <a href="/cursussen/vca-vol" class="text-brand-primary font-semibold underline hover:text-brand-secondary">VCA-VOL (Veiligheid voor Operationeel Leidinggevenden)</a>. Heb je zelf al online gestudeerd? Boek dan een <a href="/cursussen/vca-examen" class="text-brand-primary font-semibold underline hover:text-brand-secondary">Los VCA-examen</a>.'
    ],
    learningOutcomes: [
      'Onveilige situaties vooraf herkennen met een Laatste Minuut Risico Analyse (LMRA)',
      'Veilig werken met handgereedschap, machines, elektriciteit en hijsmiddelen',
      'Risico’s van gevaarlijke stoffen, brand- en explosiegevaar en besloten ruimtes beheersen',
      'Correct werken op hoogte (ladders, rolsteigers, hoogwerkers) en de juiste PBM’s toepassen',
      'Met hoge slagingskans slagen voor het officiële SSVV B-VCA examen (minimaal 64,5% score)'
    ],
    programIntro: 'In één overzichtelijke dag (08:30 – 16:00 uur) behandelen onze ervaren veiligheidstrainers alle officiële SSVV-toetstermen met herkenbare praktijkvoorbeelden en proefvragen, direct gevolgd door het CBT-examen.',
    programSteps: [
      {
        title: '1. Ochtendprogramma: Wetgeving, Risico’s, Gevaarlijke Stoffen & Brand',
        description: 'Interactieve uitleg zonder droge wetteksten over jouw rechten en plichten, LMRA, werkvergunningen, etiketten en blusmiddelen.'
      },
      {
        title: '2. Middagprogramma: Werken op Hoogte, Gereedschap, Elektra & Proefexamen',
        description: 'Focus op steigers, ladders, besloten ruimtes, PBM’s en het gezamenlijk oefenen van actuele SSVV-examenvragen.'
      },
      {
        title: '3. Aansluitend Officieel CBT-Examen & Directe Uitslag (15:30 uur)',
        description: 'Een onafhankelijk examenbureau neemt op laptop/tablet het 40-vragen examen af. Je ziet direct je uitslag op het scherm en staat binnen enkele werkdagen in het Centraal Diploma Register (CDR).'
      }
    ],
    modules: [
      {
        name: 'Arbowetgeving, Rechten & LMRA',
        description: 'Verantwoordelijkheden op de werkvloer, werkvergunningen en risicoherkenning.'
      },
      {
        name: 'Gevaarlijke Stoffen, Brand & Explosie',
        description: 'GHS-pictogrammen, grenswaarden, blusmiddelen en explosieve atmosferen (ATEX).'
      },
      {
        name: 'Gereedschap, Machines & Elektriciteit',
        description: 'Veilig gebruik van elektrisch/aangedreven gereedschap, hijsen en tillen.'
      },
      {
        name: 'Werken op Hoogte & Besloten Ruimtes',
        description: 'Veiligheidsregels voor ladders, rolsteigers, hoogwerkers, mangaten en valbeveiliging.'
      },
      {
        name: 'Persoonlijke Beschermingsmiddelen (PBM)',
        description: 'Juiste keuze en onderhoud van gehoor-, oog-, ademhalings- en hoofdbescherming.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800',
    eventFilter: {
      categories: ['VCA'],
      titleKeywords: ['basis', 'vca']
    }
  },
  {
    slug: 'vca-vol',
    category: 'VCA',
    categoryTitle: 'VCA Opleidingen',
    categoryUrl: '/vca-cursus',
    title: 'VCA-VOL (Operationeel Leidinggevenden & ZZP)',
    shortTitle: 'VCA-VOL',
    tagline: 'Het verplichte SSVV veiligheidscertificaat voor leidinggevenden, uitvoerders en ZZP’ers',
    price: '€ 225,00',
    duration: '1 cursusdag + direct examen',
    spotsText: 'Leidinggevenden & ZZP',
    languages: ['Nederlands', 'Engels'],
    target: 'Voor operationeel leidinggevenden, uitvoerders, projectleiders, werkvoorbereiders én ZZP’ers die werkzaamheden uitvoeren voor VCA-gecertificeerde hoofdaannemers.',
    requirements: 'Geen B-VCA voorcertificaat verplicht',
    exam: 'Officieel SSVV VOL-VCA examen (70 vragen, 75 min, ≥64,5%)',
    certification: 'Officieel VOL-VCA diploma + CDR-registratie (10 jaar)',
    inclusions: [
      '1-daagse VOL-VCA examentraining',
      'VOL-VCA lesboek & proefexamens',
      'Officieel SSVV CBT-examen',
      'CDR-registratie, lunch & parkeren'
    ],
    heroBullets: [
      '1 cursusdag + direct examen',
      'Verplicht voor leiding & ZZP',
      '10 jaar geldig in SSVV CDR',
      'Incl. lesboek, examen & lunch'
    ],
    suitableForHtml: [
      'Ben je verantwoordelijk voor de veiligheid van collega’s op een projectlocatie, of word je als <strong>ZZP’er</strong> ingehuurd door een VCA-gecertificeerde opdrachtgever? Dan is <strong>VOL-VCA (Veiligheid voor Operationeel Leidinggevenden)</strong> verplicht. Je hoeft niet eerst VCA Basis te halen: je kunt direct instromen bij VCA-VOL.',
      'Werk je in loondienst zonder leidinggevende taken? Dan volstaat <a href="/cursussen/vca-basis" class="text-brand-primary font-semibold underline hover:text-brand-secondary">VCA Basis (B-VCA)</a>. Bemiddel je uitzendkrachten of gedetacheerden? Kies dan voor <a href="/cursussen/vcu-vil" class="text-brand-primary font-semibold underline hover:text-brand-secondary">VCU-VIL</a>. Wil jouw bedrijf ook VCA* of VCA** bedrijfscertificering behalen? Bekijk onze dienst <a href="/diensten/certificeringen" class="text-brand-primary font-semibold underline hover:text-brand-secondary">Bedrijfscertificeringen (VCA & VCU)</a>.'
    ],
    learningOutcomes: [
      'Wettelijke werkgevers- en leidinggevende verplichtingen vanuit de Arbowet toepassen',
      'Zelfstandig Taak-Risico-Analyses (TRA), werkvergunningen en bedrijfsnoodplannen beoordelen',
      'Medewerkers motiveren tot veilig gedrag via toolboxmeetings en werkplekinspecties',
      'Ongevallen en bijna-ongevallen analyseren en structurele preventiemaatregelen treffen',
      'Slagen voor het 70-vragen SSVV VOL-VCA examen (minimaal 4515 van de 7000 punten / 64,5%)'
    ],
    programIntro: 'Onze ervaren HVK/MVK-docenten trainen je in één gefocuste dag gericht op zowel praktijkleiderschap als de nieuwe vraagvormen (meerkeuze-, matrix- en rangschikvragen) van het officiële VOL-VCA examen.',
    programSteps: [
      {
        title: '1. Ochtend: Wetgeving, RI&E, TRA, Veiligheidsgedrag & Noodplannen',
        description: 'Verdieping in Europese richtlijnen, VCA-bedrijfscertificering, aansprakelijkheid, werkvergunningen en het aansturen op veilig gedrag.'
      },
      {
        title: '2. Middag: Hoog-risico Werkzaamheden, Stoffen & Gerichte Examentraining',
        description: 'Behandeling van ATEX, besloten ruimtes, werken op hoogte, elektriciteit en intensief oefenen met officiële VOL-VCA proefvragen.'
      },
      {
        title: '3. Officieel VOL-VCA Examen (70 vragen, 75 min) & CDR-Registratie',
        description: 'Aansluitend om 15:45 uur maak je het digitale SSVV-examen met directe uitslag en 10-jarige inschrijving in het Centraal Diploma Register.'
      }
    ],
    modules: [
      {
        name: 'Arbowet, Richtlijnen & VCA-systeem',
        description: 'Europese CE-richtlijnen, Arbowet-verplichtingen en VCA*/VCA** structuur.'
      },
      {
        name: 'RI&E, Taak-Risico-Analyse (TRA) & LMRA',
        description: 'Opstellen van TRA’s, afgeven van werkvergunningen en beheersmaatregelen.'
      },
      {
        name: 'Leiderschap, Toolboxen & Inspecties',
        description: 'Aanspreken op onveilig gedrag, houden van toolboxmeetings en ongevallenonderzoek.'
      },
      {
        name: 'Gevaarlijke Stoffen, Brand & ATEX',
        description: 'Grenswaarden, explosieveiligheid, blusmiddelen en noodprocedures.'
      },
      {
        name: 'Arbeidsmiddelen, Hoogte & PBM-beleid',
        description: 'Keuringseisen voor steigers, kranen, elektra, besloten ruimtes en PBM’s.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800',
    eventFilter: {
      categories: ['VCA'],
      titleKeywords: ['vol', 'vca']
    }
  },
  {
    slug: 'vcu-vil',
    category: 'VCA',
    categoryTitle: 'VCA Opleidingen',
    categoryUrl: '/vca-cursus',
    title: 'VCU-VIL (Intercedenten & Leidinggevenden Uitzendbranche)',
    shortTitle: 'VCU-VIL',
    tagline: 'Officieel SSVV veiligheidscertificaat voor intercedenten en consultants in uitzend en detachering',
    price: '€ 225,00',
    duration: '1 cursusdag (of E-learning) + examen',
    spotsText: 'Uitzend & Detachering',
    languages: ['Nederlands', 'Engels'],
    target: 'Voor intercedenten, recruiters, consultants en leidinggevenden van VCU-gecertificeerde uitzend- en detacheringsbureaus die personeel plaatsen bij VCA-opdrachtgevers.',
    requirements: 'Geen specifieke vooropleiding vereist',
    exam: 'Officieel SSVV VIL-VCU examen (70 vragen, 75 min, ≥64,5%)',
    certification: 'Officieel VIL-VCU diploma + CDR-registratie (10 jaar)',
    inclusions: [
      'VIL-VCU lesboek & proefexamens',
      'Praktijkgerichte examentraining',
      'Officieel SSVV VIL-VCU examen',
      'CDR-registratie, lunch & parkeren'
    ],
    heroBullets: [
      '1 cursusdag + direct examen',
      'Verplicht voor VCU-bureaus',
      '10 jaar geldig in SSVV CDR',
      'Incl. lesmateriaal & lunch'
    ],
    suitableForHtml: [
      'Zendt jouw uitzend- of detacheringsbureau technisch, bouwkundig of logistiek personeel uit naar VCA-gecertificeerde bedrijven? Voor een <strong>VCU-bedrijfscertificering</strong> moeten intercedenten en bemiddelaars beschikken over het persoonlijke <strong>VIL-VCU diploma</strong> (Veiligheid voor Intercedenten en Leidinggevenden VCU).',
      'Begeleid je ook het VCU-managementsysteem van jouw bureau? Bekijk dan onze consultancy voor <a href="/diensten/certificeringen" class="text-brand-primary font-semibold underline hover:text-brand-secondary">VCU & VCA Bedrijfscertificering</a>, of boek voor uitzendkrachten <a href="/cursussen/vca-basis" class="text-brand-primary font-semibold underline hover:text-brand-secondary">VCA Basis (B-VCA)</a>.'
    ],
    learningOutcomes: [
      'De wettelijke zorgplichtverdeling tussen uitlener (uitzendbureau) en inlener foutloos toepassen',
      'Bij een aanvraag alle functie-eisen, specifieke werkplekrisico’s en benodigde PBM’s uitvragen',
      'Uitzendkrachten correct voorlichten en hun kwalificaties en VCA-diploma’s verifiëren in het CDR',
      'Ongevallen bij inleners op de juiste wijze registreren, melden en evalueren conform VCU'
    ],
    programIntro: 'Tijdens de 1-daagse VCU-VIL training koppelen we de volledige VOL-VCA veiligheidsstof aan de specifieke wetgeving en praktijkprocedures voor uitzend- en detacheringsorganisaties.',
    programSteps: [
      {
        title: '1. Ketenverantwoordelijkheid (Arbowet & Waadi) en VCU-procedures',
        description: 'Wie is waarvoor aansprakelijk bij terbeschikkingstelling van arbeidskrachten en wat moet vastliggen in het intake- en plaatsingsdossier?'
      },
      {
        title: '2. Operationele Veiligheidskennis & PBM-voorziening',
        description: 'Herkennen van risico’s op bouw- en industrielocaties zodat je de juiste vakkrachten en beschermingsmiddelen koppelt aan elke opdracht.'
      },
      {
        title: '3. Officieel SSVV VIL-VCU Examen (70 vragen) & CDR-Registratie',
        description: 'Aan het eind van de dag leg je direct het officiële digitale VIL-VCU examen af voor het 10 jaar geldige SSVV-diploma.'
      }
    ],
    modules: [
      {
        name: 'Aansprakelijkheid Uitlener vs. Inlener',
        description: 'Wettelijke verdeling van Arbo-zorgplicht, toezicht en Waadi-wetgeving.'
      },
      {
        name: 'Risico-inventarisatie bij Aanvragen',
        description: 'Systematisch uitvragen van werkplekrisico’s, kwalificaties en PBM-afspraken.'
      },
      {
        name: 'Voorlichting & Monitoring Flexkrachten',
        description: 'Instructieplicht voorafgaand aan plaatsing en periodieke veiligheidsevaluatie.'
      },
      {
        name: 'VCU-Managementsysteem & Ongevallen',
        description: 'Meldingsprocedures bij arbeidsongevallen en eisen vanuit VCU-audits.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800',
    eventFilter: {
      categories: ['VCA'],
      titleKeywords: ['vil', 'vcu', 'vca']
    }
  },
  {
    slug: 'vca-examen',
    category: 'VCA',
    categoryTitle: 'VCA Opleidingen',
    categoryUrl: '/vca-cursus',
    title: 'Los VCA-examen (B-VCA, VOL-VCA of VIL-VCU)',
    shortTitle: 'VCA-examen',
    tagline: 'Boek direct een los officieel SSVV VCA-examen met directe uitslag en CDR-registratie',
    price: '€ 95,00',
    duration: '60 tot 75 minuten (alleen examen)',
    spotsText: 'Direct Examen Doen',
    languages: ['Nederlands', 'Engels'],
    target: 'Voor kandidaten die zich via zelfstudie of e-learning hebben voorbereid, een bijna verlopen VCA-diploma willen vernieuwen of snel een herexamen willen afleggen.',
    requirements: 'Geldig legitimatiebewijs (ID, paspoort of rijbewijs)',
    exam: 'Officieel SSVV CBT-beeldschermexamen (≥64,5% cesuur)',
    certification: 'Officieel SSVV VCA-diploma + CDR-registratie (10 jaar)',
    inclusions: [
      'Officieel SSVV CBT-examen',
      'Keuze B-VCA, VOL-VCA of VIL-VCU',
      'Directe uitslag op het scherm',
      'Digitaal diploma & CDR-registratie'
    ],
    heroBullets: [
      '60 – 75 min examenmoment',
      'B-VCA, VOL-VCA of VIL-VCU',
      'Directe uitslag na afloop',
      '10 jaar CDR-registratie'
    ],
    suitableForHtml: [
      'Beheers je de VCA-theorie al vanuit werkervaring, zelfstudie of onze <a href="/e-learning" class="text-brand-primary font-semibold underline hover:text-brand-secondary">VCA E-learning</a>? Met het <strong>Losse VCA-examen</strong> hoef je geen hele cursusdag te volgen, maar schuif je direct aan bij een officieel SSVV-examenmoment (voor Basis-VCA is ook een voorleesexamen met audio beschikbaar).',
      'Wil je liever eerst een volledige dag klassikale examentraining volgen voor maximale slagingszekerheid? Kies dan voor <a href="/cursussen/vca-basis" class="text-brand-primary font-semibold underline hover:text-brand-secondary">VCA Basis (1 dag + examen)</a> of <a href="/cursussen/vca-vol" class="text-brand-primary font-semibold underline hover:text-brand-secondary">VCA-VOL (1 dag + examen)</a>.'
    ],
    learningOutcomes: [
      'Snel en zonder verlet van een hele werkdag je officiële SSVV VCA-certificaat behalen',
      'Direct na het afronden van de laatste vraag je voorlopige examenscore inzien',
      'Binnen enkele werkdagen geregistreerd staan in het landelijke Centraal Diploma Register (CDR)',
      '10 jaar lang aantoonbaar gecertificeerd toegang krijgen tot VCA-verplichte projectlocaties'
    ],
    programIntro: 'Een los VCA-examen bij Edusafe verloopt vlot, rustig en volledig digitaal (Computer Based Testing) onder toezicht van een erkend onafhankelijk VCA-examenbureau.',
    programSteps: [
      {
        title: '1. Keuze Examentype & Aanmelding',
        description: 'Geef bij je aanvraag aan of je opgaat voor B-VCA (40 vragen, 60 min, optioneel voorleesexamen), VOL-VCA (70 vragen, 75 min) of VIL-VCU (70 vragen, 75 min).'
      },
      {
        title: '2. Legitimatiecontrole & Digitaal Examen op Locatie',
        description: 'Zorg dat je 15 minuten voor aanvang aanwezig bent met een geldig legitimatiebewijs. Je maakt het examen op een klaargezette laptop of tablet.'
      },
      {
        title: '3. Directe Score & Registratie in het CDR',
        description: 'Bij minimaal 64,5% van de punten ben je direct geslaagd en ontvang je het digitale VCA-diploma plus inschrijving in het SSVV Centraal Diploma Register.'
      }
    ],
    modules: [
      {
        name: 'Basisveiligheid VCA (B-VCA)',
        description: '40 vragen in 60 minuten (ook als voorleesexamen met koptelefoon te boeken).'
      },
      {
        name: 'VOL-VCA voor Leidinggevenden & ZZP',
        description: '70 vragen in 75 minuten gericht op operationeel leidinggevenden en zelfstandigen.'
      },
      {
        name: 'VIL-VCU voor Intercedenten',
        description: '70 vragen in 75 minuten specifiek voor uitzend- en detacheringsprofessionals.'
      },
      {
        name: 'Directe Uitslag & CDR-bijschrijving',
        description: 'Onmiddellijk resultaat op je scherm en officiële landelijke registratie voor 10 jaar.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800',
    eventFilter: {
      categories: ['VCA']
    }
  },

  // ==========================================
  // 4. TRANSPORT
  // ==========================================
  {
    slug: 'heftruck',
    category: 'Transport',
    categoryTitle: 'Transport & Logistiek',
    categoryUrl: '/heftruck-cursus',
    title: 'Heftruck Certificaat (Basis & Herhaling)',
    shortTitle: 'Heftruck',
    tagline: 'Haal in 1 dag uw officiële Arbo-conform heftruckcertificaat voor veilig en schadevrij transport',
    price: '€ 195,00',
    duration: '1 dag (of 1 dagdeel herhaling)',
    spotsText: 'Arbowet Conform',
    languages: ['Nederlands', 'Engels'],
    target: 'Voor magazijn-, productie- en logistiek medewerkers (beginners én ervaren chauffeurs) die aantoonbaar deskundig, veilig en schadevrij met een vorkheftruck willen werken.',
    requirements: 'Vanaf 16 jr (onder toezicht) of 18 jr (geen rijbewijs B nodig)',
    exam: 'Korte theorietoets + praktijktoets op heftruckparcours',
    certification: 'Officieel Heftruckcertificaat + veiligheidspasje (5 jaar)',
    inclusions: [
      'Theorie & intensieve rijtraining',
      'Theorie- en praktijkexamen',
      'Heftruckcertificaat & pasje (5 jr)',
      'Lunch, koffie/thee & parkeren'
    ],
    heroBullets: [
      '1 dag (of dagdeel herhaling)',
      'Conform Arbobesluit 7.17c',
      'Geen autorijbewijs nodig',
      '5 jaar geldig incl. pasje'
    ],
    suitableForHtml: [
      'Volgens <strong>Artikel 7.17c van het Arbobesluit</strong> is iedere werkgever verplicht aan te tonen dat bestuurders van een vorkheftruck beschikken over specifieke deskundigheid. Met dit <strong>1-daagse Heftruckcertificaat</strong> (voor ervaren chauffeurs ook als compacte herhaling van 1 dagdeel te boeken) voldoe je direct aan de eisen van de Arbeidsinspectie én bedrijfsverzekeraars. Een autorijbewijs is niet nodig.',
      'Werk je in smalle gangpaden of op grote hoogte in magazijnstellingen? Bekijk dan ook ons <a href="/cursussen/reachtruck" class="text-brand-primary font-semibold underline hover:text-brand-secondary">Reachtruck Certificaat</a> of <a href="/cursussen/stapelaar" class="text-brand-primary font-semibold underline hover:text-brand-secondary">Stapelaar & EPT Certificaat</a>. Vanaf enkele deelnemers verzorgen wij deze training ook graag <a href="/incompany-training" class="text-brand-primary font-semibold underline hover:text-brand-secondary">Incompany in uw eigen magazijn</a> op uw eigen heftrucks.'
    ],
    learningOutcomes: [
      'Voor elke dienst zelfstandig een rijklaar- en veiligheidscontrole van de vorkheftruck uitvoeren',
      'Het lastzwaartepunt, het belastingdiagram en de stabiliteitsdriehoek foutloos toepassen zonder kantelgevaar',
      'Nauwkeurig en schadevrij manoeuvreren in krappe gangpaden en bij voetgangersverkeer',
      'Pallets veilig op hoogte in- en uitslaan in stellingen en vrachtwagens laden en lossen'
    ],
    programIntro: 'Geen urenlange theorielessen in een klaslokaal: onze heftruckopleiding in kleine groepen draait vooral om veel rij-uren maken onder directe begeleiding van een ervaren logistiek instructeur.',
    programSteps: [
      {
        title: '1. Praktische Veiligheidstheorie & Lastdiagram',
        description: 'Heldere uitleg over Arbo-regels, dagelijks onderhoud (accu/LPG), kantelgevaar, lastzwaartepunt en zichtbeperking.'
      },
      {
        title: '2. Rijvaardigheidstraining op het Heftruckparcours',
        description: 'Intensief oefenen met slalom, krappe bochten, hellingen, stapelen in hoge stellingen en veilig laden en lossen.'
      },
      {
        title: '3. Korte Toetsing & Heftruckpasje (5 Jaar Geldig)',
        description: 'Na het afronden van de korte theorietoets en praktijkrit ontvang je het officiële Edusafe Heftruckcertificaat en fysieke pasje.'
      }
    ],
    modules: [
      {
        name: 'Rijklaarcontrole & Onderhoud',
        description: 'Dagelijkse inspectie van vorken, kettingen, banden, hydrauliek en accu/gas.'
      },
      {
        name: 'Lastdiagram & Stabiliteit',
        description: 'Bepalen van maximaal hefvermogen, zwaartepunt en voorkomen van kantelen.'
      },
      {
        name: 'Rijtechniek & Manoeuvreren',
        description: 'Beheerst sturen, achteruitrijden bij hoge last en veiligheid rond voetgangers.'
      },
      {
        name: 'Stellingen Stapelen & Laden/Lossen',
        description: 'Schadevrij pallets plaatsen op hoogte en werken bij laaddocks en trailers.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800',
    eventFilter: {
      categories: ['HEFTRUCK', 'TRANSPORT'],
      titleKeywords: ['heftruck']
    }
  },
  {
    slug: 'reachtruck',
    category: 'Transport',
    categoryTitle: 'Transport & Logistiek',
    categoryUrl: '/heftruck-cursus',
    title: 'Reachtruck Certificaat',
    shortTitle: 'Reachtruck',
    tagline: 'Gespecialiseerde praktijkopleiding voor veilig en nauwkeurig werken in hoogbouwmagazijnen',
    price: '€ 215,00',
    duration: '1 praktijkdag (of dagdeel herhaling)',
    spotsText: 'Hoogbouw & Precisie',
    languages: ['Nederlands', 'Engels'],
    target: 'Voor logistieke medewerkers en orderpickers die met een reachtruck manoeuvreren in smalle gangpaden en pallets op grote hoogte in- en uitslaan.',
    requirements: 'Vanaf 16 jr (onder toezicht) of 18 jr zelfstandig',
    exam: 'Theorietoets + precisie-praktijktoets in hoogbouw',
    certification: 'Officieel Reachtruckcertificaat + veiligheidspasje (5 jaar)',
    inclusions: [
      'Praktijk op moderne reachtrucks',
      'Theorie- en praktijkexamen',
      'Reachtruckcertificaat & pasje (5 jr)',
      'Lunch, koffie/thee & parkeren'
    ],
    heroBullets: [
      '1 dag (of dagdeel herhaling)',
      'Focus op hoogbouw & precisie',
      'Conform Arbobesluit 7.17c',
      '5 jaar geldig incl. pasje'
    ],
    suitableForHtml: [
      'Een reachtruck reageert compleet anders dan een gewone vorkheftruck door de dwarszitpositie, tegengestelde besturing en het uitschuiven van de mast op grote hoogte. Met het <strong>Reachtruck Certificaat</strong> leer je schadevrij en veilig werken in smalle magazijngangen conform <strong>Arbobesluit Art. 7.17c</strong>.',
      'Rijden jouw medewerkers zowel op een heftruck als een reachtruck? Vraag dan via onze adviesstraat naar een gecombineerde <a href="/cursussen/heftruck" class="text-brand-primary font-semibold underline hover:text-brand-secondary">Heftruck & Reachtruck</a> training of een <a href="/incompany-training" class="text-brand-primary font-semibold underline hover:text-brand-secondary">Incompany training in jullie eigen magazijn</a>.'
    ],
    learningOutcomes: [
      'Volledig vertrouwd sturen vanuit de zijzitpositie met nauwkeurig gevoel voor de draaicirkel',
      'De schuifmast (reachen), neigfunctie en sideshift vloeiend bedienen zonder stellingschade',
      'Zware lasten stabiel op grote hoogte plaatsen en uithalen met behoud van machinebalans',
      'Aanrijdings- en vallende-ladingrisico’s in drukke distributiecentra voorkomen'
    ],
    programIntro: 'Tijdens deze praktijkgerichte cursusdag oefen je zowel de unieke stuurkarakteristiek van de reachtruck als het millimeter-nauwkeurig werken in hoge palletstellingen.',
    programSteps: [
      {
        title: '1. Theorie Hoogbouwveiligheid & Reachtrucktechniek',
        description: 'Inzicht in restcapaciteit op grote hefhoogte, mastdoorbuiging, accuveiligheid en stellinginspectie.'
      },
      {
        title: '2. Praktijktraining Smalle Gangen & Hoogbouwstellingen',
        description: 'Stapsgewijs oefenen met tegengesteld sturen, reachen, neigen en trillingsvrij wegzetten van pallets op hoogte.'
      },
      {
        title: '3. Examenrit & Reachtruckcertificaat (5 Jaar Geldig)',
        description: 'Je sluit de dag af met een korte theorie- en praktijkproef en ontvangt het officiële certificaat + pasje.'
      }
    ],
    modules: [
      {
        name: 'Besturing & Zijzitpositie',
        description: 'Beheersen van de tegengestelde stuurinrichting en het zwenkgedrag.'
      },
      {
        name: 'Mastbediening, Reachen & Sideshift',
        description: 'Nauwkeurig uitschuiven van de mast, vorken neigen en fijnpositioneren.'
      },
      {
        name: 'Werken op Grote Hoogte',
        description: 'Restdraagvermogen aflezen en veilig pallets plaatsen zonder stellingschade.'
      },
      {
        name: 'Magazijnveiligheid & Schadebeperking',
        description: 'Snelheidsbeheersing op kruisingen, zichtlijnen en omgaan met voetgangers.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=800',
    eventFilter: {
      categories: ['HEFTRUCK', 'TRANSPORT'],
      titleKeywords: ['reachtruck', 'heftruck']
    }
  },
  {
    slug: 'hoogwerker',
    category: 'Transport',
    categoryTitle: 'Transport & Logistiek',
    categoryUrl: '/heftruck-cursus',
    title: 'Hoogwerker Certificaat (1A, 1B, 3A & 3B)',
    shortTitle: 'Hoogwerker',
    tagline: 'Veilig en gecertificeerd werken op hoogte met schaar-, telescoop- en knikarmhoogwerkers',
    price: '€ 225,00',
    duration: '1 dag (theorie + praktijk)',
    spotsText: 'Veilig Werken op Hoogte',
    languages: ['Nederlands', 'Engels'],
    target: 'Voor monteurs, installateurs, schilders, gevelonderhouders, groenmedewerkers en facilitair personeel die veilig en wettelijk aantoonbaar met mobiele hoogwerkers werken.',
    requirements: 'Minimaal 18 jaar en vrij van hoogtevrees',
    exam: 'Theorietoets + praktijktoets (incl. nooddaalsysteem)',
    certification: 'Officieel Hoogwerkercertificaat + pasje (5 jaar)',
    inclusions: [
      'Praktijk op diverse hoogwerkers',
      'Training harnas & valbeveiliging',
      'Hoogwerkercertificaat & pasje (5 jr)',
      'Lunch, koffie/thee & parkeren'
    ],
    heroBullets: [
      '1 cursusdag + direct examen',
      'Schaar-, knik- & telescoop',
      'Incl. valbeveiliging & nooddaal',
      '5 jaar geldig conform Arbowet'
    ],
    suitableForHtml: [
      'Werken op hoogte brengt serieuze risico’s met zich mee, zoals kantelen, beknelling of het katapult-effect bij zelfrijdende giekhoogwerkers. Op grond van de Arbowet (<strong>Arbobesluit Art. 7.17c</strong>) en VCA-richtlijnen is aantoonbare instructie voor bedieners van hoogwerkers vanaf 18 jaar verplicht. Onze <strong>1-daagse Hoogwerkercursus</strong> behandelt de gangbare categorieën (1A, 1B, 3A en 3B).',
      'Werk je op bouw- of industrielocaties waar ook een persoonlijk VCA-diploma vereist is? Combineer of bekijk dan ook <a href="/cursussen/vca-basis" class="text-brand-primary font-semibold underline hover:text-brand-secondary">VCA Basis (B-VCA)</a> of laat jullie eigen hoogwerkers direct keuren via <a href="/diensten/keuringen" class="text-brand-primary font-semibold underline hover:text-brand-secondary">Keuringen & Inspecties</a>.'
    ],
    learningOutcomes: [
      'Het juiste type hoogwerker (1A statisch verticaal, 1B statisch giek, 3A rijdend schaar, 3B rijdend giek) selecteren',
      'Draagkracht van de ondergrond, stempelplaten, maximale hellingshoek en windkracht (max. 6 Bft) beoordelen',
      'Een harnasgordel met korte verbindingslijn correct aanlijnen aan het ankerpunt in de werkbak',
      'Bij storing of calamiteit vanaf de grond veilig het nooddaalsysteem bedienen'
    ],
    programIntro: 'In één complete trainingsdag combineer je essentiële veiligheidskennis over stabiliteit en valbeveiliging met intensief praktisch bedienen en manoeuvreren op hoogte.',
    programSteps: [
      {
        title: '1. Theorie: Categorieën, Ondergrond, Windbelasting & Valbeveiliging',
        description: 'Heldere instructie over wetgeving, kantel- en beknellingsgevaar, bovengrondse leidingen en verplicht gebruik van valbeveiliging.'
      },
      {
        title: '2. Praktijk: Voorinspectie, Stempelen, Manoeuvreren & Nooddaalprocedure',
        description: 'Zelf uitvoeren van de rijklaarcontrole, opstellen, rijden en positioneren van de werkbak op hoogte én testen van de noodbediening.'
      },
      {
        title: '3. Toetsing & Uitreiking Hoogwerkercertificaat (5 Jaar Geldig)',
        description: 'Na het behalen van de theorie- en praktijkbeoordeling ontvang je het 5 jaar geldige Edusafe Hoogwerkercertificaat en pasje.'
      }
    ],
    modules: [
      {
        name: 'Categorieën Hoogwerkers (1A/1B/3A/3B)',
        description: 'Eigenschappen en inzetbereik van schaar-, telescoop-, knikarm- en aanhangerhoogwerkers.'
      },
      {
        name: 'Opstellen, Stempelen & Windkracht',
        description: 'Beoordelen van bodemdruk, rijplaten, helling en maximale windsnelheid.'
      },
      {
        name: 'Inspectie & Nooddaalsysteem',
        description: 'Dagelijkse veiligheidscheck vooraf en veilig laten zakken bij uitval.'
      },
      {
        name: 'Persoonlijke Valbeveiliging (PBM)',
        description: 'Correct aantrekken en kort aanlijnen van het veiligheidsharnas tegen uitwerpen.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800',
    eventFilter: {
      categories: ['HEFTRUCK', 'TRANSPORT'],
      titleKeywords: ['hoogwerker', 'heftruck']
    }
  },
  {
    slug: 'stapelaar',
    category: 'Transport',
    categoryTitle: 'Transport & Logistiek',
    categoryUrl: '/heftruck-cursus',
    title: 'Stapelaar & Elektrische Pallettruck (EPT)',
    shortTitle: 'Stapelaar & EPT',
    tagline: 'Compacte praktijktraining van 1 dagdeel voor veilig werken met stapelaars en elektrische pompwagens',
    price: '€ 145,00',
    duration: '1 dagdeel (4 uur)',
    spotsText: 'Magazijn & Distributie',
    languages: ['Nederlands', 'Engels'],
    target: 'Voor magazijnmedewerkers, orderpickers, winkelpersoneel en vrachtwagenchauffeurs die dagelijks werken met een meeloop-/meerijdstapelaar of elektrische pallettruck (EPT).',
    requirements: 'Vanaf 16 jaar (geen vooropleiding of rijbewijs vereist)',
    exam: 'Praktische rij- en veiligheidstoets',
    certification: 'Officieel Certificaat Stapelaar & EPT + pasje (5 jaar)',
    inclusions: [
      'Praktijk op stapelaar & EPT',
      'Instructie acculaden & veiligheid',
      'Certificaat & pasje (5 jr geldig)',
      'Koffie, thee & gratis parkeren'
    ],
    heroBullets: [
      '1 dagdeel (4 uur)',
      'Stapelaar én EPT behandeld',
      'Conform Arbobesluit 7.17c',
      '5 jaar geldig incl. pasje'
    ],
    suitableForHtml: [
      'Veel bedrijfsongevallen in magazijnen en winkels gebeuren niet met zware heftrucks, maar door voet- en enkelbeknelling bij elektrische pompwagens (<strong>EPT</strong>) en meeloopstapelaars. Omdat ook deze machines een eigen aandrijving hebben, vereist <strong>Arbobesluit Art. 7.17c</strong> aantoonbare instructie. In één efficiënt dagdeel van 4 uur certificeren wij je medewerkers.',
      'Werken medewerkers ook met een volwaardige vorkheftruck? Bekijk dan ons <a href="/cursussen/heftruck" class="text-brand-primary font-semibold underline hover:text-brand-secondary">Heftruck Certificaat</a> of plan een voordelige <a href="/incompany-training" class="text-brand-primary font-semibold underline hover:text-brand-secondary">Incompany magazijntraining</a> voor meerdere collega’s tegelijk.'
    ],
    learningOutcomes: [
      'Beknellingsongevallen voorkomen door juiste looppositie en gebruik van de buik-/noodknop',
      'Beheerst manoeuvreren in krappe winkel- of magazijngangen en op hydraulische laadkleppen',
      'Pallets veilig op hoogte in- en uitstapelen met inachtneming van het draagvermogen',
      'Tractiebatterijen veilig opladen en dagelijkse gebreken tijdig signaleren'
    ],
    programIntro: 'In een kort en praktijkgericht dagdeel (4 uur) leren zowel nieuwe medewerkers als ervaren orderpickers veilig, ergonomisch en schadevrij werken met EPT en stapelaar.',
    programSteps: [
      {
        title: '1. Korte Veiligheidsinstructie & Acculaden',
        description: 'Uitleg over rijklaarcontrole, knelgevaar voor voeten/enkels, werking van de buikknop en veilig batterijonderhoud.'
      },
      {
        title: '2. Praktijkoefeningen Manoeuvreren, Laadklep & Stellingen',
        description: 'Zelf rijden met meeloop- en meerijdmachines, bochtentechniek, blokstapeling en veilig pallets wegzetten op hoogte.'
      },
      {
        title: '3. Praktijktoets & Pasje (5 Jaar Geldig)',
        description: 'Direct na succesvolle afronding ontvangt de deelnemer het 5 jaar geldige Certificaat Stapelaar & EPT + pasje.'
      }
    ],
    modules: [
      {
        name: 'Inspectie, Acculaden & Buikknop',
        description: 'Controle voor gebruik, veilig laden van accu’s en testen van noodstopsystemen.'
      },
      {
        name: 'Beknellingspreventie & Looppositie',
        description: 'Veilig meelopen naast de dissel en beschermen van voeten en omstanders.'
      },
      {
        name: 'Manoeuvreren & Laadkleppen',
        description: 'Schadevrij werken in smalle gangen, vrachtwagentrailers en op laaddocks.'
      },
      {
        name: 'Heffen & Stapelen op Hoogte',
        description: 'Stabiel stapelen van pallets in stellingen en beheersen van het zwaartepunt.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&q=80&w=800',
    eventFilter: {
      categories: ['HEFTRUCK', 'TRANSPORT'],
      titleKeywords: ['stapelaar', 'ept', 'heftruck']
    }
  },

  // ==========================================
  // 5. OFFSHORE
  // ==========================================
  {
    slug: 'bosiet',
    category: 'Offshore',
    categoryTitle: 'Offshore Opleidingen',
    categoryUrl: '/offshore-cursus',
    title: 'BOSIET Training (OPITO incl. HUET & CA-EBS)',
    shortTitle: 'BOSIET',
    tagline: 'De verplichte 3-daagse OPITO basistraining voor veilig werken en reizen naar offshore installaties',
    price: '€ 925,00',
    duration: '3 dagen (OPITO gecertificeerd)',
    spotsText: 'OPITO Standaard',
    languages: ['Nederlands', 'Engels'],
    target: 'Voor technici, engineers en maritiem personeel in de offshore energie-, olie- en gassector die per helikopter of schip naar een offshore platform afreizen.',
    requirements: 'Geldige offshore medische keuring (OEUK / NOGEPA)',
    exam: 'Praktijkdemonstratie conform OPITO-standaard',
    certification: 'Officieel OPITO BOSIET + CA-EBS certificaat in Vantage (4 jaar)',
    inclusions: [
      '3-daagse training incl. HUET & CA-EBS',
      'Gebruik overlevingspak & ademlucht',
      'OPITO-certificaat & Vantage-registratie',
      'Warme lunch & consumpties (3 dagen)'
    ],
    heroBullets: [
      '3-daagse OPITO opleiding',
      'Incl. HUET & CA-EBS module',
      '4 jaar geldig in Vantage',
      'Wereldwijd offshore erkend'
    ],
    suitableForHtml: [
      'Ga je voor het eerst werken op een offshore olie- of gasplatform of maritieme energie-installatie op de Noordzee of wereldwijd? Dan is het internationaal erkende <strong>OPITO BOSIET certificaat (inclusief HUET en CA-EBS noodademlucht)</strong> verplicht voordat je aan boord van een helikopter of offshore installatie mag stappen. Let op: voor deelname aan de onderwateroefeningen heb je een geldige offshore medische keuring (OEUK / NOGEPA) nodig.',
      'Heb je al een geldig BOSIET-certificaat dat binnenkort na 4 jaar verloopt? Boek dan de 1-daagse herhalingstraining (FOET) via onze pagina <a href="/cursussen/opito" class="text-brand-primary font-semibold underline hover:text-brand-secondary">OPITO Offshore Trainingen (FOET, HUET & CA-EBS)</a>. Zoek je ook offshore veiligheidsmiddelen of bemanning? Bekijk onze <a href="/offshore-cursus" class="text-brand-primary font-semibold underline hover:text-brand-secondary">Offshore Totaaloplossing</a>.'
    ],
    learningOutcomes: [
      'Specifieke veiligheidsregimes, werkvergunningen en risico’s op offshore installaties naleven',
      'Veilig ontsnappen uit een te water geraakte, gekantelde helikopter (HUET) met behulp van CA-EBS ademlucht',
      'Overlevingstechnieken op zee toepassen met overlevingspak, reddingsvest en reddingsvlot (TEMPSC)',
      'Beginnende branden bestrijden, rookkappen gebruiken voor zelfredding en eerste hulp verlenen offshore'
    ],
    programIntro: 'Gedurende 3 intensieve dagen wissel je gerichte veiligheidstheorie af met realistische praktijkoefeningen in het maritieme trainingsbad, de helikoptersimulator en het brandoefencentrum.',
    programSteps: [
      {
        title: '1. Dag 1: Offshore Safety Induction & Fire Fighting / Self Rescue',
        description: 'Offshore wetgeving, gevaren op platforms, blussen van kleine branden, vluchten uit verrookte accommodaties met vluchtmasker en offshore First Aid.'
      },
      {
        title: '2. Dag 2: Sea Survival & TEMPSC Reddingsboot / Reddingsvlotten',
        description: 'Te water gaan in een immersion suit, individuele en groepsoverlevingstechnieken (HELP/Huddle) en enteren van een reddingsvlot.'
      },
      {
        title: '3. Dag 3: HUET (Helicopter Underwater Escape) met CA-EBS & Vantage Registratie',
        description: 'Stapsgewijze noodontsnappingen uit de onderwater-helikoptersimulator met perslucht-noodademhalingssysteem (CA-EBS), afgesloten met OPITO Vantage-registratie.'
      }
    ],
    modules: [
      {
        name: 'Offshore Safety Induction',
        description: 'Leef- en veiligheidsregels, werkvergunningen (PTW) en rapportage aan boord.'
      },
      {
        name: 'HUET & CA-EBS Noodademlucht',
        description: 'Gecontroleerd ontsnappen uit een gekapseisde helikopter onder water met CA-EBS.'
      },
      {
        name: 'Sea Survival & Reddingsmiddelen',
        description: 'Overleven op open zee met overlevingspak, reddingsvest, TEMPSC en vlot.'
      },
      {
        name: 'Fire Fighting, Self Rescue & First Aid',
        description: 'Brandbestrijding, ontsnappen met rookkap (smoke hood) en levensreddende eerste hulp.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=800',
    eventFilter: {
      categories: ['OFFSHORE'],
      titleKeywords: ['bosiet', 'offshore']
    }
  },
  {
    slug: 'opito',
    category: 'Offshore',
    categoryTitle: 'Offshore Opleidingen',
    categoryUrl: '/offshore-cursus',
    title: 'OPITO Offshore Trainingen (FOET, HUET & CA-EBS)',
    shortTitle: 'OPITO (FOET / HUET)',
    tagline: 'Internationaal erkende OPITO herhalings- (FOET) en vervolgmodules voor ervaren offshore professionals',
    price: 'Op aanvraag',
    duration: '1 dag (FOET / HUET) tot 3 dagen',
    spotsText: 'Wereldwijd Erkend',
    languages: ['Nederlands', 'Engels'],
    target: 'Voor ervaren offshore medewerkers die vóór de vervaldatum hun 4-jarige OPITO-certificaat willen verlengen via de 1-daagse FOET, of losse modules zoals HUET met CA-EBS of MIST nodig hebben.',
    requirements: 'Geldig BOSIET/FOET certificaat + medische keuring',
    exam: 'Praktische beoordeling conform actuele OPITO-norm',
    certification: 'Officieel OPITO-certificaat + Vantage-registratie (4 jaar)',
    inclusions: [
      'Geaccrediteerde simulator & badtraining',
      'Alle duik-, ademlucht- & PBM-middelen',
      'OPITO-certificaat & Vantage-update',
      'Warme lunch & alle faciliteiten'
    ],
    heroBullets: [
      '1-daagse FOET herhaling',
      'Losse HUET + CA-EBS of MIST',
      'Directe Vantage-registratie',
      '4 jaar wereldwijd geldig'
    ],
    suitableForHtml: [
      'Verloopt jouw OPITO BOSIET of eerdere FOET binnenkort? Zolang je huidige certificaat nog geldig is op de cursusdag, hoef je niet opnieuw de 3-daagse basisopleiding te volgen maar volstaat de <strong>1-daagse FOET (Further Offshore Emergency Training) inclusief CA-EBS</strong> om weer 4 jaar wereldwijd gecertificeerd te zijn in de Vantage-database.',
      'Is je vorige certificaat al verlopen of ga je voor het eerst offshore? Kies dan voor onze 3-daagse <a href="/cursussen/bosiet" class="text-brand-primary font-semibold underline hover:text-brand-secondary">OPITO BOSIET Training</a>. Wij stellen ook maatwerkcombinaties (zoals HUET + CA-EBS, MIST, NOGEPA en GWO voor offshore wind) samen voor complete crews.'
    ],
    learningOutcomes: [
      'Jouw OPITO offshore kwalificatie in 1 dag met 4 jaar verlengen in het centrale Vantage-register',
      'Onderwaterontsnappingen (HUET) en het inschakelen van CA-EBS noodademlucht onder realistische condities opfrissen',
      'Zelfredding bij rookontwikkeling, actieve brandbestrijding en offshore eerste hulp scherp houden',
      'Volledig voldoen aan de nieuwste eisen van Noordzee- en internationale platformoperators'
    ],
    programIntro: 'Afhankelijk van de benodigde module (zoals de 1-daagse FOET herhaling of een losse HUET met CA-EBS) plannen wij jouw training snel en efficiënt in op een geaccrediteerde trainingslocatie.',
    programSteps: [
      {
        title: '1. Controle Vantage-geldigheid & Modulekeuze',
        description: 'Bij je aanvraag controleren we je huidige OPITO/Vantage-vervaldatum en offshore medische keuring zodat je direct voor de juiste module staat ingepland.'
      },
      {
        title: '2. Intensieve Praktijkdag: HUET + CA-EBS, Sea Survival & Fire/Self-Rescue',
        description: '100% praktijkgerichte herhaling van helikopterontsnappingen onder water, gebruik van noodademlucht, reddingsvlotten en brandbestrijding.'
      },
      {
        title: '3. Officiële OPITO Sign-off & 4 Jaar Vantage-verlenging',
        description: 'Na afronding wordt je nieuwe certificaat direct bijgeschreven in de wereldwijde OPITO Vantage-database.'
      }
    ],
    modules: [
      {
        name: 'FOET (1-daagse OPITO Herhaling)',
        description: 'Verlenging van uw geldige BOSIET/FOET met 4 jaar inclusief HUET, Sea Survival en Fire.'
      },
      {
        name: 'HUET inclusief CA-EBS',
        description: 'Losse module Helicopter Underwater Escape Training met perslucht-noodsysteem.'
      },
      {
        name: 'MIST (Minimum Industry Safety Training)',
        description: 'Aanvullende veiligheidsmodule vereist voor werken in o.a. de Britse offshore sector (UKCS).'
      },
      {
        name: 'GWO & NOGEPA Combinaties',
        description: 'Maatwerktrajecten voor medewerkers die zowel op olie/gas als offshore windparken werken.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&q=80&w=800',
    eventFilter: {
      categories: ['OFFSHORE'],
      titleKeywords: ['opito', 'foet', 'huet', 'offshore']
    }
  }
];

export const servicePillars: ServicePillar[] = [
  {
    slug: 'keuringen',
    title: 'Keuringen & Inspecties',
    shortTitle: 'Keuringen',
    tagline: 'Periodieke veiligheidskeuringen conform NEN-normen en SCIOS Scope 8, 10 en 12',
    description: 'Voldoe aan de Arbowet en de eisen van uw brandverzekeraar met onze onafhankelijke keuringen van arbeidsmiddelen, elektrische installaties, klimmaterieel, noodverlichting en rookmelders.',
    icon: 'fa-solid fa-clipboard-check',
    badge: 'NEN & SCIOS Gecertificeerd',
    url: '/diensten/keuringen',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=1200',
    items: [
      {
        name: 'Elektrische arbeidsmiddelen (NEN 3140)',
        norm: 'NEN 3140',
        description: 'Visuele en meettechnische inspectie van handgereedschap, machines, verlengkabels en verdeelkasten op locatie inclusief keuringsstickers en digitaal certificaat.'
      },
      {
        name: 'Ladders, trappen en rolsteigers (NEN 2484 / EN 1004)',
        norm: 'NEN 2484 / EN 1004',
        description: 'Jaarlijkse verplichte keuring van draagbaar klimmaterieel en rolsteigeronderdelen voor veilig werken op hoogte.'
      },
      {
        name: 'SCIOS Scope 8, Scope 10 en Scope 12 inspecties',
        norm: 'Scope 8 / 10 / 12',
        description: 'Arbo-veiligheidsinspectie van vaste elektrische installaties (Scope 8), brandrisico-inspectie volgens NTA 8220 voor verzekeraars (Scope 10) en keuring van zonnestroominstallaties (Scope 12).'
      },
      {
        name: 'Nood- en vluchtwegverlichting',
        norm: 'NEN-EN 1838 / ISSO 79',
        description: 'Jaarlijks onderhoud, accuduurtest en vervanging van noodverlichtingsarmaturen en vluchtwegwijzers.'
      },
      {
        name: 'Rookmelders & brandmeldinstallaties',
        norm: 'NEN 2555 / NEN 2535',
        description: 'Periodieke controle, reiniging en functietest van rookmelders en optische/thermische melders.'
      }
    ],
    benefits: [
      'Alle keuringen op één moment gepland zonder bedrijfsstilstand',
      'Officiële keuringsstickers + digitaal inspectielogboek voor inspectie en verzekeraar',
      'Automatische herinnering vóór het verlopen van de keuringstermijn',
      'Directe kleine reparaties op locatie mogelijk'
    ]
  },
  {
    slug: 'certificeringen',
    title: 'Bedrijfscertificeringen (VCA & VCU)',
    shortTitle: 'Certificeringen',
    tagline: 'Volledige begeleiding naar VCA*, VCA**, VCA*** en VCU bedrijfscertificering',
    description: 'Wilt u met uw organisatie aantoonbaar veilig werken of meedingen naar grote aanbestedingen? Onze veiligheidskundigen begeleiden uw bedrijf van A tot Z bij het behalen en behouden van uw VCA- of VCU-bedrijfscertificaat.',
    icon: 'fa-solid fa-award',
    badge: 'VCA* / VCA** / VCA*** / VCU',
    url: '/diensten/certificeringen',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1200',
    items: [
      {
        name: 'VCA* (VCA Één Ster)',
        norm: 'VCA*',
        description: 'Bedrijfscertificering gericht op de directe beheersing van veiligheid op de werkvloer. Ideaal voor onderaannemers (tot ca. 35 medewerkers) die zelf geen onderaannemers inschakelen.'
      },
      {
        name: 'VCA** (VCA Twee Sterren)',
        norm: 'VCA**',
        description: 'Uitgebreide certificering voor hoofdaannemers en grotere bedrijven (>35 medewerkers) inclusief veiligheidsstructuur, beleid en ketenbeheer.'
      },
      {
        name: 'VCA*** / VCA Petrochemie',
        norm: 'VCA***',
        description: 'Het hoogste niveau van VCA-bedrijfscertificering voor organisaties die complexe werkzaamheden uitvoeren in de (petro)chemie en zware industrie.'
      },
      {
        name: 'VCU Certificering (Uitzend- en detacheringsbureaus)',
        norm: 'VCU',
        description: 'Specifieke bedrijfscertificering (Veiligheid en Gezondheid Checklist Uitzendorganisaties) voor bureaus die personeel uitzenden naar VCA-gecertificeerde opdrachtgevers.'
      }
    ],
    benefits: [
      'Volledig op maat geschreven VCA/VCU-handboek zonder onnodige papierwinkel',
      'Begeleiding bij werkplekinspecties, toolboxmeetings en interne audits',
      'Aanwezigheid en ondersteuning tijdens de externe certificeringsaudit',
      '100% ontzorging door geregistreerde HVK/MVK veiligheidskundigen'
    ]
  },
  {
    slug: 'vergunningen',
    title: 'Vergunningen & Kwaliteitsmanagement',
    shortTitle: 'Vergunningen',
    tagline: 'Advies en aanvraag voor Brandveilig gebruik (BBL), ISO 9001 en Omgevingsvergunningen',
    description: 'Wet- en regelgeving rondom gebouwen en bedrijfsvoering is complex. Edusafe ondersteunt u bij gebruiksmeldingen, omgevingsvergunningen volgens het Besluit bouwwerken leefomgeving (BBL) en ISO 9001 certificering.',
    icon: 'fa-solid fa-file-shield',
    badge: 'BBL / ISO 9001 / Omgeving',
    url: '/diensten/vergunningen',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1200',
    items: [
      {
        name: 'Brandveilig gebruik (Besluit bouwwerken leefomgeving - BBL)',
        norm: 'BBL (v/h Bouwbesluit)',
        description: 'Toetsing, tekenwerk en het verzorgen van de verplichte gebruiksmelding of vergunningaanvraag voor brandveilig gebruik van uw pand bij het Omgevingsloket.'
      },
      {
        name: 'ISO 9001 Kwaliteitsmanagement',
        norm: 'ISO 9001',
        description: 'Praktische opzet, implementatie en interne audits voor het internationaal erkende ISO 9001 kwaliteitsmanagementsysteem — eventueel gecombineerd met VCA.'
      },
      {
        name: 'Omgevingsvergunning begeleiding',
        norm: 'Omgevingswet',
        description: 'Volledige ondersteuning bij het aanvragen van omgevingsvergunningen voor verbouw, functiewijziging, brandcompartimentering of milieu-activiteiten.'
      }
    ],
    benefits: [
      'Actuele kennis van de nieuwe Omgevingswet en het BBL',
      'Direct contact met gemeente, omgevingsdienst en veiligheidsregio/brandweer',
      'Praktische vertaalslag zonder onleesbare juridische rapporten',
      'Combineerbaar met vluchtwegplattegronden en RI&E'
    ]
  },
  {
    slug: 'vluchtwegplattegronden',
    title: 'Vluchtwegplattegronden (NEN 1414)',
    shortTitle: 'Vluchtwegplattegronden (NEN 1414)',
    tagline: 'Professionele ontruimingsplattegronden conform NEN 1414 en NEN-EN-ISO 7010',
    description: 'Heldere en wettelijk verplichte ontruimingsplattegronden voor uw pand. Wij verzorgen de opname op locatie, het digitale tekenwerk én de montage in luxe aluminium wissellijsten.',
    icon: 'fa-solid fa-map-location-dot',
    badge: 'NEN 1414 & ISO 7010',
    url: '/ontruimingsplattegronden',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1200',
    items: [
      {
        name: 'Opname en inmeten op locatie',
        norm: 'NEN 1414',
        description: 'Onze tekenaars brengen alle vluchtroutes, blusmiddelen, handmelders, EHBO-posten, AED’s en verzamelplaatsen ter plaatse in kaart.'
      },
      {
        name: 'Digitaal ontwerp conform NEN 1414 & ISO 7010',
        norm: 'ISO 7010',
        description: 'Strakke oriëntatietekeningen met de nieuwste internationale veiligheidspictogrammen en uw eigen bedrijfslogo.'
      },
      {
        name: 'Levering & montage in A3/A4 kliklijsten of plexiglas',
        norm: 'Compleet gemonteerd',
        description: 'Vakkundige productie en montage op de juiste zichtlocaties in uw gebouw.'
      }
    ],
    benefits: [
      '100% goedgekeurd door brandweer en gemeentelijke toezichthouders',
      'Ook zonder bestaande bouwtekeningen snel door ons in te meten',
      'Inclusief digitale bestanden voor uw BHV- en ontruimingsplan',
      'Snelle oplevering door heel Nederland'
    ]
  },
  {
    slug: 'rie',
    title: 'RI&E (Risico-Inventarisatie & Evaluatie)',
    shortTitle: 'RI&E',
    tagline: 'Wettelijk verplichte Risico-Inventarisatie & Evaluatie inclusief Plan van Aanpak',
    description: 'Elke werkgever met personeel is volgens de Arbowet verplicht een actuele RI&E te hebben. Edusafe brengt alle bedrijfsrisico’s helder in kaart en stelt een praktisch Plan van Aanpak op, inclusief verplichte toetsing door een gecertificeerde kerndeskundige.',
    icon: 'fa-solid fa-list-check',
    badge: 'Arbowet Verplicht',
    url: '/rie-audit',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1200',
    items: [
      {
        name: 'Volledige bedrijfsopname & inventarisatie',
        norm: 'Arbowet Art. 5',
        description: 'Rondgang over de werkvloer en interviews met medewerkers om fysieke, chemische en psychosociale risico’s in kaart te brengen.'
      },
      {
        name: 'Praktisch Plan van Aanpak (PvA)',
        norm: 'Plan van Aanpak',
        description: 'Geprioriteerd actieplan met concrete maatregelen, verantwoordelijken en termijnen waar u direct mee aan de slag kunt.'
      },
      {
        name: 'Officiële toetsing door gecertificeerde HVK-kerndeskundige',
        norm: 'Gecertificeerd Toetsingsrapport',
        description: 'Wettelijk verplichte toetsing en ondertekening voor bedrijven met meer dan 25 medewerkers (of zonder erkend branche-instrument).'
      }
    ],
    benefits: [
      'Voorkom hoge boetes van de Nederlandse Arbeidsinspectie',
      'Officieel getoetst door geregistreerde Hoger Veiligheidskundigen (HVK)',
      'Inclusief advies over benodigde BHV-bezetting en keuringen',
      'Vast tarief vooraf zonder verrassingen'
    ]
  },
  {
    slug: 'detachering',
    title: 'Veiligheidsdetachering & Toezicht',
    shortTitle: 'Detachering',
    tagline: 'Direct inzetbare brandwachten, mangatwachten, gasmeetdeskundigen, EHBO’ers en vertrouwenspersonen',
    description: 'Heeft u tijdelijk of structureel gecertificeerd veiligheidspersoneel nodig tijdens stops, onderhoudswerkzaamheden, evenementen of op kantoor? Edusafe detacheert gekwalificeerde specialisten die direct operationeel zijn.',
    icon: 'fa-solid fa-user-shield',
    badge: '24/7 Inzetbaar',
    url: '/diensten/detachering',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1200',
    items: [
      {
        name: 'Brandwachten (Industrieel, Bouw & Object)',
        norm: 'Rijksgediplomeerd / VCA',
        description: 'Inzet van ervaren brandwachten bij heetwerkzaamheden, uitval van brandmeldcentrales, onderhoudsstops en evenementen.'
      },
      {
        name: 'Mangatwachten (Buitenwacht Besloten Ruimten)',
        norm: 'SOG / Besloten Ruimten',
        description: 'Gecertificeerde mangatwachten voor streng toezicht, toegangscontrole en directe alarmering bij werkzaamheden in tanks, putten en besloten ruimten.'
      },
      {
        name: 'Gasmeetdeskundigen (EX-OX-TOX)',
        norm: 'SOG Gasmeten',
        description: 'Gekwalificeerde gasmeetdeskundigen voor het uitvoeren en vrijgeven van metingen op explosiegevaar, zuurstof en toxische gassen.'
      },
      {
        name: 'Gecertificeerde EHBO’ers & Medische Inzet',
        norm: 'Oranje Kruis / Evenementen',
        description: 'Professionele eerstehulpverleners voor bedrijfsprojecten, bouwplaatsen, publieksevenementen en congressen.'
      },
      {
        name: 'Externe Vertrouwenspersoon (Ongewenste omgangsvormen & Integriteit)',
        norm: 'LVV-conform / PSA',
        description: 'Aanstelling van een onafhankelijke externe vertrouwenspersoon ter invulling van uw wettelijke Arbo-zorgplicht rondom psychosociale arbeidsbelasting (PSA).'
      }
    ],
    benefits: [
      'Snel schakelen bij zowel geplande projecten als spoedaanvragen',
      'Volledig gecertificeerd personeel inclusief eigen PBM en meetapparatuur',
      'Flexibel inzetbaar per dagdeel, project of op abonnementsbasis (vertrouwenspersoon)',
      'Één vast aanspreekpunt voor planning én veiligheidsopleidingen'
    ]
  }
];
