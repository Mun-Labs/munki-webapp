import { Address, UnixTime } from "../domain/types/Types";

export interface ApiResponse<T> {
  code: number;
  response: T;
}
export interface FearAndGreedResponse {
  fearAndGreed: FearAndGreed[];
  tokenPrices: TokenPrices;
}

export enum FearAndGreedClassification {
  EXTREMELY_FEAR = "Extreme Fear",
  FEAR = "Fear",
  GREED = "Greed",
  EXTREMELY_GREED = "Extreme Greed",
}

export interface FearAndGreed {
  value: number;
  valueClassification: FearAndGreedClassification | "n/a";
  timestamp: UnixTime;
  chain: "solana";
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
