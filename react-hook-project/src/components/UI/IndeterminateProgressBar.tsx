/**
 * @fileoverview Indeterminate progress bar
 */
import React, { FC } from "react";
import Styles from "./IndeterminateProgressBar.module.css";

const IndeterminateProgressBar: FC = () => {
  return (
    <div className={Styles.progress}>
      <div className={Styles.indeterminate}></div>
    </div>
  );
};

export default IndeterminateProgressBar;
