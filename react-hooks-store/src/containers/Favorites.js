/**
 * @fileoverview Description of this file.
 */
import React from 'react';
// import { useContext } from 'react';
// import { useSelector } from 'react-redux';
import FavoriteItem from '../components/Favorites/FavoriteItem';
import Styles from './Products.module.css';

// import { ProductContext } from "../context/product-context";

import { useStore } from "../hooks-store/store";

const Favorites = props => {
  // Keep for future reference
  // const favoriteProducts = useSelector(state =>
  //   state.shop.products.filter(p => p.isFavorite)
  // );

  // const favoriteProducts = useContext(ProductContext).products.filter(
  //   p => p.isFavorite
  // );

  const state = useStore()[0];
  const favoriteProducts = state.products.filter(p => p.isFavorite);

  let content = <p className={Styles["placeholder"]}>Got no favorites yet!</p>;
  if (favoriteProducts.length > 0) {
    content = (
      <ul className={Styles["products-list"]}>
        {favoriteProducts.map(prod => (
          <FavoriteItem
            key={prod.id}
            id={prod.id}
            title={prod.title}
            description={prod.description}
          />
        ))}
      </ul>
    );
  }
  return content;
};

export default Favorites;
