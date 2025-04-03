import useSWR from "swr";
import type { SWRResponse } from "swr";
import { BASE_URL, BASE_URL_V2, EndpointsEnum } from "../apiConstants";
import { DEBUG_FLAGS } from "../../common/featureFlags";
import { ApiResponse, ApiResponseV2 } from "../apiTypes";
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
  const apiKey = import.meta.env.VITE_MUNKI_API_KEY;

  const response = await fetch(
    url,
    apiKey
      ? {
          headers: {
            "x-api-key": apiKey,
          },
        }
      : undefined,
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch data from ${url}`);
  }

  return response.json();
};

export function useApi<Response, Query extends Record<string, string> = any>(
  endpoint: keyof typeof EndpointsEnum | null,
  query?: Query,
  mockResponse?: Response,
  baseUrl: string = BASE_URL,
  debugOptions?: {
    apiKey?: string;
    debugDelay?: number;
    forceMock?: boolean;
  },
): SWRResponse<Response> {
  const [delayedData, setDelayedData] = useState<Response | undefined>(
    undefined,
  );
  const [isDelaying, setIsDelaying] = useState<boolean>(false);

  if ((DEBUG_FLAGS.useMockApi && mockResponse) || debugOptions?.forceMock) {
    useEffect(() => {
      setIsDelaying(true);
      const timer = setTimeout(() => {
        setDelayedData(mockResponse);
        setIsDelaying(false);
      }, debugOptions?.debugDelay);

      return () => clearTimeout(timer);
    }, [mockResponse, debugOptions?.debugDelay]);

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
  debugOptions?: {
    debugDelay?: number;
    forceMock?: boolean;
  },
): SWRResponse<ApiResponse<Response>> {
  return useApi<ApiResponse<Response>, Query>(
    endpoint,
    query,
    mockResponse,
    BASE_URL,
    debugOptions,
  );
}

export function useApiV2<Response, Query extends Record<string, string> = any>(
  endpoint: keyof typeof EndpointsEnum | null,
  query?: Query,
  mockResponse?: ApiResponseV2<Response>,
  debugOptions: {
    apiKey?: string;
    debugDelay?: number;
    forceMock?: boolean;
  } = {},
): SWRResponse<ApiResponseV2<Response>> {
  return useApi<ApiResponseV2<Response>, Query>(
    endpoint,
    query,
    mockResponse,
    BASE_URL_V2,
    debugOptions,
  );
}
