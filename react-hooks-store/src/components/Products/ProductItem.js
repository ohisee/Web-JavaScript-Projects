/**
 * @fileoverview Product item component.
 */
import React from "react";
// import { useContext } from 'react';
// import { useDispatch } from "react-redux";
import Card from "../UI/Card";
// import { toggleFav } from "../../store/actions/products";
import Styles from "./ProductItem.module.css";
// import { ProductContext } from "../../context/product-context";

import { useStore } from "../../hooks-store/store";

const ProductItem = React.memo((props) => {
  // const dispatch = useDispatch();
  // const toggleFavorite = useContext(ProductContext).toggleFavorite;
  console.log('Render product item');

  const dispatch = useStore(false)[1];

  const toggleFavHandler = () => {
    // dispatch(toggleFav(props.id));
    // toggleFavorite(props.id);
    dispatch('TOGGLE_FAV', props.id);
  };

  return (
    <Card style={{ marginBottom: "1rem" }}>
      <div className={Styles["product-item"]}>
        <h3 className={props.isFav ? Styles["is-fav"] : ''}>{props.title}</h3>
        <p>{props.description}</p>
        <button
          className={!props.isFav ? "button-outline" : ''}
          onClick={toggleFavHandler}>
          {props.isFav ? 'Up-Favorite' : 'Favorite'}
        </button>
      </div>
    </Card>
  );
});

export default ProductItem;
