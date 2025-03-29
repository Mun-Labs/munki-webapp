import { useEffect } from "react";
import { useTokenAnalyticsStore } from "../../../../store/tokenAnalytics/useTokenAnalytics";
import { useTokenAnalyticsApi } from "../../../../api/hooks/useTokenAnalyticsApi";
import { MOCK_DATA_TOKEN_ANALYTICS } from "../../../../api/MockData";

const useAnalyticsLogic = (tokenName: string | undefined) => {
  const { setItem, setLoading } = useTokenAnalyticsStore();
  const { data, isLoading } = useTokenAnalyticsApi(
    tokenName,
    undefined,
    MOCK_DATA_TOKEN_ANALYTICS,
  );

  useEffect(() => {
    if (!tokenName) return;
    setLoading(isLoading);
  }, [isLoading, tokenName]);

  useEffect(() => {
    if (!tokenName) return;
    if (data && !isLoading) {
      setItem(data.response);
    }
  }, [data, isLoading, tokenName]);
};

export default useAnalyticsLogic;
