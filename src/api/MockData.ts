import { MockService } from "../common/modules/MockService";
import { RandomService } from "../common/modules/RandomService";
import { IToken, IWhale } from "../domain/entities/Entities";
import {
  ApiResponse,
  FearAndGreedResponse,
  MindshareItem,
  Token,
} from "./apiTypes";

export const MOCK_DATA_TOKEN: ApiResponse<Token[]> = {
  code: 200,
  response: [
    {
      token_address: "8xPe3DMr52oYAkCBk57ZeQE1h5zBkWNk37eE4J8spump",
      name: "Ivanka Trump",
      symbol: "ITRUMP",
      mc: 1_000_000_000,
      logo_uri:
        "https://file.dexlab.space/file/4553202ec4084e559c42191ae8673c55",
    },
    {
      token_address: "BSubUBTHxECeAYUsAs9FmjbuECvMBfuvs1PA8EkKpump",
      name: "TRUMP SIDE EYE",
      symbol: "Side Eye",
      mc: 1_000_000_000,
      logo_uri:
        "https://ipfs.io/ipfs/QmTHfZNLbaqTsn8sVdjpsTSHASZYDMXQy65fgkSSqFCsNh",
    },
    {
      token_address: "7vjP44eR4RptCpnFnJwyFpDnKVZ2ZoJNdSixYscRpump",
      name: "Eric Trump",
      symbol: "ETRUMP",
      mc: 1_000_000_000,
      logo_uri:
        "https://file.dexlab.space/file/d0b8576d55dc403eb5913ffbd783a442",
    },
    {
      token_address: "BhYEYuq5rPmJsWCPfCdcqHtbcpWTuBE4a5UsFCKTpump",
      name: "Elon Trump",
      symbol: "ELONTRUMP",
      mc: 1_000_000_000,
      logo_uri:
        "https://file.dexlab.space/file/f70a111ed3424e3a9abe35c5d928ee4f",
    },
    {
      token_address: "AkXwfS9cwASWPUiP7rRaxj4R7jgQ6JyPX2KtxH8NmpKv",
      name: "OFFICIAL TRUMP",
      symbol: "TRUMP",
      mc: 1_000_000_000,
      logo_uri:
        "https://i.degencdn.com/ipfs/bafkreihxyuypyalmkcnxtjmf5oifn6bgexw7omlgfxshrvikn2scw3z77u",
    },
  ],
  last_updated: 1742377636,
};

export const MOCK_DATA_MINDSHARE: ApiResponse<MindshareItem[]> = {
  code: 200,
  response: [
    {
      tokenAddress: "6p6xgHyF7AeE6TZkSmFsko444wqoP15icUSqi2jfGiPN",
      changePercentage: 8.487890665933689,
      logoUrl:
        "https://arweave.net/VQrPjACwnQRmxdKBTqNwPiyo65x7LAT773t8Kd7YBzw",
      name: "OFFICIAL TRUMP",
      symbol: "TRUMP",
    },
    {
      tokenAddress: "6p6xgHyF7AeE6TZkSmFsko444wqoP15icUSqi2jfGiPN",
      changePercentage: 8.258040677188431,
      logoUrl:
        "https://arweave.net/VQrPjACwnQRmxdKBTqNwPiyo65x7LAT773t8Kd7YBzw",
      name: "OFFICIAL TRUMP",
      symbol: "TRUMP",
    },
    {
      tokenAddress: "3NZ9JMVBmGAqocybic2c7LQCJScmgsAZ6vQqTDzcqmJh",
      changePercentage: 6.8223359498554075,
      logoUrl:
        "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/3NZ9JMVBmGAqocybic2c7LQCJScmgsAZ6vQqTDzcqmJh/logo.png",
      name: "Wrapped BTC (Wormhole)",
      symbol: "WBTC",
    },
    {
      tokenAddress: "6p6xgHyF7AeE6TZkSmFsko444wqoP15icUSqi2jfGiPN",
      changePercentage: 6.63231716840344,
      logoUrl:
        "https://arweave.net/VQrPjACwnQRmxdKBTqNwPiyo65x7LAT773t8Kd7YBzw",
      name: "OFFICIAL TRUMP",
      symbol: "TRUMP",
    },
    {
      tokenAddress: "6p6xgHyF7AeE6TZkSmFsko444wqoP15icUSqi2jfGiPN",
      changePercentage: 6.475076572574094,
      logoUrl:
        "https://arweave.net/VQrPjACwnQRmxdKBTqNwPiyo65x7LAT773t8Kd7YBzw",
      name: "OFFICIAL TRUMP",
      symbol: "TRUMP",
    },
    {
      tokenAddress: "6p6xgHyF7AeE6TZkSmFsko444wqoP15icUSqi2jfGiPN",
      changePercentage: 6.445591092349902,
      logoUrl:
        "https://arweave.net/VQrPjACwnQRmxdKBTqNwPiyo65x7LAT773t8Kd7YBzw",
      name: "OFFICIAL TRUMP",
      symbol: "TRUMP",
    },
    {
      tokenAddress: "3NZ9JMVBmGAqocybic2c7LQCJScmgsAZ6vQqTDzcqmJh",
      changePercentage: 6.436708745894461,
      logoUrl:
        "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/3NZ9JMVBmGAqocybic2c7LQCJScmgsAZ6vQqTDzcqmJh/logo.png",
      name: "Wrapped BTC (Wormhole)",
      symbol: "WBTC",
    },
    {
      tokenAddress: "3NZ9JMVBmGAqocybic2c7LQCJScmgsAZ6vQqTDzcqmJh",
      changePercentage: 5.222854840144431,
      logoUrl:
        "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/3NZ9JMVBmGAqocybic2c7LQCJScmgsAZ6vQqTDzcqmJh/logo.png",
      name: "Wrapped BTC (Wormhole)",
      symbol: "WBTC",
    },
    {
      tokenAddress: "8xPe3DMr52oYAkCBk57ZeQE1h5zBkWNk37eE4J8spump",
      changePercentage: 4.644632606184473,
      logoUrl:
        "https://file.dexlab.space/file/4553202ec4084e559c42191ae8673c55",
      name: "Ivanka Trump",
      symbol: "ITRUMP",
    },
    {
      tokenAddress: "3NZ9JMVBmGAqocybic2c7LQCJScmgsAZ6vQqTDzcqmJh",
      changePercentage: 4.636092700083161,
      logoUrl:
        "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/3NZ9JMVBmGAqocybic2c7LQCJScmgsAZ6vQqTDzcqmJh/logo.png",
      name: "Wrapped BTC (Wormhole)",
      symbol: "WBTC",
    },
    {
      tokenAddress: "7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs",
      changePercentage: 4.452373480602042,
      logoUrl:
        "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs/logo.png",
      name: "Wrapped Ether (Wormhole)",
      symbol: "WETH",
    },
    {
      tokenAddress: "7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs",
      changePercentage: 4.292787815984901,
      logoUrl:
        "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs/logo.png",
      name: "Wrapped Ether (Wormhole)",
      symbol: "WETH",
    },
    {
      tokenAddress: "3NZ9JMVBmGAqocybic2c7LQCJScmgsAZ6vQqTDzcqmJh",
      changePercentage: 4.290774164428923,
      logoUrl:
        "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/3NZ9JMVBmGAqocybic2c7LQCJScmgsAZ6vQqTDzcqmJh/logo.png",
      name: "Wrapped BTC (Wormhole)",
      symbol: "WBTC",
    },
    {
      tokenAddress: "JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN",
      changePercentage: 3.6744874234318305,
      logoUrl: "https://static.jup.ag/jup/icon.png",
      name: "Jupiter",
      symbol: "JUP",
    },
    {
      tokenAddress: "BNso1VUJnh4zcfpZa6986Ea66P6TCp59hvtNJ8b1X85",
      changePercentage: 3.5152545029572444,
      logoUrl:
        "https://arweave.net/LepI-hea-JrbLMb4L_HpMzaq9k0aHY2-lVSGiBtwvFM?ext=png",
      name: "Binance Staked SOL",
      symbol: "BNSOL",
    },
    {
      tokenAddress: "5UJF3B5mN7zRZFckFkaetKbtmLbCrPkiK9LCpskCpump",
      changePercentage: 3.4565887688156502,
      logoUrl:
        "https://file.dexlab.space/file/8f53a806d9624d10a1f929aeefd6562b",
      name: "Wrapped Trump",
      symbol: "WTRUMP",
    },
    {
      tokenAddress: "8xPe3DMr52oYAkCBk57ZeQE1h5zBkWNk37eE4J8spump",
      changePercentage: 3.3890224427566293,
      logoUrl:
        "https://file.dexlab.space/file/4553202ec4084e559c42191ae8673c55",
      name: "Ivanka Trump",
      symbol: "ITRUMP",
    },
    {
      tokenAddress: "JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN",
      changePercentage: 3.3878987847156017,
      logoUrl: "https://static.jup.ag/jup/icon.png",
      name: "Jupiter",
      symbol: "JUP",
    },
    {
      tokenAddress: "5UJF3B5mN7zRZFckFkaetKbtmLbCrPkiK9LCpskCpump",
      changePercentage: 2.830839897155681,
      logoUrl:
        "https://file.dexlab.space/file/8f53a806d9624d10a1f929aeefd6562b",
      name: "Wrapped Trump",
      symbol: "WTRUMP",
    },
    {
      tokenAddress: "2qkfZBW4Vooh9MRYsvDfn6yd5HrkiZfscTdJtpKVpump",
      changePercentage: 2.6484317005400113,
      logoUrl:
        "https://ipfs.io/ipfs/QmS2euixTeiTW66sEjyw7vTposXmVb1jLyATtZSm1fHtPM",
      name: "Justice For Kennedy",
      symbol: "JFK",
    },
  ],
  last_updated: 1742448328,
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
