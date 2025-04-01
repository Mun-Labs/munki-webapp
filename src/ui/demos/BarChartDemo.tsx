import { PureComponent } from "react";
import { BarChart, Bar, ResponsiveContainer } from "recharts";
import { COLORS } from "../colors";
import { RandomService } from "../../common/modules/RandomService";

export class BarChartDemo extends PureComponent {
  data = RandomService.generateRandomArray(100, 250, 50).map(
    (value, index) => ({
      name: index,
      value,
    }),
  );

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart width={150} height={20} data={this.data}>
          <Bar dataKey="value" fill={COLORS.green} />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
