// https://munki-webapp.onrender.com/top-holders/?token=4TBi66vi32S7J8X1A6eWfaLHYmUXu7CStcEmsJQdpump&limit=10

import { Address } from "../../../domain/types/Types";
import {
  PaginationQueryParams,
  ApiResponseV2,
  TopHolders,
  AverageEntryData,
} from "../../apiTypes";
import { useApiV2 } from "../useApi";

// https://munki-webapp.onrender.com/top-holders/?token=4TBi66vi32S7J8X1A6eWfaLHYmUXu7CStcEmsJQdpump&limit=10
// https://munki-webapp.onrender.com/avg_entry/?token=4TBi66vi32S7J8X1A6eWfaLHYmUXu7CStcEmsJQdpump&limit=10
// https://munki-webapp.onrender.com/fresh_holders/?token=4TBi66vi32S7J8X1A6eWfaLHYmUXu7CStcEmsJQdpump&limit=10

export function useTopHoldersApi(
  tokenAddress: Address,
  query: PaginationQueryParams | null = {},
  mockResponse?: ApiResponseV2<TopHolders>,
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
  const canLoad = tokenAddress && finalQuery;
  const url = canLoad ? `top-holders/?token=${tokenAddress}` : null;
  return useApiV2<TopHolders>(
    url as any,
    finalQuery,
    mockResponse,
    debugOptions,
  );
}

export function useFreshHoldersApi(
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

export function useAverageEntryApi(
  tokenAddress: Address,
  query: PaginationQueryParams | null = {},
  mockResponse?: ApiResponseV2<AverageEntryData>,
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
  const url = canLoad ? `avg_entry/${tokenAddress}` : null;
  return useApiV2<AverageEntryData>(url as any, finalQuery, mockResponse);
}
