import { type Partner } from "@/types/partner";

/**
 * UAE free zones and banks we help clients set up and open accounts with.
 * logoUrl is intentionally left unset for every entry — cards fall back to a
 * text badge until real logo files are supplied (drop them in
 * public/images/partners and set logoUrl on the matching entry).
 */
export const partners: Partner[] = [
  // Free zones
  { id: "jafza", name: "Jebel Ali Free Zone (JAFZA)", category: "free-zone" },
  { id: "dmcc", name: "Dubai Multi Commodities Centre (DMCC)", category: "free-zone" },
  { id: "difc", name: "Dubai International Financial Centre (DIFC)", category: "free-zone" },
  { id: "dafza", name: "Dubai Airport Free Zone (DAFZA)", category: "free-zone" },
  { id: "dso", name: "Dubai Silicon Oasis (DSO)", category: "free-zone" },
  { id: "dic", name: "Dubai Internet City (DIC)", category: "free-zone" },
  { id: "dmc", name: "Dubai Media City (DMC)", category: "free-zone" },
  { id: "d3", name: "Dubai Design District (d3)", category: "free-zone" },
  { id: "dhcc", name: "Dubai Healthcare City (DHCC)", category: "free-zone" },
  { id: "dubai-south", name: "Dubai South Free Zone", category: "free-zone" },
  { id: "dcc", name: "Dubai CommerCity (DCC)", category: "free-zone" },
  { id: "ifza", name: "International Free Zone Authority (IFZA)", category: "free-zone" },
  { id: "meydan-fz", name: "Meydan Free Zone", category: "free-zone" },
  { id: "adgm", name: "Abu Dhabi Global Market (ADGM)", category: "free-zone" },
  { id: "kizad", name: "Khalifa Industrial Zone Abu Dhabi (KIZAD)", category: "free-zone" },
  { id: "twofour54", name: "twofour54", category: "free-zone" },
  { id: "masdar-city", name: "Masdar City Free Zone", category: "free-zone" },
  { id: "saif-zone", name: "Sharjah Airport International Free Zone (SAIF Zone)", category: "free-zone" },
  { id: "hfza", name: "Hamriyah Free Zone Authority (HFZA)", category: "free-zone" },
  { id: "shams", name: "Sharjah Media City (Shams)", category: "free-zone" },
  { id: "afza", name: "Ajman Free Zone (AFZA)", category: "free-zone" },
  { id: "rakez", name: "RAK Economic Zone (RAKEZ)", category: "free-zone" },
  { id: "ffza", name: "Fujairah Free Zone (FFZA)", category: "free-zone" },
  { id: "uaqftz", name: "Umm Al Quwain Free Trade Zone (UAQFTZ)", category: "free-zone" },

  // Banks
  { id: "emirates-nbd", name: "Emirates NBD", category: "bank" },
  { id: "fab", name: "First Abu Dhabi Bank (FAB)", category: "bank" },
  { id: "adcb", name: "Abu Dhabi Commercial Bank (ADCB)", category: "bank" },
  { id: "dib", name: "Dubai Islamic Bank (DIB)", category: "bank" },
  { id: "mashreq", name: "Mashreq Bank", category: "bank" },
  { id: "adib", name: "Abu Dhabi Islamic Bank (ADIB)", category: "bank" },
  { id: "rakbank", name: "RAKBANK", category: "bank" },
  { id: "cbd", name: "Commercial Bank of Dubai (CBD)", category: "bank" },
  { id: "sib", name: "Sharjah Islamic Bank (SIB)", category: "bank" },
  { id: "nbf", name: "National Bank of Fujairah (NBF)", category: "bank" },
  { id: "emirates-islamic", name: "Emirates Islamic Bank", category: "bank" },
  { id: "ajman-bank", name: "Ajman Bank", category: "bank" },
  { id: "bank-of-sharjah", name: "Bank of Sharjah", category: "bank" },
  { id: "hsbc-uae", name: "HSBC UAE", category: "bank" },
];
