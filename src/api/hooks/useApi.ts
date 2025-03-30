import useSWR from "swr";
import type { SWRResponse } from "swr";
import { BASE_URL, EndpointsEnum } from "../apiConstants";
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
  // Introduce a 600ms delay to simulate network latency
  if (DEBUG_FLAGS.useMockApi) {
    /* prettier-ignore */ console.log('%c------------------------------------------------------------------------------------------', `background: ${'darkblue'}`);
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }

  console.log("2");
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
  debugDelay: number = 1000,
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

  let url = endpoint === null ? null : `${BASE_URL}/${endpoint}`;
  if (query) {
    url += `?${new URLSearchParams(query)}`;
  }

  const response = useSWR(url, fetcher, swrOptions);
  return response;
}

// useApi("fearandgreed", { test: "ok", to: "oi" });
