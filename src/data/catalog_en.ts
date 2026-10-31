import type { SubCourse, ServicePillar } from './catalog';

export const courseCatalogEn: SubCourse[] = [
  // ==========================================
  // 1. BHV
  // ==========================================
  {
    slug: 'bhv-basis',
    category: 'BHV',
    categoryTitle: 'BHV Training',
    categoryUrl: '/en/bhv-course',
    title: 'BHV Basic',
    shortTitle: 'BHV Basic',
    tagline: 'Complete Emergency Response Officer (BHV) basic training for a safe and compliant workplace',
    price: '€ 195.00',
    duration: 'E-learning + 1 practical day',
    spotsText: 'E-learning + Practical',
    languages: ['Dutch', 'English'],
    target: 'For employees becoming certified Emergency Response Officers (BHV) for the first time under the Dutch Working Conditions Act (Arbowet). Complete the online theory at your own pace before joining one hands-on practical training day.',
    requirements: 'No prior training or experience required',
    exam: 'Practical assessment (no written exam)',
    certification: 'Official Arbowet BHV certificate + wallet card (valid 1 year)',
    inclusions: [
      'E-learning & study materials',
      '1 full practical day',
      'Official BHV card & diploma',
      'Lunch, coffee & free parking'
    ],
    heroBullets: [
      'E-learning + 1 practical day',
      'Official Arbowet certificate',
      'Incl. materials & lunch',
      'The Hague or Incompany'
    ],
    suitableForHtml: [
      'Want to make a life-saving difference during workplace emergencies while completing the preparatory theory flexibly online? This <strong>BHV Basic course (e-learning + 1 practical day)</strong> trains employees to meet all statutory requirements under <strong>Article 15 of the Dutch Arbowet</strong>. No prior training is needed, provided you are physically able to perform CPR and firefighting drills. Your official BHV certificate is valid for 1 year.',
      'Already hold a valid (or recently expired) BHV diploma and want to extend your certification for another 12 months? Choose our <a href="/en/courses/bhv-herhaling" class="text-brand-primary font-semibold underline hover:text-brand-secondary">BHV Refresher course</a>. Appointed to coordinate the emergency team during an incident? Explore <a href="/en/courses/bhv-ploegleider" class="text-brand-primary font-semibold underline hover:text-brand-secondary">BHV Team Leader</a>.',
      'Looking for more extensive medical training or group instruction at your own premises? View our <a href="/en/courses/ehbo-basis" class="text-brand-primary font-semibold underline hover:text-brand-secondary">First Aid Basic course</a> or request a tailored <a href="/en/incompany-training" class="text-brand-primary font-semibold underline hover:text-brand-secondary">Incompany BHV training</a>.'
    ],
    learningOutcomes: [
      'Safely assess smoke hazards and extinguish incipient fires using the right equipment',
      'Coordinate a fast, structured building evacuation and account for all occupants',
      'Perform immediate adult CPR and deploy an Automated External Defibrillator (AED)',
      'Act decisively during choking, unconsciousness, shock, and severe bleeding',
      'Provide effective first aid and wound care for common non-urgent workplace injuries'
    ],
    programIntro: 'The BHV Basic course at Edusafe combines flexible online e-learning with one intensive hands-on practical day at our training center in The Hague (or Incompany at your location), maximizing practical scenario time.',
    programSteps: [
      {
        title: '1. Preparation: Online E-learning',
        description: 'Before the practical day, you receive instant access to our digital learning portal to complete the preparatory modules at your own pace:',
        items: [
          'Statutory BHV duties and employer obligations under Article 15 Arbowet',
          'Fire triangle, smoke hazards, safe door procedures, and evacuation rules',
          'Core principles of life-saving emergency and non-urgent first aid'
        ]
      },
      {
        title: '2. Practical Day on Location (08:30 – 16:00)',
        description: 'The training day focuses 100% on hands-on action and realistic workplace scenarios guided and assessed by certified instructors:',
        items: [
          'Safe room reconnaissance and live extinguishing with foam, CO2, and fire blankets',
          'Triggering alarms, sweeping floors, and briefing arriving emergency services',
          'CPR practice on feedback manikins, AED operation, and recovery position',
          'Treating wounds, burns, fractures, eye injuries, and choking incidents'
        ]
      },
      {
        title: '3. Certification & Annual Renewal',
        description: 'Upon completing the practical day, your organization immediately satisfies Arbowet and Netherlands Labour Authority standards:',
        items: [
          'Official Arbowet BHV certificate and wallet card (valid 1 year)',
          'Automatic renewal reminder ahead of your certificate expiry date'
        ]
      }
    ],
    modules: [
      {
        name: 'Life-Saving First Aid',
        description: 'CPR, AED deployment, recovery position, and response to choking or shock.'
      },
      {
        name: 'Non-Urgent First Aid',
        description: 'Wound care, bandaging techniques, and treating burns, sprains, or fractures.'
      },
      {
        name: 'Incipient Fire Fighting',
        description: 'Recognizing smoke hazards and extinguishing incipient fires safely.'
      },
      {
        name: 'Evacuation & Alarm Procedures',
        description: 'Activating alarms, guiding evacuations, and handing over to emergency services.'
      }
    ],
    image: '/assets/images/hero_poster.webp',
    eventFilter: {
      categories: ['BHV'],
      titleKeywords: ['basis', 'basic', 'english']
    }
  },
  {
    slug: 'bhv-herhaling',
    category: 'BHV',
    categoryTitle: 'BHV Training',
    categoryUrl: '/en/bhv-course',
    title: 'BHV Refresher',
    shortTitle: 'BHV Refresher',
    tagline: 'Extend your BHV certificate by 1 year and sharpen all life-saving skills through hands-on scenarios',
    price: '€ 145.00',
    duration: '1 practical day (or half-day)',
    spotsText: 'Annual renewal',
    languages: ['Dutch', 'English'],
    target: 'For certified Emergency Response Officers (BHV) looking to refresh their practical emergency response skills and extend their statutory Arbowet BHV certification by one year.',
    requirements: 'Valid (or recently expired) BHV certificate',
    exam: 'Practical assessment (no written exam)',
    certification: 'Official BHV diploma renewal + new wallet card (valid 1 year)',
    inclusions: [
      'Hands-on scenario training',
      'Official 1-year renewal',
      'New physical & digital card',
      'Lunch, coffee & free parking'
    ],
    heroBullets: [
      '1 practical day (or half-day)',
      'Instant 1-year renewal',
      'No written theory exam',
      'Incl. new card & lunch'
    ],
    suitableForHtml: [
      'Already hold a BHV certificate and want to keep your life-saving reflexes sharp? Under <strong>Article 15 of the Dutch Arbowet</strong>, employers must ensure Emergency Response Officers remain demonstrably competent through regular refresher training. Completing this <strong>BHV Refresher course</strong> renews your official BHV certificate for another 12 months.',
      'Do not yet hold a BHV diploma, or did your certificate expire several years ago? Enroll in our <a href="/en/courses/bhv-basis" class="text-brand-primary font-semibold underline hover:text-brand-secondary">BHV Basic course</a>. Ready to step up into an operational command role within your team? Explore <a href="/en/courses/bhv-ploegleider" class="text-brand-primary font-semibold underline hover:text-brand-secondary">BHV Team Leader</a> or schedule an <a href="/en/incompany-training" class="text-brand-primary font-semibold underline hover:text-brand-secondary">Incompany refresher session</a>.'
    ],
    learningOutcomes: [
      'Perform high-quality CPR and deploy an AED confidently under time pressure',
      'Suppress incipient fires effectively using foam, CO2, and fire blankets',
      'Make fast, safe decisions and communicate clearly during evacuation drills',
      'Treat acute medical incidents and workplace injuries according to current guidelines'
    ],
    programIntro: 'Instead of repeating dry textbook theory, the BHV Refresher course immerses you straight into realistic practical scenarios covering CPR, first aid, firefighting, and building evacuation.',
    programSteps: [
      {
        title: '1. Life-Saving First Aid & AED Refresher',
        description: 'During the first session, you practice acute workplace medical emergencies hands-on:',
        items: [
          'Rapid CPR and AED deployment on smart feedback manikins',
          'Responding to choking, unconsciousness, stroke, and severe bleeding',
          'Practical wound care, burn treatment, and recovery position drills'
        ]
      },
      {
        title: '2. Practical Fire Fighting & Evacuation',
        description: 'In the second session, we train active fire response and structured evacuation:',
        items: [
          'Safe door-opening procedures, smoke awareness, and live fire extinguishing',
          'Alarm activation, floor sweeping, and handover to the fire brigade'
        ]
      },
      {
        title: '3. Immediate 12-Month Certificate Extension',
        description: 'Your instructor assesses your practical competencies continuously throughout the session:',
        items: [
          'Direct 1-year extension of your official Arbowet BHV diploma and card',
          'Automated reminder sent well before next year’s renewal deadline'
        ]
      }
    ],
    modules: [
      {
        name: 'First Aid, CPR & AED',
        description: 'Hands-on refresher in resuscitation, AED operation, and acute emergency care.'
      },
      {
        name: 'Live Fire Extinguishing',
        description: 'Practical extinguishing drills on incipient fires with multiple extinguisher types.'
      },
      {
        name: 'Evacuation Scenarios',
        description: 'Room reconnaissance, safe door procedures, and guiding building evacuations.'
      },
      {
        name: 'Updated Safety Guidelines',
        description: 'Latest BHV insights and case discussions tailored to your work environment.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?auto=format&fit=crop&q=80&w=800',
    eventFilter: {
      categories: ['BHV'],
      titleKeywords: ['herhaling', 'refresher']
    }
  },
  {
    slug: 'hoofd-bhv',
    category: 'BHV',
    categoryTitle: 'BHV Training',
    categoryUrl: '/en/bhv-course',
    title: 'Head of BHV (Hoofd BHV)',
    shortTitle: 'Head of BHV',
    tagline: 'Strategically design, manage, and maintain a compliant corporate BHV organization',
    price: '€ 495.00',
    duration: '2 to 3 sessions',
    spotsText: 'Policy & Coordination level',
    languages: ['Dutch', 'English'],
    target: 'For prevention officers, HR managers, facility managers, and safety coordinators responsible for BHV policy, budgeting, and statutory Arbowet compliance.',
    requirements: 'No specific prior training required',
    exam: 'Practical assignment: drafting your corporate BHV policy plan',
    certification: 'Official Head of BHV / Coordinator Diploma',
    inclusions: [
      'Course binder & templates',
      'Safety engineer guidance',
      'Official Head BHV diploma',
      'Lunch, coffee & free parking'
    ],
    heroBullets: [
      '2 to 3 sessions',
      'Incl. BHV plan templates',
      'Official Head BHV diploma',
      'Direct link to RI&E'
    ],
    suitableForHtml: [
      'Are you responsible for setting up, budgeting, and auditing the emergency response organization within your company? The <strong>Head of BHV (Hoofd BHV)</strong> program teaches you how to translate residual workplace risks from your Risk Inventory & Evaluation (RI&E) into a compliant staffing, equipment, and training policy under <strong>Article 15 of the Dutch Arbowet</strong>.',
      'Focused primarily on leading responders on the floor during an active incident rather than writing policy? View our operational <a href="/en/courses/bhv-ploegleider" class="text-brand-primary font-semibold underline hover:text-brand-secondary">BHV Team Leader course</a>. Need expert assistance compiling your statutory <a href="/en/risk-assessment-rie" class="text-brand-primary font-semibold underline hover:text-brand-secondary">RI&E Risk Assessment</a> or <a href="/en/evacuation-plans" class="text-brand-primary font-semibold underline hover:text-brand-secondary">NEN 1414 Evacuation Floor Plans</a>? Edusafe supports you end to end.'
    ],
    learningOutcomes: [
      'Draft a complete corporate BHV policy and training plan derived from your RI&E',
      'Determine legally required BHV staffing ratios, AEDs, and extinguishing equipment',
      'Plan, supervise, and evaluate annual evacuation drills across all shifts',
      'Advise senior management on Arbowet obligations, budgets, and employer liability'
    ],
    programIntro: 'During the Head of BHV program, a senior safety engineer guides you in translating Dutch Arbowet and Building Decree (BBL) regulations directly into a practical policy for your own facility.',
    programSteps: [
      {
        title: '1. Legal Framework, RI&E & Residual Risks',
        description: 'Understand employer duty of care and translate RI&E findings into concrete emergency scenarios:',
        items: [
          'Dutch Arbowet Article 15, Building Decree (BBL), and Labour Authority audits',
          'Analyzing building occupancy, non-self-reliant visitors, and shift coverage'
        ]
      },
      {
        title: '2. Structuring & Managing the BHV Organization',
        description: 'Build your BHV policy plan using ready-to-use templates and establish equipment management:',
        items: [
          'Selecting alarm systems, two-way radios, AEDs, and first aid stations',
          'Managing certificate renewals, periodic inspections, and annual BHV budgets'
        ]
      },
      {
        title: '3. Drill Policy, Evaluation & Certification',
        description: 'Finalize your company-specific policy assignment and establish a multi-year drill schedule:',
        items: [
          'Setting up Phase 0 to Phase 4 evacuation drills and incident evaluation protocols',
          'Review of your BHV policy plan and award of the official Head of BHV Diploma'
        ]
      }
    ],
    modules: [
      {
        name: 'Legislation & Employer Liability',
        description: 'Arbowet, Building Decree (BBL), and statutory employer duty of care.'
      },
      {
        name: 'BHV Policy Plan & RI&E',
        description: 'Translating residual risks from your RI&E into an actionable BHV plan.'
      },
      {
        name: 'Staffing & Equipment Management',
        description: 'Determining required BHV officers, fire extinguishers, AEDs, and radios.'
      },
      {
        name: 'Training & Drill Strategy',
        description: 'Planning, organizing, and auditing annual training and evacuation drills.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800',
    eventFilter: {
      categories: ['BHV'],
      titleKeywords: ['hoofd', 'head']
    }
  },
  {
    slug: 'bhv-ploegleider',
    category: 'BHV',
    categoryTitle: 'BHV Training',
    categoryUrl: '/en/bhv-course',
    title: 'BHV Team Leader (Ploegleider)',
    shortTitle: 'BHV Team Leader',
    tagline: 'Command, coordinate, and direct your operational BHV team decisively during emergencies',
    price: '€ 345.00',
    duration: '2 practical days (or 1-day refresher)',
    spotsText: 'Operational Leadership',
    languages: ['Dutch', 'English'],
    target: 'For experienced BHV officers appointed to lead and coordinate a team of emergency responders on the floor during incidents and evacuations.',
    requirements: 'Valid BHV Basic or BHV Refresher certificate',
    exam: 'Practical command & scenario assessment',
    certification: 'Official BHV Team Leader Diploma + wallet card (valid 1 year)',
    inclusions: [
      'Manual & deployment cards',
      'Table-top & live scenarios',
      'Official Team Leader diploma',
      'Lunch, coffee & free parking'
    ],
    heroBullets: [
      'Operational BHV leadership',
      'BOB command model training',
      'Official Team Leader diploma',
      'Incl. materials & lunch'
    ],
    suitableForHtml: [
      'Does your organization deploy multiple BHV officers per shift, and are you responsible for keeping overview and assigning tasks when an alarm sounds? The <strong>BHV Team Leader (Ploegleider)</strong> course equips you with structured incident command skills. To participate, you need a valid <a href="/en/courses/bhv-basis" class="text-brand-primary font-semibold underline hover:text-brand-secondary">BHV Basic</a> or <a href="/en/courses/bhv-herhaling" class="text-brand-primary font-semibold underline hover:text-brand-secondary">BHV Refresher</a> certificate.',
      'Also responsible for strategic BHV policy and RI&E alignment? Combine or follow up with <a href="/en/courses/hoofd-bhv" class="text-brand-primary font-semibold underline hover:text-brand-secondary">Head of BHV</a>, sharpen team radio discipline with <a href="/en/courses/portotraining" class="text-brand-primary font-semibold underline hover:text-brand-secondary">Two-Way Radio Training</a>, or test your team during an <a href="/en/courses/ontruimingsoefening" class="text-brand-primary font-semibold underline hover:text-brand-secondary">On-Site Evacuation Drill</a>.'
    ],
    learningOutcomes: [
      'Direct a multi-person BHV deployment using the BOB model (Image, Judgment, Decision)',
      'Maintain calm, unambiguous two-way radio communication across your response team',
      'Deliver a structured handover briefing to arriving fire brigade and EMS commanders',
      'Lead post-incident debriefings, team aftercare, and formal incident reporting'
    ],
    programIntro: 'As a BHV Team Leader, you step back from hands-on extinguishing to ensure the right responders are deployed to the right zones safely and efficiently.',
    programSteps: [
      {
        title: '1. Structured Command via the BOB Model',
        description: 'Learn how to gather critical facts rapidly under pressure, prioritize threats, and issue clear tactical orders:',
        items: [
          'Applying Image formation, Judgment, and Decision-making (BOB)',
          'Delegating medical, firefighting, and evacuation tasks while monitoring responder safety'
        ]
      },
      {
        title: '2. Table-Top & Multi-Incident Scenarios',
        description: 'Practice coordinating complex, simultaneous emergencies using architectural scale models and live drills:',
        items: [
          'Strict two-way radio discipline, call signs, and status updates',
          'Adapting deployment plans dynamically when routes are blocked by smoke'
        ]
      },
      {
        title: '3. Emergency Services Handover, Aftercare & Certification',
        description: 'Master the transition to external emergency responders and conclude the incident professionally:',
        items: [
          'Warm handover briefing to the fire brigade incident commander',
          'Psychological aftercare, evaluation, and award of the BHV Team Leader Diploma'
        ]
      }
    ],
    modules: [
      {
        name: 'Command & Task Delegation',
        description: 'Coordinating the BHV team and safeguarding responder safety during deployment.'
      },
      {
        name: 'BOB Decision-Making Model',
        description: 'Rapid situation assessment, prioritization, and decisive command under pressure.'
      },
      {
        name: 'Radio Traffic & Handover',
        description: 'Structured radio protocols and seamless briefing to the fire brigade.'
      },
      {
        name: 'Debriefing & Team Aftercare',
        description: 'Standing down operations, supporting affected staff, and incident reporting.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800',
    eventFilter: {
      categories: ['BHV'],
      titleKeywords: ['ploegleider', 'team leader']
    }
  },
  {
    slug: 'brand-en-ontruiming',
    category: 'BHV',
    categoryTitle: 'BHV Training',
    categoryUrl: '/en/bhv-course',
    title: 'Fire Fighting & Evacuation',
    shortTitle: 'Fire & Evacuation',
    tagline: 'Focused half-day practical module on incipient fire suppression and safe building evacuation',
    price: '€ 135.00',
    duration: 'Half day (4 hours)',
    spotsText: 'Practical Module',
    languages: ['Dutch', 'English'],
    target: 'For employees and first aiders who want targeted practical training in extinguishing incipient fires, safe door procedures, and structured building evacuation.',
    requirements: 'No prior training required',
    exam: 'Practical assessment by fire instructor',
    certification: 'Official Fire & Evacuation Module Certificate (valid 1 year)',
    inclusions: [
      'Live fire extinguishing drills',
      'Door & evacuation training',
      'Official module certificate',
      'Coffee, tea & free parking'
    ],
    heroBullets: [
      'Half day (4 hours)',
      'Live fire extinguishing',
      'Official module certificate',
      'The Hague or Incompany'
    ],
    suitableForHtml: [
      'Do employees in your organization already hold a valid <a href="/en/courses/ehbo-basis" class="text-brand-primary font-semibold underline hover:text-brand-secondary">First Aid (Het Oranje Kruis) diploma</a>? Because they are exempt from the BHV First Aid module under <strong>Article 15 Arbowet</strong>, completing this <strong>4-hour Fire Fighting & Evacuation module</strong> qualifies them as full Emergency Response Officers! It is also ideal for teams needing extra fire safety readiness.',
      'Need the complete BHV qualification including CPR, AED, and emergency first aid? Enroll in our <a href="/en/courses/bhv-basis" class="text-brand-primary font-semibold underline hover:text-brand-secondary">BHV Basic course</a>. Looking for a shorter 3-hour live extinguisher workshop without evacuation procedures? View <a href="/en/courses/kleine-blusmiddelen" class="text-brand-primary font-semibold underline hover:text-brand-secondary">Small Fire Extinguishers Training</a>.'
    ],
    learningOutcomes: [
      'Recognize smoke, heat, flashover, and carbon monoxide hazards immediately',
      'Approach and check closed rooms safely using the official door-opening procedure',
      'Extinguish incipient fires using foam extinguishers, CO2 extinguishers, and fire blankets',
      'Initiate a structured building evacuation and account for staff at the assembly point'
    ],
    programIntro: 'In one intensive 4-hour practical session led by an experienced fire instructor, you master both hands-on fire suppression and safe evacuation procedures.',
    programSteps: [
      {
        title: '1. Fire Dynamics, Smoke Hazards & Door Procedure',
        description: 'Understand how indoor fires develop and when it is safe to intervene versus evacuate:',
        items: [
          'Fire triangle, fire classes, and lethal smoke/backdraft hazards',
          'Practicing the crouched door-check procedure before entering any room'
        ]
      },
      {
        title: '2. Hands-On Extinguishing Drills on Live Fire',
        description: 'Step up to realistic fire trainers to practice proper approach and extinguishing technique:',
        items: [
          'Deploying foam and CO2 portable extinguishers on solid, liquid, and electrical fires',
          'Smothering pan or clothing fires safely with a fire blanket'
        ]
      },
      {
        title: '3. Evacuation Drills & Module Certification',
        description: 'Practice clearing floors systematically and guiding occupants to safety:',
        items: [
          'Alarm activation, sweeping rooms, assisting visitors, and assembly point roll call',
          'Award of the official Fire & Evacuation certificate (valid 1 year)'
        ]
      }
    ],
    modules: [
      {
        name: 'Fire Triangle & Smoke Hazards',
        description: 'Identifying fire classes, toxic smoke development, and flashover risks.'
      },
      {
        name: 'Live Extinguishing Practice',
        description: 'Hands-on extinguishing with foam extinguishers, CO2 units, and fire blankets.'
      },
      {
        name: 'Safe Door & Room Check',
        description: 'Checking temperature and safely opening closed doors during fire alarms.'
      },
      {
        name: 'Alarm & Building Evacuation',
        description: 'Initiating evacuation, sweeping zones, and reporting at the assembly point.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&q=80&w=800',
    eventFilter: {
      categories: ['BHV', 'ONTRUIMING'],
      titleKeywords: ['brand', 'ontruiming', 'fire', 'evacuation']
    }
  },
  {
    slug: 'ontruimingsoefening',
    category: 'BHV',
    categoryTitle: 'BHV Training',
    categoryUrl: '/en/bhv-course',
    title: 'On-Site Evacuation Drill',
    shortTitle: 'Evacuation Drill',
    tagline: 'Test your emergency plan and BHV team in practice with a realistic supervised drill at your premises',
    price: 'Custom quote',
    duration: 'At your company premises',
    spotsText: 'Incompany & Official Report',
    languages: ['Dutch', 'English'],
    target: 'For offices, warehouses, schools, hotels, and healthcare facilities wanting their mandatory annual evacuation drill professionally staged, timed, and documented.',
    requirements: 'Presence of internal BHV team on-site',
    exam: 'On-site observation & evacuation time audit',
    certification: 'Official Arbowet Evacuation Evaluation Report',
    inclusions: [
      'Custom drill scenario script',
      'Smoke machines & staging',
      'Expert drill observers',
      'Official Arbowet drill report'
    ],
    heroBullets: [
      'At your company premises',
      'Phase 0 to 4 drills',
      'Incl. smoke & staging',
      'Official evaluation report'
    ],
    suitableForHtml: [
      'An emergency plan on paper only protects people if everyone knows what to do the moment the siren sounds. Under <strong>Article 15 of the Dutch Arbowet</strong>, employers are expected to test their emergency response organization regularly. With a supervised <strong>On-Site Evacuation Drill</strong>, Edusafe safety engineers test your alarm times, communication, and escape routes in real conditions.',
      'We tailor the realism from Phase 0 (table-top walkthrough) up to Phase 4 (unannounced drill with smoke simulation and casualty actors). Need updated floor plans or an emergency plan beforehand? Explore our <a href="/en/evacuation-plans" class="text-brand-primary font-semibold underline hover:text-brand-secondary">NEN 1414 Evacuation Floor Plans</a> or combine the drill with <a href="/en/courses/portotraining" class="text-brand-primary font-semibold underline hover:text-brand-secondary">Two-Way Radio Training</a>.'
    ],
    learningOutcomes: [
      'Measure the exact number of minutes required to clear your entire facility safely',
      'Uncover blind spots in alarm audibility, radio communication, and blocked escape doors',
      'Demonstrate annual drill compliance to the Labour Authority and fire insurers',
      'Build calm, automatic routine among both BHV officers and all building occupants'
    ],
    programIntro: 'Edusafe prepares, stages, and evaluates your on-site evacuation drill with minimal operational disruption while delivering maximum practical insight.',
    programSteps: [
      {
        title: '1. Intake, Drill Phase Selection & Scenario Script',
        description: 'Together with your facility or safety coordinator, we select the right drill level (Phase 0 to Phase 4):',
        items: [
          'Drafting a tailored drill script aligned with your building layout and RI&E risks',
          'Pre-drill safety briefing for observers and optional staging setup (smoke/casualties)'
        ]
      },
      {
        title: '2. Live Drill Execution & Time Measurement',
        description: 'Our observers monitor every key position from alarm trigger to assembly point roll call:',
        items: [
          'Timing BHV mobilization, floor sweeps, door tagging, and total evacuation speed',
          'Assessing Team Leader coordination, radio traffic, and fire brigade reception'
        ]
      },
      {
        title: '3. Team Debriefing & Official Arbowet Report',
        description: 'Immediately after the drill, we hold a constructive plenary debriefing with your BHV team:',
        items: [
          'Direct practical feedback on what went well and critical bottlenecks',
          'Delivery of an official written Evaluation Report for audits and insurers'
        ]
      }
    ],
    modules: [
      {
        name: 'Phase 0/1: Table-Top & Zone Drill',
        description: 'Testing procedures, roles, and escape routes per department or wing.'
      },
      {
        name: 'Phase 2/3: Full Building Evacuation',
        description: 'Realistic announced or unannounced drill with smoke simulation and casualties.'
      },
      {
        name: 'Escape Route & Alarm Audit',
        description: 'Stopwatch timing and verification of signage, doors, and assembly point checks.'
      },
      {
        name: 'Debriefing & Compliance Report',
        description: 'Team evaluation plus formal report for the Labour Authority and insurers.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&q=80&w=800',
    eventFilter: {
      categories: ['BHV', 'ONTRUIMING'],
      titleKeywords: ['ontruiming', 'evacuation']
    }
  },
  {
    slug: 'kleine-blusmiddelen',
    category: 'BHV',
    categoryTitle: 'BHV Training',
    categoryUrl: '/en/bhv-course',
    title: 'Small Fire Extinguishers Training',
    shortTitle: 'Small Fire Extinguishers',
    tagline: 'Learn to extinguish incipient fires safely using portable extinguishers, hose reels, and fire blankets',
    price: '€ 115.00',
    duration: 'Half day (approx. 3 hours)',
    spotsText: '100% Hands-on Fire Drills',
    languages: ['Dutch', 'English'],
    target: 'For warehouse staff, workshop technicians, hospitality teams, and office personnel wanting practical hands-on experience operating workplace fire extinguishers.',
    requirements: 'No prior training required',
    exam: 'Practical live-fire extinguishing assessment',
    certification: 'Official Small Fire Extinguishers Certificate',
    inclusions: [
      'Practice with real extinguishers',
      'Fire brigade instructor',
      'Official fire certificate',
      'Coffee, tea & free parking'
    ],
    heroBullets: [
      'Half day (approx. 3 hrs)',
      'Extinguishing on live fire',
      'Official fire certificate',
      'The Hague or Incompany'
    ],
    suitableForHtml: [
      'Every workplace is equipped with portable fire extinguishers and hose reels, yet most employees have never pulled a safety pin in real life. In this compact <strong>3-hour Small Fire Extinguishers Training</strong>, every participant practices extinguishing real flames and learns when it is safe to intervene — and when to evacuate immediately.',
      'Want to combine firefighting with full floor-clearing and evacuation procedures? Choose our <a href="/en/courses/brand-en-ontruiming" class="text-brand-primary font-semibold underline hover:text-brand-secondary">Fire Fighting & Evacuation module</a> or complete the full statutory <a href="/en/courses/bhv-basis" class="text-brand-primary font-semibold underline hover:text-brand-secondary">BHV Basic course</a>. Also available as an <a href="/en/incompany-training" class="text-brand-primary font-semibold underline hover:text-brand-secondary">Incompany mobile fire training</a> at your site.'
    ],
    learningOutcomes: [
      'Identify fire classes (A, B, C, D, and F) and pick the right extinguisher instantly',
      'Extinguish live fires safely using foam, CO2, powder, and fire hose reels',
      'Smother grease/pan fires and clothing fires correctly using a fire blanket',
      'Protect personal safety around toxic smoke, radiant heat, and live electrical equipment'
    ],
    programIntro: 'In roughly three action-packed hours, our fire instructor pairs concise hazard recognition with extensive live-fire extinguishing drills.',
    programSteps: [
      {
        title: '1. Fire Classes & Selecting the Right Agent',
        description: 'Avoid dangerous extinguishing mistakes (such as water on oil or live voltage):',
        items: [
          'Understanding Fire Classes A (solids), B (liquids), C (gases), D (metals), and F (oils/fats)',
          'Discharge duration, effective range, and collateral damage of foam, CO2, and powder'
        ]
      },
      {
        title: '2. Hands-On Drills on Live Fire Trainers',
        description: 'Every participant practices multiple extinguishing runs under direct instructor coaching:',
        items: [
          'Operating foam and CO2 extinguishers on realistic simulated fires',
          'Deploying the fire hose reel and wrapping/smothering with a fire blanket'
        ]
      },
      {
        title: '3. Personal Safety Rules & Certification',
        description: 'Learn the golden rule of incipient firefighting — never compromise your own escape route:',
        items: [
          'Approach angle, wind/draft awareness, and backing away safely after extinguishing',
          'Award of the official Edusafe Small Fire Extinguishers Certificate'
        ]
      }
    ],
    modules: [
      {
        name: 'Fire Classes & Agent Choice',
        description: 'Selecting the right extinguisher for solids, liquids, gases, or electrical fires.'
      },
      {
        name: 'Foam & CO2 Extinguishing',
        description: 'Live-fire extinguishing drills using foam and carbon dioxide units.'
      },
      {
        name: 'Hose Reel & Fire Blanket',
        description: 'Operating wall-mounted fire hose reels and smothering fires with blankets.'
      },
      {
        name: 'Personal Safety & Smoke Limits',
        description: 'Judging when an incipient fire can be fought safely versus immediate evacuation.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&q=80&w=800',
    eventFilter: {
      categories: ['BHV'],
      titleKeywords: ['blus', 'extinguisher']
    }
  },
  {
    slug: 'portotraining',
    category: 'BHV',
    categoryTitle: 'BHV Training',
    categoryUrl: '/en/bhv-course',
    title: 'Two-Way Radio Training (Portotraining)',
    shortTitle: 'Two-Way Radio Training',
    tagline: 'Clear, disciplined, and faultless two-way radio emergency communication during incidents',
    price: '€ 115.00',
    duration: 'Half day (approx. 3 hours)',
    spotsText: 'Critical in Emergencies',
    languages: ['Dutch', 'English'],
    target: 'For BHV officers, team leaders, receptionists, and facility or security staff who communicate via two-way radios during incidents and evacuations.',
    requirements: 'No prior training required',
    exam: 'Practical radio & scenario exercises',
    certification: 'Official Radio Communication Certificate',
    inclusions: [
      'Professional two-way radios',
      'Tailored emergency scenarios',
      'NATO card & certificate',
      'Coffee, tea & free parking'
    ],
    heroBullets: [
      'Half day (approx. 3 hrs)',
      'Professional radio sets',
      'Incl. NATO pocket card',
      'The Hague or Incompany'
    ],
    suitableForHtml: [
      'During a fire alarm or medical emergency, chaotic radio chatter on the emergency channel costs precious minutes. In this practical <strong>Two-Way Radio Training (Portotraining)</strong>, your team learns strict ether discipline so urgent messages come through loud, concise, and unmistakable.',
      'This half-day workshop pairs seamlessly with our <a href="/en/courses/bhv-ploegleider" class="text-brand-primary font-semibold underline hover:text-brand-secondary">BHV Team Leader course</a> and can easily be scheduled right before an <a href="/en/courses/ontruimingsoefening" class="text-brand-primary font-semibold underline hover:text-brand-secondary">On-Site Evacuation Drill</a> or <a href="/en/incompany-training" class="text-brand-primary font-semibold underline hover:text-brand-secondary">Incompany BHV day</a>.'
    ],
    learningOutcomes: [
      'Operate channels, push-to-talk (PTT) timing, squelch, and emergency buttons effortlessly',
      'Maintain strict ether discipline without talking over teammates or blocking the channel',
      'Structure urgent incident reports clearly (who, where, what, casualties, assistance needed)',
      'Apply standard call signs, prowords, and the NATO phonetic alphabet accurately under stress'
    ],
    programIntro: 'Through interactive multi-room radio exercises, participants immediately experience the difference between unstructured talk and crisp emergency radio protocol.',
    programSteps: [
      {
        title: '1. Hardware Operation & Ether Discipline',
        description: 'Eliminate technical cut-offs and background noise when operating professional radios:',
        items: [
          'Press-pause-speak PTT rhythm, microphone distance, and channel verification',
          'Standard prowords (Over, Out, Copy, Say Again) and keeping transmissions under 10 seconds'
        ]
      },
      {
        title: '2. NATO Phonetic Alphabet & Priority Calls',
        description: 'Practice spelling room codes, license plates, and chemical names without ambiguity:',
        items: [
          'Drilling the NATO phonetic alphabet using your handy pocket reference card',
          'Interrupting routine traffic properly for Mayday / urgent medical or fire reports'
        ]
      },
      {
        title: '3. Multi-Zone Emergency Coordination Scenarios',
        description: 'Put radio discipline to the test across simulated multi-floor incidents:',
        items: [
          'Coordinating floor sweeps and casualty reports between responders and Team Leader',
          'Feedback round and award of the Official Radio Communication Certificate'
        ]
      }
    ],
    modules: [
      {
        name: 'Radio Controls & PTT Technique',
        description: 'Operating channels, push-to-talk timing, earpieces, and emergency buttons.'
      },
      {
        name: 'Strict Ether Discipline',
        description: 'Communicating briefly and clearly without blocking the emergency channel.'
      },
      {
        name: 'NATO Alphabet & Call Signs',
        description: 'Standard call-up protocols and faultless phonetic spelling under pressure.'
      },
      {
        name: 'Priority Alerts & Coordination',
        description: 'Structuring emergency messages and directing multi-floor evacuations.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=800',
    eventFilter: {
      categories: ['BHV'],
      titleKeywords: ['porto', 'radio']
    }
  },

  // ==========================================
  // 2. EHBO / FIRST AID
  // ==========================================
  {
    slug: 'ehbo-basis',
    category: 'EHBO',
    categoryTitle: 'First Aid & CPR',
    categoryUrl: '/en/first-aid-course',
    title: 'First Aid Basic (Het Oranje Kruis)',
    shortTitle: 'First Aid Basic',
    tagline: 'The official and most comprehensive First Aid diploma in the Netherlands',
    price: '€ 285.00',
    duration: 'E-learning + practical days',
    spotsText: 'Oranje Kruis Accredited',
    languages: ['Dutch', 'English'],
    target: 'For employees, event responders, sports volunteers, and individuals wanting to earn an officially accredited Het Oranje Kruis First Aid Diploma.',
    requirements: 'Minimum age 16, no prior training required',
    exam: 'Independent practical exam by Het Oranje Kruis examiner',
    certification: 'Official Het Oranje Kruis First Aid Diploma + card (valid 2 years)',
    inclusions: [
      'Oranje Kruis e-learning',
      'LOTUS casualty training',
      'Exam & 2-year diploma',
      'Lunch, coffee & free parking'
    ],
    heroBullets: [
      'E-learning + practical days',
      'Het Oranje Kruis diploma',
      'Health insurer reimbursable',
      'Incl. LOTUS & lunch'
    ],
    suitableForHtml: [
      'Want to become an all-round certified first aider recognized nationwide across workplaces, sports clubs, and public events? The <strong>First Aid Basic course (Het Oranje Kruis)</strong> covers adult and paediatric resuscitation, severe trauma, bandaging, and acute medical conditions. For private individuals, Dutch supplementary health insurance policies (<em>aanvullende zorgverzekering</em>) often reimburse up to 100% of course costs.',
      'Holders of a valid Het Oranje Kruis First Aid Diploma are automatically exempt from the First Aid section of BHV — add our 4-hour <a href="/en/courses/brand-en-ontruiming" class="text-brand-primary font-semibold underline hover:text-brand-secondary">Fire Fighting & Evacuation module</a> to qualify as a full BHV officer.',
      'Already certified and looking to extend your 2-year validity? Book <a href="/en/courses/ehbo-herhaling" class="text-brand-primary font-semibold underline hover:text-brand-secondary">First Aid Refresher</a>. Working specifically in childcare or primary education under the Dutch Childcare Act? View <a href="/en/courses/ehak" class="text-brand-primary font-semibold underline hover:text-brand-secondary">EHAK (Paediatric First Aid)</a>.'
    ],
    learningOutcomes: [
      'Secure accident scenes and apply the five core rules of Het Oranje Kruis First Aid',
      'Perform adult, child, and infant CPR and operate an AED safely and rapidly',
      'Control active bleeding, prevent shock, and apply professional pressure and support bandages',
      'Stabilize fractures, dislocations, spinal injuries, burns, eye trauma, and poisonings',
      'Recognize and respond to acute illnesses including heart attack, stroke, epilepsy, and diabetes'
    ],
    programIntro: 'You combine flexible online theory (Het Oranje Kruis e-learning) with intensive practical training days featuring certified LOTUS casualty actors, concluding with the official independent exam.',
    programSteps: [
      {
        title: '1. Online Theory Preparation (E-learning)',
        description: 'Study anatomy, vital signs, injury recognition, and official Het Oranje Kruis protocols online at your own pace:',
        items: [
          'Five fundamental First Aid principles, approaching casualties, and calling 112',
          'Theoretical foundation for wounds, musculoskeletal trauma, and acute illnesses'
        ]
      },
      {
        title: '2. Hands-On Practical Days with LOTUS Actors',
        description: 'Practice realistic medical scenarios under guidance of a certified First Aid Instructor:',
        items: [
          'BLS resuscitation, AED deployment, choking relief, and recovery position',
          'Wound care, tourniquet/hemostatic dressing basics, splinting, and realistic LOTUS simulations'
        ]
      },
      {
        title: '3. Official Het Oranje Kruis Practical Exam',
        description: 'Demonstrate your practical competence before an independent Het Oranje Kruis assessment panel:',
        items: [
          'Official Diploma Eerste Hulp registration and digital/wallet card (valid 2 years)',
          'Itemized invoice suitable for Dutch supplementary health insurance reimbursement'
        ]
      }
    ],
    modules: [
      {
        name: 'Vital Functions, CPR & AED',
        description: 'Treating unconsciousness, respiratory arrest, choking, and cardiac arrest.'
      },
      {
        name: 'Bleeding, Wounds & Shock',
        description: 'Stopping severe hemorrhage, sterile wound care, and shock management.'
      },
      {
        name: 'Fractures, Sprains & Spine',
        description: 'Immobilizing broken bones, joint dislocations, neck, and spinal trauma.'
      },
      {
        name: 'Burns, Poisoning & Exposure',
        description: 'First aid for thermal/chemical burns, hypothermia, heatstroke, and stings.'
      },
      {
        name: 'Acute Medical Conditions',
        description: 'Recognizing stroke, myocardial infarction, diabetic crisis, and seizures.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&q=80&w=800',
    eventFilter: {
      categories: ['EHBO', 'FIRST AID'],
      titleKeywords: ['basis', 'basic', 'first aid']
    }
  },
  {
    slug: 'ehbo-herhaling',
    category: 'EHBO',
    categoryTitle: 'First Aid & CPR',
    categoryUrl: '/en/first-aid-course',
    title: 'First Aid Refresher',
    shortTitle: 'First Aid Refresher',
    tagline: 'Maintain your practical competencies and extend your official Het Oranje Kruis First Aid diploma',
    price: '€ 145.00',
    duration: '1 practical day',
    spotsText: 'Diploma Renewal',
    languages: ['Dutch', 'English'],
    target: 'For certified first aiders needing annual competency sign-off to keep their official Het Oranje Kruis First Aid Diploma valid and up to date.',
    requirements: 'Valid Het Oranje Kruis First Aid Diploma',
    exam: 'Continuous practical competency assessment by instructor',
    certification: 'Official Het Oranje Kruis re-registration & diploma extension',
    inclusions: [
      'LOTUS scenario training',
      'Oranje Kruis re-registration',
      'Updated digital diploma',
      'Lunch, coffee & free parking'
    ],
    heroBullets: [
      '1 full practical day',
      'Oranje Kruis renewal',
      'LOTUS casualty scenarios',
      'Incl. lunch & parking'
    ],
    suitableForHtml: [
      'An official <strong>Het Oranje Kruis First Aid Diploma</strong> is valid for 2 years and requires demonstrable practical competency maintenance across all mandatory modules for timely extension. In one intensive <strong>First Aid Refresher day</strong>, our certified Instructor First Aid assesses and signs off your skills directly with Het Oranje Kruis.',
      'Has your First Aid diploma already lapsed beyond the grace period, or do you not yet hold an accredited certificate? Enroll in <a href="/en/courses/ehbo-basis" class="text-brand-primary font-semibold underline hover:text-brand-secondary">First Aid Basic</a>. Want to combine your medical qualification with workplace fire readiness? Add <a href="/en/courses/brand-en-ontruiming" class="text-brand-primary font-semibold underline hover:text-brand-secondary">Fire Fighting & Evacuation</a> or arrange an <a href="/en/incompany-training" class="text-brand-primary font-semibold underline hover:text-brand-secondary">Incompany First Aid Refresher</a>.'
    ],
    learningOutcomes: [
      'Demonstrate NRR-compliant CPR and AED proficiency on adult and paediatric manikins',
      'Assess and treat realistic multi-trauma cases acted out by certified LOTUS casualties',
      'Apply updated Dutch First Aid Guidelines for severe bleeding, burns, and head injuries',
      'Complete all mandatory competency checks required for Het Oranje Kruis renewal'
    ],
    programIntro: 'Our First Aid Refresher day focuses entirely on active scenario practice with LOTUS casualty actors, eliminating passive lectures while covering every mandatory Het Oranje Kruis competency.',
    programSteps: [
      {
        title: '1. Annual CPR, AED & Vital Functions Check',
        description: 'Verify resuscitation speed, compression depth, and airway management according to NRR standards:',
        items: [
          'Adult and child CPR with QCPR feedback and AED pad placement',
          'Managing severe choking, unconsciousness, and anaphylaxis'
        ]
      },
      {
        title: '2. Realistic LOTUS Trauma & Illness Simulations',
        description: 'Respond to lifelike workplace, traffic, and household accidents staged by LOTUS actors:',
        items: [
          'Triage, severe bleeding control, complex bandaging, and fracture stabilization',
          'Latest updates to the Dutch First Aid Guidelines (Nederlandse Richtlijnen Eerste Hulp)'
        ]
      },
      {
        title: '3. Official Sign-Off & Het Oranje Kruis Extension',
        description: 'Edusafe handles the administrative reporting directly in the Het Oranje Kruis portal:',
        items: [
          'Official registration of your completed competencies for 2-year diploma continuity',
          'Automatic reminder ahead of your next refresher cycle'
        ]
      }
    ],
    modules: [
      {
        name: 'CPR & AED Competency Check',
        description: 'Mandatory resuscitation and defibrillator assessment per NRR guidelines.'
      },
      {
        name: 'LOTUS Casualty Scenarios',
        description: 'Lifelike simulations of acute trauma, shock, and sudden medical conditions.'
      },
      {
        name: 'Bandaging & Immobilization',
        description: 'Refreshing wound dressings, pressure bandages, and fracture support.'
      },
      {
        name: 'Updated First Aid Guidelines',
        description: 'Applying the latest evidence-based changes in Dutch First Aid protocols.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80&w=800',
    eventFilter: {
      categories: ['EHBO', 'FIRST AID'],
      titleKeywords: ['herhaling', 'refresher']
    }
  },
  {
    slug: 'ehak',
    category: 'EHBO',
    categoryTitle: 'First Aid & CPR',
    categoryUrl: '/en/first-aid-course',
    title: 'EHAK — Paediatric First Aid',
    shortTitle: 'EHAK (Paediatric First Aid)',
    tagline: 'Accredited First Aid for Babies & Children compliant with the Dutch Childcare Act (Wet IKK)',
    price: '€ 145.00',
    duration: 'E-learning + 1 practical session',
    spotsText: 'Wet IKK Accredited',
    languages: ['Dutch', 'English'],
    target: 'For daycare professionals, childminders (gastouders), after-school care staff, primary school teachers, au pairs, and parents or grandparents.',
    requirements: 'No prior training required',
    exam: 'Online e-learning + practical infant & child CPR check',
    certification: 'Official Wet IKK accredited Paediatric First Aid Certificate (valid 2 years)',
    inclusions: [
      'Online EHAK e-learning',
      'Infant & child manikins',
      'Official Wet IKK diploma',
      'Lunch, coffee & free parking'
    ],
    heroBullets: [
      'E-learning + practical day',
      'Wet IKK childcare certified',
      'Infant & child CPR',
      'Health insurer reimbursable'
    ],
    suitableForHtml: [
      'Working in Dutch daycare, after-school care (BSO), or as a registered childminder (<em>gastouder</em>)? Under the <strong>Dutch Childcare Act (Wet IKK)</strong>, at least one adult holding an officially recognized Paediatric First Aid certificate must be present at all times. Our <strong>EHAK (Eerste Hulp aan Kinderen)</strong> course awards an official Het Oranje Kruis certificate listed on the government Wet IKK register.',
      'Parents, expectant parents, au pairs, and grandparents are equally welcome — most Dutch supplementary health insurers reimburse Paediatric First Aid courses. Looking for full adult + child First Aid certification? View <a href="/en/courses/ehbo-basis" class="text-brand-primary font-semibold underline hover:text-brand-secondary">First Aid Basic</a>, or book an <a href="/en/incompany-training" class="text-brand-primary font-semibold underline hover:text-brand-secondary">Incompany training for your daycare center or school</a>.'
    ],
    learningOutcomes: [
      'Perform infant (0–1 yr) and child (1 yr–puberty) CPR including paediatric AED operation',
      'Clear airway obstructions and choking rapidly in babies and toddlers',
      'Recognize childhood emergencies such as febrile seizures, croup, meningitis, and anaphylaxis',
      'Treat falls, concussions, burns, poisoning, knocked-out teeth, and nosebleeds calmly'
    ],
    programIntro: 'Children are not small adults — their anatomy, airways, and stress responses require specialized techniques. You complete the interactive e-learning at home before practicing hands-on on infant and child manikins.',
    programSteps: [
      {
        title: '1. Interactive Paediatric E-learning',
        description: 'Complete the child-focused online modules whenever it suits your schedule:',
        items: [
          'Recognizing danger signs in infants and young children (ABCDE/vital signs)',
          'Childproofing, poisoning prevention, childhood illnesses, and minor injuries'
        ]
      },
      {
        title: '2. Hands-On Practical Session (Infant & Child Manikins)',
        description: 'Practice life-saving paediatric interventions under supervision of an accredited instructor:',
        items: [
          '5 initial rescue breaths, 15:2 paediatric chest compressions, and child AED pads',
          'Back blows and chest/abdominal thrusts for choking babies and children',
          'Bandaging, cooling burns, EpiPen trainer practice, and reassuring frightened children'
        ]
      },
      {
        title: '3. Official Wet IKK Registration & Certificate',
        description: 'Upon passing the practical session, your certificate is officially registered:',
        items: [
          'Het Oranje Kruis Eerste Hulp aan Kinderen certificate (valid 2 years, GGD/Wet IKK approved)',
          'Invoice ready for employer compliance records or health insurer reimbursement'
        ]
      }
    ],
    modules: [
      {
        name: 'Infant & Child CPR + AED',
        description: 'Resuscitation protocols (5 rescue breaths, 15:2 ratio) and paediatric AED pads.'
      },
      {
        name: 'Choking & Airway Obstruction',
        description: 'Safe back blows and chest/abdominal thrusts for infants and children.'
      },
      {
        name: 'Acute Childhood Illnesses',
        description: 'Responding to febrile seizures, croup, severe allergies, and meningitis signs.'
      },
      {
        name: 'Falls, Burns & Poisoning',
        description: 'Treating head bumps, scalds, swallowed substances, wounds, and dental trauma.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&q=80&w=800',
    eventFilter: {
      categories: ['EHBO', 'FIRST AID', 'EHAK'],
      titleKeywords: ['ehak', 'kinder', 'child', 'paediatric']
    }
  },
  {
    slug: 'aed-reanimatie',
    category: 'EHBO',
    categoryTitle: 'First Aid & CPR',
    categoryUrl: '/en/first-aid-course',
    title: 'AED & CPR Resuscitation (BLS)',
    shortTitle: 'AED / CPR',
    tagline: 'Learn life-saving resuscitation and AED operation within the critical first 6 minutes',
    price: '€ 95.00',
    duration: 'Half day / evening (3.5 hours)',
    spotsText: 'NRR Certified',
    languages: ['Dutch', 'English'],
    target: 'For companies, sports clubs, citizen responders (HartslagNu), and individuals wanting to act immediately and effectively during sudden cardiac arrest.',
    requirements: 'No prior training required',
    exam: 'Practical assessment on QCPR feedback manikins',
    certification: 'Official NRR Basic Life Support (CPR & AED) Certificate',
    inclusions: [
      'QCPR manikins & AEDs',
      'NRR certified instructor',
      'Official BLS certificate',
      'Coffee, tea & free parking'
    ],
    heroBullets: [
      'Half day (3.5 hours)',
      'NRR certified BLS',
      'HartslagNu responder ready',
      'QCPR feedback manikins'
    ],
    suitableForHtml: [
      'During sudden cardiac arrest, brain damage begins within 4 to 6 minutes — long before an ambulance typically arrives. Immediate chest compressions and an AED double or triple survival rates. In this compact <strong>3.5-hour AED & CPR (Basic Life Support) course</strong> accredited by the <strong>Dutch Resuscitation Council (NRR)</strong>, anyone can master life-saving resuscitation.',
      'Upon completion, you can register as a civilian responder with <strong>HartslagNu</strong> (the national 112 citizen alert network) and often claim reimbursement via supplementary Dutch health insurance. Need full workplace emergency certification? Explore <a href="/en/courses/bhv-basis" class="text-brand-primary font-semibold underline hover:text-brand-secondary">BHV Basic</a>, <a href="/en/courses/ehbo-basis" class="text-brand-primary font-semibold underline hover:text-brand-secondary">First Aid Basic</a>, or book an <a href="/en/incompany-training" class="text-brand-primary font-semibold underline hover:text-brand-secondary">Incompany CPR workshop</a>.'
    ],
    learningOutcomes: [
      'Recognize cardiac arrest (unresponsiveness and abnormal/agonal breathing) within seconds',
      'Alert 112 on speakerphone and dispatch someone to fetch the nearest AED',
      'Deliver consistent high-quality chest compressions and rescue breaths (30:2 ratio)',
      'Connect and operate any brand of Automated External Defibrillator safely',
      'Place breathing unconscious casualties in the recovery position and relieve severe choking'
    ],
    programIntro: 'Guided by an NRR-certified instructor, you spend almost the entire 3.5-hour workshop practicing hands-on with real-time digital QCPR compression feedback and multiple AED trainer models.',
    programSteps: [
      {
        title: '1. Recognizing Cardiac Arrest & 112 Activation',
        description: 'Overcome hesitation by following a clear, repeatable step-by-step check:',
        items: [
          'Scene safety, consciousness check, airway opening (chin lift), and spotting agonal gasping',
          'Immediate 112 ambulance call and locating public/workplace AED cabinets'
        ]
      },
      {
        title: '2. QCPR Resuscitation & Multi-Brand AED Drills',
        description: 'Train muscle memory on smart manikins measuring exact depth (5–6 cm) and tempo (100–120 bpm):',
        items: [
          '30:2 chest compressions and rescue breaths solo and in two-rescuer rotation',
          'Rapid bare-chest electrode placement and safe shock delivery with various AED trainers'
        ]
      },
      {
        title: '3. Choking, Recovery Position & NRR Certification',
        description: 'Master complementary life-saving skills and receive your recognized BLS credential:',
        items: [
          'Back blows, Heimlich abdominal thrusts, and stable recovery position',
          'Official NRR-recognized BLS certificate eligible for HartslagNu citizen responder sign-up'
        ]
      }
    ],
    modules: [
      {
        name: 'Cardiac Arrest & 112 Alert',
        description: 'Checking consciousness and breathing quickly and alerting emergency services.'
      },
      {
        name: 'High-Quality CPR (30:2)',
        description: 'Practicing 5–6 cm chest compressions and rescue breaths with QCPR feedback.'
      },
      {
        name: 'Rapid AED Deployment',
        description: 'Attaching electrode pads and following voice prompts safely on any AED.'
      },
      {
        name: 'Recovery Position & Choking',
        description: 'Protecting the airway in unconsciousness and clearing severe choking.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1571772996211-2f02c9727629?auto=format&fit=crop&q=80&w=800',
    eventFilter: {
      categories: ['EHBO', 'FIRST AID', 'AED', 'CPR', 'REANIMATIE'],
      titleKeywords: ['reanimatie', 'aed', 'cpr']
    }
  },

  // ==========================================
  // 3. VCA
  // ==========================================
  {
    slug: 'vca-basis',
    category: 'VCA',
    categoryTitle: 'VCA Certifications',
    categoryUrl: '/en/vca-course',
    title: 'VCA Basic (B-VCA)',
    shortTitle: 'VCA Basic',
    tagline: 'Official Basic Safety VCA classroom training with same-day SSVV examination',
    price: '€ 195.00',
    duration: '1 course day + direct exam',
    spotsText: 'Includes SSVV CBT Exam',
    languages: ['Dutch', 'English'],
    target: 'For operational workers, technicians, installers, construction staff, and logistics personnel working on VCA-mandated project sites.',
    requirements: 'No prior education required (valid ID for exam)',
    exam: 'Official digital CBT exam (40 questions, 60 min, ≥64.5% pass mark)',
    certification: 'Official SSVV B-VCA Diploma + CDR registration (valid 10 years)',
    inclusions: [
      '1-day classroom training',
      'Official SSVV CBT exam',
      '10-year CDR registration',
      'Lunch, coffee & free parking'
    ],
    heroBullets: [
      '1 day + direct exam',
      'Official SSVV B-VCA',
      '10-year CDR registration',
      'Read-aloud exam option'
    ],
    suitableForHtml: [
      'Are you an operational technician, builder, mechanic, or maintenance worker entering construction, industrial, or infrastructure sites? Most Dutch main contractors require a valid <strong>Basic Safety VCA (B-VCA)</strong> diploma. In one focused training day at Edusafe, our instructor prepares you thoroughly for the official <strong>40-question SSVV CBT exam</strong> held directly at the end of the afternoon (including optional audio read-aloud support). Upon passing, your diploma is registered for <strong>10 years in the Central Diploma Register (CDR)</strong>.',
      'Are you a site supervisor, foreman, or a <strong>self-employed contractor / freelancer (ZZP)</strong>? Note that principal contractors require ZZP professionals and supervisors to hold the 70-question <a href="/en/courses/vca-vol" class="text-brand-primary font-semibold underline hover:text-brand-secondary">VCA-VOL diploma</a> instead of B-VCA!',
      'Already studied the material independently and only need to sit the test? Book a <a href="/en/courses/vca-examen" class="text-brand-primary font-semibold underline hover:text-brand-secondary">Standalone VCA Exam</a> or request <a href="/en/incompany-training" class="text-brand-primary font-semibold underline hover:text-brand-secondary">Incompany VCA group training</a>.'
    ],
    learningOutcomes: [
      'Apply Dutch Arbowet safety rights, duties, work permits, and Last Minute Risk Analysis (LMRA)',
      'Identify hazardous substances, GHS hazard pictograms, and exposure prevention measures',
      'Prevent fires and explosions and respond appropriately to site alarms and emergencies',
      'Work safely with power tools, hoisting gear, forklifts, scaffolding, and confined spaces',
      'Select and wear mandatory Personal Protective Equipment (PPE) for hearing, eyes, lungs, and falls'
    ],
    programIntro: 'Our 1-day VCA Basic course combines clear, exam-focused classroom teaching and interactive mock questions with the official SSVV computer exam at the end of the same afternoon.',
    programSteps: [
      {
        title: '1. Morning Session: Legislation, Risks & Hazardous Substances',
        description: 'Our experienced VCA trainer breaks down core exam topics using real site examples:',
        items: [
          'Arbowet regulations, safety signage, work permits, and conducting an LMRA',
          'Toxic substances, GHS symbols, fire/explosion hazards, and electricity risks'
        ]
      },
      {
        title: '2. Afternoon Session: Safe Equipment, Working at Height & Mock Exam',
        description: 'Master safe operational procedures and practice official SSVV-style exam questions:',
        items: [
          'Hand/power tools, hoisting, ladders, mobile scaffolds, MEWPs, and confined spaces',
          'PPE selection and targeted practice questions covering common exam traps'
        ]
      },
      {
        title: '3. Official SSVV CBT Exam (16:00) & CDR Registration',
        description: 'Sit the official computer-based exam right in the same training room:',
        items: [
          '40 questions in 60 minutes (pass mark ≥64.5% / 2580 points, optional audio read-aloud)',
          'Instant screen result plus 10-year registration in the national SSVV Central Diploma Register'
        ]
      }
    ],
    modules: [
      {
        name: 'Legislation, Permits & LMRA',
        description: 'Arbowet rights and duties, work permits, safety signs, and workplace risk checks.'
      },
      {
        name: 'Hazardous Substances & Health',
        description: 'GHS pictograms, exposure limits, asbestos awareness, and safe handling.'
      },
      {
        name: 'Fire, Explosion & Electricity',
        description: 'Preventing ignition sources, ATEX zones, and working safely near electrical systems.'
      },
      {
        name: 'Tools, Hoisting & Height Work',
        description: 'Safe use of machinery, cranes, ladders, scaffolds, and confined space entry.'
      },
      {
        name: 'Personal Protective Equipment',
        description: 'Choosing, inspecting, and wearing helmets, harnesses, respirators, and safety shoes.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800',
    eventFilter: {
      categories: ['VCA'],
      titleKeywords: ['basis', 'basic']
    }
  },
  {
    slug: 'vca-vol',
    category: 'VCA',
    categoryTitle: 'VCA Certifications',
    categoryUrl: '/en/vca-course',
    title: 'VCA-VOL (Safety for Operational Supervisors)',
    shortTitle: 'VCA-VOL',
    tagline: 'Mandatory SSVV safety certification for operational supervisors, foremen, and ZZP freelancers',
    price: '€ 225.00',
    duration: '1 course day + direct exam',
    spotsText: 'Supervisors & Freelancers',
    languages: ['Dutch', 'English'],
    target: 'For site managers, project leaders, foremen, engineers, and self-employed contractors (ZZP) working independently or supervising teams on VCA sites.',
    requirements: 'No prior B-VCA diploma required (valid ID for exam)',
    exam: 'Official digital VOL-VCA CBT exam (70 questions, 75 min, ≥64.5% pass mark)',
    certification: 'Official SSVV VOL-VCA Diploma + CDR registration (valid 10 years)',
    inclusions: [
      'Intensive VOL-VCA training',
      'Official 70-question exam',
      '10-year CDR registration',
      'Lunch, coffee & free parking'
    ],
    heroBullets: [
      '1 day + direct exam',
      'Supervisors & ZZP mandatory',
      'Official SSVV VOL-VCA',
      '10-year CDR registration'
    ],
    suitableForHtml: [
      'Do you supervise operational staff on construction, engineering, or petrochemical sites — or do you work independently as a <strong>self-employed contractor / freelancer (ZZP)</strong>? Under SSVV rules, both operational supervisors and ZZP contractors must hold <strong>VOL-VCA (Safety for Operational Supervisors)</strong> rather than B-VCA. No prior VCA Basic certificate is required to enroll.',
      'In a single intensive day, our instructor prepares you for the official <strong>70-question VOL-VCA computer exam</strong> (75 minutes, ≥64.5% pass mark) held right after class, granting <strong>10-year registration in the Central Diploma Register (CDR)</strong>.',
      'Need certification for non-supervisory employees? See <a href="/en/courses/vca-basis" class="text-brand-primary font-semibold underline hover:text-brand-secondary">VCA Basic (B-VCA)</a>. Working at a staffing agency? View <a href="/en/courses/vcu-vil" class="text-brand-primary font-semibold underline hover:text-brand-secondary">VCU-VIL</a>. Also looking to certify your entire company for VCA* or VCA**? Explore our <a href="/en/services/certificeringen" class="text-brand-primary font-semibold underline hover:text-brand-secondary">VCA Corporate Certification consultancy</a>.'
    ],
    learningOutcomes: [
      'Enforce Dutch Arbowet, European safety directives, and VCA*/VCA** company requirements on-site',
      'Compile and review RI&E assessments, Task Risk Analyses (TRA), and work permits',
      'Lead effective toolbox meetings, workplace safety inspections, and safe behavior coaching',
      'Manage high-risk operations including confined spaces, hot work, excavation, and working at height',
      'Coordinate site emergency plans, incident reporting, and root-cause accident investigations'
    ],
    programIntro: 'This high-yield 1-day VOL-VCA training focuses specifically on supervisory safety management and scenario-based SSVV exam questions, concluding directly with the official 70-question CBT exam.',
    programSteps: [
      {
        title: '1. Morning Session: Supervisory Law, RI&E/TRA & Safety Culture',
        description: 'Master legal responsibilities, risk prevention frameworks, and leadership duties:',
        items: [
          'Arbowet, EU directives, Labour Authority enforcement, and VCA company certification',
          'Prevention hierarchy, RI&E, Task Risk Analysis (TRA), LMRA, and toolbox meetings'
        ]
      },
      {
        title: '2. Afternoon Session: High-Risk Operations, Ergonomics & Mock Exams',
        description: 'Analyze technical hazards from a supervisor’s perspective and drill VOL-VCA case questions:',
        items: [
          'Hazardous substances, ATEX explosion safety, electricity, cranes, scaffolds, and PPE oversight',
          'Emergency response coordination, accident investigation, and timed practice questions'
        ]
      },
      {
        title: '3. Official VOL-VCA CBT Exam & 10-Year CDR Registration',
        description: 'Complete the official SSVV examination on-site at the end of the training day:',
        items: [
          '70 multiple-choice and interactive questions in 75 minutes (≥64.5% / 4515 points to pass)',
          'Immediate score on screen and official 10-year SSVV CDR diploma registration'
        ]
      }
    ],
    modules: [
      {
        name: 'Arbowet, EU Law & VCA Rules',
        description: 'Legal duty of care, Labour Authority powers, and VCA company standards.'
      },
      {
        name: 'Risk Management (RI&E & TRA)',
        description: 'Drafting Task Risk Analyses, issuing work permits, and verifying LMRAs.'
      },
      {
        name: 'Safety Leadership & Toolboxes',
        description: 'Motivating safe behavior, holding toolbox talks, and conducting site audits.'
      },
      {
        name: 'Technical & High-Risk Tasks',
        description: 'Supervising hazardous chemicals, ATEX zones, hoisting, height, and confined spaces.'
      },
      {
        name: 'Emergencies & Accident Analysis',
        description: 'Executing site emergency plans and investigating near-misses and accidents.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800',
    eventFilter: {
      categories: ['VCA'],
      titleKeywords: ['vol']
    }
  },
  {
    slug: 'vcu-vil',
    category: 'VCA',
    categoryTitle: 'VCA Certifications',
    categoryUrl: '/en/vca-course',
    title: 'VCU-VIL (Safety for Employment Agencies)',
    shortTitle: 'VCU-VIL',
    tagline: 'Official SSVV VIL-VCU certification for consultants and managers at staffing and secondment agencies',
    price: '€ 225.00',
    duration: '1 course day + direct exam',
    spotsText: 'Staffing & Recruitment',
    languages: ['Dutch', 'English'],
    target: 'For staffing consultants (intercedenten), recruiters, and account managers at VCU-certified employment and secondment agencies supplying workers to VCA companies.',
    requirements: 'No prior VCA diploma required (valid ID for exam)',
    exam: 'Official digital VIL-VCU CBT exam (70 questions, 75 min, ≥64.5% pass mark)',
    certification: 'Official SSVV VIL-VCU Diploma + CDR registration (valid 10 years)',
    inclusions: [
      'VIL-VCU study & mock exams',
      'Official 70-question exam',
      '10-year CDR registration',
      'Lunch, coffee & free parking'
    ],
    heroBullets: [
      '1 day + direct exam',
      'Staffing & VCU agencies',
      'Official SSVV VIL-VCU',
      '10-year CDR registration'
    ],
    suitableForHtml: [
      'Does your recruitment, temporary staffing, or secondment agency supply technical and industrial personnel to VCA-certified client companies? To achieve and maintain corporate <strong>VCU certification</strong> (Safety and Health Checklist for Employment Agencies), intermediaries and account managers must hold the official <strong>VIL-VCU diploma</strong>.',
      'In one focused training day followed directly by the <strong>70-question SSVV CBT exam</strong>, you learn both technical VCA workplace hazards and the specific legal division of responsibilities between staffing agency and hiring client under the Dutch Arbowet and Waadi Act. Valid for <strong>10 years in the Central Diploma Register (CDR)</strong>.',
      'Need full corporate consultancy to get your staffing agency VCU-certified? Explore our <a href="/en/services/certificeringen" class="text-brand-primary font-semibold underline hover:text-brand-secondary">VCU & VCA Corporate Certification service</a>, or book <a href="/en/courses/vca-basis" class="text-brand-primary font-semibold underline hover:text-brand-secondary">VCA Basic</a> for your temporary workers.'
    ],
    learningOutcomes: [
      'Navigate legal duty of care and chain liability (Arbowet & Waadi) between agency and client firm',
      'Intake temporary job requests systematically by verifying site hazards, RI&E/TRA, and qualifications',
      'Inform temporary workers properly about workplace risks, safety rules, and required PPE',
      'Fulfill VCU management system procedures, workplace evaluations, and accident reporting duties'
    ],
    programIntro: 'The VIL-VCU course combines VOL-VCA operational safety knowledge with dedicated staffing-sector compliance modules, culminating in the official 70-question SSVV exam on the same afternoon.',
    programSteps: [
      {
        title: '1. Legal Chain Liability & VCU Intake Procedures',
        description: 'Understand the exact statutory responsibilities of the staffing agency versus the hiring client:',
        items: [
          'Arbowet Article 5, Waadi legislation, and VCU management system requirements',
          'Screening client risk inventories, medical requirements, and required VCA/operator certificates'
        ]
      },
      {
        title: '2. Workplace Hazards, PPE Provision & Practice Questions',
        description: 'Recognize technical risks across construction, logistics, and industry so you match workers safely:',
        items: [
          'Hazardous substances, fire/explosion, electricity, working at height, and PPE agreements',
          'Accident notification workflows and targeted 70-question VIL-VCU mock drills'
        ]
      },
      {
        title: '3. Official VIL-VCU CBT Exam & 10-Year CDR Registration',
        description: 'Take the official computer-based SSVV exam immediately following the training:',
        items: [
          '70 questions in 75 minutes (pass mark ≥64.5% / 4515 points) with instant result',
          'Official SSVV VIL-VCU diploma registered for 10 years in the Central Diploma Register'
        ]
      }
    ],
    modules: [
      {
        name: 'Agency vs. Client Liability',
        description: 'Statutory duty of care under Dutch Arbowet and Waadi chain regulations.'
      },
      {
        name: 'Order Intake & Risk Screening',
        description: 'Assessing client workplace risks, required certificates, and safety rules.'
      },
      {
        name: 'Worker Briefing & PPE Duties',
        description: 'Delivering mandatory safety instructions and arranging appropriate PPE.'
      },
      {
        name: 'VCU System & Incident Reporting',
        description: 'Maintaining VCU audit compliance and handling workplace accident reports.'
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
    categoryTitle: 'VCA Certifications',
    categoryUrl: '/en/vca-course',
    title: 'Standalone VCA Exam (B-VCA, VOL-VCA & VIL-VCU)',
    shortTitle: 'VCA Exam',
    tagline: 'Book an official standalone SSVV VCA computer exam directly with instant results',
    price: '€ 95.00',
    duration: '60 to 75 minutes (exam only)',
    spotsText: 'Direct Exam Booking',
    languages: ['Dutch', 'English'],
    target: 'For candidates who have prepared via self-study or e-learning, need a resit, or hold an expiring 10-year VCA certificate and only wish to sit the official CBT exam.',
    requirements: 'Valid government ID on the exam day',
    exam: 'Official SSVV CBT exam (40 or 70 questions, ≥64.5% pass mark)',
    certification: 'Official SSVV Diploma + 10-year CDR registration',
    inclusions: [
      'Official SSVV CBT exam',
      'Instant score on screen',
      '10-year CDR registration',
      'Coffee, tea & free parking'
    ],
    heroBullets: [
      '60 to 75 min exam',
      'B-VCA, VOL-VCA or VIL',
      'Instant screen result',
      '10-year CDR registration'
    ],
    suitableForHtml: [
      'Have you already mastered the VCA syllabus through self-study or <a href="/en/e-learning" class="text-brand-primary font-semibold underline hover:text-brand-secondary">online E-learning</a>, or is your current 10-year VCA diploma expiring soon? Book a <strong>Standalone VCA Exam</strong> at our examination location without attending a full classroom day. You see your preliminary score on screen the second you click submit.',
      'Choose the exact SSVV exam matching your role: <strong>B-VCA</strong> (40 questions, 60 min, optional audio read-aloud) for operational employees, <strong>VOL-VCA</strong> (70 questions, 75 min) mandatory for supervisors and ZZP freelancers, or <strong>VIL-VCU</strong> (70 questions, 75 min) for staffing consultants.',
      'Prefer a full 1-day refresher with an experienced instructor before sitting the exam? Choose <a href="/en/courses/vca-basis" class="text-brand-primary font-semibold underline hover:text-brand-secondary">VCA Basic (1-day course + exam)</a> or <a href="/en/courses/vca-vol" class="text-brand-primary font-semibold underline hover:text-brand-secondary">VCA-VOL (1-day course + exam)</a>.'
    ],
    learningOutcomes: [
      'Sit an officially proctored SSVV/PBNA computer-based exam (CBT) in a quiet setting',
      'Receive your preliminary pass/fail point score immediately upon finishing',
      'Obtain visible proof in the national Central Diploma Register (CDR) within 1–2 business days',
      'Receive your official digital SSVV VCA diploma valid for 10 years across Benelux worksites'
    ],
    programIntro: 'Booking a standalone VCA exam at Edusafe is fast and straightforward: select your exam level, bring valid identification, and receive your score on screen right after finishing.',
    programSteps: [
      {
        title: '1. Select Your Exam Level (B-VCA, VOL-VCA or VIL-VCU)',
        description: 'Indicate during booking which official SSVV examination you wish to sit:',
        items: [
          'B-VCA: 40 questions, 60 minutes, ≥2580/4000 points (64.5%), audio read-aloud included',
          'VOL-VCA or VIL-VCU: 70 questions, 75 minutes, ≥4515/7000 points (64.5%)'
        ]
      },
      {
        title: '2. ID Check & Proctored Computer-Based Exam (CBT)',
        description: 'Arrive 15 minutes early at our exam venue with a valid passport, ID card, or driver’s license:',
        items: [
          'Independent exam proctor verifies your ID and launches your personal exam terminal',
          'User-friendly digital interface featuring multiple-choice, ordering, and hotspot questions'
        ]
      },
      {
        title: '3. Instant Screen Score & 10-Year CDR Registration',
        description: 'No waiting weeks for paper mail — you know immediately whether you passed:',
        items: [
          'Preliminary pass/fail score displayed instantly on your exam monitor',
          'Official SSVV diploma + 10-year Central Diploma Register (CDR) entry upon passing'
        ]
      }
    ],
    modules: [
      {
        name: 'B-VCA Exam (40 Questions)',
        description: '60-minute operational safety exam including optional headphones read-aloud audio.'
      },
      {
        name: 'VOL-VCA Exam (70 Questions)',
        description: '75-minute supervisory safety exam mandatory for foremen and ZZP contractors.'
      },
      {
        name: 'VIL-VCU Exam (70 Questions)',
        description: '75-minute safety exam tailored to recruiters and managers at VCU agencies.'
      },
      {
        name: 'Official CDR Registration',
        description: 'Direct 10-year listing in the public SSVV Central Diploma Register (cdr.ssvv.nl).'
      }
    ],
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800',
    eventFilter: {
      categories: ['VCA'],
      titleKeywords: ['examen', 'vca', 'exam']
    }
  },

  // ==========================================
  // 4. TRANSPORT
  // ==========================================
  {
    slug: 'heftruck',
    category: 'Transport',
    categoryTitle: 'Transport & Logistics',
    categoryUrl: '/en/forklift-course',
    title: 'Forklift Certificate (Basic & Refresher)',
    shortTitle: 'Forklift',
    tagline: 'Earn your official Arbowet-compliant forklift certificate in 1 day',
    price: '€ 195.00',
    duration: '1 day (Basic) or half-day (Refresher)',
    spotsText: 'Arbowet Compliant',
    languages: ['Dutch', 'English'],
    target: 'For warehouse, production, and logistics personnel who want to operate a counterbalance forklift safely, damage-free, and with demonstrable statutory competence.',
    requirements: 'Min. age 16 (supervised) or 18 (independent); no car license needed',
    exam: 'Short theory test & practical driving exam on forklift circuit',
    certification: 'Official Edusafe Forklift Certificate + wallet card (valid 5 years)',
    inclusions: [
      'Theory & forklift driving',
      'Official theory & drive exam',
      '5-year card & diploma',
      'Lunch, coffee & free parking'
    ],
    heroBullets: [
      '1 day (or half-day)',
      'Arbowet Art. 7.17c certified',
      'No car license needed',
      'Valid for 5 years'
    ],
    suitableForHtml: [
      'Under <strong>Article 7.17c of the Dutch Working Conditions Decree (Arbobesluit)</strong>, employers must prove to the Netherlands Labour Authority and warehouse insurers that every forklift operator has received thorough, specific instruction. In our <strong>1-day Forklift Certificate course</strong> (or half-day refresher for experienced drivers), you earn an officially recognized 5-year diploma and wallet card.',
      'You can participate from <strong>age 16</strong> (operating under supervision until 18) or <strong>age 18</strong> (operating independently) — <strong>no car driver’s license (Category B) is required</strong>.',
      'Also working with high-bay racking or electric pallet trucks? Combine or explore our <a href="/en/courses/reachtruck" class="text-brand-primary font-semibold underline hover:text-brand-secondary">Reach Truck Certificate</a>, <a href="/en/courses/stapelaar" class="text-brand-primary font-semibold underline hover:text-brand-secondary">Pallet Stacker & EPT</a>, <a href="/en/courses/hoogwerker" class="text-brand-primary font-semibold underline hover:text-brand-secondary">Aerial Work Platform (MEWP)</a>, or schedule an <a href="/en/incompany-training" class="text-brand-primary font-semibold underline hover:text-brand-secondary">Incompany training on your own trucks</a>.'
    ],
    learningOutcomes: [
      'Execute a complete pre-use safety inspection and battery/LPG check before every shift',
      'Read load capacity charts accurately and keep the load within the forklift stability triangle',
      'Maneuver smoothly and damage-free through narrow warehouse aisles, ramps, and blind corners',
      'Stack and retrieve pallets safely in racking systems and load/unload lorries efficiently'
    ],
    programIntro: 'Our Forklift course pairs concise, practical safety theory in the morning with extensive driving and stacking practice on modern forklifts, ending directly with your practical exam.',
    programSteps: [
      {
        title: '1. Practical Forklift Theory & Stability Principles',
        description: 'Understand the physics behind tip-overs and warehouse collisions before taking the wheel:',
        items: [
          'Arbowet Art. 7.17c rules, daily pre-use inspection, and pedestrian safety',
          'Stability triangle, load center distance, load capacity plates, and short theory check'
        ]
      },
      {
        title: '2. Intensive Driving, Maneuvering & Stacking Practice',
        description: 'Build precision and confidence on our realistic warehouse obstacle and racking circuit:',
        items: [
          'Rear-wheel steering control, slalom, reversing with large loads, and fork tilt management',
          'Placing and retrieving Euro and block pallets at height and loading trailers'
        ]
      },
      {
        title: '3. Practical Assessment & 5-Year Forklift Certificate',
        description: 'Demonstrate safe, controlled forklift operation to your certified logistics instructor:',
        items: [
          'Immediate feedback and award of your official Forklift Certificate + wallet card (valid 5 years)',
          'Option to combine Forklift + Reach Truck certification on the same day for experienced drivers'
        ]
      }
    ],
    modules: [
      {
        name: 'Pre-Use Check & Maintenance',
        description: 'Inspecting forks, chains, hydraulics, tires, brakes, and battery charging.'
      },
      {
        name: 'Load Chart & Stability Triangle',
        description: 'Calculating safe lifting capacity, center of gravity, and preventing tip-overs.'
      },
      {
        name: 'Precision Driving & Slalom',
        description: 'Steering smoothly in tight aisles, blind corners, and inclines with loads.'
      },
      {
        name: 'Racking & Truck Loading',
        description: 'Safe pallet stacking at height and loading or unloading freight trailers.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800',
    eventFilter: {
      categories: ['HEFTRUCK', 'TRANSPORT', 'FORKLIFT'],
      titleKeywords: ['heftruck', 'forklift']
    }
  },
  {
    slug: 'reachtruck',
    category: 'Transport',
    categoryTitle: 'Transport & Logistics',
    categoryUrl: '/en/forklift-course',
    title: 'Reach Truck Certificate',
    shortTitle: 'Reach Truck',
    tagline: 'Specialized operator training for safe precision work in high-bay warehouses',
    price: '€ 215.00',
    duration: '1 practical day (or half-day refresher)',
    spotsText: 'High-Bay & Precision',
    languages: ['Dutch', 'English'],
    target: 'For warehouse and distribution center operators moving pallets in narrow aisles and stacking at high elevations with a reach truck.',
    requirements: 'Min. age 16 (supervised) or 18 (independent); no car license needed',
    exam: 'Short theory test & high-bay practical precision exam',
    certification: 'Official Edusafe Reach Truck Certificate + wallet card (valid 5 years)',
    inclusions: [
      'High-bay reach training',
      'Theory & precision exam',
      '5-year card & diploma',
      'Lunch, coffee & free parking'
    ],
    heroBullets: [
      '1 day (or half-day)',
      'High-bay racking practice',
      'Arbowet Art. 7.17c certified',
      'Valid for 5 years'
    ],
    suitableForHtml: [
      'Operating a reach truck requires fundamentally different skills than a counterbalance forklift: sideways seating, direct 180°/360° wheel steering, rigid wheels, and extending a heavy reach mast up to 10+ meters high. Under <strong>Article 7.17c of the Dutch Arbobesluit</strong>, operators working with reach trucks must hold demonstrable machine-specific certification.',
      'Open from <strong>age 16</strong> (under supervision) or <strong>age 18</strong> (independent operation) with <strong>no car driver’s license required</strong>. Your official Edusafe Reach Truck Certificate and wallet card remain valid for <strong>5 years</strong>.',
      'Want to earn both your <a href="/en/courses/heftruck" class="text-brand-primary font-semibold underline hover:text-brand-secondary">Forklift Certificate</a> and Reach Truck Certificate in a combined program, add <a href="/en/courses/stapelaar" class="text-brand-primary font-semibold underline hover:text-brand-secondary">Pallet Stacker & EPT</a>, or train <a href="/en/incompany-training" class="text-brand-primary font-semibold underline hover:text-brand-secondary">Incompany inside your own high-bay warehouse</a>? Contact us for tailored options.'
    ],
    learningOutcomes: [
      'Master sideways posture, reverse-steering orientation, and tight aisle turning circles',
      'Operate the extending reach carriage, mast tilt, and side-shift smoothly without mast sway',
      'Store and retrieve pallets safely in high-bay racking without striking beams or uprights',
      'Prevent warehouse collisions, falling loads, and ergonomic neck/shoulder strain'
    ],
    programIntro: 'You learn the unique steering and high-elevation stability dynamics of the reach truck step by step, practicing extensively in narrow aisles and high-bay pallet racking.',
    programSteps: [
      {
        title: '1. Reach Truck Dynamics, Load Diagrams & Inspection',
        description: 'Understand how extending the mast shifts the center of gravity at high lift heights:',
        items: [
          'Daily pre-shift check, floor flatness requirements, and Arbowet Art. 7.17c compliance',
          'Residual capacity at high elevation, racking damage reporting, and short theory test'
        ]
      },
      {
        title: '2. Steering Control & High-Bay Stacking Practice',
        description: 'Develop muscle memory for 180°/360° steering and millimeter-accurate mast control:',
        items: [
          'Smooth acceleration, braking, and 90-degree turns inside narrow racking aisles',
          'Reaching, tilting, and side-shifting loads cleanly at multiple racking levels'
        ]
      },
      {
        title: '3. Practical Precision Exam & 5-Year Certification',
        description: 'Complete the practical warehouse circuit safely and accurately:',
        items: [
          'Official Edusafe Reach Truck Certificate + physical wallet card (valid 5 years)',
          'Proof of operator competence for Labour Authority audits and logistics clients'
        ]
      }
    ],
    modules: [
      {
        name: 'Sideways Posture & Steering',
        description: 'Adapting to sideways seating, ergonomics, and sensitive 360° steering.'
      },
      {
        name: 'Reach Mast, Tilt & Side-Shift',
        description: 'Controlling mast extension, fork tilt, and side-shift smoothly under load.'
      },
      {
        name: 'High-Bay Racking Operations',
        description: 'Placing and retrieving pallets accurately at high elevations without beam impact.'
      },
      {
        name: 'Aisle Safety & Risk Prevention',
        description: 'Pedestrian awareness, speed discipline, and preventing rack collapses.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=800',
    eventFilter: {
      categories: ['HEFTRUCK', 'TRANSPORT', 'FORKLIFT'],
      titleKeywords: ['reachtruck', 'reach', 'heftruck', 'forklift']
    }
  },
  {
    slug: 'hoogwerker',
    category: 'Transport',
    categoryTitle: 'Transport & Logistics',
    categoryUrl: '/en/forklift-course',
    title: 'Aerial Work Platform (MEWP) Certificate',
    shortTitle: 'Aerial Platform (MEWP)',
    tagline: 'Safe working at height with scissor lifts, telescopic booms, and articulated boom lifts',
    price: '€ 225.00',
    duration: '1 day (theory + practice)',
    spotsText: 'Safe Working at Height',
    languages: ['Dutch', 'English'],
    target: 'For technicians, installers, painters, steel erectors, facade cleaners, and facility staff operating Mobile Elevating Work Platforms (MEWPs).',
    requirements: 'Minimum age 18 and comfortable working at height',
    exam: 'Short theory exam & practical MEWP assessment (incl. emergency lowering)',
    certification: 'Official Aerial Work Platform (MEWP) Certificate + card (valid 5 years)',
    inclusions: [
      'Practice on MEWP categories',
      'Harness & fall training',
      '5-year card & diploma',
      'Lunch, coffee & free parking'
    ],
    heroBullets: [
      '1 day (theory + practice)',
      'MEWP types 1A/1B & 3A/3B',
      'Arbowet Art. 7.17c certified',
      'Valid for 5 years'
    ],
    suitableForHtml: [
      'Working at height carries severe fall, tip-over, and crushing risks. Under <strong>Article 7.17c of the Dutch Arbobesluit</strong> (and VCA site regulations), anyone operating a scissor lift or boom lift must be at least <strong>18 years old</strong> and hold demonstrable operator certification. No car driver’s license is required on private worksites (only when towing or driving on public roads).',
      'Our <strong>1-day Aerial Work Platform (MEWP / Hoogwerker) course</strong> covers static vertical/boom lifts (Categories 1A & 1B) and self-propelled scissor and telescopic/articulated booms (Categories 3A & 3B), awarding an official <strong>5-year certificate and wallet card</strong>.',
      'Entering VCA-mandated construction or industrial plants? Combine your MEWP ticket with <a href="/en/courses/vca-basis" class="text-brand-primary font-semibold underline hover:text-brand-secondary">VCA Basic</a>, add a <a href="/en/courses/heftruck" class="text-brand-primary font-semibold underline hover:text-brand-secondary">Forklift Certificate</a>, or have your climbing gear and harnesses inspected via <a href="/en/services/keuringen" class="text-brand-primary font-semibold underline hover:text-brand-secondary">Safety Equipment Inspections</a>.'
    ],
    learningOutcomes: [
      'Distinguish MEWP categories (1A, 1B, 3A, 3B) and select the right machine for the job',
      'Assess ground bearing capacity, slope limits, outrigger stamping, and maximum wind speed (Beaufort 6)',
      'Wear and anchor a full-body harness with a short restraint lanyard to prevent catapult ejection',
      'Perform daily pre-use checks and execute ground-level emergency lowering rescue procedures'
    ],
    programIntro: 'In one comprehensive day, you master wind/ground stability rules, fall restraint harness fitting, and hands-on basket and ground-control operation across scissor and boom platforms.',
    programSteps: [
      {
        title: '1. MEWP Categories, Ground Stability & Fall Restraint Theory',
        description: 'Learn how overturns, overhead crushing, and catapult ejections happen — and how to prevent them:',
        items: [
          'Arbowet Art. 7.17c rules, MEWP categories (1A/1B/3A/3B), and Beaufort wind limits',
          'Subsoil load distribution, outrigger pads, traffic cordoning, and short theory test'
        ]
      },
      {
        title: '2. Harness Fitting, Pre-Use Check & Ground Emergency Controls',
        description: 'Before elevating, verify every safety system from the ground up:',
        items: [
          'Donning a full-body harness and clipping a short travel-restraint lanyard to the basket anchor',
          'Testing the auxiliary/emergency lowering valve so a colleague on the ground can always rescue you'
        ]
      },
      {
        title: '3. Practical Driving, Positioning at Height & 5-Year Certificate',
        description: 'Operate scissor and boom lifts safely around overhead obstacles:',
        items: [
          'Smooth basket positioning, anti-entrapment awareness, and safe parking/charging',
          'Practical sign-off and award of your 5-year Aerial Work Platform Certificate + card'
        ]
      }
    ],
    modules: [
      {
        name: 'MEWP Categories (1A/1B/3A/3B)',
        description: 'Operating principles of vertical masts, scissor lifts, and articulated/telescopic booms.'
      },
      {
        name: 'Ground Load, Outriggers & Wind',
        description: 'Checking soil stability, setting outrigger pads, and respecting wind limits.'
      },
      {
        name: 'Pre-Use Check & Emergency Descent',
        description: 'Daily technical inspection and operating ground-level emergency lowering.'
      },
      {
        name: 'Harness & Catapult Prevention',
        description: 'Correctly anchoring a full-body harness and short restraint lanyard in the basket.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800',
    eventFilter: {
      categories: ['HEFTRUCK', 'TRANSPORT', 'FORKLIFT'],
      titleKeywords: ['hoogwerker', 'aerial', 'mewp', 'heftruck', 'forklift']
    }
  },
  {
    slug: 'stapelaar',
    category: 'Transport',
    categoryTitle: 'Transport & Logistics',
    categoryUrl: '/en/forklift-course',
    title: 'Pallet Stacker & Electric Pallet Truck (EPT)',
    shortTitle: 'Pallet Stacker & EPT',
    tagline: 'Compact half-day practical certification for walk-behind and ride-on stackers and EPTs',
    price: '€ 145.00',
    duration: 'Half day (4 hours)',
    spotsText: 'Warehouse & Distribution',
    languages: ['Dutch', 'English'],
    target: 'For warehouse staff, order pickers, retail employees, and delivery drivers operating an electric pallet stacker or Electric Pallet Truck (EPT).',
    requirements: 'Minimum age 16, no car driver’s license or prior experience needed',
    exam: 'Practical maneuvering, stacking & safety evaluation',
    certification: 'Official Pallet Stacker & EPT Certificate + wallet card (valid 5 years)',
    inclusions: [
      'Stacker & EPT driving',
      'Crush & battery safety',
      '5-year card & diploma',
      'Coffee, tea & free parking'
    ],
    heroBullets: [
      'Half day (4 hours)',
      'Stacker & EPT combined',
      'Arbowet Art. 7.17c certified',
      'Valid for 5 years'
    ],
    suitableForHtml: [
      'Many employers assume electric pallet trucks (EPTs) and walk-behind stackers require no training — yet they account for a large share of workplace foot, ankle, and crush injuries in Dutch logistics. Under <strong>Article 7.17c of the Dutch Arbobesluit</strong>, demonstrable safety instruction is mandatory for all motorized internal transport equipment.',
      'In just <strong>one 4-hour half-day session</strong> (accessible from <strong>age 16</strong>, no car driver’s license required), employees earn an official <strong>5-year Pallet Stacker & EPT Certificate</strong>.',
      'Need full counterbalance or high-bay warehouse certification instead? View our <a href="/en/courses/heftruck" class="text-brand-primary font-semibold underline hover:text-brand-secondary">Forklift Certificate</a> or <a href="/en/courses/reachtruck" class="text-brand-primary font-semibold underline hover:text-brand-secondary">Reach Truck Certificate</a>, or train your entire warehouse shift <a href="/en/incompany-training" class="text-brand-primary font-semibold underline hover:text-brand-secondary">Incompany on your own equipment</a>.'
    ],
    learningOutcomes: [
      'Perform daily pre-use checks, safe battery charging, and emergency belly-switch verification',
      'Walk and position correctly beside the tiller arm to prevent foot, heel, and wall-crush injuries',
      'Maneuver smoothly in tight aisles, retail floors, loading docks, and lorry tail lifts',
      'Lift and stack pallets stably at elevation within the stacker’s rated residual capacity'
    ],
    programIntro: 'This practical 4-hour training eliminates risky habits with electric pallet trucks and stackers, combining concise safety rules with immediate hands-on driving and stacking drills.',
    programSteps: [
      {
        title: '1. Safety Rules, Crush Prevention & Battery Care',
        description: 'Focus on the #1 accident causes with pedestrian-operated warehouse trucks:',
        items: [
          'Arbowet Art. 7.17c duty, safety shoes, and testing the anti-crush belly reverse button',
          'Safe traction battery charging, load capacity plates, and tail-lift weight limits'
        ]
      },
      {
        title: '2. Hands-On Maneuvering & Stacking Practice',
        description: 'Practice controlled tiller handling in confined spaces and racking bays:',
        items: [
          'Walking safely alongside (never directly ahead of) an EPT on ramps and dock levellers',
          'Precision lifting, lowering, and stacking pallets in racking with the electric stacker'
        ]
      },
      {
        title: '3. Practical Sign-Off & 5-Year Certificate',
        description: 'Demonstrate safe, damage-free handling during the practical check:',
        items: [
          'Award of the official Edusafe Stacker & EPT Certificate + wallet card (valid 5 years)',
          'Full Arbowet compliance proof for your HR and safety file'
        ]
      }
    ],
    modules: [
      {
        name: 'Pre-Use Check & Belly Switch',
        description: 'Testing brakes, horn, emergency belly reverse button, and safe battery charging.'
      },
      {
        name: 'Tight Aisles & Tail Lifts',
        description: 'Controlled maneuvering in narrow spaces, dock levellers, and truck tailgates.'
      },
      {
        name: 'Safe Stacking at Height',
        description: 'Respecting load centers and placing pallets cleanly in racking bays.'
      },
      {
        name: 'Foot & Crush Injury Prevention',
        description: 'Proper body positioning relative to the tiller arm, chassis, and walls.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&q=80&w=800',
    eventFilter: {
      categories: ['HEFTRUCK', 'TRANSPORT', 'FORKLIFT'],
      titleKeywords: ['stapelaar', 'ept', 'stacker', 'heftruck', 'forklift']
    }
  },

  // ==========================================
  // 5. OFFSHORE
  // ==========================================
  {
    slug: 'bosiet',
    category: 'Offshore',
    categoryTitle: 'Offshore Training',
    categoryUrl: '/en/offshore-training',
    title: 'BOSIET with CA-EBS (OPITO)',
    shortTitle: 'BOSIET',
    tagline: 'Mandatory 3-day OPITO basic offshore safety, survival, and helicopter escape training',
    price: '€ 925.00',
    duration: '3 days (OPITO certified)',
    spotsText: 'OPITO Standard',
    languages: ['English', 'Dutch'],
    target: 'For oil, gas, and maritime energy personnel deploying by helicopter or vessel to an offshore installation for the first time (or whose previous OPITO certificate has expired).',
    requirements: 'Valid offshore medical certificate (OEUK / NOGEPA) & government ID',
    exam: 'Continuous practical assessment across all OPITO emergency modules',
    certification: 'Official OPITO BOSIET with CA-EBS Certificate + Vantage registration (valid 4 years)',
    inclusions: [
      '3-day HUET & CA-EBS',
      'Immersion suits & rafts',
      '4-year OPITO Vantage entry',
      'Hot lunch on all days'
    ],
    heroBullets: [
      '3-day OPITO certified',
      'Incl. HUET & CA-EBS',
      '4-year Vantage registration',
      'All offshore gear included'
    ],
    suitableForHtml: [
      'Deploying to an offshore oil & gas platform or maritime energy asset in the North Sea or worldwide? Operators strictly require a valid <strong>OPITO BOSIET (Basic Offshore Safety Induction and Emergency Training) including HUET and CA-EBS</strong>. Upon completion, your qualification is logged directly in the global <strong>OPITO Vantage database (valid for 4 years)</strong>.',
      'To participate in the in-water Compressed Air Emergency Breathing System (CA-EBS) exercises, delegates must present a valid <strong>offshore medical fitness certificate (OEUK / NOGEPA)</strong> alongside valid government photo ID.',
      'Already hold a valid BOSIET or FOET certificate that has not yet reached its 4-year expiry date? Book the 1-day refresher under <a href="/en/courses/opito" class="text-brand-primary font-semibold underline hover:text-brand-secondary">OPITO Offshore Training (FOET, HUET & CA-EBS)</a>. Also need onshore/contractor safety certification? View <a href="/en/courses/vca-vol" class="text-brand-primary font-semibold underline hover:text-brand-secondary">VCA-VOL</a> or <a href="/en/courses/vca-basis" class="text-brand-primary font-semibold underline hover:text-brand-secondary">VCA Basic</a>.'
    ],
    learningOutcomes: [
      'Comply with offshore installation safety regimes, permit-to-work systems, and muster procedures',
      'Deploy a Compressed Air Emergency Breathing System (CA-EBS) and escape a ditching/capsized helicopter (HUET)',
      'Don aviation immersion suits, inflate life jackets, board marine life rafts, and execute sea survival drills',
      'Extinguish incipient offshore fires, escape smoke-filled accommodation using a smoke hood, and provide basic first aid'
    ],
    programIntro: 'Over three intensive days at an OPITO-accredited maritime simulator facility, essential offshore safety briefings alternate with realistic pool, helicopter dunker, and fire-ground exercises.',
    programSteps: [
      {
        title: '1. Day 1: Offshore Safety Induction & Helicopter Safety / CA-EBS',
        description: 'Understand offshore hazards, permit-to-work controls, and dry/shallow-water breathing equipment:',
        items: [
          'Offshore living & working rules, hydrocarbon hazards, and platform alarm/muster protocols',
          'Pre-flight helicopter safety, aviation transit suit donning, and CA-EBS breathing drills'
        ]
      },
      {
        title: '2. Day 2: HUET Simulator & Sea Survival Pool Exercises',
        description: 'Train calm, methodical escape and open-water survival in the environmental training pool:',
        items: [
          'Multiple Helicopter Underwater Escape Training (HUET) runs (surface and submerged roll-over)',
          'TEMPSC lifeboat procedures, boarding inflatable life rafts, HELP/huddle posture, and winch rescue'
        ]
      },
      {
        title: '3. Day 3: Fire Fighting, Self-Rescue, First Aid & Vantage Sign-Off',
        description: 'Complete emergency response drills and receive global OPITO registration:',
        items: [
          'Portable fire extinguishers, zero-visibility smoke hood evacuation, and offshore emergency first aid',
          'Official OPITO BOSIET certificate (valid 4 years) uploaded directly to the Vantage database'
        ]
      }
    ],
    modules: [
      {
        name: 'Offshore Safety Induction',
        description: 'Platform hazards, permit-to-work systems, PPE, and offshore muster procedures.'
      },
      {
        name: 'HUET & CA-EBS Escape',
        description: 'Helicopter Underwater Escape Training using compressed air emergency breathing gear.'
      },
      {
        name: 'Sea Survival & Life Rafts',
        description: 'TEMPSC abandonment, immersion suits, life raft boarding, and helicopter winching.'
      },
      {
        name: 'Fire Fighting & Self-Rescue',
        description: 'Extinguishing incipient fires, escaping dense smoke with smoke hoods, and first aid.'
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
    categoryTitle: 'Offshore Training',
    categoryUrl: '/en/offshore-training',
    title: 'OPITO Offshore Training (FOET, HUET & CA-EBS)',
    shortTitle: 'OPITO',
    tagline: 'Accredited 1-day FOET refresher and modular HUET, CA-EBS, and MIST offshore certifications',
    price: 'On request',
    duration: '1 to 3 days (module dependent)',
    spotsText: 'Globally Recognized',
    languages: ['English', 'Dutch'],
    target: 'For experienced offshore personnel renewing their 4-year OPITO certification via FOET, or booking standalone HUET with CA-EBS, MIST, or GWO/NOGEPA combination modules.',
    requirements: 'Valid BOSIET/FOET certificate (for FOET) & OEUK / NOGEPA medical',
    exam: 'Practical competence assessment per current OPITO standards',
    certification: 'Official OPITO Certificate (FOET / HUET / CA-EBS) + 4-year Vantage registration',
    inclusions: [
      'HUET simulator & pool',
      'CA-EBS & survival gear',
      'OPITO Vantage registration',
      'Hot lunch & facilities'
    ],
    heroBullets: [
      '1 to 3 days',
      'FOET, HUET & CA-EBS',
      '4-year Vantage renewal',
      'Accredited simulator pool'
    ],
    suitableForHtml: [
      'Every OPITO BOSIET or FOET certificate is valid for <strong>4 years</strong>. As long as you refresh <em>on or before</em> your exact expiry date in Vantage, you only need the <strong>1-day FOET (Further Offshore Emergency Training) with CA-EBS</strong> to extend your offshore eligibility for another 4 years. Remember to bring a valid <strong>OEUK or NOGEPA offshore medical certificate</strong> for in-water CA-EBS exercises.',
      'Has your BOSIET or FOET expiry date already passed? Under strict OPITO rules there is no grace period, meaning you must book the full 3-day <a href="/en/courses/bosiet" class="text-brand-primary font-semibold underline hover:text-brand-secondary">BOSIET with CA-EBS course</a>.',
      'We also arrange standalone <strong>HUET + CA-EBS</strong> (for marine personnel transferring by helicopter), <strong>MIST</strong> (Minimum Industry Safety Training for UKCS deployments), and multi-day <strong>OPITO + GWO Wind</strong> combinations. Need group scheduling for an offshore crew? Contact our <a href="/en/incompany-training" class="text-brand-primary font-semibold underline hover:text-brand-secondary">corporate & offshore training desk</a>.'
    ],
    learningOutcomes: [
      'Renew your global OPITO Vantage offshore survival status for 4 years in a single practical day (FOET)',
      'Execute submerged Helicopter Underwater Escape (HUET) runs safely using CA-EBS breathing apparatus',
      'Demonstrate sea survival, raft boarding, smoke-hood self-rescue, and offshore fire suppression',
      'Fulfill regional North Sea requirements across Dutch (NOGEPA), UK (OEUK/MIST), and wind sectors'
    ],
    programIntro: 'Whether you need a 1-day FOET renewal or a tailored combination of HUET, CA-EBS, and MIST, Edusafe coordinates accredited simulator slots with full PPE, survival suits, and direct OPITO Vantage upload.',
    programSteps: [
      {
        title: '1. Vantage Verification, Module Selection & Medical Check',
        description: 'Before booking, we verify your existing Vantage ID and offshore medical validity:',
        items: [
          'Checking BOSIET/FOET expiry date so you qualify for the 1-day FOET refresher',
          'Verifying OEUK / NOGEPA medical fitness for shallow/deep-water CA-EBS training'
        ]
      },
      {
        title: '2. Intensive Practical Simulator & Pool Exercises',
        description: 'Zero unnecessary classroom repetition — FOET and HUET focus straight on emergency drills:',
        items: [
          'CA-EBS deployment, helicopter ditching & capsized underwater escape (HUET) runs',
          'Sea survival, live firefighting, smoke-hood escape, and acute offshore first aid'
        ]
      },
      {
        title: '3. Immediate OPITO Sign-Off & 4-Year Vantage Upload',
        description: 'Upon demonstrating every OPITO performance standard, your credentials are updated:',
        items: [
          'Official OPITO certificate issued and logged in the global Vantage database (valid 4 years)',
          'Proactive expiry tracking available for corporate crew schedulers'
        ]
      }
    ],
    modules: [
      {
        name: 'FOET 1-Day Refresher',
        description: 'Further Offshore Emergency Training extending valid BOSIET/FOET by 4 years.'
      },
      {
        name: 'Standalone HUET + CA-EBS',
        description: 'Helicopter Underwater Escape and compressed air breathing module (1 day).'
      },
      {
        name: 'MIST (UKCS Standard)',
        description: 'Minimum Industry Safety Training required for UK sector offshore assets.'
      },
      {
        name: 'GWO & NOGEPA Combinations',
        description: 'Integrated oil, gas, and offshore wind survival packages scheduled on request.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&q=80&w=800',
    eventFilter: {
      categories: ['OFFSHORE'],
      titleKeywords: ['opito', 'foet', 'huet', 'offshore']
    }
  }
];

export const servicePillarsEn: ServicePillar[] = [
  {
    slug: 'keuringen',
    title: 'Safety Inspections & Equipment Testing',
    shortTitle: 'Inspections',
    tagline: 'Periodic safety inspections in accordance with NEN standards and SCIOS Scope 8, 10, and 12',
    description: 'Comply with the Dutch Arbowet and your fire insurer’s requirements with our independent inspections of electrical equipment, installations, climbing gear, emergency lighting, and smoke detectors.',
    icon: 'fa-solid fa-clipboard-check',
    badge: 'NEN & SCIOS Certified',
    url: '/en/services/keuringen',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=1200',
    items: [
      {
        name: 'Electrical Work Equipment (NEN 3140)',
        norm: 'NEN 3140',
        description: 'Visual and metrological inspection of power tools, machinery, extension cords, and distribution boards on-site, including inspection stickers and digital certificates.'
      },
      {
        name: 'Ladders, Stairs & Mobile Scaffolds (NEN 2484 / EN 1004)',
        norm: 'NEN 2484 / EN 1004',
        description: 'Mandatory annual inspection of portable climbing equipment and mobile scaffold components for safe working at height.'
      },
      {
        name: 'SCIOS Scope 8, Scope 10 & Scope 12 Inspections',
        norm: 'Scope 8 / 10 / 12',
        description: 'Safety inspection of fixed electrical installations (Scope 8), fire risk assessment per NTA 8220 for insurers (Scope 10), and solar PV installation inspection (Scope 12).'
      },
      {
        name: 'Emergency & Escape Route Lighting',
        norm: 'NEN-EN 1838 / ISSO 79',
        description: 'Annual maintenance, battery duration testing, and bulb/luminaire replacement for emergency and exit lighting.'
      },
      {
        name: 'Smoke Detectors & Fire Alarm Systems',
        norm: 'NEN 2555 / NEN 2535',
        description: 'Periodic inspection, cleaning, and functional testing of smoke detectors and optical/thermal sensors.'
      }
    ],
    benefits: [
      'All inspections scheduled in a single visit without operational downtime',
      'Official inspection stickers + digital inspection logbook for labour authorities and insurers',
      'Automated reminder before inspection validity expires',
      'Immediate minor repairs on-site possible'
    ]
  },
  {
    slug: 'certificeringen',
    title: 'Corporate Certifications (VCA & VCU)',
    shortTitle: 'Certifications',
    tagline: 'End-to-end consultancy for VCA*, VCA**, VCA***, and VCU company certification',
    description: 'Want to demonstrate your organization’s safety compliance or qualify for major tenders? Our safety engineers guide your company from A to Z in achieving and maintaining your VCA or VCU corporate certificate.',
    icon: 'fa-solid fa-award',
    badge: 'VCA* / VCA** / VCA*** / VCU',
    url: '/en/services/certificeringen',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1200',
    items: [
      {
        name: 'VCA* (VCA One Star)',
        norm: 'VCA*',
        description: 'Company certification focused on direct safety control on the work floor. Ideal for subcontractors (up to approx. 35 staff) who do not hire subcontractors themselves.'
      },
      {
        name: 'VCA** (VCA Two Stars)',
        norm: 'VCA**',
        description: 'Comprehensive certification for main contractors and larger companies (>35 staff), including safety management structure, policy, and subcontractor chain management.'
      },
      {
        name: 'VCA*** / VCA Petrochemical',
        norm: 'VCA***',
        description: 'The highest level of VCA company certification for organizations performing complex operations in the petrochemical and heavy industries.'
      },
      {
        name: 'VCU Certification (Employment & Staffing Agencies)',
        norm: 'VCU',
        description: 'Dedicated corporate safety certification for recruitment and staffing agencies supplying temporary personnel to VCA-certified clients.'
      }
    ],
    benefits: [
      'Custom-written VCA/VCU safety manual without unnecessary bureaucracy',
      'Support with workplace inspections, toolbox meetings, and internal audits',
      'Presence and assistance during the external certification audit',
      'Full support by registered Senior Safety Engineers (HVK/MVK)'
    ]
  },
  {
    slug: 'vergunningen',
    title: 'Permits & Quality Management',
    shortTitle: 'Permits & ISO 9001',
    tagline: 'Consultancy and applications for Fire-Safe Occupancy (BBL), ISO 9001, and Environmental Permits',
    description: 'Building and operational regulations in the Netherlands are complex. Edusafe assists you with occupancy notifications, environmental permits under the Besluit bouwwerken leefomgeving (BBL), and ISO 9001 certification.',
    icon: 'fa-solid fa-file-shield',
    badge: 'BBL / ISO 9001 / Permits',
    url: '/en/services/vergunningen',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1200',
    items: [
      {
        name: 'Fire-Safe Occupancy (Besluit bouwwerken leefomgeving - BBL)',
        norm: 'BBL (Building Decree)',
        description: 'Assessment, CAD drawings, and submission of mandatory occupancy notifications or fire safety permit applications via the Dutch Omgevingsloket.'
      },
      {
        name: 'ISO 9001 Quality Management',
        norm: 'ISO 9001',
        description: 'Pragmatic setup, implementation, and internal auditing for the internationally recognized ISO 9001 quality management system — optionally combined with VCA.'
      },
      {
        name: 'Environmental Permit (Omgevingsvergunning) Support',
        norm: 'Omgevingswet',
        description: 'End-to-end support in applying for environmental and building permits for renovations, change of occupancy, fire compartmentation, or environmental activities.'
      }
    ],
    benefits: [
      'Up-to-date expertise on the Dutch Environment and Planning Act (Omgevingswet) and BBL',
      'Direct liaison with municipalities, environmental agencies, and fire authorities',
      'Pragmatic implementation without unreadable legal jargon',
      'Easily combined with evacuation floor plans and RI&E'
    ]
  },
  {
    slug: 'vluchtwegplattegronden',
    title: 'Evacuation Floor Plans (NEN 1414)',
    shortTitle: 'Evacuation Floor Plans',
    tagline: 'Professional escape route floor plans compliant with NEN 1414 and NEN-EN-ISO 7010',
    description: 'Clear and legally required evacuation floor plans for your facility. We handle the on-site survey, digital CAD drafting, and mounting in sleek aluminum frames.',
    icon: 'fa-solid fa-map-location-dot',
    badge: 'NEN 1414 & ISO 7010',
    url: '/en/evacuation-plans',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1200',
    items: [
      {
        name: 'On-Site Survey & Measurement',
        norm: 'NEN 1414',
        description: 'Our CAD specialists map all escape routes, fire extinguishers, manual call points, first aid kits, AEDs, and assembly points on location.'
      },
      {
        name: 'Digital CAD Design per NEN 1414 & ISO 7010',
        norm: 'ISO 7010',
        description: 'Clean orientation drawings featuring the latest international safety pictograms and your company logo.'
      },
      {
        name: 'Production & Mounting in A3/A4 Frames or Acrylic',
        norm: 'Fully Installed',
        description: 'High-quality printing and mounting at the required high-visibility locations throughout your building.'
      }
    ],
    benefits: [
      '100% approved by fire brigades and municipal building inspectors',
      'Fast on-site measurement even if no existing blueprints are available',
      'Includes digital files for your BHV and emergency evacuation plan',
      'Fast turnaround across the Netherlands'
    ]
  },
  {
    slug: 'rie',
    title: 'RI&E (Risk Inventory & Evaluation)',
    shortTitle: 'RI&E',
    tagline: 'Legally mandatory Risk Inventory & Evaluation including Action Plan',
    description: 'Every employer with staff in the Netherlands is legally required under the Arbowet to maintain an up-to-date RI&E. Edusafe maps all workplace hazards and compiles a practical Action Plan, including statutory review by a certified safety engineer.',
    icon: 'fa-solid fa-list-check',
    badge: 'Arbowet Mandatory',
    url: '/en/risk-assessment-rie',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1200',
    items: [
      {
        name: 'Full Workplace Inspection & Hazard Inventory',
        norm: 'Arbowet Art. 5',
        description: 'On-site walkthrough and employee interviews to identify physical, chemical, ergonomic, and psychosocial workplace risks.'
      },
      {
        name: 'Pragmatic Action Plan (Plan van Aanpak)',
        norm: 'Action Plan',
        description: 'Prioritized action plan with concrete measures, responsible persons, and timelines ready for immediate implementation.'
      },
      {
        name: 'Official Statutory Review (Toetsing) by Certified HVK Expert',
        norm: 'Certified Review Report',
        description: 'Mandatory legal review and sign-off for companies with more than 25 employees (or without a recognized sector instrument).'
      }
    ],
    benefits: [
      'Avoid steep fines from the Netherlands Labour Authority (Arbeidsinspectie)',
      'Officially reviewed and signed by registered Senior Safety Engineers (HVK)',
      'Includes advice on required BHV staffing and equipment inspections',
      'Fixed upfront rate with no surprises'
    ]
  },
  {
    slug: 'detachering',
    title: 'Safety Staffing & On-Site Supervision',
    shortTitle: 'Safety Staffing',
    tagline: 'Certified fire guards, confined space attendants, gas analysts, first aiders, and confidential advisors',
    description: 'Need temporary or ongoing certified safety personnel during turnarounds, maintenance shutdowns, events, or at your office? Edusafe deploys qualified specialists ready for immediate operation.',
    icon: 'fa-solid fa-user-shield',
    badge: '24/7 Deployment',
    url: '/en/services/detachering',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1200',
    items: [
      {
        name: 'Fire Guards / Fire Watch (Industrial, Construction & Facility)',
        norm: 'State Certified / VCA',
        description: 'Deployment of experienced fire guards during hot work, fire alarm system outages, plant turnarounds, and events.'
      },
      {
        name: 'Confined Space Attendants (Mangatwachten)',
        norm: 'SOG / Confined Spaces',
        description: 'Certified hole watches for strict access control, supervision, and immediate alarm response during work inside tanks, pits, and confined spaces.'
      },
      {
        name: 'Certified Gas Analysts (EX-OX-TOX)',
        norm: 'SOG Gas Measurement',
        description: 'Qualified gas analysts for conducting and clearing measurements on explosive atmospheres, oxygen levels, and toxic gases.'
      },
      {
        name: 'Certified First Aiders & Event Medical Support',
        norm: 'Oranje Kruis / Events',
        description: 'Professional first responders for industrial projects, construction sites, public events, and corporate conferences.'
      },
      {
        name: 'External Confidential Advisor (Vertrouwenspersoon)',
        norm: 'LVV Compliant / PSA',
        description: 'Appointment of an independent external confidential advisor to fulfill your Arbowet duty of care regarding psychosocial workload (PSA) and integrity.'
      }
    ],
    benefits: [
      'Rapid deployment for both scheduled projects and urgent requests',
      'Fully certified personnel equipped with their own PPE and gas detection instruments',
      'Flexible deployment per shift, project, or subscription (confidential advisor)',
      'Single dedicated point of contact for both safety staffing and training'
    ]
  }
];
