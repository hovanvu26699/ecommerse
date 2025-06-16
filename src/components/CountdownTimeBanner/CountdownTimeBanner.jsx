import React from "react";
import style from "./styles.module.scss";
import Button from "@components/Button/Button";
import CountdownTimer from "@components/CountdownTimer/CountdownTimer";

const CountdownTimeBanner = () => {
  const { container, containerTimer, countdown } = style;
  const targetDate = "2025-12-31T00:00:00";

  return (
    <div className={container}>
      <div className={containerTimer}>
        <div className={countdown}>
          <CountdownTimer targetDate={targetDate} />
        </div>
        <h2>The Classics Make A Comeback</h2>
        <Button content="Buy now" />
      </div>
    </div>
  );
};

export default CountdownTimeBanner;
