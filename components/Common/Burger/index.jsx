import { useEffect, useState } from "react";
import styles from "./style.module.scss";

const Burger = ({ handleToggle, isActive }) => {
  // handle click operation

  return (
    <div
      className={`${styles.navTrigger} ${isActive && styles.active}`}
      onClick={handleToggle}
    >
      <i></i>
      <i></i>
      <i></i>
    </div>
  );
};

export default Burger;
