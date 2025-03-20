import { FearAndGreedClassification } from "../domain/types/BusinessLogicTypes";
import { Address, UnixTime } from "../domain/types/Types";

export interface ApiResponse<T> {
  code: number;
  response: T;
  last_updated: UnixTime;
}

export interface Token {
  token_address: Address;
  name: string;
  symbol: string;
  logo_uri: string;
}

export interface MindshareItem {
  tokenAddress: Address;
  changePercentage: number;
  logoUrl: string;
  name: string;
  symbol: string;
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
