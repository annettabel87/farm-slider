import React from "react";
import { INavigationProps } from "@/app/(types)/types";
import styles from "./Navigation.module.css";

function Navigation({ leftClickHandler, rightClickHandler }: INavigationProps) {
  return (
    <div className={styles.navigation}>
      <button
        className={`${styles.btn} ${styles.left}`}
        onClick={leftClickHandler}
      ></button>
      <button
        className={`${styles.btn} ${styles.right}`}
        onClick={rightClickHandler}
      ></button>
    </div>
  );
}

export default Navigation;
