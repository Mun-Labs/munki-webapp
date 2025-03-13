import { Card, Flex, Slider, SliderSingleProps, Typography } from "antd";
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
import { BioInfo } from "./BioInfo";
import { Profile } from "./Profile";
import { Head } from "./Head";
import { COLORS } from "../../colors";
import { Percentage } from "../../atoms/Percentage/Percentage";
import "./TokenDetailPage.css";
import FearAndGreedyChart from "../../organisms/FearAndGreedyChart";

const marks: SliderSingleProps["marks"] = {
  0: "0",
  25: "25",
  50: "50",
  75: "75",
  100: "100",
};

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

      <AnalyticsStyled>
        <h3 className="title">Analytics</h3>
        <div className="section-chart">
          <div className="wrap-chart">
            <div style={{ marginBottom: "8px" }}>
              <h4>Market Cap</h4>
              <Flex gap={4}>
                <p>$439,41M</p>{" "}
                <span>
                  <Percentage value={10}></Percentage>
                </span>
                <span>7D</span>
              </Flex>
            </div>
            <div style={{ height: 150 }}>
              <LineChartDemo />
            </div>
            <p className="desc">
              <span className="cl-ex-greed">+11.34%</span> market cap vs tokens
              with a similar mindshare
            </p>
          </div>

          <div className="wrap-chart">
            <div style={{ marginBottom: "8px" }}>
              <h4>Market Cap</h4>
              <Flex gap={4}>
                <p>$439,41M</p>{" "}
                <span>
                  <Percentage value={10}></Percentage>
                </span>
                <span>7D</span>
              </Flex>
            </div>
            <div style={{ height: 150 }}>
              <LineChartDemo />
            </div>
            <p className="desc">
              <span className="cl-ex-greed">+11.34%</span> market cap vs tokens
              with a similar mindshare
            </p>
          </div>

          <div className="wrap-chart">
            <div style={{ marginBottom: "8px" }}>
              <h4>Market Cap</h4>
              <Flex gap={4}>
                <p>$439,41M</p>{" "}
                <span>
                  <Percentage value={10}></Percentage>
                </span>
                <span>7D</span>
              </Flex>
            </div>
            <div style={{ height: 150 }}>
              <BarChartDemo />
            </div>
            <p className="desc">
              <span className="cl-ex-greed">+19.34%</span> liquidity vs tokens
              with a similar MC
            </p>
          </div>

          <div className="wrap-chart">
            <div style={{ marginBottom: "8px" }}>
              <h4>Market Cap</h4>
              <Flex gap={4}>
                <p>$439,41M</p>{" "}
                <span>
                  <Percentage value={10}></Percentage>
                </span>
                <span>7D</span>
              </Flex>
            </div>
            <div style={{ height: 150 }}>
              <BarChartDemo />
            </div>
            <p className="desc">
              <span className="cl-ex-greed">+19.34%</span> liquidity vs tokens
              with a similar MC
            </p>
          </div>
        </div>

        <div className="section-score">
          <div className="wrap-score">
            <h3>Mun score</h3>

            <h4
              style={{
                marginTop: "32px",
                color: COLORS.white60,
                fontSize: "34px",
              }}
            >
              Level 7: Alpha
            </h4>
            <h4
              style={{
                color: COLORS.chlorophyll_green,
                fontSize: "78px",
              }}
            >
              960 PTS
            </h4>

            <div style={{ width: "98%" }}>
              <Slider marks={marks} />
            </div>
          </div>
          <div className="wrap-score">
            <h3>Risk score</h3>

            <div
              style={{
                marginTop: "0px",
                transform: "scale(0.8)",
              }}
            >
              <FearAndGreedyChart isShowNumber={false} value={90} />
            </div>
            <h4>Safe</h4>
            <h4>10.96%</h4>
          </div>
          <div className="wrap-score">
            <h3>Top followers</h3>
          </div>
        </div>
      </AnalyticsStyled>

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

const AnalyticsStyled = styled.div.attrs({ className: "AnalyticsStyled" })`
  .title {
    font-size: 38px;
    margin-bottom: 12px;
    margin-top: 24px;
  }

  .section-chart {
    border: 1px solid ${COLORS.magenta};
    border-top-right-radius: 12px;
    border-top-left-radius: 12px;
    border-bottom: none;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;

    & > div:last-child {
      border-right: none;
    }
    & > div {
      padding: 14px;
      border-right: 1px solid ${COLORS.magenta};
    }

    .desc {
      padding-top: 12px;
      font-size: 18px;
      color: ${COLORS.white60};
      text-align: center;
      font-family: Arial, Helvetica, sans-serif;
      span {
        font-family: Arial, Helvetica, sans-serif;
      }
    }

    @media (max-width: 900px) {
      grid-template-columns: 1fr 1fr;

      & > div:nth-child(2) {
        border-right: none;
      }

      & > div {
        border-bottom: 1px solid ${COLORS.magenta};
      }
    }

    @media (max-width: 545px) {
      grid-template-columns: 1fr;

      & > div {
        border-right: none;
      }

      & > div {
        border-bottom: 1px solid ${COLORS.magenta};
      }
    }
  }

  .section-score {
    border: 1px solid ${COLORS.magenta};
    display: grid;
    grid-template-columns: 1.2fr 0.7fr 0.8fr;

    & > div:last-child {
      border-right: none;
    }
    & > div {
      padding: 24px;
      border-right: 1px solid ${COLORS.magenta};
    }

    .wrap-score {
      padding: 12px;
      h3 {
        font-size: 28px;
      }
    }
  }
`;
