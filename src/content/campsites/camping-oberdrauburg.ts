import type { CampsiteConfig } from "../types";

/**
 * Natur- & Familiencamping Oberdrauburg — Quelle: raw/digest/ (camping.oberdrauburg.at).
 * Kommunaler Familiencampingplatz der Marktgemeinde Oberdrauburg im oberen Drautal (Kärnten):
 * 12.000 m², 69 Stellplätze, freier Eintritt ins Erlebnisbad nebenan, am 5-Sterne-Drauradweg.
 * Alle Bilder einmalig, provenienzgebunden an diesen Platz/diese Region. Durchgehend Du-Anrede.
 */
const IMG = "/campsites/camping-oberdrauburg";

const oberdrauburg: CampsiteConfig = {
  name: "Natur- & Familiencamping Oberdrauburg",
  shortName: "Oberdrauburg",
  slug: "camping-oberdrauburg",
  ort: "Oberdrauburg",
  region: "Kärnten",
  brandKind: "Natur- & Familiencamping",
  regionLong: "Oberes Drautal · Kärnten · Österreich",

  theme: "editorial",
  heroVariant: "center",

  claim: "Familiencamping im Drautal — Erlebnisbad inklusive",
  claimEmphasis: "Erlebnisbad inklusive",
  intro:
    "Ein 12.000 m² großer Naturplatz im oberen Drautal: 69 ebene Stellplätze zwischen altem Baumbestand und sonnigen Wiesen, das Erlebnisbad gleich nebenan und der 5-Sterne-Drauradweg direkt am Platz.",

  logo: { src: `${IMG}/logo-80eb9d2b7f.png`, alt: "Logo Natur- & Familiencamping Oberdrauburg" },

  statement: {
    text: "Als Campinggast badest du im Erlebnisbad nebenan — der Eintritt ist geschenkt.",
    emphasis: "geschenkt",
  },

  pillars: [
    {
      title: "Mitten im Grünen",
      text: "Ebene Stellplätze zwischen altem Baumbestand und sonnigen Wiesen, eingebettet ins obere Drautal mit Blick auf die umliegende Bergwelt.",
      image: { src: `${IMG}/gallery-9eca3f89ad.webp`, alt: "Stellplätze des Campingplatzes Oberdrauburg vor der Bergkulisse" },
    },
    {
      title: "Erlebnisbad gleich nebenan",
      text: "Das Erlebnisbad liegt direkt neben dem Platz — als Campinggast hast du während der Öffnungszeiten freien Eintritt zu Becken, Rutsche und Liegewiese.",
      image: { src: `${IMG}/activity-6491924669.webp`, alt: "Erlebnisbad Oberdrauburg mit Rutsche und Liegewiese vor Bergen" },
    },
    {
      title: "Berge & Drautal vor der Tür",
      text: "Wanderwege starten im Ort, der 5-Sterne-Drauradweg führt vorbei, und Klettersteige rund um die Pirknerklamm liegen gleich um die Ecke.",
      image: { src: `${IMG}/activity-da52189609.webp`, alt: "Wanderung auf einer Alm im Drautal bei Oberdrauburg" },
    },
  ],

  usps: [
    "Freier Eintritt Erlebnisbad",
    "69 Stellplätze · 12.000 m²",
    "Direkt am Drauradweg",
    "Kostenloses WLAN",
    "Hunde willkommen",
  ],

  trust: {
    heading: "Was den Familiencamping Oberdrauburg ausmacht",
    headingEmphasis: "ausmacht",
    intro:
      "Ein 12.000 m² großer Platz im oberen Drautal, geführt von der Marktgemeinde Oberdrauburg: 69 ebene Stellplätze, freier Eintritt ins Erlebnisbad nebenan und der 5-Sterne-Drauradweg direkt vor dem Platz.",
  },

  awards: [],

  saison: { von: "Mai", bis: "September" },

  hero: {
    aerial: { src: `${IMG}/gallery-ce6eb2b443.webp`, alt: "Sommerlicher Brunnenplatz in Oberdrauburg am Drauradweg" },
  },

  breather: {
    image: { src: `${IMG}/gallery-7baaafee02.webp`, alt: "Bahnhof Oberdrauburg vor der Bergkulisse des Drautals" },
    line: "Mit der Bahn mitten ins Drautal — der Bahnhof liegt nur einen Kilometer entfernt.",
  },

  camping: {
    heading: "Dein Platz im Drautal",
    intro:
      "Vom ebenen Wiesenstellplatz bis zur Buffetterrasse am Bad: 12.000 m², 69 nummerierte Plätze und kurze Wege zu allem, was ein entspannter Campingtag braucht.",
    features: [
      {
        title: "69 Stellplätze auf 12.000 m²",
        text: "69 nummerierte Plätze auf 12.000 m²: rund 40 % schattig unter altem Baumbestand, etwa 60 % offene, sonnige Wiese — Hecken und Grünstreifen gliedern den Platz.",
        image: { src: `${IMG}/gallery-accd93fc61.webp`, alt: "Wohnmobile auf Stellplätzen zwischen Hecken und Bäumen" },
      },
      {
        title: "Moderne Sanitäranlagen",
        text: "Helle, gepflegte Sanitäranlagen mit Duschen und WCs, dazu ein barrierefreier Bereich sowie Plätze für chemische Toiletten — regelmäßig gereinigt.",
        image: { src: `${IMG}/activity-2be649ff57.webp`, alt: "Waschbecken und Duschkabinen in den Sanitäranlagen" },
      },
      {
        title: "Spül- & Waschräume",
        text: "Ein großer Spülraum sowie Wasch-, Bügel- und Trockenräume machen auch längere Aufenthalte bequem; Waschmaschine und Trockner laufen mit Münzeinwurf.",
        image: { src: `${IMG}/activity-8d41f81d3b.webp`, alt: "Großer Spülraum mit Spülbecken am Campingplatz" },
      },
      {
        title: "Bistro & Buffetterrasse",
        text: "Direkt am Schwimmbad gibt es ein kleines Bistro mit neu gestalteter Buffetterrasse für Snacks und kleine Mahlzeiten; der Ortskern ist in zehn Gehminuten erreicht.",
        image: { src: `${IMG}/gallery-4f09073a84.webp`, alt: "Buffetterrasse mit Tischen und Sonnenschirmen am Schwimmbad" },
      },
      {
        title: "Spielplatz & Familienbad",
        text: "Für die Kleinsten gibt es einen Spielplatz, ein Familienbad, ein Babybad mit Wickelraum und Kindertoiletten — dazu Tischtennis, Beachvolleyball und Tennis am Platz.",
        image: { src: `${IMG}/kids-e83205dea8.webp`, alt: "Spielplatz mit Rutsche und Schaukel am Campingplatz Oberdrauburg" },
      },
      {
        title: "Nachhaltig bewirtschaftet",
        text: "Mülltrennung, wassersparende Sanitäranlagen und energieeffiziente Beleuchtung gehören dazu; aktuell läuft die Zertifizierung für das Österreichische Umweltzeichen.",
        image: { src: `${IMG}/gallery-a8164f0224.webp`, alt: "Sanitärgebäude des Campingplatzes mit Solarpaneelen vor dem Wald" },
      },
    ],
  },

  aktivitaeten: {
    heading: "Aktiv im Drautal",
    intro:
      "Wandern, Radfahren, Klettern und Kultur — rund um Oberdrauburg beginnt das Erlebnis direkt vor dem Vorzelt.",
    items: [
      {
        title: "Zur Hohenburg wandern",
        text: "Der Hohenburgweg führt über den Kreuzweg hinauf zur Hohenburg mit weitem Blick über Oberdrauburg und das Drautal.",
        image: { src: `${IMG}/hero-5741e7dad2.webp`, alt: "Luftbild der Hohenburg über Oberdrauburg" },
      },
      {
        title: "Museum im Drauforum",
        text: "Im Drauforum erzählen drei Dauerausstellungen von römischen Funden, mittelalterlichen Funden aus den Burgruinen Flaschberg und Hohenburg und den Oberdrautaler Gemeinden.",
        image: { src: `${IMG}/gallery-81a3d92a33.webp`, alt: "Fassade des Drauforums mit Ausstellungstafeln" },
      },
      {
        title: "Kultur am Marktplatz",
        text: "Der historische Marktplatz lebt im Sommer mit Konzerten der Musikkapelle, traditionellen Festen und dem Via-Iulia-Augusta-Kultursommer.",
        image: { src: `${IMG}/gallery-42f45bef8b.webp`, alt: "Historischer Marktplatz von Oberdrauburg im Sommer" },
      },
    ],
  },

  anreise: {
    heading: "Anreise leicht gemacht",
    modes: [
      {
        title: "Mit dem Auto",
        text: "Über die B100 (Drautal Straße) bis Oberdrauburg, dann auf die B110 Richtung Kötschach-Mauthen — nach rund einem Kilometer liegt der Platz auf der linken Seite (Unterberg 31).",
      },
      {
        title: "Mit der Bahn",
        text: "Der Bahnhof Oberdrauburg liegt nur einen Kilometer entfernt; stündliche Züge Richtung Lienz und Spittal, der Platz ist von dort zu Fuß erreichbar.",
      },
      {
        title: "Mit dem Rad",
        text: "Direkt am Drautalradweg (R1): von Oberdrauburg über die B110 Richtung Unterberg — die überwiegend flache Strecke ist ideal für Familien und Genussradler.",
      },
    ],
  },

  galerie: {
    heading: "Oberdrauburg im Sommer",
    headingEmphasis: "Sommer",
    intro:
      "Marktplatz, Museum und der Weg an die Drau — ein paar Eindrücke aus dem Ort rund um den Platz.",
    tag: "Mai bis September",
    moreCount: 12,
    images: [
      { src: `${IMG}/gallery-f193334097.webp`, alt: "Einfahrt zum Natur- & Familiencamping Oberdrauburg" },
      { src: `${IMG}/gallery-2e919a8513.webp`, alt: "Sommerwiese beim Museum im Ortszentrum" },
      { src: `${IMG}/gallery-5cce3b0463.webp`, alt: "Ausstellung „Draufenster“ im Drauforum" },
      { src: `${IMG}/gallery-5d3558eb0b.webp`, alt: "Theaterwagen Porcia auf dem Marktplatz von Oberdrauburg" },
    ],
  },

  booking: {
    heading: "Bereit für deinen Sommer im Drautal?",
    headingEmphasis: "Sommer im Drautal",
    intro:
      "Wähle Tarif, Zeitraum und Personen — die Marktgemeinde Oberdrauburg bestätigt dir deinen Stellplatz persönlich.",
    pricesArePlaceholder: false,
    priceNote:
      "ab-Preise Vorsaison (1. Mai – 3. Juli & 22. Aug – 30. Sep) · 2 Personen, Stellplatz ohne Strom · zzgl. € 2,20 Nächtigungsgebühr/Person · Hauptsaison höher",
    highlight: {
      title: "Erlebnisbad inklusive",
      text: "Als Campinggast hast du während der Öffnungszeiten freien Eintritt ins Erlebnisbad direkt nebenan.",
    },
    categories: [
      { id: "stellplatz", label: "Stellplatz · 2 Personen", perNight: 31.5, perExtraGuest: 11.8 },
      { id: "radler", label: "Radlertarif · 2 Personen", perNight: 26.4, perExtraGuest: 11.8 },
      { id: "acsi", label: "ACSI/ADAC · 2 Personen inkl. Strom", perNight: 25 },
    ],
  },

  kontakt: {
    tel: "+43 (4710) 22 48",
    telHref: "tel:+4347102248",
    mail: "oberdrauburg.tourist@ktn.gde.at",
    adresse: "Unterberg 31 · 9781 Oberdrauburg · Kärnten",
    coords: { lat: 46.7405184, lng: 12.9725542 },
  },

  languages: ["DE"],

  nav: [
    { label: "Camping", href: "#camping", children: [
      { label: "Stellplätze", href: "#camping" },
      { label: "Sanitär", href: "#camping" },
    ]},
    { label: "Erleben", href: "#aktivitaeten" },
    { label: "Galerie", href: "#galerie" },
    { label: "Preise & Anreise", href: "#booking", children: [
      { label: "Preise", href: "#booking" },
      { label: "Anreise", href: "#anreise" },
    ]},
  ],
};

export default oberdrauburg;
