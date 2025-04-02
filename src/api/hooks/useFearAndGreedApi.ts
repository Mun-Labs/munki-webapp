import { ApiResponse, FearAndGreedResponse } from "../apiTypes";
import { useApiV1 } from "./useApi";

export function useFearAndGreedApi(
  query?: Record<string, string>,
  mockResponse?: ApiResponse<FearAndGreedResponse>,
) {
  return useApiV1<FearAndGreedResponse>("vibecheck", query, mockResponse);
}
