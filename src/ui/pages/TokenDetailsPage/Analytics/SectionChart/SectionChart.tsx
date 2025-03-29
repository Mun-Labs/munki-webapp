import { ComponentProps, FC } from "react";
import styled from "styled-components";
import { COLORS } from "../../../../colors";
import { ChartItem } from "./ChartItem";
import { LineChartDemo } from "../../../../demos/LineChartDemo";
import { BarChartDemo } from "../../../../demos/BarChartDemo";
import { Currency } from "../../../../atoms/Currency/Currency";
import { useTokenAnalyticsStore } from "../../../../../store/tokenAnalytics/useTokenAnalytics";

interface SectionChartProps extends ComponentProps<any> {}

export const SectionChart: FC<SectionChartProps> = (_props) => {
  const { data: tokenAnalyticsData } = useTokenAnalyticsStore();

  return (
    <SectionChartStyled>
      <ChartItem
        title="Market Cap"
        timeFrame="7D"
        description="market cap vs tokens with a similar mindshare"
        value={<Currency value={tokenAnalyticsData?.marketCap} />}
        percentageValue={tokenAnalyticsData?.marketCapChange7d ?? 0}
        descriptionPercentage={tokenAnalyticsData?.marketCapChange7d ?? 0}
      >
        <LineChartDemo />
      </ChartItem>

      <ChartItem
        title="24h Volume"
        timeFrame="7D"
        description="volume vs tokens with a similar mindshare"
        value={<Currency value={tokenAnalyticsData?.volume24h} />}
        percentageValue={tokenAnalyticsData?.volume24hChange7d || 0}
        descriptionPercentage={tokenAnalyticsData?.volume24hChange7d || 0}
      >
        <LineChartDemo />
      </ChartItem>

      <ChartItem
        title="Liquidity"
        timeFrame="7D"
        description="liquidity vs tokens with a similar MC"
        value={<Currency value={tokenAnalyticsData?.liquidity} />}
        percentageValue={tokenAnalyticsData?.liquidityChange || 0}
        descriptionPercentage={tokenAnalyticsData?.liquidityChange || 0}
      >
        <BarChartDemo />
      </ChartItem>

      <ChartItem
        title="Holders"
        timeFrame="7D"
        description="holders vs tokens with a similar MC"
        value={<Currency value={tokenAnalyticsData?.holders} />}
        percentageValue={tokenAnalyticsData?.holdersChange7d || 0}
        descriptionPercentage={tokenAnalyticsData?.holdersChange7d || 0}
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
