import { Flex } from "antd";
import { CSSProperties, FC, ReactNode } from "react";
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
  styles?: {
    children?: CSSProperties;
  };
  descriptionPercentage?: number;
}

export const ChartItem: FC<LineChartSectionProps> = ({
  title,
  value,
  percentageValue,
  timeFrame,
  // description,
  // descriptionPercentage,
  children,
  styles,
}) => {
  return (
    <div className="wrap-chart" style={{ height: 220 }}>
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
        <Flex gap={4} align="center">
          <div style={{ ...Styles.h2 }}>{value}</div>{" "}
          <Percentage
            colors={[COLORS.green]}
            value={percentageValue}
            suffix={<span> {timeFrame}</span>}
            style={{ marginLeft: 4 }}
            $fontFamily="sans-serif"
          ></Percentage>
        </Flex>
      </div>
      <div style={{ height: styles?.children?.height ?? 150 }}>{children}</div>
      {/* <div className="desc">
        <span className="cl-ex-greed">
          <Percentage
            value={descriptionPercentage}
            style={{ display: "inline" }}
            plusMinus
            colors={[COLORS.green55]}
          />
        </span>{" "}
        {description}
      </div> */}
    </div>
  );
};
