import React from "react";
import styles from "./styles.module.scss";
import Banner from "@components/Banner/Banner";
import Header from "@components/Header/Header";
import Info from "@components/Info/Info";
import AdvanceHealing from "@components/AdvanceHealing/AdvanceHealing";
import HeadingListProduct from "@components/HeadingListProduct/HeadingListProduct";

const HomePage = () => {
  const { container } = styles;
  return (
    <div>
      <div className={container}>
        <Header />
        <Banner />
        <Info />
        <AdvanceHealing />
        <HeadingListProduct />
      </div>
    </div>
  );
};

export default HomePage;
