import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Mon", tasks: 8, efficiency: 85 },
  { name: "Tue", tasks: 12, efficiency: 92 },
  { name: "Wed", tasks: 6, efficiency: 78 },
  { name: "Thu", tasks: 15, efficiency: 88 },
  { name: "Fri", tasks: 10, efficiency: 95 },
  { name: "Sat", tasks: 4, efficiency: 90 },
  { name: "Sun", tasks: 2, efficiency: 75 },
];

export default function ProductivityChart() {
  return (
    <Card className="bg-gradient-card shadow-card">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Weekly Productivity</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
            <XAxis 
              dataKey="name" 
              axisLine={false}
              tickLine={false}
              className="text-xs text-muted-foreground"
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              className="text-xs text-muted-foreground"
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "0.5rem",
                boxShadow: "var(--shadow-elevated)",
              }}
            />
            <Line
              type="monotone"
              dataKey="tasks"
              stroke="hsl(var(--chart-primary))"
              strokeWidth={2}
              dot={{ fill: "hsl(var(--chart-primary))", strokeWidth: 2 }}
            />
            <Line
              type="monotone"
              dataKey="efficiency"
              stroke="hsl(var(--chart-tertiary))"
              strokeWidth={2}
              dot={{ fill: "hsl(var(--chart-tertiary))", strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}