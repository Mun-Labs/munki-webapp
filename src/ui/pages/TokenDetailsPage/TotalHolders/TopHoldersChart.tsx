import { useEffect } from "react";
import { Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";
import styled from "styled-components";

const data = [
  { date: "1/21/25", holders: 100.15 },
  { date: "1/22/25", holders: 273.15 },
  { date: "1/23/25", holders: 150 },
  { date: "1/24/25", holders: 273.15 },
  { date: "1/25/25", holders: 100.15 },
  { date: "1/26/25", holders: 400 },
  { date: "1/27/25", holders: 400 },
  { date: "1/28/25", holders: 400 },
];

const TotalHoldersChart = () => {
  return (
    <WrapChartStyled>
      <LineChart
        width={600}
        height={180}
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <XAxis dataKey="date" fontSize={10} tickSize={10} strokeOpacity={1} />
        <YAxis
          allowDecimals
          scale={"log"}
          fontSize={10}
          strokeOpacity={0}
          domain={[100, 500]}
        />
        <Tooltip content={<CustomTooltip />} />
        <Line type="monotone" dataKey="holders" stroke="#00FF00" dot={false} />
        {/* <Line
            type="monotone"
            dataKey="value2"
            stroke="#0000FF"
            name="193.15K"
            dot={false}
          /> */}
      </LineChart>
    </WrapChartStyled>
  );
};

export default TotalHoldersChart;

// Custom Tooltip (same as your original)
const CustomTooltip = ({ active, payload }: any) => {
  const data = payload[0]?.payload;

  if (active && payload && payload.length) {
    return (
      <TooltipContainer>
        <p className="text-sm font-bold font-normal">Date: {data?.date}</p>
        <p className="font-normal">Mentions: {data?.holders}k</p>
      </TooltipContainer>
    );
  }
  return null;
};

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

const WrapChartStyled = styled.div.attrs({ className: "WrapChartStyled" })`
  width: 100%;
  display: flex;

  .recharts-wrapper {
    width: 100% !important;
  }
`;
