import { KolMapping } from "../types/BusinessLogicTypes";

export const kolMapping: KolMapping[] = [
  {
    url: "https://x.com/ratwizardx",
    name: "ratwizardx",
    wallet: "JDd3hy3gQn2V982mi1zqhNqUw1GfV2UL6g76STojCJPN",
    logoUrl: "",
  },
  {
    url: "https://x.com/vibed333",
    name: "vibed333",
    wallet: "BCagckXeMChUKrHEd6fKFA1uiWDtcmCXMsqaheLiUPJd",
    logoUrl: "",
  },
  {
    url: "https://x.com/Cented7",
    name: "Cented7",
    wallet: "CyaE1VxvBrahnPWkqm5VsdCvyS2QmNht2UFrKJHga54o",
    logoUrl: "",
  },
  {
    url: "https://x.com/Kevsznx",
    name: "Kevsznx",
    wallet: "BTf4A2exGK9BCVDNzy65b9dUzXgMqB4weVkvTMFQsadd",
    logoUrl: "",
  },
  {
    url: "https://x.com/absolquant",
    name: "absolquant",
    wallet: "BXNiM7pqt9Ld3b2Hc8iT3mA5bSwoe9CRrtkSUs15SLWN",
    logoUrl: "",
  },
  {
    url: "https://x.com/Euris_JT",
    name: "Euris_JT",
    wallet: "DfMxre4cKmvogbLrPigxmibVTTQDuzjdXojWzjCXXhzj",
    logoUrl: "",
  },
  {
    url: "https://x.com/Loopierr",
    name: "Loopierr",
    wallet: "9yYya3F5EJoLnBNKW6z4bZvyQytMXzDcpU5D6yYr4jqL",
    logoUrl: "",
  },
  {
    url: "https://x.com/jidn_w",
    name: "jidn_w",
    wallet: "3h65MmPZksoKKyEpEjnWU2Yk2iYT5oZDNitGy5cTaxoE",
    logoUrl: "",
  },
  {
    url: "https://x.com/tilcrypto",
    name: "tilcrypto",
    wallet: "EHg5YkU2SZBTvuT87rUsvxArGp3HLeye1fXaSDfuMyaf",
    logoUrl: "",
  },
  {
    url: "https://x.com/casino616",
    name: "casino616",
    wallet: "8rvAsDKeAcEjEkiZMug9k8v1y8mW6gQQiMobd89Uy7qR",
    logoUrl: "",
  },
];

// Map of wallet addresses to their KolMapping objects
export const kolMappingByWallet: Record<string, KolMapping> = kolMapping.reduce(
  (acc, kol) => {
    acc[kol.wallet] = kol;
    return acc;
  },
  {} as Record<string, KolMapping>,
);

// https://x.com/ratwizardx/photo
// https://x.com/vibed333/photo
// https://x.com/Cented7/photo
// https://x.com/Kevsznx/photo
// https://x.com/absolquant/photo
// https://x.com/Euris_JT/photo
// https://x.com/Loopierr/photo
// https://x.com/jidn_w/photo
// https://x.com/tilcrypto/photo
// https://x.com/casino616/photo
