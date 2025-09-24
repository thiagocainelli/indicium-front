import { Card } from "antd";
import dayjs from "dayjs";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RTooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

type SragChartProps = {
  data: SragChartDataDto[];
};

export function SragChart({ data }: SragChartProps) {
  const normalized = data.map((d) => ({
    ...d,
    dateLabel: d.date ? dayjs(d.date).format("DD/MM/YYYY") : "",
  }));

  return (
    <Card className="themed-card">
      <div style={{ width: "100%", height: 360 }}>
        <ResponsiveContainer>
          <LineChart
            data={normalized}
            margin={{ top: 10, right: 20, left: 0, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="dateLabel" minTickGap={20} />
            <YAxis />
            <RTooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="cases"
              name="Casos"
              stroke="var(--color-primary)"
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="deaths"
              name="Óbitos"
              stroke="var(--color-secondary)"
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="icuOccupancy"
              name="UTI"
              stroke="var(--color-tertiary)"
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
