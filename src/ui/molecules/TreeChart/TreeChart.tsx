import { ComponentProps, FC, useCallback, useMemo } from "react";
import styled from "styled-components";
import { Treemap, ResponsiveContainer } from "recharts";
import { ITreeChartNode } from "../../../domain/types/Types";
import { TokenImageCard } from "../../organisms/TokenImageCard/TokenImageCard";

interface TreeChartProps extends ComponentProps<any> {
  data: ITreeChartNode[];
}

const TreeChartStyled = styled.div.attrs({ className: "TreeChartStyled" })``;

const COLORS = [
  "#8889DD",
  "#9597E4",
  "#8DC77B",
  "#A5D297",
  "#E2CF45",
  "#F8C12D",
];

export interface CustomizedContentProps {
  // Define your prop types here
  // For example:
  root?: any;
  depth?: number;
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  index?: number;
  payload?: any;
  colors?: string[];
  rank?: number;
  value?: string;
  name?: string;
  logoUrl?: string;
  twentyFourHourPercentage?: number;
}

const CustomizedContent: React.FC<CustomizedContentProps> = (
  props: CustomizedContentProps,
) => {
  const {
    root,
    depth,
    x,
    y,
    width,
    height,
    index,
    colors,
    name,
    logoUrl,
    twentyFourHourPercentage,
  } = props;

  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        style={{
          fill:
            depth ?? 0 < 2
              ? colors?.[Math.floor((index ?? 0 / root.children?.length) * 6)]
              : "#ffffff00",
          stroke: "#fff",
          strokeWidth: 2,
          strokeOpacity: 1,
        }}
      />
      {true ? (
        <>
          <foreignObject
            style={{ position: "relative" }}
            x={x}
            y={y}
            width={width}
            height={height}
          >
            <TokenImageCard
              token={{
                name,
                twentyFourHourPercentage,
                logoUrl,
              }}
              width={width}
              height={height}
              addOverlay
            />
          </foreignObject>
        </>
      ) : null}
    </g>
  );
};

export const TreeChart: FC<TreeChartProps> = (props) => {
  const { style, data } = props;

  const handleClick = useCallback((args: CustomizedContentProps) => {
    /*prettier-ignore*/ console.log("[TreeChart.tsx,216] args: ", args);
  }, []);

  const dataSortedBySize = useMemo(() => {
    return data.sort((a, b) => b.size - a.size);
  }, [data]);

  return (
    <TreeChartStyled style={{ width: "100%", height: "100%", ...style }}>
      <ResponsiveContainer width="100%" height="100%">
        <Treemap
          aspectRatio={4 / 3}
          onClick={handleClick as any}
          isAnimationActive={false}
          width={400}
          height={200}
          data={dataSortedBySize.slice(0, 10)}
          dataKey="size"
          stroke="#fff"
          fill="#8884d8"
          content={<CustomizedContent colors={COLORS} />}
        />
      </ResponsiveContainer>
    </TreeChartStyled>
  );
};
