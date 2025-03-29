import styled from "styled-components";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { COLORS } from "../../../../../colors";
import { NumbersService } from "../../../../../../common/modules/numbers";
import { Percentage } from "../../../../../atoms/Percentage/Percentage";
import { FollowersData } from "../../../../../../api/apiTypes";
import { unixToDate } from "../../../../../../common/modules/dateAndTime";
import { useTokenAnalyticsStore } from "../../../../../../store/tokenAnalytics/useTokenAnalytics";

// const data = [
//   { date: "1/23/25", mentions: 1000, smartMentions: 400 },
//   { date: "1/23/25", mentions: 10000, smartMentions: 400 },
//   { date: "1/23/25", mentions: 20000, smartMentions: 400 },
//   { date: "1/24/25", mentions: 5000, smartMentions: 2500 },
//   { date: "1/25/25", mentions: 20000, smartMentions: 8000 },
//   { date: "1/26/25", mentions: 30000, smartMentions: 12000 },
//   { date: "1/27/25", mentions: 47000, smartMentions: 14320 },
// ];

const Follower = () => {
  const { data: tokenAnalyticsData } = useTokenAnalyticsStore();
  const followerNum = NumbersService.numberToNumberString(
    tokenAnalyticsData?.followers?.followerNumber,
  );
  const smartNum = NumbersService.numberToNumberString(
    tokenAnalyticsData?.followers?.smarts,
  );

  const followers = tokenAnalyticsData?.followers ?? ({} as FollowersData);
  const followerHistoryWithFormattedDate =
    followers.followerNumbersHistorical?.map((item) => ({
      ...item,
      time: unixToDate(item.time, "short"),
    }));

  const calcYDomain = (data: any[] = []) => {
    const maxValue = Math.max(...data.map((item) => item.value));
    const minValue = Math.min(...data.map((item) => item.value));
    const range = maxValue - minValue;
    const padding = range * 0.1; // 10% padding
    return [minValue - padding, maxValue + padding];
  };
  const yDomain = calcYDomain(followerHistoryWithFormattedDate);

  console.log({followerHistoryWithFormattedDate})

  return (
    <ChartContainer>
      <Title>Followers</Title>
      <Metrics>
        <Metrics>
          <MetricItem>
            <MetricTitle className="font-normal">Followers</MetricTitle>
            <MetricValue>
              {followerNum}{" "}
              <Percentage
                value={followers.followerNumberChange7d}
                suffix="7D"
              />
            </MetricValue>
          </MetricItem>
        </Metrics>
        <MetricItem>
          <MetricTitle className="font-normal">Smart</MetricTitle>
          <MetricValue>
            {smartNum} <Percentage value={followers.smartsChange} suffix="7D" />
          </MetricValue>
        </MetricItem>
      </Metrics>
      <ResponsiveContainer
        width="105%"
        height={300}
        style={{ marginLeft: -35 }}
      >
        <AreaChart data={followerHistoryWithFormattedDate}>
          <defs>
            <linearGradient id="colorMentions" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#cd327f" stopOpacity={1} />
              <stop offset="100%" stopColor="#cd327f" stopOpacity={0.1} />
            </linearGradient>
          </defs>
          {/* <CartesianGrid strokeDasharray="3 3" stroke="#333" /> */}
          <XAxis
            minTickGap={20}
            stroke="#84124d"
            dataKey="time"
            tick={{ fill: "#fff" }}
          />
          <YAxis
            tick={{ fill: "transparent" }}
            stroke="transparent"
            domain={yDomain}
          />
          <Tooltip content={<CustomTooltip />} />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#ed1c84"
            strokeWidth={3}
            fillOpacity={1}
            fill="url(#colorMentions)"
          />
          {/* another test Area showing */}
          {/* <Area
            type="monotone"
            dataKey="smartMentions"
            stroke="#00ff00"
            fill="#ccffcc"
            fillOpacity={0.3}
          /> */}
        </AreaChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};

export default Follower;

// Custom Tooltip (same as your original)
const CustomTooltip = ({ active, payload }: any) => {
  const data = payload[0]?.payload;

  if (active && payload && payload.length) {
    return (
      <TooltipContainer>
        <p className="text-sm font-bold font-normal">Date: {data.time}</p>
        <p className="font-normal">Mentions: {data?.value}</p>
        {/* <p className="font-normal">Smart Mentions: {data?.smartMentions}</p> */}
      </TooltipContainer>
    );
  }
  return null;
};

// Styled components
const ChartContainer = styled.div`
  .font-normal {
    font-family: Arial, Helvetica, sans-serif;
  }

  padding: 20px;
  background-color: #000;
  color: #fff;
  border-radius: 8px;
  width: 100%;
  .recharts-curve.recharts-tooltip-cursor {
    display: none !important;
  }
`;

const Title = styled.h2`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Metrics = styled.div`
  display: flex;
  gap: 32px;
  margin-bottom: 20px;
`;

const MetricTitle = styled.p`
  font-size: 21px;
  color: ${COLORS.grey50};
`;

const MetricItem = styled.div`
  font-size: 16px;
`;

const MetricValue = styled.p`
  margin: 0;
  font-size: 28px;
`;

const MetricChange = styled.span`
  color: #00ff00;
  margin: 0;
  font-weight: bold;
  font-size: 20px;
`;

const TooltipContainer = styled.div`
  background-color: #000;
  padding: 8px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  color: #fff;
  font-size: 12px;

  .font-normal {
    font-family: Arial, Helvetica, sans-serif;
  }

  p {
    margin: 2px 0;
  }
`;
