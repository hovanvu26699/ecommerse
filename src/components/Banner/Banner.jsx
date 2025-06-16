import React from "react";
import Button from "../Button/Button";
import styles from "./styles.module.scss";

const Banner = () => {
  const { container, content, title, desc } = styles;

  return (
    <div className={container}>
      <div className={content}>
        <h1 className={title}>XStore Marseille04 Demo</h1>
        <p className={desc}>
          Make yours celebrations even more special this years with beautiful.
        </p>

        <Button content={"Go to shop"} />
      </div>
    </div>
  );
};

export default Banner;
