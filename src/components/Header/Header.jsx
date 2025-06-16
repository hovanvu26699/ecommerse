import React from "react";
import Boxicon from "./BoxIcon/BoxIcon";
import Menu from "./Menu/Menu";
import { dataBoxIcon, dataMenu } from "./constants.js";
import styles from "./styles.module.scss";
import logo from "@images/logo.png";
import reloadIcon from "@icons/svgs/reloadIcon.svg";
import heartIcon from "@icons/svgs/heartIcon.svg";
import cartIcon from "@icons/svgs/cart.svg";

const Header = () => {
  const {
    containerBoxIcon,
    containerMenu,
    containerHeader,
    containerBox,
    container,
  } = styles;
  return (
    <div className={container}>
      <div className={containerHeader}>
        <div className={containerBox}>
          <div className={containerBoxIcon}>
            {dataBoxIcon.slice(0, 3).map((item) => {
              return <Boxicon type={item.type} href={item.href} />;
            })}
          </div>
          <div className={containerMenu}>
            {dataMenu.slice(0, 3).map((item) => {
              return <Menu content={item.content} href={item.href} />;
            })}
          </div>
        </div>
        <div>
          <img
            src={logo}
            alt="logo"
            style={{
              width: "153px",
              height: "53px",
            }}
          />
        </div>
        <div className={containerBox}>
          <div className={containerMenu}>
            {dataMenu.slice(3, dataMenu.length).map((item) => {
              return <Menu content={item.content} href={item.href} />;
            })}
          </div>
          <div className={containerBoxIcon}>
            <img src={reloadIcon} width={20} height={20} alt="reload" />
            <img src={heartIcon} width={20} height={20} alt="heart" />
            <img src={cartIcon} width={20} height={20} alt="cart" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
