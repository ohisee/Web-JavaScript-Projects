/**
 * @fileoverview Scroll container
 */
import React, { FC } from "react";
import { randomId } from "./random";
import Styles from './ScrollContainer.module.css';
import CardContainer from "./CardContainer";
import CardHolder from "./CardHolder";

const ScrollContainer: FC = () => {
  const list: number[] = [100, 85, 70, 100, 60, 90, 95, 80, 78];

  return (
    <React.Fragment>
      <div className={Styles.cards}>
        {list.map(r => <CardHolder key={randomId()} rating={r} />)}
      </div>
      <hr />
      <CardContainer key={randomId()} rating={100} />
      <button className={Styles.buttonStyle}>Top</button>
    </React.Fragment>
  );
};

export default ScrollContainer;
