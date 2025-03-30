import { Address } from "../../domain/types/Types";
import { ApiResponse, TokenAnalytics } from "../apiTypes";
import { useApi } from "./useApi";

export function useTokenAnalyticsApi(
  tokenAddress: Address | undefined,
  query?: Record<string, string>,
  mockResponse?: ApiResponse<TokenAnalytics>,
) {
  if (!tokenAddress) return { data: null, isLoading: false };
  const path = `token/${tokenAddress}/details/analytics`;
  return useApi<TokenAnalytics>(path as any, query, mockResponse);
}
