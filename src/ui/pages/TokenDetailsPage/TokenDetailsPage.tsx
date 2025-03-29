import { ComponentProps, FC } from "react";
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
import { TokenAnalyticsProvider } from "./TokenAnalyticsContext";

interface TokenDetailsPageProps extends ComponentProps<any> {}

export const TokenDetailsPage: FC<TokenDetailsPageProps> = (props) => {
  const { style } = props;
  const params = useParams<{ tokenName: string }>();
  const { tokenName } = params;

  return (
    <TokenAnalyticsProvider tokenName={tokenName!}>
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
    </TokenAnalyticsProvider>
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
