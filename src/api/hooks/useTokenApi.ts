import { ApiResponse, Token, TokenQueryParams } from "../apiTypes";
import { useApi } from "./useApi";

export function useTokenApi(
  query?: TokenQueryParams | null,
  mockResponse?: ApiResponse<Token[]>,
) {
  const url = query === null ? null : "token";
  return useApi<Token[]>(url, query, mockResponse);
}
