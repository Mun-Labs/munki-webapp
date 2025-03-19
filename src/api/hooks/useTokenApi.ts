import { defaultSwrResponse } from "../apiConstants";
import { ApiResponse, Token, TokenQueryParams } from "../apiTypes";
import { useApi } from "./useApi";

export function useTokenApi(
  query?: TokenQueryParams | null,
  mockResponse?: ApiResponse<Token[]>,
) {
  defaultSwrResponse.data = [] as Token[];
  if (query === null) return defaultSwrResponse;
  return useApi<Token[]>("fearandgreed", query, mockResponse);
}
