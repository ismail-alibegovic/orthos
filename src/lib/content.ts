// Sav sadržaj preuzet je sa službene stranice www.poliklinika-orthos.ba
// (tekstovi usluga, imena i titule doktora, adrese, telefoni, radno vrijeme).

export const ORIGINAL_SITE = "https://www.poliklinika-orthos.ba/v2";

export const contact = {
  email: "info@poliklinika-orthos.ba",
  mobile: { label: "062 942 428", href: "tel:+38762942428" },
  hours: [
    { days: "Ponedjeljak – Petak", time: "09:00 – 17:00" },
    { days: "Subota – Nedjelja", time: "Zatvoreno" },
  ],
  facebook: "https://www.facebook.com/poliklinikaorthos/",
  youtube: "https://www.youtube.com/@poliklinikaorthossarajevo8790",
};

export const locations = [
  {
    id: "importanne",
    name: "Ambulanta Importanne Centar",
    subtitle: "Ambulanta za ortopediju i opštu hirurgiju",
    address: "Zmaja od Bosne 7/1, Importanne Centar, I sprat",
    city: "71000 Sarajevo",
    phones: [
      { label: "033 223 388", href: "tel:+38733223388" },
      { label: "062 942 428", href: "tel:+38762942428" },
    ],
    image: "/images/importanne-recepcija.jpg",
    imageAlt: "Recepcija ambulante Poliklinike ORTHOS u Importanne Centru",
    maps: "https://www.google.com/maps/search/?api=1&query=Poliklinika+Orthos+Importanne+Centar+Zmaja+od+Bosne+7+Sarajevo",
    tag: "Pregledi i ambulantni zahvati",
  },
  {
    id: "kromolj",
    name: "Dnevna bolnica Kromolj",
    subtitle: "Operacioni blok i jednodnevna hirurgija",
    address: "Kromolj 25 D",
    city: "71000 Sarajevo",
    phones: [
      { label: "033 811 213", href: "tel:+38733811213" },
      { label: "062 942 428", href: "tel:+38762942428" },
    ],
    image: "/images/kromolj-recepcija.jpg",
    imageAlt: "Recepcija Dnevne bolnice Poliklinike ORTHOS na Kromolju",
    maps: "https://www.google.com/maps/search/?api=1&query=Poliklinika+Orthos+Dnevna+bolnica+Kromolj+25D+Sarajevo",
    tag: "Hirurški zahvati i oporavak",
  },
];

export const doctors = [
  {
    name: "Prim. mr. sci. dr. Senad Maksić",
    shortName: "Dr. Senad Maksić",
    role: "Specijalista opšte hirurgije i traumatologije",
    image: "/images/dr-senad-maksic.webp",
  },
  {
    name: "Mr. sci. dr. Semin Bećirbegović",
    shortName: "Dr. Semin Bećirbegović",
    role: "Specijalista ortopedije",
    image: "/images/dr-semin-becirbegovic.webp",
  },
  {
    name: "Dr. Senail Sivro",
    shortName: "Dr. Senail Sivro",
    role: "Specijalista opšte hirurgije i traumatologije",
    image: "/images/dr-senail-sivro.webp",
  },
];

export type Service = {
  title: string;
  text: string;
  points?: string[];
  href: string;
  image: string;
  imageAlt: string;
  stock?: boolean;
};

export const services: Service[] = [
  {
    title: "Specijalistički pregledi",
    text: "Ortopedski, traumatološki i hirurški pregledi, liječenje bolesti i povreda ekstremiteta, te tretmani i intervencije na tetivama, ligamentima i hrskavici.",
    points: ["Ortopedija", "Traumatologija", "Opšta hirurgija"],
    href: `${ORIGINAL_SITE}/1.php`,
    image: "/images/importanne-ambulanta.jpg",
    imageAlt: "Ambulanta Poliklinike ORTHOS u Importanne Centru",
  },
  {
    title: "Artroskopska hirurgija",
    text: "Minimalno invazivni zahvati na ramenu, koljenu i gležnju kroz nekoliko malih rezova. Manje oštećenje okolnog tkiva znači brži i kvalitetniji oporavak.",
    points: ["Rame", "Koljeno", "Gležanj"],
    href: `${ORIGINAL_SITE}/6.php`,
    image: "/images/kromolj-operaciona-sala.jpg",
    imageAlt: "Operaciona sala Dnevne bolnice ORTHOS na Kromolju",
  },
  {
    title: "PRP tretman",
    text: "Terapija plazmom obogaćenom trombocitima iz vlastite krvi potiče regeneraciju oštećenih tetiva, mišića, ligamenata i hrskavice. Cijeli tretman traje manje od 20 minuta.",
    points: ["Vlastiti faktori rasta", "Bez dužeg oporavka"],
    href: `${ORIGINAL_SITE}/3.php`,
    image: "/images/model-koljena.jpg",
    imageAlt: "Anatomski modeli zgloba koljena",
    stock: true,
  },
  {
    title: "Ultrazvuk kukova za djecu",
    text: "Bezbolan pregled koji se preporučuje između prvog i drugog mjeseca života, radi rane detekcije razvojne displazije kuka.",
    points: ["Bezbolno", "Rana dijagnoza"],
    href: `${ORIGINAL_SITE}/2.php`,
    image: "/images/kromolj-ambulanta.jpg",
    imageAlt: "Ambulanta s ultrazvučnim aparatom u Dnevnoj bolnici Kromolj",
  },
  {
    title: "Ambulantni zahvati u lokalnoj anesteziji",
    text: "Operacija uraslog nokta, sindrom karpalnog tunela, odstranjenje osteosintetskog materijala, ateroma, lipoma i drugih manjih promjena — bez boravka u bolnici.",
    points: ["Urasli nokat", "Karpalni tunel", "Ateromi i lipomi"],
    href: `${ORIGINAL_SITE}/5.php`,
    image: "/images/importanne-ambulanta-2.jpg",
    imageAlt: "Ambulanta za manje hirurške zahvate u Importanne Centru",
  },
  {
    title: "Hirurgija šake i stopala",
    text: "Liječenje povreda i oboljenja nerava, kostiju i tetiva šake, Dupuytrenove kontrakture, te hallux valgusa, čekićastih prstiju i nestabilnosti skočnog zgloba.",
    points: ["Šaka", "Stopalo", "Skočni zglob"],
    href: `${ORIGINAL_SITE}/7.php`,
    image: "/images/ortoza-zglob.jpg",
    imageAlt: "Ljekar postavlja ortozu na ručni zglob",
    stock: true,
  },
  {
    title: "Hirurgija ekstremiteta i osteosinteza",
    text: "Hirurško liječenje povreda, prijeloma, oboljenja i tumora gornjih i donjih ekstremiteta, uz različite tehnike osteosinteze prijeloma.",
    points: ["Prijelomi", "Povrede", "Osteosinteza"],
    href: `${ORIGINAL_SITE}/9.php`,
    image: "/images/kromolj-operaciona-sala-2.jpg",
    imageAlt: "Operaciona sala s rendgen aparatom u Dnevnoj bolnici Kromolj",
  },
];

export const hospitalGallery = [
  {
    image: "/images/kromolj-operaciona-sala-3.jpg",
    title: "Operaciona sala",
    text: "Savremeno opremljen operacioni blok za artroskopske i druge hirurške zahvate.",
  },
  {
    image: "/images/kromolj-soba.jpg",
    title: "Soba za oporavak",
    text: "Pacijent nakon zahvata odmara u mirnom ambijentu, uz stalni nadzor osoblja.",
  },
  {
    image: "/images/kromolj-apartman.jpg",
    title: "Apartman za pacijente",
    text: "Udoban smještaj za pacijente i pratnju tokom boravka u dnevnoj bolnici.",
  },
  {
    image: "/images/kromolj-ambulanta-2.jpg",
    title: "Ambulanta Kromolj",
    text: "Pregledi, pripreme za zahvat i kontrolni pregledi na istom mjestu.",
  },
];

export const navLinks = [
  { label: "O nama", href: "#o-nama" },
  { label: "Usluge", href: "#usluge" },
  { label: "Doktori", href: "#doktori" },
  { label: "Dnevna bolnica", href: "#dnevna-bolnica" },
  { label: "Lokacije", href: "#lokacije" },
  { label: "Kontakt", href: "#kontakt" },
];
