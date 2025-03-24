import { ApiResponse, TokenTrending } from "../apiTypes";
import { useApi } from "./useApi";

export function useTokenTrendingApi(
  query?: Record<string, string>,
  mockResponse?: ApiResponse<TokenTrending[]>,
) {
  return useApi<TokenTrending[]>("token/trending", query, mockResponse);
}
