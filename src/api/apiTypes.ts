import { FearAndGreedClassification } from "../domain/types/BusinessLogicTypes";
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

export interface PaginationQueryParams {
  limit?: number;
  offset?: number;
}

export interface TokenQueryParams extends PaginationQueryParams {
  q: string;
}
