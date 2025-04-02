import { Address } from "../../domain/types/Types";
import { ApiResponse, TokenAnalytics } from "../apiTypes";
import { useApiV1 } from "./useApi";

export function useTokenAnalyticsApi(
  tokenAddress: Address | undefined,
  query?: Record<string, string>,
  mockResponse?: ApiResponse<TokenAnalytics>,
) {
  if (!tokenAddress) return { data: null, isLoading: false };
  const path = `token/${tokenAddress}/details/analytics`;
  return useApiV1<TokenAnalytics>(path as any, query, mockResponse);
}
