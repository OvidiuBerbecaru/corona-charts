import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import axios from "axios";

import ActionBar from "components/ActionBar";
import Header from "components/Header";
import ChartCard from "components/ChartCard";

export default function Home() {
  data = [
    { date: "2021-01-01", deathNew: 1 },
    { date: "2021-01-02", deathNew: 2 },
  ];
  return (
    <>
      <Header />
      <ActionBar />
      <div className={styles.chartCarsWrapper}>
        <ChartCard
          title="Deaths in the last month"
          chartType="line"
          data={data.slice(0, 30)}
        />
        <ChartCard
          title="Deaths in the last week"
          chartType="bar"
          data={data.slice(0, 7)}
        />
      </div>
    </>
  );
}

export async function getServerSideProps() {
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
}
