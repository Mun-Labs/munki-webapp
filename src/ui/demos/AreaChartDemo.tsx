import { PureComponent } from "react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { RandomService } from "../../common/modules/RandomService";
import { COLORS } from "../colors";

export class AreaChartDemo extends PureComponent {
  data = RandomService.generateRandomArray(100, 250, 50).map(
    (value, index) => ({
      name: index,
      value,
    }),
  );

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={this.data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid vertical={false} />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="value"
            stroke={COLORS.green}
            fill={COLORS.green}
          />
        </AreaChart>
      </ResponsiveContainer>
    );
  }
}
