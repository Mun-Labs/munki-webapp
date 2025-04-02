import { Address } from "../../domain/types/Types";
import { ApiResponse, TokenDistributionItem } from "../apiTypes";
import { useApiV1 } from "./useApi";

export function useTokenDistributionApi(
  tokenAddress: Address,
  query?: Record<string, string>,
  mockResponse?: ApiResponse<TokenDistributionItem[]>,
) {
  const path = `token/${tokenAddress}/details/distributions`;
  return useApiV1<TokenDistributionItem[]>(path as any, query, mockResponse);
}
