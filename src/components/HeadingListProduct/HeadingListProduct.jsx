import React from "react";
import CountdownTimer from "@components/CountdownTimer/CountdownTimer";
import Layout from "@components/Layout/Layout";
import styles from "./styles.module.scss";
import CountdownTimeBanner from "../CountdownTimeBanner/CountdownTimeBanner";

const HeadingListProduct = () => {
  const targetDate = "2025-12-30T00:00:00";
  const { container, containerItem } = styles;
  return (
    <Layout>
      <div className={container}>
        <CountdownTimeBanner />
        <div className={containerItem}>
          <div>1</div>
          <div>2</div>
        </div>
      </div>
    </Layout>
  );
};

export default HeadingListProduct;
