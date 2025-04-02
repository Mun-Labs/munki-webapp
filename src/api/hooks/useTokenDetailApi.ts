import { Address } from "../../domain/types/Types";
import { ApiResponse, TokenDetail } from "../apiTypes";
import { useApiV1 } from "./useApi";

export function useTokenDetailApi(
  tokenAddress: Address,
  query?: Record<string, string>,
  mockResponse?: ApiResponse<TokenDetail>,
) {
  const path = `token/${tokenAddress}/details`;
  return useApiV1<TokenDetail>(path as any, query, mockResponse);
}
