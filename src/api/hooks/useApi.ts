import useSWR from "swr";
import type { SWRResponse } from "swr";
import { BASE_URL, BASE_URL_V2, EndpointsEnum } from "../apiConstants";
import { DEBUG_FLAGS } from "../../common/featureFlags";
import { ApiResponse } from "../apiTypes";
import { useState, useEffect } from "react";

interface ISwrOptions {
  revalidateOnMount?: boolean;
  revalidateOnReconnect?: boolean;
  revalidateIfStale?: boolean;
  revalidateOnFocus?: boolean;
}

const swrOptions: ISwrOptions = {
  revalidateOnMount: true,
  revalidateOnReconnect: false,
  revalidateIfStale: false,
  revalidateOnFocus: false,
};

const fetcher = async (url: string) => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to fetch data from ${url}`);
  }

  return response.json();
};

export function useApi<Response, Query extends Record<string, string> = any>(
  endpoint: keyof typeof EndpointsEnum | null,
  query?: Query,
  mockResponse?: ApiResponse<Response>,
  baseUrl: string = BASE_URL,
  debugDelay: number = 0,
): SWRResponse<ApiResponse<Response>> {
  const [delayedData, setDelayedData] = useState<
    ApiResponse<Response> | undefined
  >(undefined);
  const [isDelaying, setIsDelaying] = useState<boolean>(false);

  if (DEBUG_FLAGS.useMockApi && mockResponse) {
    useEffect(() => {
      setIsDelaying(true);
      const timer = setTimeout(() => {
        setDelayedData(mockResponse);
        setIsDelaying(false);
      }, debugDelay);

      return () => clearTimeout(timer);
    }, [mockResponse, debugDelay]);

    return {
      data: delayedData,
      error: null,
      isValidating: false,
      isLoading: isDelaying,
      mutate: () => Promise.resolve(mockResponse),
    };
  }

  let url = endpoint === null ? null : `${baseUrl}/${endpoint}`;
  if (query) {
    url += `?${new URLSearchParams(query)}`;
  }

  const response = useSWR(url, fetcher, swrOptions);
  return response;
}

// useApi("fearandgreed", { test: "ok", to: "oi" });

export function useApiV1<Response, Query extends Record<string, string> = any>(
  endpoint: keyof typeof EndpointsEnum | null,
  query?: Query,
  mockResponse?: ApiResponse<Response>,
  debugDelay: number = 0,
): SWRResponse<ApiResponse<Response>> {
  return useApi<Response, Query>(
    endpoint,
    query,
    mockResponse,
    BASE_URL,
    debugDelay,
  );
}

export function useApiV2<Response, Query extends Record<string, string> = any>(
  endpoint: keyof typeof EndpointsEnum | null,
  query?: Query,
  mockResponse?: ApiResponse<Response>,
  debugDelay: number = 0,
): SWRResponse<ApiResponse<Response>> {
  return useApi<Response, Query>(
    endpoint,
    query,
    mockResponse,
    BASE_URL_V2,
    debugDelay,
  );
}
