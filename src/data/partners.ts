import { type Partner } from "@/types/partner";

const FREE_ZONE_LOGO = "/images/partners/free-zones";
const BANK_LOGO = "/images/partners/banks";

/**
 * UAE free zones and banks we help clients set up and open accounts with.
 * Logos live in public/images/partners/free-zones and public/images/partners/banks.
 * Entries without logoUrl fall back to a text badge until a file is added.
 */
export const partners: Partner[] = [
  // Free zones
  { id: "jafza", name: "Jebel Ali Free Zone (JAFZA)", category: "free-zone", logoUrl: `${FREE_ZONE_LOGO}/jafza.png` },
  { id: "dmcc", name: "Dubai Multi Commodities Centre (DMCC)", category: "free-zone", logoUrl: `${FREE_ZONE_LOGO}/dmcc.jpg` },
  { id: "difc", name: "Dubai International Financial Centre (DIFC)", category: "free-zone", logoUrl: `${FREE_ZONE_LOGO}/difc.png` },
  { id: "dafza", name: "Dubai Airport Free Zone (DAFZA)", category: "free-zone", logoUrl: `${FREE_ZONE_LOGO}/dafza.svg` },
  { id: "dso", name: "Dubai Silicon Oasis (DSO)", category: "free-zone", logoUrl: `${FREE_ZONE_LOGO}/dso.svg`, logoLightBackground: true },
  { id: "dic", name: "Dubai Internet City (DIC)", category: "free-zone", logoUrl: `${FREE_ZONE_LOGO}/dic.svg`, logoLightBackground: true },
  { id: "dmc", name: "Dubai Media City (DMC)", category: "free-zone", logoUrl: `${FREE_ZONE_LOGO}/dmc.svg`, logoLightBackground: true },
  { id: "d3", name: "Dubai Design District (d3)", category: "free-zone", logoUrl: `${FREE_ZONE_LOGO}/ddd.svg`, logoLightBackground: true },
  { id: "dhcc", name: "Dubai Healthcare City (DHCC)", category: "free-zone", logoUrl: `${FREE_ZONE_LOGO}/dhcc.svg`, logoLightBackground: true },
  { id: "dubai-south", name: "Dubai South Free Zone", category: "free-zone", logoUrl: `${FREE_ZONE_LOGO}/dubaisouth.svg` },
  { id: "dcc", name: "Dubai CommerCity (DCC)", category: "free-zone", logoUrl: `${FREE_ZONE_LOGO}/dubaicummercity.svg`, logoLightBackground: true },
  { id: "ifza", name: "International Free Zone Authority (IFZA)", category: "free-zone", logoUrl: `${FREE_ZONE_LOGO}/Ifza.svg` },
  {
    id: "meydan-fz",
    name: "Meydan Free Zone",
    category: "free-zone",
    logoUrl: `${FREE_ZONE_LOGO}/Meydan%20Free%20Zone.webp`,
  },
  { id: "adgm", name: "Abu Dhabi Global Market (ADGM)", category: "free-zone", logoUrl: `${FREE_ZONE_LOGO}/adgm.png` },
  {
    id: "kizad",
    name: "Khalifa Industrial Zone Abu Dhabi (KIZAD)",
    category: "free-zone",
    logoUrl: `${FREE_ZONE_LOGO}/KIZAD.webp`,
  },
  { id: "twofour54", name: "twofour54", category: "free-zone", logoUrl: `${FREE_ZONE_LOGO}/twofour54.png` },
  {
    id: "masdar-city",
    name: "Masdar City Free Zone",
    category: "free-zone",
    logoUrl: `${FREE_ZONE_LOGO}/Masdar%20City.svg`,
  },
  {
    id: "saif-zone",
    name: "Sharjah Airport International Free Zone (SAIF Zone)",
    category: "free-zone",
    logoUrl: `${FREE_ZONE_LOGO}/SAIF%20Zone.jfif`,
  },
  {
    id: "hfza",
    name: "Hamriyah Free Zone Authority (HFZA)",
    category: "free-zone",
    logoUrl: `${FREE_ZONE_LOGO}/Hamriyah%20Free%20Zone.jfif`,
  },
  {
    id: "shams",
    name: "Sharjah Media City (Shams)",
    category: "free-zone",
    logoUrl: `${FREE_ZONE_LOGO}/Shams.svg`,
    logoLightBackground: true,
  },
  {
    id: "afza",
    name: "Ajman Free Zone (AFZA)",
    category: "free-zone",
    logoUrl: `${FREE_ZONE_LOGO}/Ajman%20Free%20Zone.svg`,
    logoLightBackground: true,
  },
  {
    id: "rakez",
    name: "RAK Economic Zone (RAKEZ)",
    category: "free-zone",
    logoUrl: `${FREE_ZONE_LOGO}/RAKEZ.svg`,
  },
  {
    id: "ffza",
    name: "Fujairah Free Zone (FFZA)",
    category: "free-zone",
    logoUrl: `${FREE_ZONE_LOGO}/Fujairah%20Free%20Zone.jfif`,
  },
  {
    id: "uaqftz",
    name: "Umm Al Quwain Free Trade Zone (UAQFTZ)",
    category: "free-zone",
    logoUrl: `${FREE_ZONE_LOGO}/UAQ%20Free%20Trade%20Zone.png`,
  },

  // Banks
  { id: "emirates-nbd", name: "Emirates NBD", category: "bank", logoUrl: `${BANK_LOGO}/emirates-nbd.png` },
  { id: "fab", name: "First Abu Dhabi Bank (FAB)", category: "bank", logoUrl: `${BANK_LOGO}/fab.svg` },
  { id: "adcb", name: "Abu Dhabi Commercial Bank (ADCB)", category: "bank", logoUrl: `${BANK_LOGO}/adcb.svg` },
  { id: "dib", name: "Dubai Islamic Bank (DIB)", category: "bank", logoUrl: `${BANK_LOGO}/dib.png` },
  { id: "mashreq", name: "Mashreq Bank", category: "bank", logoUrl: `${BANK_LOGO}/mashreq.svg` },
  { id: "adib", name: "Abu Dhabi Islamic Bank (ADIB)", category: "bank", logoUrl: `${BANK_LOGO}/adib.svg` },
  { id: "rakbank", name: "RAKBANK", category: "bank", logoUrl: `${BANK_LOGO}/rakbank.png` },
  { id: "cbd", name: "Commercial Bank of Dubai (CBD)", category: "bank", logoUrl: `${BANK_LOGO}/cbd.svg` },
  {
    id: "sib",
    name: "Sharjah Islamic Bank (SIB)",
    category: "bank",
    logoUrl: `${BANK_LOGO}/sharjah%20islamic%20bank.jfif`,
    logoLarge: true,
  },
  { id: "nbf", name: "National Bank of Fujairah (NBF)", category: "bank", logoUrl: `${BANK_LOGO}/NBF.jfif`, logoLarge: true },
  { id: "emirates-islamic", name: "Emirates Islamic Bank", category: "bank", logoUrl: `${BANK_LOGO}/emirates-islamic.png` },
  {
    id: "ajman-bank",
    name: "Ajman Bank",
    category: "bank",
    logoUrl: `${BANK_LOGO}/ajmanbank.jfif`,
    logoLarge: true,
  },
  {
    id: "bank-of-sharjah",
    name: "Bank of Sharjah",
    category: "bank",
    logoUrl: `${BANK_LOGO}/Bank%20of%20sharjha.jfif`,
  },
  {
    id: "united-arab-bank",
    name: "United Arab Bank (UAB)",
    category: "bank",
    logoUrl: `${BANK_LOGO}/United%20arab%20bank.jfif`,
    logoLarge: true,
  },
  {
    id: "invest-bank",
    name: "Invest Bank",
    category: "bank",
    logoUrl: `${BANK_LOGO}/invest%20bank.jfif`,
  },
  {
    id: "cbi",
    name: "Commercial Bank International (CBI)",
    category: "bank",
    logoUrl: `${BANK_LOGO}/CBI.jfif`,
  },
  {
    id: "al-masraf",
    name: "Al Masraf",
    category: "bank",
    logoUrl: `${BANK_LOGO}/AI%20masraf.jfif`,
    logoLarge: true,
  },
  {
    id: "wio-bank",
    name: "Wio Bank",
    category: "bank",
    logoUrl: `${BANK_LOGO}/WIO%20bank.jfif`,
  },
  { id: "hsbc-uae", name: "HSBC UAE", category: "bank", logoUrl: `${BANK_LOGO}/hsbc-uae.svg` },
  {
    id: "standard-chartered-uae",
    name: "Standard Chartered UAE",
    category: "bank",
    logoUrl: `${BANK_LOGO}/Standard%20chartered.jfif`,
    logoLarge: true,
  },
  {
    id: "citibank-uae",
    name: "Citibank UAE",
    category: "bank",
    logoUrl: `${BANK_LOGO}/Citibank.jfif`,
    logoLarge: true,
  },
];
