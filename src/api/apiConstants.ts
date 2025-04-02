import { SWRResponse } from "swr";

export const BASE_URL =
  "https://munki-web-app-197975f706a0.herokuapp.com/api/v1";

// export const BASE_URL_V2 = "https://munki-webapp.onrender.com";
export const BASE_URL_V2 = "http://localhost:8000";

// /api/v1/token?q=trump&limit=1&offset=0
// mindshare

export enum EndpointsEnum {
  "alphamoves" = "alphamoves",
  "mindshare" = "mindshare",
  "fearandgreed" = "fearandgreed",
  "vibecheck" = "vibecheck",
  "token" = "token",
  "token/trending" = "token/trending",
  "top-holders" = "top-holders",
}

export const defaultSwrResponse: SWRResponse<any> = {
  data: {},
  error: null,
  isValidating: false,
  isLoading: false,
  mutate: () => Promise.resolve(null),
};
