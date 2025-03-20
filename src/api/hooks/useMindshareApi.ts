import { ApiResponse, FearAndGreedResponse } from "../apiTypes";
import { useApi } from "./useApi";

export function useMindshareApi(
  query?: Record<string, string>,
  mockResponse?: ApiResponse<FearAndGreedResponse>,
) {
  return useApi<FearAndGreedResponse>("vibecheck", query, mockResponse);
}
