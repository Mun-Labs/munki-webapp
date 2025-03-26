import { ComponentProps, FC } from "react";
import styled from "styled-components";
import { COLORS } from "../../../../colors";
import { ChartItem } from "./ChartItem";
import { LineChartDemo } from "../../../../demos/LineChartDemo";
import { BarChartDemo } from "../../../../demos/BarChartDemo";

interface SectionChartProps extends ComponentProps<any> {}

export const SectionChart: FC<SectionChartProps> = (_props) => {
  return (
    <SectionChartStyled>
      <ChartItem
        title="Market Cap"
        value="$439,41M"
        percentageValue={10}
        timeFrame="7D"
        description="market cap vs tokens with a similar mindshare"
        descriptionPercentage="+11.34%"
      >
        <LineChartDemo />
      </ChartItem>

      <ChartItem
        title="24h Volume"
        value="$439,41M"
        percentageValue={10}
        timeFrame="7D"
        description="volume vs tokens with a similar mindshare"
        descriptionPercentage="+11.34%"
      >
        <LineChartDemo />
      </ChartItem>

      <ChartItem
        title="Liquidity"
        value="$439,41M"
        percentageValue={10}
        timeFrame="7D"
        description="liquidity vs tokens with a similar MC"
        descriptionPercentage="+19.34%"
      >
        <BarChartDemo />
      </ChartItem>

      <ChartItem
        title="Holders"
        value="$439,41M"
        percentageValue={10}
        timeFrame="7D"
        description="holders vs tokens with a similar MC"
        descriptionPercentage="+19.34%"
      >
        <BarChartDemo />
      </ChartItem>
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
