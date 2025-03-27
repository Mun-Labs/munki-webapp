import { createContext, ReactNode, useContext } from "react";
import { TokenAnalytics } from "../../../../api/apiTypes";

export interface TokenAnalyticsContextType {
  tokenAnalyticsData: TokenAnalytics | null;
  isLoading: boolean;
}

export const TokenAnalyticsContext = createContext<
  TokenAnalyticsContextType | undefined
>(undefined);

export interface TokenAnalyticsProviderProps {
  children: ReactNode;
  tokenName: string;
}
export const useTokenAnalytics = (): TokenAnalyticsContextType => {
  const context = useContext(TokenAnalyticsContext);
  if (context === undefined) {
    throw new Error(
      "useTokenAnalytics must be used within a TokenAnalyticsProvider",
    );
  }
  return context;
};
