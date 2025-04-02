import { ApiResponse, TokenTrending } from "../apiTypes";
import { useApiV1 } from "./useApi";

export function useTokenTrendingApi(
  query?: Record<string, string>,
  mockResponse?: ApiResponse<TokenTrending[]>,
) {
  return useApiV1<TokenTrending[]>("token/trending", query, mockResponse);
}
