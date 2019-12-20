/**
 * @fileoverview Product store
 */
import { initialStore } from "./store";

const configStore = () => {
  const actions = {
    TOGGLE_FAV: (currentState, id) => {
      const productIndex = currentState.products.findIndex(p => p.id === id);
      const newFavStatus = !currentState.products[productIndex].isFavorite;
      const updatedProducts = [...currentState.products];
      updatedProducts[productIndex] = {
        ...currentState.products[productIndex],
        isFavorite: newFavStatus,
      };
      return { products: updatedProducts };
    }
  };
  initialStore(actions, {
    products: [
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
    ]
  });
};

export default configStore;
