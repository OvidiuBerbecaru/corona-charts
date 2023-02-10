import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export const LineCustomChart = ({ data }: any) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={500}
        height={500}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <XAxis dataKey="date" />
        <YAxis dataKey="deathNew" />
        <Tooltip />
        <Line type="monotone" dataKey="deathNew" stroke="darkgreen" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export const BarCustomChart = ({ data }: any) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={500}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <XAxis dataKey="date" />
        <YAxis dataKey="deathNew" />
        <Tooltip />
        <Bar dataKey="deathNew" fill="darkgreen" />
      </BarChart>
    </ResponsiveContainer>
  );
};
