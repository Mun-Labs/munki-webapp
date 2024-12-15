import { ComponentProps, FC, useCallback } from "react";
import React, { PureComponent } from "react";
import styled from "styled-components";
import { Treemap, ResponsiveContainer } from "recharts";

interface TreeChartProps extends ComponentProps<any> {}

const TreeChartStyled = styled.div.attrs({ className: "TreeChartStyled" })``;

const data = [
  {
    name: "axis",
    children: [
      { name: "Axis", size: 24593 },
      { name: "CartesianAxes", size: 6703 },
      { name: "Axes", size: 1302 },
      { name: "AxisGridLine", size: 652 },
      { name: "AxisLabel", size: 636 },
    ],
  },
];

const COLORS = [
  "#8889DD",
  "#9597E4",
  "#8DC77B",
  "#A5D297",
  "#E2CF45",
  "#F8C12D",
];

class CustomizedContent extends PureComponent {
  render() {
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
    } = this.props;

    return (
      <g>
        <rect
          x={x}
          y={y}
          width={width}
          height={height}
          style={{
            fill:
              depth < 2
                ? colors[Math.floor((index / root.children.length) * 6)]
                : "#ffffff00",
            stroke: "#fff",
            strokeWidth: 2 / (depth + 1e-10),
            strokeOpacity: 1 / (depth + 1e-10),
          }}
        />
        {true ? (
          <text
            x={x + width / 2}
            y={y + height / 2 + 7}
            textAnchor="middle"
            fill="#fff"
            fontSize={14}
          >
            {name}
          </text>
        ) : null}
      </g>
    );
  }
}

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
  const { style } = props;

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
