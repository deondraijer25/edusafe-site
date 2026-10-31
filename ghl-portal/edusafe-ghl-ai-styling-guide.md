# Edusafe E-learning Portaal — Complete UI & Styling Guide (Prompt voor GHL AI App Studio)

Kopieer en plak onderstaande instructie rechtstreeks in de **GHL Client Portal AI / AI App Studio** chat zodat het volledige **e-learning leerportaal** (cursusoverzicht, modules, video- & theorie-lessen, kennistoetsen, voortgang en certificaten) 1-op-1 in de Edusafe-stijl wordt opgebouwd.

---

````text
Ontwerp en bouw het volledige Edusafe E-learning Portaal (Online Leeromgeving — elearning.edusafe.nl) 1-op-1 in de officiële huisstijl van Edusafe Trainingen & Opleidingen.

Dit portaal is specifiek bedoeld als rustige, professionele e-learning omgeving waar cursisten hun online theorie en kennistoetsen volgen ter voorbereiding op hun praktijkdag (voor o.a. BHV, EHBO, VCA, Heftruck, Reachtruck, Hoogwerker, NEN 3140 & Code 95). De stijl moet naadloos aansluiten op www.edusafe.nl, onze e-mailtemplates en ons inlogscherm.

======================================================================
1. KERNFOCUS & TAAL VAN HET E-LEARNING PORTAAL
======================================================================
- Focus 100% op LEREN & E-LEARNING: cursussen, modules, video- en theorielessen, voortgang, kennistoetsen/examens, hand-outs en certificaten. Verberg overbodige niet-e-learning onderdelen (geen community-feeds, geen loyalty/affiliate/verkoop-ruis).
- Sfeer: Rustig, warm, overzichtelijk Nederlands vakmanschap. Cursisten van alle leeftijden en achtergronden moeten zonder afleiding direct zien waar ze gebleven zijn en prettig kunnen studeren op laptop, tablet én smartphone.
- Taal: Volledig in helder, natuurlijk Nederlands (vriendelijke je/jouw-vorm). Geen Engelse termen door de interface heen (gebruik: Mijn opleidingen, Verder met leren, Modules, Les afronden & volgende, Kennistoets, Certificaten, Hulp & contact, Profiel, Uitloggen).

======================================================================
2. EXACTE CSS DESIGN TOKENS & KLEURENPALET
======================================================================
Gebruik exact deze tokens en hex-kleuren in de hele e-learning applicatie:

:root {
  --edusafe-canvas: #FAF9F6;        /* Hoofdachtergrond van elke pagina (Warm Edusafe Crème — NOOIT kil grijs #F3F4F6) */
  --edusafe-canvas-alt: #F0EDE6;    /* Secundaire warme achtergrondtint */
  --edusafe-surface: #FFFFFF;       /* Kaarten, lesinhoud, sidebar en topbar */
  --edusafe-border: #E6E3DC;        /* Buitenrand van kaarten (1px solid) */
  --edusafe-divider: #ECE9E2;       /* Subtiele scheidingslijnen & voortgangsbalk-track */
  --edusafe-input-border: #D8D5CE;  /* Randen van velden, secundaire knoppen en antwoordopties */

  --edusafe-navy: #062856;          /* Alle koppen (h1-h4), navigatietekst en sterke labels */
  --edusafe-navy-hover: #041B3B;
  --edusafe-blue: #0C4EA2;          /* Actieve les/navigatie, voortgangsbalken, links, module-nummers & eyebrows */
  --edusafe-blue-hover: #093D80;
  --edusafe-blue-tint: #EFF5FC;     /* Zachte achtergrond voor actieve les / geselecteerd antwoord / actieve tab */

  --edusafe-orange: #FF6B35;        /* UITSLUITEND voor primaire hoofdactieknoppen ("Verder met les", "Les afronden") */
  --edusafe-orange-hover: #e55620;

  --edusafe-text-main: #1A202C;     /* Primaire leestekst in lessen */
  --edusafe-text-muted: #475569;    /* Subtitels & toelichtingen */
  --edusafe-text-subtle: #64748B;   /* Tijdsduur, metadata, les-tellers */
  --edusafe-text-caption: #94A3B8;  /* Kleine bijschriften */

  --edusafe-success-text: #15803D;  /* Voltooide les / Geslaagd */
  --edusafe-success-bg: #F0FDF4;
  --edusafe-success-border: #BBF7D0;
  --edusafe-warn-text: #B45309;     /* Aandacht / Praktijkdag herinnering */
  --edusafe-warn-bg: #FFFBEB;
  --edusafe-warn-border: #FDE68A;
}

Belangrijke kleurregel: Gebruik oranje (#FF6B35) spaarzaam — altijd maar voor ÉÉN primaire vervolgactie op het scherm zodat een cursist in één oogopslag ziet waar hij moet klikken om verder te leren.

======================================================================
3. TYPOGRAFIE (GOOGLE FONTS)
======================================================================
Laad deze Google Fonts in:
https://fonts.googleapis.com/css2?family=Outfit:wght@500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600&display=swap

- Koppen, Module-titels, Navigatie, Knoppen, Voortgangspercentages & Labels:
  * font-family: 'Outfit', sans-serif;
  * font-weight: 600 (SemiBold), letter-spacing: -0.015em, color: #062856.
  * Paginakop (h1): 26px–32px (mobiel 22px–24px), line-height: 1.2.
  * Sectie- / Leskop (h2): 20px–24px, line-height: 1.28.
  * Kaart- / Moduletitel (h3): 17px–19px, line-height: 1.32.
- Eyebrows / Kickers boven koppen (bijv. "ACTIEVE E-LEARNING" of "MODULE 2 VAN 5"):
  * font-family: 'Outfit', sans-serif; font-size: 11.5px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; color: #0C4EA2; (platte tekst, géén zware pil-box).
- Broodtekst, Theorielessen & Toetsvragen:
  * font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
  * Lesinhoud: 15.5px–16px, line-height: 1.72, color: #1A202C (zeer comfortabel leesbaar voor langere theorie).
  * Kaartteksten & subtitels: 14px–14.5px, line-height: 1.6, color: #475569.

======================================================================
4. EXACTE COMPONENT-STYLING & MERKDETAILS
======================================================================
- Kaarten & Containers:
  * background: #FFFFFF; border: 1px solid #E6E3DC; border-radius: 20px; (mobiel 16px–18px)
  * box-shadow: 0 12px 32px rgba(6, 40, 86, 0.05); (zachte marineblauwe schaduw, nooit hard grijs/zwart)
  * Ruime padding (24px–32px).
- Primaire CTA-knop:
  * background: #FF6B35 (hover #e55620), color: #FFFFFF, font-family: 'Outfit', font-weight: 600, font-size: 15px, border-radius: 11px, hoogte 46px–48px, padding: 0 22px, box-shadow: 0 4px 12px rgba(255, 107, 53, 0.20).
- Secundaire knop (bijv. "Vorige les", "Overzicht", "Download PDF"):
  * background: #FFFFFF (hover #FAF9F6), border: 1px solid #D8D5CE (hover-rand #0C4EA2), color: #062856 (hover-tekst #0C4EA2), font-family: 'Outfit', font-weight: 600, font-size: 14.5px, border-radius: 11px, hoogte 46px.
- Voortgangsbalken (Progress Bars):
  * Track: #ECE9E2, hoogte 8px (of 10px op hoofdkaart), border-radius: 999px.
  * Fill: #0C4EA2 (en #15803D zodra een cursus 100% afgerond is), met soepele width-transitie.
- Herkenbaar Edusafe Merkaccent (de 3/4 Blauwe Gradient-Cirkel):
  * Gebruik spaarzaam (maximaal op 1 plek: rechts op de achtergrond van de "Verder met leren" welkomstkaart en eventueel achter de inlogkaart, half buiten het kader geplaatst met overflow: hidden) deze officiële Edusafe SVG-cirkel:
  <svg viewBox="0 0 680 680" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <defs>
      <linearGradient id="edusafeCircleGrad" x1="40" y1="40" x2="640" y2="640" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stop-color="#0E56B5" />
        <stop offset="60%" stop-color="#0C4EA2" />
        <stop offset="100%" stop-color="#07326B" />
      </linearGradient>
    </defs>
    <circle cx="330" cy="340" r="305" fill="url(#edusafeCircleGrad)" />
    <path d="M 555 115 A 328 328 0 1 0 555 565" stroke="#0C4EA2" stroke-opacity="0.25" stroke-width="2.5" stroke-linecap="round" />
    <path d="M 510 160 A 265 265 0 1 0 510 520" stroke="#FFFFFF" stroke-opacity="0.16" stroke-width="1.5" stroke-dasharray="6 8" stroke-linecap="round" />
  </svg>

======================================================================
5. UITWERKING PER SCHERM IN HET E-LEARNING PORTAAL
======================================================================

A. HEADER / NAVIGATIE
- Strakke witte topbar of slanke linker sidebar (#FFFFFF met 1px solid #ECE9E2 rand) op het #FAF9F6 canvas.
- Linksboven het officiële Edusafe-logo: https://edusafe-site.vercel.app/assets/images/edusafe_logo.png (object-contain, hoogte 40px–46px) met subtiel "Online Leeromgeving" (#64748B).
- Overzichtelijke navigatie: Mijn opleidingen | Certificaten | Hulp & contact | Profiel. Actief item heeft #EFF5FC achtergrond en #0C4EA2 tekst in Outfit 600.

B. STARTSCHERM / MIJN OPLEIDINGEN (DASHBOARD)
1. Bovenste hoofdkaart "Verder waar je gebleven was":
   - Toont direct de laatst geopende of actieve e-learning van de cursist, inclusief huidige module/lesnaam, duidelijke voortgangsbalk (#0C4EA2 + percentage) en één primaire oranje knop (#FF6B35) "Verder met les" (of "Start e-learning" bij 0%).
2. Overzicht "Mijn opleidingen":
   - Ruime witte cursuskaarten (#FFFFFF, 1px solid #E6E3DC, border-radius: 20px) met cursusnaam in Outfit 600 (#062856), korte omschrijving, aantal modules/lessen, rustige status-indicator (Nog te starten / Bezig / Afgerond) en voortgangsbalk.
3. Praktische sectie onderaan "Goed om te weten & Hulp":
   - Rustige witte kaart met horizontale #ECE9E2 scheidingslijnen (1: tussentijdse voortgang wordt automatisch opgeslagen, 2: rond de online theorie af vóór je praktijkdag, 3: directe hulp via 070 - 444 77 95 of info@edusafe.nl).

C. CURSUSOVERZICHT & MODULE-OPBOUW (COURSE DETAIL)
- Bovenaan een witte cursusheader met terug-link ("← Terug naar mijn opleidingen" in #0C4EA2), eyebrow "E-LEARNING THEORIE", cursustitel, voortgangsbalk en oranje knop "Verder met volgende les".
- Daaronder de modules als strakke witte kaarten of accordeons (#FFFFFF, 1px solid #E6E3DC, border-radius: 18px) met #ECE9E2 lijnen tussen de lessen:
  * Module-label in Outfit 600 #0C4EA2 ("MODULE 1") + moduletitel in #062856 + teller ("3 van 4 lessen voltooid").
  * Afgeronde les: rustig groen vinkje (#15803D op #F0FDF4 cirkeltje).
  * Huidige les: subtiele #EFF5FC achtergrond met 3px solid #0C4EA2 linkerrand en directe "Verder"-actie.
  * Nog te volgen les: rustige nummering/icoon in #64748B.

D. LES- & SPELEROMGEVING (VIDEO, THEORIE & BIJLAGEN — FOCUSMODUS)
- Bouw de lespagina zo rustig en afleidingsvrij mogelijk op het #FAF9F6 canvas:
  * Overzichtelijke kruimelpad/terugknop bovenaan + titel van de huidige module en les + voortgang in de cursus.
  * Tweezijdige opzet op desktop (en inklapbare les-drawer op mobiel):
    - Hoofdkolom:
      1. Indien video aanwezig: strakke 16:9 videocontainer met border-radius: 16px, overflow: hidden, border: 1px solid #E6E3DC en zachte schaduw 0 16px 40px rgba(6, 40, 86, 0.08).
      2. Theorietekst / Lesinhoud in een ruime witte kaart (#FFFFFF, border: 1px solid #E6E3DC, border-radius: 20px, padding: 32px–40px) met comfortabele leesbreedte (max 740px), duidelijke tussenkoppen (Outfit 600 #062856), overzichtelijke opsommingen en rustige "Belangrijk voor de praktijk"-kaders (achtergrond #EFF5FC met 3px solid #0C4EA2 linkerrand).
      3. Downloads / Hand-outs (indien aanwezig): strakke lijst met #ECE9E2 rand en #0C4EA2 downloadlink.
      4. Duidelijke navigatiebalk onderaan de les: links secundaire knop "← Vorige les", rechts primaire oranje knop (#FF6B35) "Les afronden & volgende →".
    - Zijbalk (Curriculum): witte kaart (#FFFFFF, 1px solid #E6E3DC, border-radius: 18px) met alle modules en lessen zodat de cursist direct ziet waar hij zich in de opleiding bevindt.

E. KENNISTOETSEN & EINDTOETS (QUIZ / ASSESSMENT)
- Witte toetskaart (#FFFFFF, 1px solid #E6E3DC, border-radius: 20px, padding: 32px) met bovenaan eyebrow "VRAAG X VAN Y" (#0C4EA2) en smalle voortgangsbalk.
- Vraagstelling helder in Outfit 600 (19px–21px, #062856).
- Antwoordopties als ruime, volledig klikbare keuzevakken (min-height: 52px, background: #FFFFFF, border: 1px solid #D8D5CE, border-radius: 12px, padding: 14px 18px):
  * Hover: background #FAF9F6, border-color #94A3B8.
  * Geselecteerd: background #EFF5FC, border 1.5px solid #0C4EA2, tekst #062856 (semibold).
  * Goed antwoord bij feedback: background #F0FDF4, border 1.5px solid #15803D, tekst #15803D.
  * Fout antwoord bij feedback: background #FEF2F2, border 1.5px solid #DC2626, met rustige uitleg eronder.
- Resultaatscherm na afloop: heldere score-weergave, bij behalen een rustige groene bevestiging en oranje vervolgknop ("Door naar volgende module" / "Certificaat bekijken"), bij herkansing een behulpzame melding en knop om opnieuw te oefenen.

F. CERTIFICATEN & CONTACTGEGEVENS
- Certificaten-overzicht met nette witte kaarten (#FFFFFF, 1px solid #E6E3DC, border-radius: 20px), behaalde datum en directe PDF-downloadknop.
- Vaste Edusafe contactgegevens voor hulp of vragen over de e-learning / praktijkdag:
  * Telefoon: 070 - 444 77 95 (tel:0704447795)
  * E-mail: info@edusafe.nl (mailto:info@edusafe.nl)
  * Website: www.edusafe.nl (https://www.edusafe.nl)
  * Adres: Edusafe Trainingen & Opleidingen · Oude Middenweg 241A, 2491 AH Den Haag

======================================================================
6. STRIKTE "NIET DOEN" REGELS (VERMIJD STANDAARD AI / SAAS-DRUKTE)
======================================================================
- GEEN paarse, indigo, cyaan of felle meerkleurige gradients.
- GEEN rij van 4 gekleurde KPI-statistiekkaartjes met gekleurde icoon-cirkels bovenaan het scherm.
- GEEN emoji's in titels, module-namen, navigatie, knoppen of badges.
- GEEN zware gekleurde icoon-badges bij elke kaarttitel; werk met sterke typografie (Outfit 600), ademruimte en fijne #ECE9E2 scheidingslijnen.
- GEEN kille lichtgrijze pagina-achtergrond (#F3F4F6 / #E5E7EB); gebruik overal het warme Edusafe Crème (#FAF9F6) met witte kaarten (#FFFFFF) en warme randen (#E6E3DC).
````
