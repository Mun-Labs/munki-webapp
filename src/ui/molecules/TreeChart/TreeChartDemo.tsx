import { MockTokens } from "../../../api/MockData";
import { TypeService } from "../../../common/modules/TypeService";
import { IToken } from "../../../domain/entities/Entities";
import { ITreeChartNode } from "../../../domain/types/Types";
import { TreeChart } from "./TreeChart";

const children = TypeService.mapKeysArray<IToken, ITreeChartNode>(
  MockTokens,
  // MockTokens.slice(0, 3),
  [
    ["name", "name"],
    ["volume", "size"],
    ["logoUrl", "logoUrl"],
    ["twentyFourHourPercentage", "twentyFourHourPercentage"],
  ],
);

const data: ITreeChartNode[] = [
  //{
  //  name: "",
  //  size: 0,
  //  // children,
  //  children: [
  //  ],
  //},
  ...children,

  //{ name: "Axis", size: 24593 },
  //{ name: "CartesianAxes", size: 6703 },
  //{ name: "Axes", size: 1302 },
  //{ name: "AxisGridLine", size: 652 },
  //{ name: "AxisLabel", size: 636 },
];

export const TreeChartDemo = () => {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <TreeChart data={data}></TreeChart>
    </div>
  );
};
