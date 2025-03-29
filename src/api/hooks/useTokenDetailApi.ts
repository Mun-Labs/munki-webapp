import { Address } from "../../domain/types/Types";
import { ApiResponse, TokenDetail } from "../apiTypes";
import { useApi } from "./useApi";

export function useTokenDetailApi(
  tokenAddress: Address,
  query?: Record<string, string>,
  mockResponse?: ApiResponse<TokenDetail>,
) {
  const path = `token/${tokenAddress}/details`;
  return useApi<TokenDetail>(path as any, query, mockResponse);
}
