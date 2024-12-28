import { Card, Flex, Typography } from "antd";
import { Col, Row } from "antd";
import { ComponentProps, FC, useMemo } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import { debugStyles, Styles } from "../uiStyles";
import { FilterByTime } from "../molecules/FilterByTime/FilterByTime";
import { AnalyticsCard } from "../molecules/AnalyticsCard/AnalyticsCard";
import { AvatarWithText } from "../molecules/AvatarWithText/AvatarWithText";
import { BarChartDemo } from "../demos/BarChartDemo";
import { LineChartDemo } from "../demos/LineChartDemo";
import { ComposedChartDemo } from "../demos/ComposedChartDemo";
import { AreaChartDemo } from "../demos/AreaChartDemo";
import { MockTokens } from "../../api/MockData";
import { IToken } from "../../domain/entities/Entities";
import { COLORS, UI_COLORS } from "../colors";
import { Address } from "../atoms/Address/Address";
import { Chip } from "../atoms/Chip/Chip";

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
  const params = useParams<{ address: string }>();
  const { address } = params;

  const token = useMemo((): IToken | undefined => {
    const target = MockTokens.find((token) => token.address === address);
    return target;
  }, [address]);

  if (!token) return <>N/A Token</>;

  return (
    <TokenDetailsPageStyled style={{ ...style }}>
      <section>Back mun.analytics/{token.name}</section>

      <br />

      <Flex justify="space-between" style={{ width: "100%" }}>
        <Flex>
          <img
            src={token.logoUrl}
            style={{ ...debugStyles, ...Styles.backgroundImage }}
            width={300}
            height={300}
          />
          <Flex
            style={{
              ...debugStyles,
              width: 500,
              flexDirection: "column",
              padding: "25px 37px",
            }}
          >
            <h1 style={{ ...Styles.h1, fontSize: 48, color: COLORS.yellow }}>
              {token.name}
            </h1>
            <Flex justify="space-between" style={{ marginBottom: 18 }}>
              <div style={{ color: UI_COLORS.secondaryText, ...Styles.h1 }}>
                @{token.name}
              </div>
              <div
                style={{
                  ...Styles.h1,
                  color: COLORS.green70,
                  backgroundColor: COLORS.green23,
                  padding: "0 10px",
                  borderRadius: 13,
                }}
              >
                {token.name}
              </div>
            </Flex>
            <Address
              address={token.address}
              chain="solana"
              style={{
                marginBottom: 18,
              }}
            />
            <Flex justify="space-between">
              <Chip value="Twitter" style={{...Styles.h2}} />
              <Chip value="Dexscreener" style={{...Styles.h2}}/>
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
