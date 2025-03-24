import { ApiResponse, AlphaMovesItem, PaginationQueryParams } from "../apiTypes";
import { useApi } from "./useApi";

export function useAlphaMovesApi(
  query?: PaginationQueryParams | null,
  mockResponse?: ApiResponse<AlphaMovesItem[]>,
) {
  let finalQuery = query;
  if (query) {
    finalQuery = {
      limit: 10,
      offset: 0,
      ...query,
    };
  }
  const url = finalQuery === null ? null : "alphamoves";
  return useApi<AlphaMovesItem[]>(url, finalQuery, mockResponse);
}
