import { Card, Flex, Typography } from "antd";
import { Col, Row } from "antd";
import { ComponentProps, FC } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import { debugStyles } from "../uiStyles";
import { FilterByTime } from "../molecules/FilterByTime/FilterByTime";
import { AnalyticsCard } from "../molecules/AnalyticsCard/AnalyticsCard";
import { AvatarWithText } from "../molecules/AvatarWithText/AvatarWithText";
import { BarChartDemo } from "../demos/BarChartDemo";
import { LineChartDemo } from "../demos/LineChartDemo";
import { ComposedChartDemo } from "../demos/ComposedChartDemo";
import { AreaChartDemo } from "../demos/AreaChartDemo";

interface TokenDetailsPageProps extends ComponentProps<any> {}

const TokenDetailsPageStyled = styled.div.attrs({
  className: "TokenDetailsPageStyled",
})`
  padding: 20px;
  width: 100%;

  .ant-col,
  .ant-col > div {
    border: ${debugStyles.border as string};
  }
`;

export const TokenDetailsPage: FC<TokenDetailsPageProps> = (props) => {
  const { style } = props;
  const params = useParams<{ tokenName: string }>();
  const { tokenName } = params;
  return (
    <TokenDetailsPageStyled style={{ ...style }}>
      <section>Back mun.analytics/{tokenName}</section>

      <br />

      <Flex justify="space-between" style={{ width: "100%" }}>
        <Flex>
          <div style={{ ...debugStyles, width: 200, height: 200 }}>img</div>
          <Flex style={{ ...debugStyles, width: 300, flexDirection: "column" }}>
            <div>{tokenName}</div>
            <Flex justify="space-between">
              <div>@Intern_AI</div>
              <div>$INTERN</div>
            </Flex>
            <div>0xhad1ashtu3drwufsht</div>
            <Flex justify="space-between">
              <div>Twitter</div>
              <div>Dexscreener</div>
            </Flex>
          </Flex>
        </Flex>
        <div style={{ ...debugStyles, width: 200, height: 200 }}>QR</div>
      </Flex>

      <br />

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
            title={<AvatarWithText style={{ padding: 10 }} />}
            extra={"..."}
            style={{ width: 400 }}
          >
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>

          <Card
            size="small"
            title={<AvatarWithText style={{ padding: 10 }} />}
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
