import type { CampsiteConfig } from "../types";

/**
 * Natur- & Familiencamping Oberdrauburg — Oberes Drautal, Kärnten.
 * Betreiber: Marktgemeinde Oberdrauburg. Alle Texte/Fakten belegt aus
 * camping.oberdrauburg.at (Stand-Scrape 2026-06; Homepage + Sitemap-Metabeschreibungen).
 *
 * EHRLICH:
 *  - Kein See am Platz → `see` wird weggelassen; der Platz liegt an der Drau
 *    im oberen Drautal (Fluss, nicht Badesee).
 *  - Das Erlebnisbad/Schwimmbad liegt DIREKT NEBEN dem Platz (kostenloser
 *    Eintritt für Campergäste) — nie als platzeigener Pool geframt.
 *  - Keine Unterkünfte außer Stellplätzen belegbar → `mobilheime` weggelassen.
 *  - Preis: einzige belegte Tarifzeile = Vorsaison-Tagestarif pro Person
 *    (€ 28,35, inkl. Stellplatz ohne Strom, 1. Mai–3. Juli), wörtlich aus der
 *    Preise-&-Buchung-Metabeschreibung (raw/map.json:148). Vollständige
 *    Preisliste lag im Scrape NICHT vor → priceNote offenbart Basis + Vorbehalt.
 *    Der unabhängige Re-Scrape (Tier 2b) konnte die Tarifseite nicht erneut
 *    erfassen → Preis bleibt ein echter, aber unabhängig unbestätigter Wert
 *    (KEIN Platzhalter — laut Sitemap existiert eine echte Tarifseite);
 *    Preise-Badge ehrlich „offen", bis ein Tarif-Re-Scrape gelingt.
 *  - Nach Verify entfernt (nur in nicht erneut erfassten Meta-Beschreibungen,
 *    im unabhängigen Re-Scrape unbelegt): Platzgröße „12.000 m² / 60-40", die
 *    Sportarten Tischtennis/Beachvolleyball/Tennis (nur der per Foto + Meta
 *    belegte Spielplatz bleibt) und die Lead-Straße „Unterberg 31" (nicht
 *    quellenbestätigt → nur PLZ/Ort + echte Karten-Koordinaten).
 *  - awards leer: Österreichisches Umweltzeichen ist laut Quelle erst „im
 *    Zertifizierungsprozess"; Denkmalschutz betrifft das Ortsbild, nicht den
 *    Platz; ein Kärnten-Q+-Siegel im Footer ist nicht im Text bestätigt.
 *  - Bilder = ausschließlich eigene Fotos des Platzes / der Region Oberdrauburg
 *    in /public/campsites/camping-oberdrauburg/, jedes per Vision geprüft.
 */
const IMG = "/campsites/camping-oberdrauburg";

const campingOberdrauburg: CampsiteConfig = {
  name: "Natur- & Familiencamping Oberdrauburg",
  shortName: "Oberdrauburg",
  slug: "camping-oberdrauburg",
  ort: "Oberdrauburg",
  region: "Kärnten",
  brandKind: "Natur- & Familiencamping",
  // see: bewusst weggelassen — kein Badesee am Platz, sondern die Drau im oberen Drautal.
  regionLong: "Oberes Drautal · Kärnten · Österreich",

  claim: "Natur erleben, Familie genießen",
  claimEmphasis: "Familie genießen",
  intro:
    "Ruhige Tage in der Oberkärntner Landschaft, viel Platz für Kinder und entspannte Stunden im Erlebnisbad – familienfreundliches Camping an der Drau in Oberdrauburg.",

  logo: { src: `${IMG}/logo-camping-oberdrauburg.png`, alt: "Natur- & Familiencamping Oberdrauburg Logo" },

  // Wird nur mit den Pillars angezeigt; diese sind hier bewusst leer (s. u.),
  // daher rendert die BrandStatement-Sektion nicht.
  statement: {
    text: "Bei uns ist Urlaub Familiensache – ruhig, naturnah und mitten in den Kärntner Bergen.",
    emphasis: "Familiensache",
  },

  // Zu wenige eigene Fotos für eine ehrliche, dublettenfreie Pillar-Reihe (3 Bilder) ZUSÄTZLICH
  // zu Hero + Camping-Bento → Sektion bewusst ausgeblendet, keine Bild-Wiederholung.
  pillars: [],

  usps: [
    "Freier Eintritt ins Erlebnisbad",
    "Kostenloses WLAN",
    "Digitale Gästekarte Hohe Tauern",
    "Spielplatz am Platz",
    "Ebene Stellplätze",
    "Direkt am Drauradweg",
  ],

  trust: {
    heading: "Worauf sich Familien in Oberdrauburg verlassen",
    headingEmphasis: "verlassen",
    intro:
      "Ein familienfreundlicher Campingplatz der Marktgemeinde Oberdrauburg: freier Eintritt ins Erlebnisbad direkt am Platz, ebene Stellplätze, gepflegte Sanitäranlagen und kostenloses WLAN – mitten in der Natur des oberen Drautals.",
  },

  // Österreichisches Umweltzeichen laut Quelle erst „im Zertifizierungsprozess",
  // keine bestätigte Auszeichnung des Platzes → ehrlich leer (Band zeigt nur USP-Pills).
  awards: [],

  saison: { von: "Mai", bis: "September" },

  hero: {
    aerial: {
      src: `${IMG}/campingplatz.webp`,
      alt: "Natur- & Familiencamping Oberdrauburg mit ebenen Stellplätzen vor den Kärntner Bergen",
    },
  },

  camping: {
    heading: "Der Campingplatz",
    intro:
      "Ebene Stellplätze mitten in der Natur des oberen Drautals, eingebettet zwischen schattenspendende Bäume. Direkt am Platz: ein Erlebnisbad mit freiem Eintritt für Campergäste und ein Spielplatz für die Kinder.",
    features: [
      {
        title: "Erlebnisbad inklusive",
        text:
          "Direkt neben dem Campingplatz liegt das Erlebnisbad – für Campergäste ist der Eintritt frei. Zwischen schattenspendenden Bäumen und sonnigen Liegewiesen warten Rutschen und Badespaß für Groß und Klein.",
        image: { src: `${IMG}/erlebnisbad.webp`, alt: "Erlebnisbad mit Wasserrutschen direkt neben dem Campingplatz Oberdrauburg" },
      },
      {
        title: "Spielplatz für Kinder",
        text:
          "Kinder freuen sich über den Spielplatz – Spiel, Spaß und Abwechslung direkt am Campingplatz, mitten in der Natur.",
        image: { src: `${IMG}/spielplatz.webp`, alt: "Spielplatz am Natur- & Familiencamping Oberdrauburg" },
      },
      {
        title: "Mitten in der Natur",
        text:
          "Eingebettet in die Natur des oberen Drautals, idyllisch mitten in den Kärntner Bergen – ruhige Tage zwischen Wäldern, Wiesen und Gipfeln.",
        image: { src: `${IMG}/natur-drautal.webp`, alt: "Blick über das obere Drautal und die Kärntner Berge bei Oberdrauburg" },
      },
    ],
  },

  // mobilheime: bewusst weggelassen — außer Stellplätzen sind keine Unterkünfte belegt.
  // kinder: bewusst weggelassen — Familienangebote (Spielplatz, Erlebnisbad) sind im Camping-Block ehrlich abgebildet.

  aktivitaeten: {
    heading: "Aktiv rund um Oberdrauburg",
    intro:
      "Der Drauradweg führt direkt vorbei, Wanderwege und Klettersteige starten in der Umgebung, und der historische Ort lädt zum Entdecken ein.",
    items: [
      {
        title: "Radfahren am Drauradweg",
        text:
          "Der beliebte Drauradweg führt direkt an Oberdrauburg vorbei – entspannte Radtouren entlang der Drau für die ganze Familie.",
        image: { src: `${IMG}/drauradweg.webp`, alt: "Radfahrer am Drauradweg in Oberdrauburg" },
      },
      {
        title: "Geschichte & Kultur",
        text:
          "Oberdrauburg liegt an der römischen Via Iulia Augusta; die markante Hohenburg und der charmante Ortskern erzählen vom reichen Erbe der Marktgemeinde.",
        image: { src: `${IMG}/hohenburg-oberdrauburg.webp`, alt: "Hohenburg über Oberdrauburg in den Kärntner Bergen" },
      },
    ],
  },

  anreise: {
    heading: "So findest du uns",
    modes: [
      {
        title: "Mit dem Auto",
        text:
          "Über die Drautal-Bundesstraße (E66): von Lienz rund 20 Minuten, von Spittal an der Drau rund 40 Minuten. Die italienische Grenze am Plöckenpass liegt etwa 30 km entfernt.",
      },
      {
        title: "Mit Bahn & Bus",
        text: "Bahnhof Oberdrauburg im Drautal; mit dem Postbus-Shuttle geht es bequem weiter.",
      },
      {
        title: "Mit dem Rad",
        text: "Auf dem Drauradweg rollst du entlang der Drau direkt bis nach Oberdrauburg.",
      },
    ],
  },

  // Galerie bewusst ausgeblendet: Das Bento braucht genau 4 eigene Fotos; nach Hero,
  // Camping-Bento und Aktivitäten sind keine weiteren dublettenfreien Aufnahmen vorhanden.
  galerie: {
    heading: "Eindrücke",
    headingEmphasis: "Eindrücke",
    intro: "",
    tag: "Mai bis September",
    images: [],
  },

  booking: {
    heading: "Verfügbarkeit & Anfrage",
    intro:
      "Wähle deinen Zeitraum – wir melden uns mit der Verfügbarkeit und dem tagesaktuellen Tarif.",
    pricesArePlaceholder: false,
    priceNote:
      "Tagestarif pro Person ab 16 J. inkl. Stellplatz ohne Strom, Vorsaison 1. Mai–3. Juli (Quelle: camping.oberdrauburg.at). WLAN inklusive. Strom, weitere Personen, Kinder & Hauptsaison laut offizieller Preisliste – bitte bestätigen.",
    highlight: {
      title: "Erlebnisbad inklusive",
      text: "Als Campergast hast du freien Eintritt ins Erlebnisbad direkt neben dem Platz.",
    },
    categories: [
      // Einzige belegte Preiszeile: Vorsaison-Tagestarif pro Person ab 16 J., inkl. Stellplatz ohne Strom (€ 28,35).
      { id: "stellplatz", label: "Stellplatz", perNight: 28.35, perExtraGuest: 0 },
    ],
  },

  kontakt: {
    tel: "+43 4710 2249 22",
    telHref: "tel:+434710224922",
    mail: "oberdrauburg.tourist@ktn.gde.at",
    adresse: "9781 Oberdrauburg · Kärnten",
    coords: { lat: 46.7405184, lng: 12.9725542 },
  },

  languages: ["DE"],

  nav: [
    {
      label: "Camping",
      href: "#camping",
      children: [
        { label: "Stellplätze", href: "#camping" },
        { label: "Erlebnisbad", href: "#camping" },
        { label: "Spielplatz", href: "#camping" },
      ],
    },
    {
      label: "Aktiv",
      href: "#aktivitaeten",
      children: [
        { label: "Drauradweg", href: "#aktivitaeten" },
        { label: "Geschichte & Kultur", href: "#aktivitaeten" },
        { label: "Anreise", href: "#anreise" },
      ],
    },
    {
      label: "Lage",
      href: "#anreise",
      children: [
        { label: "Mit dem Auto", href: "#anreise" },
        { label: "Bahn & Bus", href: "#anreise" },
        { label: "Kontakt", href: "#booking" },
      ],
    },
    {
      label: "Preise",
      href: "#booking",
      children: [
        { label: "Tarife", href: "#booking" },
        { label: "Anfrage", href: "#booking" },
        { label: "Saison", href: "#booking" },
      ],
    },
  ],
};

export default campingOberdrauburg;
