/**
 * @fileoverview Favorite item component.
 */
import React from "react";
import Card from "../UI/Card";
import Styles from "./FavoriteItem.module.css";

const FavoriteItem = (props) => {
  return (
    <Card style={{ marginBottom: "1rem" }}>
      <div className={Styles["favorite-item"]}>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
    </Card>
  );
};

export default FavoriteItem;
