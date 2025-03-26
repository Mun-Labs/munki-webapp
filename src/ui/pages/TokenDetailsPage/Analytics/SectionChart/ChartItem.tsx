import { Flex } from "antd";
import { FC } from "react";
import { Percentage } from "../../../../atoms/Percentage/Percentage";
import { LineChartDemo } from "../../../../demos/LineChartDemo";
import { Styles } from "../../../../uiStyles";
import { COLORS } from "../../../../colors";

interface LineChartSectionProps {
  children: React.ReactNode;
  title: string;
  value: string;
  percentageValue: number;
  timeFrame: string;
  description: string;
  descriptionPercentage: string;
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
          <p>{value}</p>{" "}
          <Percentage
            colors={[COLORS.green70]}
            value={percentageValue}
            suffix={<span> {timeFrame}</span>}
            $fontFamily="sans-serif"
          ></Percentage>
        </Flex>
      </div>
      <div style={{ height: 150 }}>{children}</div>
      <p className="desc">
        <span className="cl-ex-greed">{descriptionPercentage}</span>{" "}
        {description}
      </p>
    </div>
  );
};
