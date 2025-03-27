import { ComponentProps, FC, useEffect, useState } from "react";
import styled from "styled-components";
import { BioInfo } from "./BioInfo/BioInfo";
import { Profile } from "./Profile/Profile";
import { Head } from "./Head/Head";
import { Analytics } from "./Analytics/Analytics";
import "./TokenDetailPage.css";
import TopHolder from "./TopHolder/TopHolder";
import TokenDistribution from "./TokenDistribution/TokenDistribution";
import { COLORS } from "../../colors";
import TotalHolders from "./TotalHolders/TotalHolders";
import { useParams } from "react-router";
import { TokenAnalytics } from "../../../api/apiTypes";
import { useTokenDetailApi } from "../../../api/hooks/useTokenDetailApi";
import { useTokenAnalyticsApi } from "../../../api/hooks/useTokenAnalyticsApi";

interface TokenDetailsPageProps extends ComponentProps<any> {}

export const TokenDetailsPage: FC<TokenDetailsPageProps> = (props) => {
  const { style } = props;
  const params = useParams<{ tokenName: string }>();
  const { tokenName } = params;

  const [tokenAnalyticsData, setTokenAnalyticsData] =
    useState<TokenAnalytics | null>(null);
  const { data, isLoading } = useTokenAnalyticsApi(tokenName!); // on details page, should have param

  useEffect(() => {
    if (data && !isLoading) {
      setTokenAnalyticsData(data.response);
    }
  }, [data, isLoading]);

  return (
    <TokenDetailsPageStyled style={{ ...style }}>
      <Head />
      <Profile />
      <BioInfo />
      <br />
      <Analytics />

      <TopHolder />

      <div className="info-holder">
        <TokenDistribution />
        <TotalHolders />
      </div>
    </TokenDetailsPageStyled>
  );
};

const TokenDetailsPageStyled = styled.div.attrs({
  className: "TokenDetailsPageStyled",
})`
  padding: 20px;
  width: 100%;
  max-width: 1535px;
  margin: auto;

  .info-holder {
    display: grid;
    grid-template-columns: 1fr 1fr;
    border: 1px solid ${COLORS.magenta};
  }

  .ant-col,
  .ant-col > div {
  }

  @media (max-width: 1180px) {
    .info-holder {
      display: block;
    }
  }
`;
