import {
  FearAndGreedClassification,
  TokenDistributionItemCategories,
} from "../domain/types/BusinessLogicTypes";
import { Address, BigDecimal, UnixTime } from "../domain/types/Types";

export interface ApiResponse<T> {
  code: number;
  response: T;
  last_updated: UnixTime;
  total?: number;
}

export interface Token {
  tokenAddress: Address;
  name: string;
  symbol: string;
  mc: number;
  logoUri: string;
}

export interface TokenDetail {
  tokenAddress: Address;
  name: string;
  symbol: string;
  decimals: 6;
  logoUri: string;
  websiteUrl: null;
  metadata: null;
  currentPrice: "0.024895069200";
  totalSupply: "0";
  marketcap: "0";
  history24hPrice: null;
  priceChange24hPercent: null;
}

export interface TokenTrending
  extends Pick<Token, "tokenAddress" | "name" | "symbol" | "logoUri"> {
  volume24h: BigDecimal;
  volume24hChange?: number;
  recordDate: UnixTime;
  holderCount: number;
}

export interface MindshareItem {
  tokenAddress: Address;
  changePercentage: number;
  logoUrl: string;
  name: string;
  symbol: string;
  volume: BigDecimal;
}

export interface FearAndGreed {
  value: number;
  valueClassification: keyof typeof FearAndGreedClassification | "n/a";
  timestamp: UnixTime;
  chain: "solana";
}

export interface FearAndGreedResponse extends FearAndGreed {
  fearAndGreed: FearAndGreed[];
  tokenPrices: TokenPrices;
}

export interface AlphaMovesItem {
  signature: string;
  tokenAddress: Address;
  walletAddress: Address;
  actionType: "sell" | "buy";
  amount: BigDecimal;
  time: UnixTime;
  slot: number;
  coinName: string;
  tokenSymbol: string;
  tokenLogo?: string; // newly added
  totalSupply?: BigDecimal; // newly added
  alphaGroup: "WHALE" | "KOL" | "SMART";
  name: string;
  token: {
    tokenAddress: Address;
    munScore: number;
    riskScore: number;
    topFreshWalletHolders: number;
    topSmartWalletsHolders: number;
    smartFollowers: number;
  };
  decimal: number;
}

export const defaultFearAndGreed: FearAndGreed = {
  value: NaN,
  valueClassification: "n/a",
  timestamp: NaN,
  chain: "solana",
};

export interface TokenPriceInfo {
  price: number;
  updateUnixTime: UnixTime;
  updateHumanTime: string;
  volumeUSD: number;
  volumeChangePercent: number;
  priceChangePercent: number;
}

export type TokenPrices = {
  [tokenAddress: Address]: TokenPriceInfo;
};

export interface TokenDistributionItem {
  category: TokenDistributionItemCategories;
  percentage: number;
  amount: number;
}

export interface PaginationQueryParams {
  limit?: number;
  offset?: number;
}

export interface TokenQueryParams extends PaginationQueryParams {
  q: string;
}

export interface HistoricalValue {
  value: number;
  time: UnixTime;
  label: string | null;
}

export interface TopFollower {
  profileUrl: string;
  tag: string;
  name: string;
  followers: number;
}

export interface FollowersData {
  followerNumber: number;
  followerNumberChange7d: number;
  smarts: number;
  smartsChange: number;
  followerNumbersHistorical: HistoricalValue[];
}

export interface MentionsData {
  mentionNumber: number;
  mentionNumberChange7d: number;
  smarts: number;
  smartsChange: number;
  mentionNumbersHistorical: HistoricalValue[];
}

export interface TokenAnalytics {
  marketCap: number;
  marketCapChange7d: number;
  marketCap7dHistoricalValues: HistoricalValue[];
  volume24h: number;
  volume24hChange7d: number;
  volumeHistorical: HistoricalValue[];
  liquidity: number;
  liquidityChange: number;
  liquidityHistorical: HistoricalValue[];
  holders: number;
  holdersChange7d: number;
  holdersHistorical: HistoricalValue[];
  topFollowers: TopFollower[];
  followers: FollowersData;
  mentions: MentionsData;
}
