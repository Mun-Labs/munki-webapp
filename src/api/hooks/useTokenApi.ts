import { ApiResponse, Token } from "../apiTypes";
import { useApi } from "./useApi";

export function useTokenApi(
  query?: Record<string, string>,
  mockResponse?: ApiResponse<Token[]>,
) {
  return useApi<Token[]>("fearandgreed", query, mockResponse);
}
