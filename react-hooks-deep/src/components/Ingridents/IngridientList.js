/**
 * @fileoverview Description of this file.
 */
import React from "react";
import Styles from './IngridientList.module.css'

const IngridientList = (props) => {
  return (
    <section className={Styles["ingridient-list"]}>
      <h2>Loaded Ingridients</h2>
      <ul>
        {
          props.ingridients.map(ig => (
            <li key={ig.id} onClick={props.onRemoveItem.bind(this, ig.id)}>
              <span>{ig.title}</span>
              <span>{ig.amount}x</span>
            </li>
          ))
        }
      </ul>
    </section>
  );
};

export default IngridientList;
