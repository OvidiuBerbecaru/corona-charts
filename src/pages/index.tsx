import styles from "@/styles/Home.module.css";
import axios from "axios";

import ActionBar from "components/ActionBar";
import Header from "components/Header";
import ChartCard from "components/ChartCard";
import { ChartType } from "components/ChartCard";

type HomeProps = {
  data: {
    date: string;
    newCases: number;
  }[];
};

export default function Home({ data }: HomeProps) {
  return (
    <>
      <Header />
      <ActionBar />
      <div className={styles.chartCarsWrapper}>
        <ChartCard
          title="Deaths in the last month"
          chartType={ChartType.LINE}
          data={data.slice(0, 30)}
        />
        <ChartCard
          title="Deaths in the last week"
          chartType={ChartType.BAR}
          data={data.slice(0, 7)}
        />
      </div>
    </>
  );
}

export async function getStaticProps() {
  try {
    const res = await axios.get("https://api.coronavirus.data.gov.uk/v1/data", {
      params: {
        areaType: "nation",
        areaName: "england",
        structure: {
          date: "date",
          newCases: "newCasesByPublishDate",
        },
        page: 1,
      },
    });

    return {
      props: {
        data: res.data.data,
      },
    };
  } catch (error) {
    return {
      props: {
        data: [],
      },
    };
  }
}
