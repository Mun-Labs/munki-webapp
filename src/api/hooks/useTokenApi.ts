import { ApiResponse, Token, TokenQueryParams } from "../apiTypes";
import { useApi } from "./useApi";

export function useTokenApi(
  query?: TokenQueryParams | null,
  mockResponse?: ApiResponse<Token[]>,
) {
  let finalQuery = query;
  if (query) {
    finalQuery = {
      limit: 6,
      offset: 0,
      ...query,
    };
  }
  const url = finalQuery === null ? null : "token";
  return useApi<Token[]>(url, finalQuery, mockResponse);
}
