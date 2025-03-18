import useSWR from "swr";
import type { SWRResponse } from "swr";
import { BASE_URL, EndpointsEnum } from "../apiConstants";
import { DEBUG_FLAGS } from "../../common/featureFlags";
import { ApiResponse } from "../apiTypes";

const fetcher = async (url: string) => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to fetch data from ${url}`);
  }

  return response.json();
};

export function useApi<Response, Query extends Record<string, string> = any>(
  endpoint: keyof typeof EndpointsEnum,
  query?: Query,
  mockResponse?: ApiResponse<Response>,
): SWRResponse<Response> {
  if (DEBUG_FLAGS.useMockApi) {
    return {
      data: mockResponse?.response,
      error: null,
      isValidating: false,
      isLoading: false,
      mutate: () => Promise.resolve(mockResponse?.response),
    };
  }

  let url = `${BASE_URL}/${endpoint}`;
  if (query) {
    url += `?${new URLSearchParams(query)}`;
  }

  const response = useSWR(url, fetcher);
  return response;
}

// useApi("fearandgreed", { test: "ok", to: "oi" });
