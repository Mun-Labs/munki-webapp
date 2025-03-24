import { ApiResponse, MindshareItem } from "../apiTypes";
import { useApi } from "./useApi";

export function useMindshareApi(
  query?: Record<string, string>,
  mockResponse?: ApiResponse<MindshareItem[]>,
) {
  return useApi<MindshareItem[]>("mindshare", query, mockResponse);
}
