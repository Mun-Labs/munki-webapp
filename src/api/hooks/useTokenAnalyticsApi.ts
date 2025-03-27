import { Address } from "../../domain/types/Types";
import { ApiResponse, TokenAnalytics } from "../apiTypes";
import { useApi } from "./useApi";

export function useTokenAnalyticsApi(
  tokenAddress: Address,
  query?: Record<string, string>,
  mockResponse?: ApiResponse<TokenAnalytics>,
) {
  const path = `token/${tokenAddress}/details/analytics`;
  return useApi<TokenAnalytics>(path as any, query, mockResponse);
}
