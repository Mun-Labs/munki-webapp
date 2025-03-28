import { SWRResponse } from "swr";

export const BASE_URL =
  "https://munki-web-app-197975f706a0.herokuapp.com/api/v1";

// /api/v1/token?q=trump&limit=1&offset=0
// mindshare

export enum EndpointsEnum {
  "alphamoves" = "alphamoves",
  "mindshare" = "mindshare",
  "fearandgreed" = "fearandgreed",
  "vibecheck" = "vibecheck",
  "token" = "token",
  "token/trending" = "token/trending",
}

export const defaultSwrResponse: SWRResponse<any> = {
  data: {},
  error: null,
  isValidating: false,
  isLoading: false,
  mutate: () => Promise.resolve(null),
};
