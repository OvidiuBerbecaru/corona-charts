import styles from "./chartCard.module.css";
import { Card } from "antd";
import { LineCustomChart, BarCustomChart } from "components/Charts";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export type ChartType = "line" | "bar";

type ChartCardProps = {
  title: string;
  data?: any;
  chartType: ChartType;
};

const renderChart = (chartType: ChartType, data: any) => {
  switch (chartType) {
    case "line":
      return <LineCustomChart data={data} />;
    default:
      return <BarCustomChart data={data} />;
  }
};

const ChartCard = ({ title, data, chartType }: ChartCardProps) => {
  const formattedData = data.map((item: any) => ({
    date: item.date,
    deathNew: item.deathNew,
  }));

  return (
    <Card title={title} className={styles.card}>
      <div className={styles.bodyContainer}>
        {data && renderChart(chartType, formattedData)}
      </div>
    </Card>
  );
};

export default ChartCard;
