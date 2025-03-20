import useSWR from "swr";
import type { SWRResponse } from "swr";
import { BASE_URL, EndpointsEnum } from "../apiConstants";
import { DEBUG_FLAGS } from "../../common/featureFlags";
import { ApiResponse } from "../apiTypes";

interface ISwrOptions {
  revalidateOnMount?: boolean;
  revalidateOnReconnect?: boolean;
  revalidateIfStale?: boolean;
  revalidateOnFocus?: boolean;
}

const swrOptions: ISwrOptions = {
  revalidateOnMount: false,
  revalidateOnReconnect: false,
  revalidateIfStale: false,
  revalidateOnFocus: false,
};

const fetcher = async (url: string) => {
  const response = await fetch(url);
  /*prettier-ignore*/ console.log('>>>> _ >>>> ~ useApi.ts:23 ~ fetcher ~ response:', response)

  if (!response.ok) {
    throw new Error(`Failed to fetch data from ${url}`);
  }

  return response.json();
};

export function useApi<Response, Query extends Record<string, string> = any>(
  endpoint: keyof typeof EndpointsEnum | null,
  query?: Query,
  mockResponse?: ApiResponse<Response>,
): SWRResponse<ApiResponse<Response>> {
  if (DEBUG_FLAGS.useMockApi && mockResponse) {
    useSWR(null, fetcher, swrOptions);
    return {
      data: mockResponse,
      error: null,
      isValidating: false,
      isLoading: false,
      mutate: () => Promise.resolve(mockResponse),
    };
  }

  let url = endpoint === null ? null : `${BASE_URL}/${endpoint}`;
  if (query) {
    url += `?${new URLSearchParams(query)}`;
  }

  /*prettier-ignore*/ console.log('>>>> _ >>>> ~ useApi.ts:48 ~ url:', url)
  const response = useSWR(url, fetcher, swrOptions);
  /*prettier-ignore*/ console.log('>>>> _ >>>> ~ useApi.ts:53 ~ response:', response)
  return response;
}

// useApi("fearandgreed", { test: "ok", to: "oi" });
