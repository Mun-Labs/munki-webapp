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
export interface ApiResponseV2<T> {
  success?: boolean;
  data?: T;
}

export interface Token {
  tokenAddress: Address;
  name: string;
  symbol: string;
  mc: number;
  logoUri: string;
  price24hchange: number;
  current_price: number;
  volume24h: number;
}

export interface TokenDetailMetaData {
  description?: string;
  website?: string;
  twitter?: string;
}

export interface TokenDetail {
  tokenAddress: Address;
  name: string;
  symbol: string;
  decimals: 6;
  logoUri: string;
  websiteUrl: null;
  metadata: TokenDetailMetaData | null;
  currentPrice: BigDecimal;
  totalSupply: BigDecimal;
  history24hPrice: null;
  priceChange24hPercent: null;
  marketcap: BigDecimal;
  holders: number;
  liquidity: BigDecimal;
  volume24h: BigDecimal;
  volume24hChange: BigDecimal;
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
    marketcap: BigDecimal;
    history24hPrice: BigDecimal;
    priceChange24hPercent: BigDecimal;
    holders: number;
    liquidity: BigDecimal;
    volume24h: BigDecimal;
    volume24hChange: null;
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

export interface TopHoldersTokenInfo {
  price: number; // BigDecimal;
  symbol: string;
  name: string;
  logoURI: string;
  liquidity: number; // BigDecimal;
  market_cap: number; // BigDecimal;
  supply: number; // BigDecimal;
  circulatingSupply: number; // BigDecimal;
  fdv: number; // BigDecimal;
  holder: number;
  extensions: {
    twitter: string;
    description: string;
  };
  priceChange1hPercent: number; // BigDecimal;
  creationTime: UnixTime;
}

export interface TokenHolding {
  name?: string;
  symbol?: string;
  icon?: string;
  logoURI?: string;

  address: Address;
  decimals: number;
  balance: number;
  uiAmount: number;
  chainId: string;
  priceUsd: number;
  valueUsd: number;
}

export interface TopHoldersTokenItem {
  count: number;
  wallet: string;
  amount: number;
  share_in_percent: number;
  net_worth: number;
  net_worth_excluding: number;
  first_top_holding: TokenHolding;
  second_top_holding: TokenHolding;
  third_top_holding: TokenHolding | number;
}

export interface TopHolders {
  token_info: TopHoldersTokenInfo;
  items: TopHoldersTokenItem[];
}

export interface AverageEntryPrice {
  avg_entry_price: number;
  total_amount: number;
  sniped_pfun: boolean;
  oldest_trade_time: number;
  oldest_tx_hash: string;
}

export interface AverageExitPrice {
  avg_exit_price: number;
  total_amount: number;
  oldest_trade_time: number;
  oldest_tx_hash: string;
}

export interface AverageHoldingPrice {
  avg_holding_price: number;
  current_holding_amount: number;
  rebuy_detected: boolean;
  label: string | null;
}

export interface AverageEntryHolder {
  count: number;
  holder: string;
  holding: number;
  label: string | null;
  avg_raw_entry_price: AverageEntryPrice | null;
  avg_raw_exit_price: AverageExitPrice | null;
  avg_actual_holding_price: AverageHoldingPrice | null;
}

export interface AverageEntryData {
  token_info: TopHoldersTokenInfo;
  agg_avg: number;
  items: AverageEntryHolder[];
}
