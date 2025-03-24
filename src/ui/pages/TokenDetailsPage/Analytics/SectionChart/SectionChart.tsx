import { Flex } from "antd";
import { ComponentProps, FC } from "react";
import styled from "styled-components";
import { Percentage } from "../../../../atoms/Percentage/Percentage";
import { LineChartDemo } from "../../../../demos/LineChartDemo";
import { BarChartDemo } from "../../../../demos/BarChartDemo";
import { COLORS } from "../../../../colors";

interface SectionChartProps extends ComponentProps<any> {}

export const SectionChart: FC<SectionChartProps> = (_props) => {
  return (
    <SectionChartStyled>
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
          <span className="cl-ex-greed">+11.34%</span> market cap vs tokens with
          a similar mindshare
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
          <span className="cl-ex-greed">+11.34%</span> market cap vs tokens with
          a similar mindshare
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
          <span className="cl-ex-greed">+19.34%</span> liquidity vs tokens with
          a similar MC
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
          <span className="cl-ex-greed">+19.34%</span> liquidity vs tokens with
          a similar MC
        </p>
      </div>
    </SectionChartStyled>
  );
};

const SectionChartStyled = styled.div.attrs({ className: "AnalyticsStyled" })`
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
`;
