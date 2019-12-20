/**
 * @fileoverview Description of this file.
 */
import React from 'react';
// import { useContext } from 'react';
// import { useSelector } from 'react-redux';
import ProductItem from '../components/Products/ProductItem';
import Styles from './Products.module.css';

// import { ProductContext } from "../context/product-context";

import { useStore } from "../hooks-store/store";

const Products = props => {
  // Keep for future reference,
  // use context API as store but no good for high frequency update
  // const productList = useContext(ProductContext).products;

  // Keep for future reference
  // const productList = useSelector(state => state.shop.products);

  // Use custom hook store
  const state = useStore()[0];
  const productList = state.products;

  return (
    <ul className={Styles["products-list"]}>
      {productList.map(prod => (
        <ProductItem
          key={prod.id}
          id={prod.id}
          title={prod.title}
          description={prod.description}
          isFav={prod.isFavorite}
        />
      ))}
    </ul>
  );
};

export default Products;
