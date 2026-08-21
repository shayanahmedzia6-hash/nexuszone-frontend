import { type Partner } from "@/types/partner";

/**
 * UAE free zones and banks we help clients set up and open accounts with.
 * Entries without logoUrl fall back to a text badge until a real logo file
 * is supplied (drop it in public/images/partners and set logoUrl).
 */
export const partners: Partner[] = [
  // Free zones
  { id: "jafza", name: "Jebel Ali Free Zone (JAFZA)", category: "free-zone", logoUrl: "/images/partners/jafza.png" },
  { id: "dmcc", name: "Dubai Multi Commodities Centre (DMCC)", category: "free-zone", logoUrl: "/images/partners/dmcc.jpg" },
  { id: "difc", name: "Dubai International Financial Centre (DIFC)", category: "free-zone", logoUrl: "/images/partners/difc.png" },
  { id: "dafza", name: "Dubai Airport Free Zone (DAFZA)", category: "free-zone", logoUrl: "/images/partners/dafza.svg" },
  { id: "dso", name: "Dubai Silicon Oasis (DSO)", category: "free-zone" },
  { id: "dic", name: "Dubai Internet City (DIC)", category: "free-zone" },
  { id: "dmc", name: "Dubai Media City (DMC)", category: "free-zone" },
  { id: "d3", name: "Dubai Design District (d3)", category: "free-zone" },
  { id: "dhcc", name: "Dubai Healthcare City (DHCC)", category: "free-zone" },
  { id: "dubai-south", name: "Dubai South Free Zone", category: "free-zone" },
  { id: "dcc", name: "Dubai CommerCity (DCC)", category: "free-zone" },
  { id: "ifza", name: "International Free Zone Authority (IFZA)", category: "free-zone" },
  { id: "meydan-fz", name: "Meydan Free Zone", category: "free-zone" },
  { id: "adgm", name: "Abu Dhabi Global Market (ADGM)", category: "free-zone", logoUrl: "/images/partners/adgm.png" },
  { id: "kizad", name: "Khalifa Industrial Zone Abu Dhabi (KIZAD)", category: "free-zone" },
  { id: "twofour54", name: "twofour54", category: "free-zone", logoUrl: "/images/partners/twofour54.png" },
  { id: "masdar-city", name: "Masdar City Free Zone", category: "free-zone" },
  { id: "saif-zone", name: "Sharjah Airport International Free Zone (SAIF Zone)", category: "free-zone" },
  { id: "hfza", name: "Hamriyah Free Zone Authority (HFZA)", category: "free-zone" },
  { id: "shams", name: "Sharjah Media City (Shams)", category: "free-zone" },
  { id: "afza", name: "Ajman Free Zone (AFZA)", category: "free-zone" },
  { id: "rakez", name: "RAK Economic Zone (RAKEZ)", category: "free-zone" },
  { id: "ffza", name: "Fujairah Free Zone (FFZA)", category: "free-zone" },
  { id: "uaqftz", name: "Umm Al Quwain Free Trade Zone (UAQFTZ)", category: "free-zone" },

  // Banks
  { id: "emirates-nbd", name: "Emirates NBD", category: "bank", logoUrl: "/images/partners/emirates-nbd.png" },
  { id: "fab", name: "First Abu Dhabi Bank (FAB)", category: "bank", logoUrl: "/images/partners/fab.svg" },
  { id: "adcb", name: "Abu Dhabi Commercial Bank (ADCB)", category: "bank", logoUrl: "/images/partners/adcb.svg" },
  { id: "dib", name: "Dubai Islamic Bank (DIB)", category: "bank", logoUrl: "/images/partners/dib.png" },
  { id: "mashreq", name: "Mashreq Bank", category: "bank", logoUrl: "/images/partners/mashreq.svg" },
  { id: "adib", name: "Abu Dhabi Islamic Bank (ADIB)", category: "bank", logoUrl: "/images/partners/adib.svg" },
  { id: "rakbank", name: "RAKBANK", category: "bank", logoUrl: "/images/partners/rakbank.png" },
  { id: "cbd", name: "Commercial Bank of Dubai (CBD)", category: "bank", logoUrl: "/images/partners/cbd.svg" },
  { id: "sib", name: "Sharjah Islamic Bank (SIB)", category: "bank" },
  { id: "nbf", name: "National Bank of Fujairah (NBF)", category: "bank" },
  { id: "emirates-islamic", name: "Emirates Islamic Bank", category: "bank", logoUrl: "/images/partners/emirates-islamic.png" },
  { id: "ajman-bank", name: "Ajman Bank", category: "bank" },
  { id: "bank-of-sharjah", name: "Bank of Sharjah", category: "bank" },
  { id: "united-arab-bank", name: "United Arab Bank (UAB)", category: "bank" },
  { id: "invest-bank", name: "Invest Bank", category: "bank" },
  { id: "cbi", name: "Commercial Bank International (CBI)", category: "bank" },
  { id: "al-masraf", name: "Al Masraf", category: "bank" },
  { id: "wio-bank", name: "Wio Bank", category: "bank" },
  { id: "hsbc-uae", name: "HSBC UAE", category: "bank", logoUrl: "/images/partners/hsbc-uae.svg" },
  { id: "standard-chartered-uae", name: "Standard Chartered UAE", category: "bank" },
  { id: "citibank-uae", name: "Citibank UAE", category: "bank" },
];
