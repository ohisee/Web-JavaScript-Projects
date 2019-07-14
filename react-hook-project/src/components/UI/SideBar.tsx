/**
 * @fileoverview Side bar component
 */
import React, { FC } from "react";
import Styles from './SideBar.module.css';
import { randomId } from "../random";

type ListItemType = { name: string, id: string }
type Props = { listItems: ListItemType[], clicked: (id: string) => void }
const SideBar: FC<Props> = (props) => {

  // const someContent = [];
  // for (let i = 0; i < 100; i++) {
  //   someContent.push((Math.random() * 2019).toString(36).replace(/\./, ''));
  // }

  return (
    <div className={Styles.sideBar}>
      <ul className={Styles.items}>
        {props.listItems.map(d => <li key={randomId()}
          className={Styles.item}
          onClick={() => props.clicked(d.id)}>{d.name}</li>)}
      </ul>
    </div>
  );
};

export default SideBar;
