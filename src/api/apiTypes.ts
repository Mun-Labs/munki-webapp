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
  token_address: Address;
  wallet_address: Address;
  actionType: "sell" | "buy";
  amount: BigDecimal;
  time: UnixTime;
  slot: number;
  coinName: string;
  token_symbol: string;
  alphaGroup: "WHALE" | "KOL" | "SMART";
  name: string;
  token: {
    token_address: Address;
    mun_score: number;
    risk_score: number;
    top_fresh_wallet_holders: number;
    top_smart_wallets_holders: number;
    smart_followers: number;
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

export interface TokenQueryParams {
  q: string;
  limit?: number;
  offset?: number;
}
