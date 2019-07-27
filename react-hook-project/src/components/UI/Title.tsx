/**
 * @fileoverview Title component
 */
import React, { FC } from "react";
import IndeterminateProgressBar from "./IndeterminateProgressBar";
import Styles from "./Title.module.css";

type Props = { title: string }
const Title: FC<Props> = (props) => {
  return (
    <div className={Styles.title}>
      <div className={Styles.titleText}>{props.title}</div>
      <IndeterminateProgressBar />
    </div>
  );
};

export default Title;
