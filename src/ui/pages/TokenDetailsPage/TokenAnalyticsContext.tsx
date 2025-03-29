import { FC, useEffect, useState } from "react";
import { TokenAnalytics } from "../../../api/apiTypes";
import { useTokenAnalyticsApi } from "../../../api/hooks/useTokenAnalyticsApi";
import {
  TokenAnalyticsProviderProps,
  TokenAnalyticsContext,
} from "./hooks/useTokenAnalytics";
import { MOCK_DATA_TOKEN_ANALYTICS } from "../../../api/MockData";

export const TokenAnalyticsProvider: FC<TokenAnalyticsProviderProps> = ({
  children,
  tokenName,
}) => {
  const [tokenAnalyticsData, setTokenAnalyticsData] =
    useState<TokenAnalytics | null>(null);
  const { data, isLoading } = useTokenAnalyticsApi(
    tokenName,
    undefined,
    MOCK_DATA_TOKEN_ANALYTICS,
  );

  useEffect(() => {
    if (data && !isLoading) {
      setTokenAnalyticsData(data.response);
    }
  }, [data, isLoading]);

  const final = tokenAnalyticsData
    ? tokenAnalyticsData
    : ({} as TokenAnalytics);

  const value = {
    tokenAnalyticsData: final,
    isLoading,
  };

  return (
    <TokenAnalyticsContext.Provider value={value}>
      {children}
    </TokenAnalyticsContext.Provider>
  );
};
