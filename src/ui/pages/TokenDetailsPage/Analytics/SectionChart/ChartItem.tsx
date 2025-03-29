import { Flex } from "antd";
import { FC, ReactNode } from "react";
import { Percentage } from "../../../../atoms/Percentage/Percentage";
import { LineChartDemo } from "../../../../demos/LineChartDemo";
import { Styles } from "../../../../uiStyles";
import { COLORS } from "../../../../colors";

interface LineChartSectionProps {
  children: ReactNode;
  title: string;
  value: ReactNode;
  percentageValue: number;
  timeFrame: string;
  description: string;
  descriptionPercentage: number;
}

export const ChartItem: FC<LineChartSectionProps> = ({
  title,
  value,
  percentageValue,
  timeFrame,
  description,
  descriptionPercentage,
  children,
}) => {
  return (
    <div className="wrap-chart">
      <div style={{ marginBottom: "8px" }}>
        <h4
          style={{
            ...Styles.fontSansSerif,
            color: COLORS.white80,
            fontWeight: 400,
          }}
        >
          {title}
        </h4>
        <Flex gap={4}>
          <div>{value}</div>{" "}
          <Percentage
            colors={[COLORS.green70]}
            value={percentageValue}
            suffix={<span> {timeFrame}</span>}
            $fontFamily="sans-serif"
          ></Percentage>
        </Flex>
      </div>
      <div style={{ height: 150 }}>{children}</div>
      <div className="desc">
        <span className="cl-ex-greed">
          <Percentage
            value={descriptionPercentage}
            style={{ display: "inline" }}
            plusMinus
            colors={[COLORS.green70]}
          />
        </span>{" "}
        {description}
      </div>
    </div>
  );
};
