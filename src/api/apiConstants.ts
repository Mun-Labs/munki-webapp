import { SWRResponse } from "swr";

export const BASE_URL =
  "https://munki-web-app-197975f706a0.herokuapp.com/api/v1";

// /api/v1/token?q=trump&limit=1&offset=0
// mindshare

export enum EndpointsEnum {
  "mindshare" = "mindshare",
  "fearandgreed" = "fearandgreed",
  "token" = "token",
}

export const defaultSwrResponse: SWRResponse<any> = {
  data: {},
  error: null,
  isValidating: false,
  isLoading: false,
  mutate: () => Promise.resolve(null),
};
