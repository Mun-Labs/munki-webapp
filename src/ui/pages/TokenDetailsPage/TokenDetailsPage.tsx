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

interface TokenDetailsPageProps extends ComponentProps<any> {}

const TokenDetailsPageStyled = styled.div.attrs({
  className: "TokenDetailsPageStyled",
})`
  padding: 20px;
  width: 100%;
  max-width: 1535px;
  margin: auto;

  .ant-col,
  .ant-col > div {
  }
`;

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
      <section>
        <FilterByTime />
        <br />
        <Row>
          <Col span={6}>
            <div style={{ height: 150 }}>
              <LineChartDemo />
            </div>
            <div style={{ height: 150 }}>
              <LineChartDemo />
            </div>
          </Col>
          <Col span={6}>
            <div style={{ height: 150 }}>
              <BarChartDemo />
            </div>
            <div style={{ height: 150 }}>
              <BarChartDemo />
            </div>
          </Col>
          <Col span={12}>
            <div style={{ height: 50 }}>First</div>
            <div style={{ height: 250 }}>
              <ComposedChartDemo />
            </div>
          </Col>
        </Row>
      </section>

      <br />

      <section>
        <Typography.Title>Analytics</Typography.Title>
        <Flex style={{ height: 400 }}>
          <AnalyticsCard
            label="Reach"
            bottom={"bottom 1 "}
            style={{ flexGrow: 1 }}
          >
            <AreaChartDemo />
          </AnalyticsCard>
          <AnalyticsCard
            label="Engagement"
            bottom={"bottom 2"}
            style={{ flexGrow: 1 }}
          >
            <AreaChartDemo />
          </AnalyticsCard>
          <AnalyticsCard
            label="Followers"
            bottom={"bottom 3"}
            style={{ flexGrow: 1 }}
          >
            <AreaChartDemo />
          </AnalyticsCard>
        </Flex>
      </section>

      <br />

      <section>
        <Typography.Title>Top tweets</Typography.Title>
        <Flex gap={32}>
          <Card
            size="small"
            title={
              <AvatarWithText style={{ padding: 10 }} name={""} symbol={""} />
            }
            extra={"..."}
            style={{ width: 400 }}
          >
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>

          <Card
            size="small"
            title={
              <AvatarWithText style={{ padding: 10 }} name={""} symbol={""} />
            }
            extra={"..."}
            style={{ width: 400 }}
          >
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </Flex>
      </section>
    </TokenDetailsPageStyled>
  );
};
