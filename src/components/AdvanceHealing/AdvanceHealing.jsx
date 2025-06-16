import React from "react";
import styles from "./styles.module.scss";
import Layout from "@components/Layout/Layout";

const AdvanceHealing = () => {
  const { container, headLine, lineText, title } = styles;
  return (
    <Layout>
      <div className={container}>
        <p>DON'T MISS SUPER OFFERS</p>
        <div className={lineText}>
          <div className={headLine}></div>
          <p className={title}>Our best products</p>
          <div className={headLine}></div>
        </div>
      </div>
    </Layout>
  );
};

export default AdvanceHealing;
