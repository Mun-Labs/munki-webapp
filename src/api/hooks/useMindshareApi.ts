import { ApiResponse, MindshareItem } from "../apiTypes";
import { useApiV1 } from "./useApi";

export function useMindshareApi(
  query?: Record<string, string>,
  mockResponse?: ApiResponse<MindshareItem[]>,
) {
  return useApiV1<MindshareItem[]>("mindshare", query, mockResponse);
}
