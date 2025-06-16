import React from "react";
import styles from "./styles.module.scss";
import TruckIcon from "@icons/svgs/truckIcon.svg";
import BoxIcon from "@icons/svgs/boxIcon.svg";
import ChatIcon from "@icons/svgs/chatIcon.svg";
import CardIcon from "@icons/svgs/creditCardIcon.svg";

const InfoCard = (props) => {
  const { containerCard, containerContent, title, desc } = styles;
  const item = props;
  const src = item.src;

  const handleRenderIcon = (src) => {
    switch (src) {
      case "TruckIcon":
        return TruckIcon;
      case "BoxIcon":
        return BoxIcon;
      case "ChatIcon":
        return ChatIcon;
      case "CardIcon":
        return CardIcon;
      default:
        break;
    }
  };

  return (
    <div className={containerCard}>
      <div>
        <img src={handleRenderIcon(src)} width={35} height={36} alt="icon" />
      </div>
      <div className={containerContent}>
        <div className={title}>{item.title}</div>
        <div className={desc}>{item.desc}</div>
      </div>
    </div>
  );
};

export default InfoCard;
