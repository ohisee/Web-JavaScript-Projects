/**
 * @fileoverview HTML Span button component
 */
import React, { FC } from "react";
import Styles from "./BarsButton.module.css";

type Props = { clicked: () => void }
const BarsButton: FC<Props> = (props) => {
  return (
    <div className={Styles.bars} onClick={props.clicked}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default BarsButton;
