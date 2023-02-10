import { Card } from "antd";
import Image from "next/image";
import { MessageOutlined } from "@ant-design/icons";

import styles from "./chartCard.module.css";
import { LineCustomChart, BarCustomChart } from "components/Charts";
import ProfileKobe from "public/profile-kobe.png";

export enum ChartType {
  LINE = "line",
  BAR = "bar",
}

type ChartCardProps = {
  title: string;
  data?: any;
  chartType: ChartType;
};

const renderChart = (chartType: ChartType, data: any) => {
  switch (chartType) {
    case ChartType.LINE:
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
      <div className={styles.separator} />
      <div className={styles.footer}>
        <Image
          src={ProfileKobe}
          alt="Profile Kobe"
          width={40}
          height={40}
          className={styles.profileImage}
        />
        <div className={styles.footerActionWrapper}>
          <p className={styles.messageCount}>3</p>
          <MessageOutlined className={styles.messageIcon} />
        </div>
      </div>
    </Card>
  );
};

export default ChartCard;
