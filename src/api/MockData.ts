import { MockService } from "../common/modules/MockService";
import { RandomService } from "../common/modules/RandomService";
import { IToken, IWhale } from "../domain/entities/Entities";
import { ApiResponse, FearAndGreedResponse, Token } from "./apiTypes";

export const MOCK_DATA_TOKEN: ApiResponse<Token[]> = {
  code: 200,
  response: [
    {
      token_address: "8xPe3DMr52oYAkCBk57ZeQE1h5zBkWNk37eE4J8spump",
      name: "Ivanka Trump",
      symbol: "ITRUMP",
      logo_uri:
        "https://file.dexlab.space/file/4553202ec4084e559c42191ae8673c55",
    },
    {
      token_address: "BSubUBTHxECeAYUsAs9FmjbuECvMBfuvs1PA8EkKpump",
      name: "TRUMP SIDE EYE",
      symbol: "Side Eye",
      logo_uri:
        "https://ipfs.io/ipfs/QmTHfZNLbaqTsn8sVdjpsTSHASZYDMXQy65fgkSSqFCsNh",
    },
    {
      token_address: "7vjP44eR4RptCpnFnJwyFpDnKVZ2ZoJNdSixYscRpump",
      name: "Eric Trump",
      symbol: "ETRUMP",
      logo_uri:
        "https://file.dexlab.space/file/d0b8576d55dc403eb5913ffbd783a442",
    },
    {
      token_address: "BhYEYuq5rPmJsWCPfCdcqHtbcpWTuBE4a5UsFCKTpump",
      name: "Elon Trump",
      symbol: "ELONTRUMP",
      logo_uri:
        "https://file.dexlab.space/file/f70a111ed3424e3a9abe35c5d928ee4f",
    },
    {
      token_address: "AkXwfS9cwASWPUiP7rRaxj4R7jgQ6JyPX2KtxH8NmpKv",
      name: "OFFICIAL TRUMP",
      symbol: "TRUMP",
      logo_uri:
        "https://i.degencdn.com/ipfs/bafkreihxyuypyalmkcnxtjmf5oifn6bgexw7omlgfxshrvikn2scw3z77u",
    },
  ],
  last_updated: 1742377636,
};

export const MOCK_DATA_FEAR_AND_GREED: ApiResponse<FearAndGreedResponse> = {
  code: 200,
  response: {
    value: 39,
    valueClassification: "Fear",
    timestamp: 1742428800,
    chain: "solana",
    fearAndGreed: [
      {
        value: 34,
        valueClassification: "Fear",
        timestamp: 1742342400,
        chain: "solana",
      },
    ],
    tokenPrices: {
      So11111111111111111111111111111111111111112: {
        price: 133.903446,
        updateUnixTime: 1742443149,
        updateHumanTime: "2025-03-20T03:59:09",
        volumeUSD: 1970433578.14212,
        volumeChangePercent: 9.730745,
        priceChangePercent: 5.910767,
      },
    },
  },
  last_updated: 1742445807,
};

export const COIN_MAP = {
  chillGuy: MockService.generateToken({
    name: "CHILLGUY",
    logoUrl: "/chillguy.jpeg",
    volume: RandomService.generateRandomNumber(1000, 1000),
  }),
  chillgirl: MockService.generateToken({
    name: "CHILLGIRL",
    logoUrl: "/chillgirl.png",
  }),
  pnut: MockService.generateToken({
    name: "PNUT",
    logoUrl: "/pnut.png",
  }),
  degays: MockService.generateToken({
    name: "DEGAYS",
    logoUrl: "/degays.png",
  }),
  aixbt: MockService.generateToken({
    name: "AIXBT",
    logoUrl: "/aixbt.jpeg",
  }),
  adonis: MockService.generateToken({
    name: "ADONIS",
    logoUrl: "/adonis.jpeg",
  }),
  god: MockService.generateToken({
    name: "GOD",
    logoUrl: "/god.png",
  }),
  intern: MockService.generateToken({
    name: "INTERN",
    logoUrl: "/intern.jpeg",
  }),
  ai16z: MockService.generateToken({
    name: "AI16Z",
    logoUrl: "/ai16z.jpeg",
  }),
  fartcoin: MockService.generateToken({
    name: "FARTCOIN",
    logoUrl: "/fartcoin.png",
  }),
  goat: MockService.generateToken({
    name: "GOAT",
    logoUrl: "/goat.png",
  }),
  luigi: MockService.generateToken({
    name: "LUIGI",
    logoUrl: "/luigi.png",
  }),
  pusheen: MockService.generateToken({
    name: "PUSHEEN",
    logoUrl: "/pusheen.png",
  }),
};

export const MockTokens: IToken[] = Object.values(COIN_MAP);

export const MockWhaleWatchBase: IWhale[] = [
  {
    name: "ACT Whale",
    purchased: 8,
    token: COIN_MAP.fartcoin,
    logoUrl: "/user-whale1.png",
  },
  {
    name: "ACT Whale",
    purchased: -8,
    token: COIN_MAP.luigi,
    logoUrl: "/user-whale1.png",
  },
  {
    name: "ACT FWOG",
    purchased: -8,
    token: COIN_MAP.pusheen,
    logoUrl: "/user-whale2.png",
  },
];

export const MockWhaleWatch: IWhale[] = [
  ...MockWhaleWatchBase,
  ...MockWhaleWatchBase,
  ...MockWhaleWatchBase,
];
