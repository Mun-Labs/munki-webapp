// https://munki-webapp.onrender.com/top-holders/?token=4TBi66vi32S7J8X1A6eWfaLHYmUXu7CStcEmsJQdpump&limit=10

import { Address } from "../../../domain/types/Types";
import {
  PaginationQueryParams,
  AlphaMovesItem,
  ApiResponseV2,
  TopHolders,
} from "../../apiTypes";
import { useApiV2 } from "../useApi";

// top-holders/?token=4TBi66vi32S7J8X1A6eWfaLHYmUXu7CStcEmsJQdpump&limit=10

export function useTopHoldersApi(
  tokenAddress: Address,
  query: PaginationQueryParams | null = {},
  mockResponse?: ApiResponseV2<TopHolders>,
) {
  let finalQuery = query;
  if (query) {
    finalQuery = {
      limit: 10,
      offset: 0,
      ...query,
    };
  }
  const canLoad = tokenAddress && finalQuery;
  const url = canLoad ? `top-holders/${tokenAddress}` : null;
  return useApiV2<TopHolders>(url as any, finalQuery, mockResponse);
}
