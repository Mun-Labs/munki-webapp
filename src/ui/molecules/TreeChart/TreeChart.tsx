import { ComponentProps, FC, useCallback } from "react";
import styled from "styled-components";
import { Treemap, ResponsiveContainer } from "recharts";
import { ITreeChartNode } from "../../../domain/types/Types";

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

interface CustomizedContentProps {
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
  imageUrl?: string;
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
    payload,
    colors,
    rank,
    name,
    imageUrl,
  } = props;

  return (
    <>
      <g>
        <rect
          x={x}
          y={y}
          width={width}
          height={height}
          style={{
            fill:
              depth < 2
                ? colors?.[Math.floor((index / root.children?.length) * 6)]
                : "#ffffff00",
            stroke: "#fff",
            strokeWidth: 2 / (depth + 1e-10),
            strokeOpacity: 1 / (depth + 1e-10),
          }}
        />
        {true ? (
          <>
            <text
              x={x + width / 2}
              y={y + height / 2 + 7}
              textAnchor="middle"
              fill="#fff"
              fontSize={14}
            >
              {name}
            </text>
            <foreignObject style={{ position: "relative" }} x="0" y="0" width={width} height={height}>
              <div
                style={{
                  position: "absolute",
                  backgroundImage: 'url("/chillguy.jpeg")',
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                }}
              ></div>
            </foreignObject>
          </>
        ) : null}
      </g>
    </>
  );
};

//{true ? (
//  <text
//    x={x + 4}
//    y={y + 18}
//    fill="#fff"
//    fontSize={16}
//    fillOpacity={0.9}
//  >
//    {index + 1}
//  </text>
//) : null}

export const TreeChart: FC<TreeChartProps> = (props) => {
  const { style, data } = props;

  const handleClick = useCallback((args) => {
    /*prettier-ignore*/ console.log("[TreeChart.tsx,216] args: ", args);
  }, []);

  return (
    <TreeChartStyled style={{ width: "100%", height: "100%", ...style }}>
      <ResponsiveContainer width="100%" height="100%">
        <Treemap
          aspectRatio={4 / 3}
          onClick={handleClick}
          isAnimationActive={false}
          width={400}
          height={200}
          data={data}
          dataKey="size"
          stroke="#fff"
          fill="#8884d8"
          content={<CustomizedContent colors={COLORS} />}
        />
      </ResponsiveContainer>
    </TreeChartStyled>
  );
};
