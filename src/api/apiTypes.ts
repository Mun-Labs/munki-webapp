import { Address, UnixTime } from "../domain/types/Types";

export interface ApiResponse<T> {
  code: number;
  response: T;
}
export interface FearAndGreedResponse {
  fearAndGreed: FearAndGreed[];
  tokenPrices: TokenPrices;
}

export interface FearAndGreed {
  value: number;
  valueClassification: "Fear";
  timestamp: UnixTime;
  chain: "solana";
}

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
