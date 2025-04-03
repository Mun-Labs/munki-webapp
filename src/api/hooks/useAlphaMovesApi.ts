import {
  ApiResponse,
  AlphaMovesItem,
  PaginationQueryParams,
} from "../apiTypes";
import { useApiV1 } from "./useApi";

export function useAlphaMovesApi(
  query?: PaginationQueryParams | null,
  mockResponse?: ApiResponse<AlphaMovesItem[]>,
  debugOptions?: {
    debugDelay?: number;
    forceMock?: boolean;
  },
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
  return useApiV1<AlphaMovesItem[]>(url, finalQuery, mockResponse, debugOptions);
}
