import { Card, Flex, Typography } from "antd";
import { Col, Row } from "antd";
import { ComponentProps, FC } from "react";
import styled from "styled-components";
import { BarChartDemo } from "../../demos/BarChartDemo";
import { LineChartDemo } from "../../demos/LineChartDemo";
import { FilterByTime } from "../../molecules/FilterByTime/FilterByTime";
import { ComposedChartDemo } from "../../demos/ComposedChartDemo";
import { AreaChartDemo } from "../../demos/AreaChartDemo";
import { AnalyticsCard } from "../../molecules/AnalyticsCard/AnalyticsCard";
import { AvatarWithText } from "../../molecules/AvatarWithText/AvatarWithText";
import { BioInfo } from "./BioInfo/BioInfo";
import { Profile } from "./Profile/Profile";
import { Head } from "./Head/Head";
import { Analytics } from "./Analytics/Analytics";
import "./TokenDetailPage.css";
import TopHolder from "./TopHolder/TopHolder";
import TokenDistribution from "./TokenDistribution/TokenDistribution";
import { COLORS } from "../../colors";
import TotalHolders from "./TotalHolders/TotalHolders";

interface TokenDetailsPageProps extends ComponentProps<any> {}

export const TokenDetailsPage: FC<TokenDetailsPageProps> = (props) => {
  const { style } = props;
  // const params = useParams<{ tokenName: string }>();
  // const { tokenName } = params;

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
