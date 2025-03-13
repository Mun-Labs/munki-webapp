import { PureComponent } from "react";
import { LineChart, Line, ResponsiveContainer } from "recharts";
import { COLORS } from "../colors";
import { RandomService } from "../../common/modules/RandomService";

export class LineChartDemo extends PureComponent {
  private data = RandomService.generateRandomArray(100, 250, 100).map(
    (value, index) => ({
      name: index,
      value,
    }),
  );

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={this.data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <Line
            dataKey="value"
            stroke={COLORS.green}
            activeDot={{}}
            dot={<></>}
          />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
// <Tooltip />
// <Legend />
