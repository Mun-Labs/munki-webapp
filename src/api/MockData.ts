import { MockService } from "../common/modules/MockService";
import { RandomService } from "../common/modules/RandomService";
import { IToken, IWhale } from "../domain/entities/Entities";
import {
  AlphaMovesItem,
  ApiResponse,
  FearAndGreedResponse,
  MindshareItem,
  Token,
  TokenAnalytics,
  TokenDetail,
  TokenDistributionItem,
  TokenTrending,
} from "./apiTypes";

export const MOCK_DATA_TOKEN: ApiResponse<Token[]> = {
  code: 200,
  response: [
    {
      tokenAddress: "8xPe3DMr52oYAkCBk57ZeQE1h5zBkWNk37eE4J8spump",
      name: "Ivanka Trump",
      symbol: "ITRUMP",
      mc: 1_000_000_000,
      logoUri:
        "https://file.dexlab.space/file/4553202ec4084e559c42191ae8673c55",
    },
    {
      tokenAddress: "BSubUBTHxECeAYUsAs9FmjbuECvMBfuvs1PA8EkKpump",
      name: "TRUMP SIDE EYE",
      symbol: "Side Eye",
      mc: 1_000_000_000,
      logoUri:
        "https://ipfs.io/ipfs/QmTHfZNLbaqTsn8sVdjpsTSHASZYDMXQy65fgkSSqFCsNh",
    },
    {
      tokenAddress: "7vjP44eR4RptCpnFnJwyFpDnKVZ2ZoJNdSixYscRpump",
      name: "Eric Trump",
      symbol: "ETRUMP",
      mc: 1_000_000_000,
      logoUri:
        "https://file.dexlab.space/file/d0b8576d55dc403eb5913ffbd783a442",
    },
    {
      tokenAddress: "BhYEYuq5rPmJsWCPfCdcqHtbcpWTuBE4a5UsFCKTpump",
      name: "Elon Trump",
      symbol: "ELONTRUMP",
      mc: 1_000_000_000,
      logoUri:
        "https://file.dexlab.space/file/f70a111ed3424e3a9abe35c5d928ee4f",
    },
    {
      tokenAddress: "AkXwfS9cwASWPUiP7rRaxj4R7jgQ6JyPX2KtxH8NmpKv",
      name: "OFFICIAL TRUMP",
      symbol: "TRUMP",
      mc: 1_000_000_000,
      logoUri:
        "https://i.degencdn.com/ipfs/bafkreihxyuypyalmkcnxtjmf5oifn6bgexw7omlgfxshrvikn2scw3z77u",
    },
  ],
  last_updated: 1742377636,
};

export const MOCK_DATA_TOKEN_TRENDING: ApiResponse<TokenTrending[]> = {
  code: 200,
  response: [
    {
      tokenAddress: "6p6xgHyF7AeE6TZkSmFsko444wqoP15icUSqi2jfGiPN",
      volume24h: "238_036_765.61832800",
      recordDate: 1742774400,
      logoUri:
        "https://arweave.net/VQrPjACwnQRmxdKBTqNwPiyo65x7LAT773t8Kd7YBzw",
      symbol: "TRUMP",
      name: "OFFICIAL TRUMP",
      holderCount: 0,
    },
    {
      tokenAddress: "Fhj9vrBnJo6PEyPE2vUP6ZXc4Mkrba2r3XXi5hED5HGP",
      volume24h: "99904520.31076060",
      recordDate: 1742774400,
      logoUri:
        "https://gateway.pinata.cloud/ipfs/QmYw9MfwUHMYt53wHPTKNRYV4qtALVnvdjCX97Uwis5Esb",
      symbol: "RBLK",
      name: "Rollblock 🎰",
      holderCount: 0,
    },
    {
      tokenAddress: "34HDZNbUkTyTrgYKy2ox43yp2f8PJ5hoM7xsrfNApump",
      volume24h: "62436768.02835730",
      recordDate: 1742774400,
      logoUri:
        "https://ipfs.io/ipfs/QmXNeBCbDwcsUAnwKL5btoyGXj5ydMrBuqcvA2rAWpzDLu",
      symbol: "Routine",
      name: "Morning Routine",
      holderCount: 0,
    },
    {
      tokenAddress: "JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN",
      volume24h: "58122628.36802420",
      recordDate: 1742774400,
      logoUri: "https://static.jup.ag/jup/icon.png",
      symbol: "JUP",
      name: "Jupiter",
      holderCount: 0,
    },
    {
      tokenAddress: "Cqc5qH8kRqU4ASorJF2fiH9t1BSU4a7StagJiyexpump",
      volume24h: "50781063.48860520",
      recordDate: 1742774400,
      logoUri:
        "https://ipfs.io/ipfs/QmXu8LE1w5uvhkxrEUjpTdW4tNS32B9EyaorYgzsnnBFGL",
      symbol: "Downald",
      name: "Downald Trump",
      holderCount: 0,
    },
    {
      tokenAddress: "3NZ9JMVBmGAqocybic2c7LQCJScmgsAZ6vQqTDzcqmJh",
      volume24h: "48472196.68143120",
      recordDate: 1742774400,
      logoUri:
        "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/3NZ9JMVBmGAqocybic2c7LQCJScmgsAZ6vQqTDzcqmJh/logo.png",
      symbol: "WBTC",
      name: "Wrapped BTC (Wormhole)",
      holderCount: 0,
    },
    {
      tokenAddress: "DwEDC3qSZGqUfuWBtdCffzsmkA8uAGdrF1cm32ygpump",
      volume24h: "38337508.82000900",
      recordDate: 1742774400,
      logoUri:
        "https://file.dexlab.space/file/53f570eb6a064e8fa50c488eb2bb0952",
      symbol: "TRUMP8",
      name: "Trump 8-bit",
      holderCount: 0,
    },
    {
      tokenAddress: "BNso1VUJnh4zcfpZa6986Ea66P6TCp59hvtNJ8b1X85",
      volume24h: "33001100.19434150",
      recordDate: 1742774400,
      logoUri:
        "https://arweave.net/LepI-hea-JrbLMb4L_HpMzaq9k0aHY2-lVSGiBtwvFM?ext=png",
      symbol: "BNSOL",
      name: "Binance Staked SOL",
      holderCount: 0,
    },
    {
      tokenAddress: "7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs",
      volume24h: "23937041.60732420",
      recordDate: 1742774400,
      logoUri:
        "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs/logo.png",
      symbol: "WETH",
      name: "Wrapped Ether (Wormhole)",
      holderCount: 0,
    },
    {
      tokenAddress: "Bybit2vBJGhPF52GBdNaQfUJ6ZpThSgHBobjWZpLPb4B",
      volume24h: "21066736.27168650",
      recordDate: 1742774400,
      logoUri: "https://static.bymj.io/web3/staking/bbsol/bbsol2.png",
      symbol: "bbSOL",
      name: "BybitSOL",
      holderCount: 0,
    },
    {
      tokenAddress: "FeR8VBqNRSUD5NtXAj2n3j1dAHkZHfyDktKuLXD4pump",
      volume24h: "16147673.82808530",
      recordDate: 1742774400,
      logoUri:
        "https://ipfs.io/ipfs/QmWT4jA2ipuevUfBi1a2LW2gfnPJyvHn1JayAe2qz5kRQJ",
      symbol: "jellyjelly",
      name: "jelly-my-jelly",
      holderCount: 0,
    },
    {
      tokenAddress: "7GCihgDB8fe6KNjn2MYtkzZcRjQy3t9GHdC8uHYmW2hr",
      volume24h: "15938535.08434240",
      recordDate: 1742774400,
      logoUri: "https://popcatsol.com/img/logo.png",
      symbol: "POPCAT",
      name: "POPCAT",
      holderCount: 0,
    },
    {
      tokenAddress: "DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263",
      volume24h: "14654899.47980120",
      recordDate: 1742774400,
      logoUri:
        "https://arweave.net/hQiPZOsRZXGXBJd_82PhVdlM_hACsT_q6wqwf5cSY7I",
      symbol: "Bonk",
      name: "Bonk",
      holderCount: 0,
    },
    {
      tokenAddress: "61V8vBaqAGMpgDQi4JcAwo1dmBGHsyhzodcPqnEVpump",
      volume24h: "12279677.42363420",
      recordDate: 1742774400,
      logoUri:
        "https://ipfs.io/ipfs/QmPDJuEobBcLZihjFCvkWA8c1FiW7UzM2ctFdiffSLxf1d",
      symbol: "arc",
      name: "AI Rig Complex",
      holderCount: 0,
    },
    {
      tokenAddress: "4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R",
      volume24h: "11564202.54498800",
      recordDate: 1742774400,
      logoUri:
        "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R/logo.png",
      symbol: "RAY",
      name: "Raydium",
      holderCount: 0,
    },
    {
      tokenAddress: "CniPCE4b3s8gSUPhUiyMjXnytrEqUrMfSsnbBjLCpump",
      volume24h: "11152742.66106360",
      recordDate: 1742774400,
      logoUri:
        "https://ipfs.io/ipfs/QmboNoCSu87DLgnqqf3LVWCUF2zZtzpSE5LtAa3tx8hUUG",
      symbol: "pwease",
      name: "PWEASE",
      holderCount: 0,
    },
    {
      tokenAddress: "3wth71poCxAckMcXKR6QLY7xKFoiSLwLgUShHRzXpump",
      volume24h: "9858798.23565919",
      recordDate: 1742774400,
      logoUri:
        "https://ipfs.io/ipfs/QmQ1NZGYRSHgQj4LVgYdWDqrd9z7BHv7NoyNb8JMYk22UA",
      symbol: "Saratoga",
      name: "Saratoga Spring Water",
      holderCount: 0,
    },
    {
      tokenAddress: "J3LqSDYnc9o7dz6WP3ZpquFrPYapBWBEHRD87kxQpump",
      volume24h: "8618647.61943339",
      recordDate: 1742774400,
      logoUri:
        "https://ipfs.io/ipfs/QmVjSRPPDQz49ik7SVL1mrnECApNaE1mvTzqiuX4AF1qyu",
      symbol: "BRONIFY",
      name: "Bronify",
      holderCount: 0,
    },
    {
      tokenAddress: "EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm",
      volume24h: "7442849.33455472",
      recordDate: 1742774400,
      logoUri:
        "https://bafkreibk3covs5ltyqxa272uodhculbr6kea6betidfwy3ajsav2vjzyum.ipfs.nftstorage.link",
      symbol: "$WIF",
      name: "dogwifhat",
      holderCount: 0,
    },
    {
      tokenAddress: "9gyfbPVwwZx4y1hotNSLcqXCQNpNqqz6ZRvo8yTLpump",
      volume24h: "7194694.94579883",
      recordDate: 1742774400,
      logoUri:
        "https://ipfs.io/ipfs/QmaJq18skEkHhdVy7FcdNJgbP2U7sZFwzboBrmSTwD68SF",
      symbol: "YZY",
      name: "Swasticoin",
      holderCount: 0,
    },
  ],
  last_updated: 1742817449,
};

export const MOCK_DATA_TOKEN_DETAIL: ApiResponse<TokenDetail> = {
  code: 200,
  response: {
    tokenAddress: "A8JBhB6t8ktie5FcX2wqieQfQFJ34JyPZYvGVE3Ypump",
    name: "God's Country",
    symbol: "COUNTRY",
    decimals: 6,
    logoUri:
      "https://ipfs.io/ipfs/QmXML6GSpYg7fPMDFL4ofsQuZQpN8GBN3fCai9Lc475bhH",
    websiteUrl: null,
    metadata: null,
    currentPrice: "0.001692704300",
    totalSupply: "0",
    marketcap: "1692409.44184875",
    history24hPrice: null,
    priceChange24hPercent: null,
    holders: 0,
    liquidity: "0",
    volume24h: "39114657",
    volume24hChange: "882",
  },
  last_updated: 1743529426,
};

export const MOCK_DATA_MINDSHARE: ApiResponse<MindshareItem[]> = {
  code: 200,
  response: [
    {
      tokenAddress: "FUAfBo2jgks6gB4Z4LfZkqSZgzNucisEHqnNebaRxM1P",
      changePercentage: 0.2580978718326048,
      logoUrl:
        "https://gateway.pinata.cloud/ipfs/bafkreiduq5c43xdbcbhzx3plcdtz2jwkjpzlm2hwkoxhjgmnmqbl6otyfu",
      name: "Melania Meme",
      symbol: "MELANIA",
      volume: "3992811.92034997",
    },
    {
      tokenAddress: "FW8nQx5MyMJWd99A1z8aWSKy52iaawgqwF3jnAcmpump",
      changePercentage: 0.2597069200988615,
      logoUrl:
        "https://ipfs.io/ipfs/QmSbjVao58eRZHHsvU9pWQ1k5R495ZSfTb9bUe2LRUp5et",
      name: "X's Dog",
      symbol: "HORIA",
      volume: "4017704.13295254",
    },
    {
      tokenAddress: "9EQVitw3n2MVh2Pdxtm413Mh9aRAgcUdM5d64tu8ZEex",
      changePercentage: 0.24966441305491804,
      logoUrl:
        "https://dd.dexscreener.com/ds-data/tokens/solana/5LJMJyR8MtAkbtpf8kFUV7S9oFG3xaGDdcnFxYt9pump.png?size=lg&key=e3c1d2",
      name: "FAT NIGGA SEASON",
      symbol: "FAT",
      volume: "3862345.07651963",
    },
    {
      tokenAddress: "BausbksvZdzVu1p6REBizPv6ZsCU2eak2RGikAJRFe71",
      changePercentage: 0.37198155553471585,
      logoUrl:
        "https://place-halfway-heard.quicknode-ipfs.com/ipfs/QmeRNT6Lj9N6nkpWo9t5AkHUNs8RRUmjJU1N82RwpkgFxj",
      name: "TRUMP KEEP QUITE",
      symbol: "$TKQ",
      volume: "5754609.20519574",
    },
    {
      tokenAddress: "4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R",
      changePercentage: 1.1867507879894554,
      logoUrl:
        "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R/logo.png",
      name: "Raydium",
      symbol: "RAY",
      volume: "18359208.69522807",
    },
    {
      tokenAddress: "4EwtL8tqNyqQPG32egjT4tYEFWDHb3btQomi5sbnmzCh",
      changePercentage: 0.2633234056330707,
      logoUrl:
        "https://ipfs.io/ipfs/Qmej1B1K41x6voMCmJiee7KpHEYwSP37WcT4SMzwtPGMae",
      name: "BitBanana",
      symbol: "$BANANA",
      volume: "4073651.69442693",
    },
    {
      tokenAddress: "9McvH6w97oewLmPxqQEoHUAv3u5iYMyQ9AeZZhguYf1T",
      changePercentage: 0.23627557324398166,
      logoUrl:
        "https://ipfs.io/ipfs/QmZDXjdV3fDssQeXVhgUFWi8Uv7FBSCUzZHnfupgTGsi27",
      name: "HeyAnon",
      symbol: "Anon",
      volume: "3655217.76153179",
    },
    {
      tokenAddress: "3wth71poCxAckMcXKR6QLY7xKFoiSLwLgUShHRzXpump",
      changePercentage: 1.0520033942316869,
      logoUrl:
        "https://ipfs.io/ipfs/QmQ1NZGYRSHgQj4LVgYdWDqrd9z7BHv7NoyNb8JMYk22UA",
      name: "Saratoga Spring Water",
      symbol: "Saratoga",
      volume: "16274646.75672028",
    },
    {
      tokenAddress: "Hg8bKz4mvs8KNj9zew1cEF9tDw1x2GViB4RFZjVEmfrD",
      changePercentage: 0.1888184201031349,
      logoUrl:
        "https://ipfs.io/ipfs/QmcJ2WrV2WN5wdW7wXn5xeU8XwyZsGkGKmmyEeSUn6eZye",
      name: "TDCCP",
      symbol: "TDCCP",
      volume: "2921048.64412991",
    },
    {
      tokenAddress: "G1gE47n6aWQKgjBnRhrGfCbwV4nfjXG8hN7WoeRFNG7E",
      changePercentage: 0.3317712276799567,
      logoUrl:
        "https://ipfs.io/ipfs/QmW5Csie7fJwTwQXaD21NwykTEgXqLTa2BwNPEXxmmyMDP",
      name: "Smurf Cat",
      symbol: "$SMURF",
      volume: "5132549.53752133",
    },
    {
      tokenAddress: "4WwNfJXP83Qm2o1GhPPbDtbguNaHizwzVKZoQ4qTHoim",
      changePercentage: 0.27884934811398954,
      logoUrl:
        "https://ipfs.io/ipfs/QmTEaP8vK54n5JZ5EfteiuyaaLatQezvaD2yYFenm2pm8y",
      name: "Hermanochik",
      symbol: "$HCHIK",
      volume: "4313840.30106793",
    },
    {
      tokenAddress: "DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263",
      changePercentage: 1.7992862931456945,
      logoUrl:
        "https://arweave.net/hQiPZOsRZXGXBJd_82PhVdlM_hACsT_q6wqwf5cSY7I",
      name: "Bonk",
      symbol: "Bonk",
      volume: "27835222.77182480",
    },
    {
      tokenAddress: "6p6xgHyF7AeE6TZkSmFsko444wqoP15icUSqi2jfGiPN",
      changePercentage: 28.008238264528845,
      logoUrl:
        "https://arweave.net/VQrPjACwnQRmxdKBTqNwPiyo65x7LAT773t8Kd7YBzw",
      name: "OFFICIAL TRUMP",
      symbol: "TRUMP",
      volume: "433291552.60584200",
    },
    {
      tokenAddress: "7eZtmUHffdm9hzW4o7WmDYMdSaRrRJQFQi8QXEiXpump",
      changePercentage: 0.8957674489237661,
      logoUrl:
        "https://ipfs.io/ipfs/QmR3r4yiPeUR5e4GRMafrPKnRM2SoTjFi7nhjdA2CiYhzH",
      name: "sharkitty",
      symbol: "sharkitty",
      volume: "13857653.77501447",
    },
    {
      tokenAddress: "FWAr6oWa6CHg6WUcXu8CqkmsdbhtEqL8t31QTonppump",
      changePercentage: 0.5243125222130465,
      logoUrl:
        "https://ipfs.io/ipfs/QmcxfygqFL47c9r4oSXFUCeDa3Bt2xL1gy6PWbv8XMWH3d",
      name: "PVS",
      symbol: "PVS",
      volume: "8111191.59494188",
    },
    {
      tokenAddress: "5LJMJyR8MtAkbtpf8kFUV7S9oFG3xaGDdcnFxYt9pump",
      changePercentage: 0.8648346251700649,
      logoUrl:
        "https://ipfs.io/ipfs/Qmc6aX8jkY5wZ8Movtd6ebGedmKYjWge52Te6g9NA6M4Kw",
      name: "FAT NIGGA SEASON",
      symbol: "FAT",
      volume: "13379118.45607946",
    },
    {
      tokenAddress: "9gyfbPVwwZx4y1hotNSLcqXCQNpNqqz6ZRvo8yTLpump",
      changePercentage: 0.8392671207137767,
      logoUrl:
        "https://ipfs.io/ipfs/QmaJq18skEkHhdVy7FcdNJgbP2U7sZFwzboBrmSTwD68SF",
      name: "Swasticoin",
      symbol: "YZY",
      volume: "12983585.41335496",
    },
    {
      tokenAddress: "2ex5kxL5ZKSxv6mJHf5EiM86ZYCGJp56JY1MjKrgpump",
      changePercentage: 0.7818193728329847,
      logoUrl:
        "https://ipfs.io/ipfs/QmNTdW3hEv6Zct3KC9SrTC5Cq56F5xmLAm7RQJFXEryshX",
      name: "Valet Agents",
      symbol: "Valet",
      volume: "12094860.33047456",
    },
    {
      tokenAddress: "6LYqVzVfqpjVT2dEJqpJG7C4eBNoy3tTTk1u7a4Mpump",
      changePercentage: 0.3748913691563891,
      logoUrl:
        "https://ipfs.io/ipfs/QmNvrmasTynntLmQGfrXUyh6j2vfZsnAu9FJNvQ2aJmD6T",
      name: "dog with eyes closed",
      symbol: "relax",
      volume: "5799624.44856880",
    },
    {
      tokenAddress: "Fhj9vrBnJo6PEyPE2vUP6ZXc4Mkrba2r3XXi5hED5HGP",
      changePercentage: 12.866043905511248,
      logoUrl:
        "https://gateway.pinata.cloud/ipfs/QmYw9MfwUHMYt53wHPTKNRYV4qtALVnvdjCX97Uwis5Esb",
      name: "Rollblock 🎰",
      symbol: "RBLK",
      volume: "199039585.67697790",
    },
    {
      tokenAddress: "2qEHjDLDLbuBgRYvsxhc5D6uDWAivNFZGan56P1tpump",
      changePercentage: 0.7837384506684272,
      logoUrl:
        "https://ipfs.io/ipfs/QmNdTtJauw39u4DzGyTaZ35rRx4VgAxqb91wE89zjyHWd2",
      name: "Peanut the Squirrel ",
      symbol: "Pnut ",
      volume: "12124548.74596992",
    },
    {
      tokenAddress: "orcaEKTdK7LKz57vaAYr9QeNsVEPfiu6QeMU1kektZE",
      changePercentage: 0.36872493830392217,
      logoUrl:
        "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/orcaEKTdK7LKz57vaAYr9QeNsVEPfiu6QeMU1kektZE/logo.png",
      name: "Orca",
      symbol: "ORCA",
      volume: "5704228.85914018",
    },
    {
      tokenAddress: "3NZ9JMVBmGAqocybic2c7LQCJScmgsAZ6vQqTDzcqmJh",
      changePercentage: 4.963050431865125,
      logoUrl:
        "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/3NZ9JMVBmGAqocybic2c7LQCJScmgsAZ6vQqTDzcqmJh/logo.png",
      name: "Wrapped BTC (Wormhole)",
      symbol: "WBTC",
      volume: "76779117.87859140",
    },
    {
      tokenAddress: "DwEDC3qSZGqUfuWBtdCffzsmkA8uAGdrF1cm32ygpump",
      changePercentage: 3.6080305792062917,
      logoUrl:
        "https://file.dexlab.space/file/53f570eb6a064e8fa50c488eb2bb0952",
      name: "Trump 8-bit",
      symbol: "TRUMP8",
      volume: "55816762.08080300",
    },
    {
      tokenAddress: "7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs",
      changePercentage: 2.427089289934263,
      logoUrl:
        "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs/logo.png",
      name: "Wrapped Ether (Wormhole)",
      symbol: "WETH",
      volume: "37547427.18254000",
    },
    {
      tokenAddress: "Bybit2vBJGhPF52GBdNaQfUJ6ZpThSgHBobjWZpLPb4B",
      changePercentage: 2.9203552636128975,
      logoUrl: "https://static.bymj.io/web3/staking/bbsol/bbsol2.png",
      name: "BybitSOL",
      symbol: "bbSOL",
      volume: "45178324.11951460",
    },
    {
      tokenAddress: "FtUEW73K6vEYHfbkfpdBZfWpxgQar2HipGdbutEhpump",
      changePercentage: 0.8942515878030334,
      logoUrl:
        "https://ipfs.io/ipfs/QmdnAHMWTbxfRkwdf1QweP8rJL1SCe2XbjFTFzCCjw5oAD",
      name: "titcoin",
      symbol: "titcoin",
      volume: "13834203.18121654",
    },
    {
      tokenAddress: "FeR8VBqNRSUD5NtXAj2n3j1dAHkZHfyDktKuLXD4pump",
      changePercentage: 1.7395267394858547,
      logoUrl:
        "https://ipfs.io/ipfs/QmWT4jA2ipuevUfBi1a2LW2gfnPJyvHn1JayAe2qz5kRQJ",
      name: "jelly-my-jelly",
      symbol: "jellyjelly",
      volume: "26910733.71457850",
    },
    {
      tokenAddress: "8tqvnEcJyz1noLo11xqsmv9V8f65exPkqfeshVgoVNB9",
      changePercentage: 0.9120324734584314,
      logoUrl:
        "https://i.degencdn.com/ipfs/bafkreichiugqex4evdl4yuahkquzuuwom5gu335vhmnllv5qvvxpzn6hom",
      name: "Solayer",
      symbol: "SOLAYER",
      volume: "14109276.08939340",
    },
    {
      tokenAddress: "3zJ7RxtzPahndBTEn5PGUyo9xBMv6MJP9J4TPqdFpump",
      changePercentage: 0.17177694769453566,
      logoUrl:
        "https://ipfs.io/ipfs/QmdkTjNzFAkdRg7Eo7j9ghLZBk9az3CM7GDAp7hqyZSmgu",
      name: "encryptSIM",
      symbol: "ESIM",
      volume: "2657414.56729606",
    },
    {
      tokenAddress: "HeLp6NuQkmYB4pYWo2zYs22mESHXPQYzXbB8n4V98jwC",
      changePercentage: 0.790614282539032,
      logoUrl:
        "https://ipfs.io/ipfs/QmcNTVAoyJ7zDbPnN9jwiMoB8uCoJBUP9RGmmiGGHv44yX",
      name: "ai16z",
      symbol: "ai16z",
      volume: "12230918.87316368",
    },
    {
      tokenAddress: "61V8vBaqAGMpgDQi4JcAwo1dmBGHsyhzodcPqnEVpump",
      changePercentage: 1.2693299420393445,
      logoUrl:
        "https://ipfs.io/ipfs/QmPDJuEobBcLZihjFCvkWA8c1FiW7UzM2ctFdiffSLxf1d",
      name: "AI Rig Complex",
      symbol: "arc",
      volume: "19636720.31638806",
    },
    {
      tokenAddress: "2zMMhcVQEXDtdE6vsFS7S7D5oUodfJHE8vd1gnBouauv",
      changePercentage: 0.1816195448005913,
      logoUrl:
        "https://arweave.net/BW67hICaKGd2_wamSB0IQq-x7Xwtmr2oJj1WnWGJRHU",
      name: "Pudgy Penguins",
      symbol: "PENGU",
      volume: "2809680.98767844",
    },
    {
      tokenAddress: "J3LqSDYnc9o7dz6WP3ZpquFrPYapBWBEHRD87kxQpump",
      changePercentage: 1.0294005922384841,
      logoUrl:
        "https://ipfs.io/ipfs/QmVjSRPPDQz49ik7SVL1mrnECApNaE1mvTzqiuX4AF1qyu",
      name: "Bronify",
      symbol: "BRONIFY",
      volume: "15924978.09579346",
    },
    {
      tokenAddress: "ukHH6c7mMyiWCf1b9pnWe25TSpkDDt3H5pQZgZ74J82",
      changePercentage: 0.2621670529479038,
      logoUrl:
        "https://bafkreihztk5poge7f2lz6logfjmhc7h7u6shvgacoktnuezks5oblmieue.ipfs.nftstorage.link",
      name: "BOOK OF MEME",
      symbol: "BOME",
      volume: "4055762.74883943",
    },
    {
      tokenAddress: "JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN",
      changePercentage: 6.846747275763024,
      logoUrl: "https://static.jup.ag/jup/icon.png",
      name: "Jupiter",
      symbol: "JUP",
      volume: "105920184.24708600",
    },
    {
      tokenAddress: "HNg5PYJmtqcmzXrv6S9zP1CDKk5BgDuyFBxbvNApump",
      changePercentage: 0.7333093479813235,
      logoUrl:
        "https://ipfs.io/ipfs/QmYqwkPV1p4DraqN5TfLZVhyrAusSkHfvFDZMJAWALZJxj",
      name: "Alchemist AI",
      symbol: "ALCH",
      volume: "11344403.13333111",
    },
    {
      tokenAddress: "J3NKxxXZcnNiMjKw9hYb2K4LUxgwB6t1FtPtQVsv3KFr",
      changePercentage: 0.1613886899607671,
      logoUrl: "https://i.postimg.cc/w3Yq0dHf/2023-12-21-17-19-37.jpg",
      name: "SPX6900 (Wormhole)",
      symbol: "SPX",
      volume: "2496706.69699653",
    },
    {
      tokenAddress: "3T5gKSRQy6ZbUJwGEhDL6yg73nTaLVax6TagkcTDpump",
      changePercentage: 0.19393501924865916,
      logoUrl:
        "https://ipfs.io/ipfs/Qmau25dQXMhdmqDHDnaz2uip1pwg3XrWnVKoRnRchjByho",
      name: "Mubarak on Solana",
      symbol: "MUBARAK",
      volume: "3000203.18312259",
    },
    {
      tokenAddress: "3EcCmxrXwjHKeeBbXcX89h44WHAct2YbEVSqTHtmpump",
      changePercentage: 0.8560789817213855,
      logoUrl:
        "https://ipfs.io/ipfs/QmcgXzfzzQRiStycWxMR8wcwmBYyGoyuGTzMHCAwJPLA6V",
      name: "PUMP",
      symbol: "PILL",
      volume: "13243667.36814916",
    },
    {
      tokenAddress: "34HDZNbUkTyTrgYKy2ox43yp2f8PJ5hoM7xsrfNApump",
      changePercentage: 7.246029009138708,
      logoUrl:
        "https://ipfs.io/ipfs/QmXNeBCbDwcsUAnwKL5btoyGXj5ydMrBuqcvA2rAWpzDLu",
      name: "Morning Routine",
      symbol: "Routine",
      volume: "112097131.20631710",
    },
    {
      tokenAddress: "Cqc5qH8kRqU4ASorJF2fiH9t1BSU4a7StagJiyexpump",
      changePercentage: 3.282519857498474,
      logoUrl:
        "https://ipfs.io/ipfs/QmXu8LE1w5uvhkxrEUjpTdW4tNS32B9EyaorYgzsnnBFGL",
      name: "Downald Trump",
      symbol: "Downald",
      volume: "50781063.48860520",
    },
    {
      tokenAddress: "BNso1VUJnh4zcfpZa6986Ea66P6TCp59hvtNJ8b1X85",
      changePercentage: 2.5008755099095534,
      logoUrl:
        "https://arweave.net/LepI-hea-JrbLMb4L_HpMzaq9k0aHY2-lVSGiBtwvFM?ext=png",
      name: "Binance Staked SOL",
      symbol: "BNSOL",
      volume: "38688910.82431905",
    },
    {
      tokenAddress: "3JTenaL7Yk2abrhP4h7qTdq34EDvKJwqBCAsPJgf41ro",
      changePercentage: 0.4666380716655794,
      logoUrl:
        "https://place-halfway-heard.quicknode-ipfs.com/ipfs/QmdTFsUrLK1qQxCTxC2Vq5Z3ewsqcpxbzwieLKPZNxnQuP",
      name: "UniDOGE",
      symbol: "$DOGE",
      volume: "7218959.38856818",
    },
    {
      tokenAddress: "CniPCE4b3s8gSUPhUiyMjXnytrEqUrMfSsnbBjLCpump",
      changePercentage: 0.7102686203720515,
      logoUrl:
        "https://ipfs.io/ipfs/QmboNoCSu87DLgnqqf3LVWCUF2zZtzpSE5LtAa3tx8hUUG",
      name: "PWEASE",
      symbol: "pwease",
      volume: "10987959.69891370",
    },
    {
      tokenAddress: "FmFnRZWRLnZMcRDQGDCoHSdgLUFMZ7bAtD2qk75Vpump",
      changePercentage: 0.344170469321135,
      logoUrl:
        "https://ipfs.io/ipfs/QmWbajpqWBrHbJrTrRZGvfJBro51hYx1fGHy5AuLtwYh6x",
      name: "Pyramids",
      symbol: "Giza",
      volume: "5324367.62372510",
    },
    {
      tokenAddress: "eKAhXPDDPP6HzqMjN3WDam9yYwhDuabD8MGn1qNpump",
      changePercentage: 0.21843648451220699,
      logoUrl:
        "https://ipfs.io/ipfs/QmbdgJPfmRuiD6BA2mkurgR24PUakeEKv4AJFu8BzbNrso",
      name: "BLACKROCK COIN",
      symbol: "BUIDL",
      volume: "3379244.44322947",
    },
    {
      tokenAddress: "EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm",
      changePercentage: 0.7183543468007687,
      logoUrl:
        "https://bafkreibk3covs5ltyqxa272uodhculbr6kea6betidfwy3ajsav2vjzyum.ipfs.nftstorage.link",
      name: "dogwifhat",
      symbol: "$WIF",
      volume: "11113047.07231990",
    },
    {
      tokenAddress: "7GCihgDB8fe6KNjn2MYtkzZcRjQy3t9GHdC8uHYmW2hr",
      changePercentage: 1.7678363597959816,
      logoUrl: "https://popcatsol.com/img/logo.png",
      name: "POPCAT",
      symbol: "POPCAT",
      volume: "27348687.69161930",
    },
  ],
  last_updated: 1742820016,
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

export const MOCK_DATA_ALPHA_MOVES: ApiResponse<AlphaMovesItem[]> = {
  code: 200,
  response: [
    {
      signature:
        "5EnWFqUfeFEwtyMuvR9v1ULm1bC7BCLj5UAC1Qr9uKojUSG7SUDVUhEhChRRLbcE3biTyVx5xUCkWbpAJh8dHJXs",
      tokenAddress: "2KvkSLK7zuFT2ZjwhNFn1j8TX4LoAFRYH3PbmAqJpump",
      walletAddress: "3h65MmPZksoKKyEpEjnWU2Yk2iYT5oZDNitGy5cTaxoE",
      actionType: "buy",
      amount: "3719549.22743300",
      time: 1743526328,
      slot: 330631546,
      coinName: "Pretend This Was Bitcoin",
      tokenSymbol: "BTC2.0",
      tokenLogo:
        "https://ipfs.io/ipfs/QmPdUoh5x2W9MgYPCPQjS749zENAoUFxDuQ7agxwrk18vs",
      totalSupply: "999999868.76681100",
      alphaGroup: "KOL",
      name: "3h65MmPZksoKKyEpEjnWU2Yk2iYT5oZDNitGy5cTaxoE",
      token: {
        tokenAddress: "2KvkSLK7zuFT2ZjwhNFn1j8TX4LoAFRYH3PbmAqJpump",
        munScore: 0.0,
        riskScore: 37.56,
        topFreshWalletHolders: 0,
        topSmartWalletsHolders: 2,
        smartFollowers: 0,
      },
      decimal: 6,
    },
    {
      signature:
        "5H3AmyGXCYaRQWQq56JsAcBHB4khGAkBYdCzFZapLwP5GVLYydNTvXCJ33jS2KouSHu9F1n1oweFgvHdqWpmpWQD",
      tokenAddress: "4xaRdkBFDGrSicZFV9gosdAqbDTUHKQ4qZgUBZM7pump",
      walletAddress: "3h65MmPZksoKKyEpEjnWU2Yk2iYT5oZDNitGy5cTaxoE",
      actionType: "sell",
      amount: "41305876.22991400",
      time: 1743525980,
      slot: 330630683,
      coinName: "IT WAS STAGED",
      tokenSymbol: "EAR",
      tokenLogo:
        "https://ipfs.io/ipfs/QmNTSd7EzbpqZzeJZ58UraTdVGEjkkahr6AnWyk1dDmFjx",
      totalSupply: "999999948.45895800",
      alphaGroup: "KOL",
      name: "3h65MmPZksoKKyEpEjnWU2Yk2iYT5oZDNitGy5cTaxoE",
      token: {
        tokenAddress: "4xaRdkBFDGrSicZFV9gosdAqbDTUHKQ4qZgUBZM7pump",
        munScore: 0.0,
        riskScore: 27.61,
        topFreshWalletHolders: 0,
        topSmartWalletsHolders: 2,
        smartFollowers: 0,
      },
      decimal: 6,
    },
    {
      signature:
        "5MT6gkh5qvVJcV3LzFDCSF9sYqPUvQY1Pn4HDGj4dVpKy6mciEiKuqksRxyhCEw3f4gqqzYWD8sryZLC5nZL55wh",
      tokenAddress: "2KvkSLK7zuFT2ZjwhNFn1j8TX4LoAFRYH3PbmAqJpump",
      walletAddress: "3h65MmPZksoKKyEpEjnWU2Yk2iYT5oZDNitGy5cTaxoE",
      actionType: "buy",
      amount: "3105156.57681100",
      time: 1743525876,
      slot: 330630424,
      coinName: "Pretend This Was Bitcoin",
      tokenSymbol: "BTC2.0",
      tokenLogo:
        "https://ipfs.io/ipfs/QmPdUoh5x2W9MgYPCPQjS749zENAoUFxDuQ7agxwrk18vs",
      totalSupply: "999999868.76681100",
      alphaGroup: "KOL",
      name: "3h65MmPZksoKKyEpEjnWU2Yk2iYT5oZDNitGy5cTaxoE",
      token: {
        tokenAddress: "2KvkSLK7zuFT2ZjwhNFn1j8TX4LoAFRYH3PbmAqJpump",
        munScore: 0.0,
        riskScore: 37.56,
        topFreshWalletHolders: 0,
        topSmartWalletsHolders: 2,
        smartFollowers: 0,
      },
      decimal: 6,
    },
    {
      signature:
        "5GoA5RbCGr6yUP8av8Z37ukpABQDa64MhFs6QbSbASPgpDkMQ6dA6UJzCBhcNbhiV8Zq1SfZopztYj14Cbw9EXoN",
      tokenAddress: "2KvkSLK7zuFT2ZjwhNFn1j8TX4LoAFRYH3PbmAqJpump",
      walletAddress: "3h65MmPZksoKKyEpEjnWU2Yk2iYT5oZDNitGy5cTaxoE",
      actionType: "sell",
      amount: "5264751.15795700",
      time: 1743525727,
      slot: 330630060,
      coinName: "Pretend This Was Bitcoin",
      tokenSymbol: "BTC2.0",
      tokenLogo:
        "https://ipfs.io/ipfs/QmPdUoh5x2W9MgYPCPQjS749zENAoUFxDuQ7agxwrk18vs",
      totalSupply: "999999868.76681100",
      alphaGroup: "KOL",
      name: "3h65MmPZksoKKyEpEjnWU2Yk2iYT5oZDNitGy5cTaxoE",
      token: {
        tokenAddress: "2KvkSLK7zuFT2ZjwhNFn1j8TX4LoAFRYH3PbmAqJpump",
        munScore: 0.0,
        riskScore: 37.56,
        topFreshWalletHolders: 0,
        topSmartWalletsHolders: 2,
        smartFollowers: 0,
      },
      decimal: 6,
    },
    {
      signature:
        "2wAr5crQCg3yZTaM8P5P97tiUcL7Bnjj2MhMnCAg5pJC3EuZQchtkHWRmbSy7p7iaE9HYrBusyWtZEajMraFu449",
      tokenAddress: "CLpkmFuRy9SuJxEjq8WpniERPREZdt7JLJYx988q6raa",
      walletAddress: "DfMxre4cKmvogbLrPigxmibVTTQDuzjdXojWzjCXXhzj",
      actionType: "buy",
      amount: "4304.77357600",
      time: 1743525714,
      slot: 330630028,
      coinName: "Housecoin",
      tokenSymbol: "House",
      tokenLogo:
        "https://ipfs.io/ipfs/QmaGqTXDBUBLMU9xGpT4xzYArJmqFFTo3LAU6wZLepWcWe",
      totalSupply: "999984560.66324200",
      alphaGroup: "KOL",
      name: "DfMxre4cKmvogbLrPigxmibVTTQDuzjdXojWzjCXXhzj",
      token: {
        tokenAddress: "CLpkmFuRy9SuJxEjq8WpniERPREZdt7JLJYx988q6raa",
        munScore: 0.0,
        riskScore: 14.59,
        topFreshWalletHolders: 0,
        topSmartWalletsHolders: 2,
        smartFollowers: 0,
      },
      decimal: 6,
    },
    {
      signature:
        "3n2djEzPSrD2xwNhfnRrDAtAWKyAyLhMWAFgtDvmknrLw6h2bSETZznKs9zgCSq57Rhc3evHxF2BHZ9GZERSPKQJ",
      tokenAddress: "2KvkSLK7zuFT2ZjwhNFn1j8TX4LoAFRYH3PbmAqJpump",
      walletAddress: "3h65MmPZksoKKyEpEjnWU2Yk2iYT5oZDNitGy5cTaxoE",
      actionType: "sell",
      amount: "2466733.69172100",
      time: 1743525685,
      slot: 330629963,
      coinName: "Pretend This Was Bitcoin",
      tokenSymbol: "BTC2.0",
      tokenLogo:
        "https://ipfs.io/ipfs/QmPdUoh5x2W9MgYPCPQjS749zENAoUFxDuQ7agxwrk18vs",
      totalSupply: "999999868.76681100",
      alphaGroup: "KOL",
      name: "3h65MmPZksoKKyEpEjnWU2Yk2iYT5oZDNitGy5cTaxoE",
      token: {
        tokenAddress: "2KvkSLK7zuFT2ZjwhNFn1j8TX4LoAFRYH3PbmAqJpump",
        munScore: 0.0,
        riskScore: 37.56,
        topFreshWalletHolders: 0,
        topSmartWalletsHolders: 2,
        smartFollowers: 0,
      },
      decimal: 6,
    },
    {
      signature:
        "4iy1Gs3tg78YBghxfURGz1FUFVghMQdNSKicPQPyM7CjJJbfbjWGNaMaDVZHygYcgH7siTudiFvJCKtMG7SNGzk4",
      tokenAddress: "CLpkmFuRy9SuJxEjq8WpniERPREZdt7JLJYx988q6raa",
      walletAddress: "DfMxre4cKmvogbLrPigxmibVTTQDuzjdXojWzjCXXhzj",
      actionType: "buy",
      amount: "4306.45912600",
      time: 1743525510,
      slot: 330629530,
      coinName: "Housecoin",
      tokenSymbol: "House",
      tokenLogo:
        "https://ipfs.io/ipfs/QmaGqTXDBUBLMU9xGpT4xzYArJmqFFTo3LAU6wZLepWcWe",
      totalSupply: "999984560.66324200",
      alphaGroup: "KOL",
      name: "DfMxre4cKmvogbLrPigxmibVTTQDuzjdXojWzjCXXhzj",
      token: {
        tokenAddress: "CLpkmFuRy9SuJxEjq8WpniERPREZdt7JLJYx988q6raa",
        munScore: 0.0,
        riskScore: 14.59,
        topFreshWalletHolders: 0,
        topSmartWalletsHolders: 2,
        smartFollowers: 0,
      },
      decimal: 6,
    },
    {
      signature:
        "3j9s2JN7FRq2dXxtZYrs3MpS7V5GADF5T4RSLAmk3F2ZpAiN4VCf7vf3SUGVuxgcoiaUwcc2oatAkirAJrWNSosf",
      tokenAddress: "HzUqs5jBrcb8fwmL5xdqdystGAfg9ALzHRdYL1BCEcUC",
      walletAddress: "DfMxre4cKmvogbLrPigxmibVTTQDuzjdXojWzjCXXhzj",
      actionType: "buy",
      amount: "5209.80865000",
      time: 1743525074,
      slot: 330628445,
      coinName: "God's Country",
      tokenSymbol: "COUNTRY",
      tokenLogo:
        "https://ipfs.io/ipfs/QmXML6GSpYg7fPMDFL4ofsQuZQpN8GBN3fCai9Lc475bhH",
      totalSupply: "999995090.30332300",
      alphaGroup: "KOL",
      name: "DfMxre4cKmvogbLrPigxmibVTTQDuzjdXojWzjCXXhzj",
      token: {
        tokenAddress: "HzUqs5jBrcb8fwmL5xdqdystGAfg9ALzHRdYL1BCEcUC",
        munScore: 0.0,
        riskScore: 13.86,
        topFreshWalletHolders: 0,
        topSmartWalletsHolders: 2,
        smartFollowers: 0,
      },
      decimal: 6,
    },
    {
      signature:
        "WRnf8ywCrKCQqfX13PAxRhvpgQr49VBJz1Wce4pBuLVadhCvZn9YHw8o1mMKV7UtdMiQ1BeBNbxePDrj63ku1Wn",
      tokenAddress: "2KvkSLK7zuFT2ZjwhNFn1j8TX4LoAFRYH3PbmAqJpump",
      walletAddress: "3h65MmPZksoKKyEpEjnWU2Yk2iYT5oZDNitGy5cTaxoE",
      actionType: "buy",
      amount: "3792883.24869800",
      time: 1743524983,
      slot: 330628214,
      coinName: "Pretend This Was Bitcoin",
      tokenSymbol: "BTC2.0",
      tokenLogo:
        "https://ipfs.io/ipfs/QmPdUoh5x2W9MgYPCPQjS749zENAoUFxDuQ7agxwrk18vs",
      totalSupply: "999999868.76681100",
      alphaGroup: "KOL",
      name: "3h65MmPZksoKKyEpEjnWU2Yk2iYT5oZDNitGy5cTaxoE",
      token: {
        tokenAddress: "2KvkSLK7zuFT2ZjwhNFn1j8TX4LoAFRYH3PbmAqJpump",
        munScore: 0.0,
        riskScore: 37.56,
        topFreshWalletHolders: 0,
        topSmartWalletsHolders: 2,
        smartFollowers: 0,
      },
      decimal: 6,
    },
    {
      signature:
        "67dW5m4uksa8aCayVeTuub6FyKTiVJQuvDVzh2EphqLcRspu6UgH9SW2cPtz6fuiNr9WmTQmsZGxcA2Tbhf6BJU",
      tokenAddress: "HzUqs5jBrcb8fwmL5xdqdystGAfg9ALzHRdYL1BCEcUC",
      walletAddress: "DfMxre4cKmvogbLrPigxmibVTTQDuzjdXojWzjCXXhzj",
      actionType: "buy",
      amount: "5086.67505500",
      time: 1743524872,
      slot: 330627936,
      coinName: "God's Country",
      tokenSymbol: "COUNTRY",
      tokenLogo:
        "https://ipfs.io/ipfs/QmXML6GSpYg7fPMDFL4ofsQuZQpN8GBN3fCai9Lc475bhH",
      totalSupply: "999995090.30332300",
      alphaGroup: "KOL",
      name: "DfMxre4cKmvogbLrPigxmibVTTQDuzjdXojWzjCXXhzj",
      token: {
        tokenAddress: "HzUqs5jBrcb8fwmL5xdqdystGAfg9ALzHRdYL1BCEcUC",
        munScore: 0.0,
        riskScore: 13.86,
        topFreshWalletHolders: 0,
        topSmartWalletsHolders: 2,
        smartFollowers: 0,
      },
      decimal: 6,
    },
  ],
  last_updated: 1743526522,
  total: 1201,
};

export const MOCK_DATA_TOKEN_DISTRIBUTION: ApiResponse<
  TokenDistributionItem[]
> = {
  code: 200,
  response: [
    {
      category: "shrimp",
      percentage: 0.18,
      amount: 4212,
    },
    {
      category: "fish",
      percentage: 5.0,
      amount: 800,
    },
    {
      category: "dolphin",
      percentage: 12.75,
      amount: 300,
    },
    {
      category: "shark",
      percentage: 20.0,
      amount: 50,
    },
    {
      category: "whale",
      percentage: 25.5,
      amount: 15,
    },
  ],
  last_updated: 1743092213,
};

export const MOCK_DATA_TOKEN_ANALYTICS: ApiResponse<TokenAnalytics> = {
  code: 200,
  response: {
    marketCap: 1234567.89,
    marketCapChange7d: -5.43,
    marketCap7dHistoricalValues: [
      {
        value: 1230000.0,
        time: 1711500000,
        label: "Day 1",
      },
      {
        value: 1234567.89,
        time: 1711586400,
        label: null,
      },
      {
        value: 1434567.89,
        time: 1711586400,
        label: null,
      },
      {
        value: 1134567.89,
        time: 1711586400,
        label: null,
      },
      {
        value: 1734567.89,
        time: 1711586400,
        label: null,
      },
    ],
    volume24h: 98765.43,
    volume24hChange7d: 2.1,
    volumeHistorical: [
      {
        value: 95000.0,
        time: 1711500000,
        label: "Day 1",
      },
      {
        value: 95000.0,
        time: 1711500000,
        label: "Day 1",
      },
      {
        value: 98000.0,
        time: 1711500000,
        label: "Day 1",
      },
      {
        value: 100000.0,
        time: 1711500000,
        label: "Day 1",
      },
      {
        value: 195000.0,
        time: 1711500000,
        label: "Day 1",
      },
      {
        value: 185000.0,
        time: 1711500000,
        label: "Day 1",
      },
    ],
    liquidity: 45678.9,
    liquidityChange: 1.5,
    liquidityHistorical: [
      {
        value: 45000.0,
        time: 1711500000,
        label: null,
      },
      {
        value: 45000.0,
        time: 1711500000,
        label: null,
      },
      {
        value: 45000.0,
        time: 1711500000,
        label: null,
      },
      {
        value: 45000.0,
        time: 1711500000,
        label: null,
      },
      {
        value: 45000.0,
        time: 1711500000,
        label: null,
      },
    ],
    holders: 5000,
    holdersChange7d: -200,
    holdersHistorical: [
      {
        value: 5200.0,
        time: 1711500000,
        label: "Day 1",
      },
    ],
    topFollowers: [
      {
        profileUrl: "https://x.com/user1",
        tag: "@user1",
        name: "User One",
        followers: 10000,
      },
      {
        profileUrl: "https://x.com/user2",
        tag: "@user2",
        name: "User Two",
        followers: 5000,
      },
      {
        profileUrl: "https://x.com/user2",
        tag: "@user2",
        name: "User Two",
        followers: 5000,
      },
      {
        profileUrl: "https://x.com/user2",
        tag: "@user2",
        name: "User Two",
        followers: 5000,
      },
      {
        profileUrl: "https://x.com/user2",
        tag: "@user2",
        name: "User Two",
        followers: 5000,
      },
    ],
    followers: {
      followerNumber: 25000,
      followerNumberChange7d: 500,
      smarts: 3000,
      smartsChange: -50,
      followerNumbersHistorical: [
        {
          value: 24500.0,
          time: 1711500000,
          label: "Day 1",
        },
        {
          value: 34500.0,
          time: 1711600000,
          label: "Day 1",
        },
        {
          value: 44500.0,
          time: 1711700000,
          label: "Day 1",
        },
        {
          value: 54500.0,
          time: 1711800000,
          label: "Day 1",
        },
        {
          value: 24500.0,
          time: 1711900000,
          label: "Day 1",
        },
      ],
    },
    mentions: {
      mentionNumber: 1200,
      mentionNumberChange7d: 100,
      smarts: 150,
      smartsChange: 10,
      mentionNumbersHistorical: [
        {
          value: 1100.0,
          time: 1711500000,
          label: "Day 1",
        },
        {
          value: 1200.0,
          time: 1711600000,
          label: "Day 1",
        },
        {
          value: 1300.0,
          time: 1711700000,
          label: "Day 1",
        },
        {
          value: 1100.0,
          time: 1711800000,
          label: "Day 1",
        },
        {
          value: 1500.0,
          time: 1711900000,
          label: "Day 1",
        },
      ],
    },
  },
  last_updated: 1743092176,
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
