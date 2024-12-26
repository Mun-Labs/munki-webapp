import { ITreeChartNode } from "../../../domain/types/Types";
import { TreeChart } from "./TreeChart";

const data: ITreeChartNode[] = [
  {
    name: "",
    size: 0,
    children: [
      { name: "Axis", size: 24593 },
      { name: "CartesianAxes", size: 6703 },
      { name: "Axes", size: 1302 },
      { name: "AxisGridLine", size: 652 },
      { name: "AxisLabel", size: 636 },
    ],
  },
];

export const TreeChartDemo = () => {
  return (
    <div style={{ width: 550, height: 570 }}>
      <TreeChart data={data}></TreeChart>
    </div>
  );
};
