/**
 * @fileoverview Product context component.
 */
import React, { useState } from "react";

export const ProductContext = React.createContext({
  products: [],
  toggleFavorite: (id) => { }
});

export default props => {
  const initialState = [
    {
      id: 'p1',
      title: 'Red Scarf',
      description: 'A pretty red scarf',
      isFavorite: false,
    },
    {
      id: 'p2',
      title: 'Blue T-shirt',
      description: 'A pretty blue t-shirt',
      isFavorite: false,
    },
    {
      id: 'p3',
      title: 'Green Trousers',
      description: 'A pair of lightly green trousers',
      isFavorite: false,
    },
    {
      id: 'p4',
      title: 'Orange Hat',
      description: 'Street style! An orange hat',
      isFavorite: false,
    }
  ];
  const [products, setProducts] = useState(initialState);
  const toggleFavorite = (productId) => {
    setProducts(currentProdList => {
      const productIndex = currentProdList.findIndex(
        p => p.id === productId);
      const newFavStatus = !currentProdList[productIndex].isFavorite;
      const updatedProducts = [...currentProdList];
      updatedProducts[productIndex] = {
        ...currentProdList[productIndex],
        isFavorite: newFavStatus,
      };
      return updatedProducts;
    });
  };

  return (
    <ProductContext.Provider value={
      { products: products, toggleFavorite: toggleFavorite }
    }>
      {props.children}
    </ProductContext.Provider>
  );
};
