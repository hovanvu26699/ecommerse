import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";

const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimer());
  const { box, title } = styles;

  function calculateTimer() {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        Days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        Hours: Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        Mins: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        Secs: Math.floor((difference % (1000 * 60)) / 1000),
      };
    }
    return timeLeft;
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimer());
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  });

  const formatNumber = (number) => {
    return String(number).padStart(2, "0");
  };

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (timeLeft[interval] !== undefined) {
      timerComponents.push(
        <span key={interval} className={box}>
          {formatNumber(timeLeft[interval])}{" "}
          <span className={title}>{interval}</span>
        </span>
      );
    }
  });

  return timerComponents;
};

export default CountdownTimer;
