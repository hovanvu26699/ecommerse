import React from "react";
import styles from "./styles.module.scss";
import Layout from "@components/Layout/Layout";
import { dataInfo } from "./constants.js";
import InfoCard from "./InfoCard";

const Info = () => {
  const { container } = styles;
  return (
    <Layout>
      <div className={container}>
        {dataInfo.map((item) => {
          return (
            <InfoCard title={item.title} desc={item.desc} src={item.src} />
          );
        })}
      </div>
    </Layout>
  );
};

export default Info;
