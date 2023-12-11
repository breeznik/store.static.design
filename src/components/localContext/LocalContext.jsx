'use client';
import React, { createContext, useEffect, useState, useMemo } from 'react';
import { Products } from '@/InventoryData.js';
export const LocalContext = createContext(null);

export const LocalContextProvider = (props) => {
  const [cart, setCart] = useState({});

  // useEffect(() => {
  //   if (Object.keys(cart).length > 0) {
  //     console.log('local storage updated with current cart obj');
  //     localStorage.setItem('cartData', JSON.stringify(cart));
  //   }
  // }, [cart]);

  useEffect(() => {
    const cartInLocal = JSON.parse(localStorage.getItem('cartData'));
    if (cartInLocal && Object.keys(cartInLocal).length > 0) {
      setCart(cartInLocal);
      console.log('On reload cart updated with local-data');
    }
  }, []);

  const CartFunctions = (productId, ActionType, productTypeIndex) => {
    let newCart = { ...cart };

    console.log('prev cart Value ', cart);

    const incrementProduct = (productId) => {
      if (newCart[productId]) {
        newCart[productId].prouductQuantity++;
        console.log(productId, 'incremented');
      } else {
        newCart[productId] = {
          productId,
          prouductQuantity: 1,
          productTypeIndex,
          productPrice: Products[productTypeIndex].Products[productId].currentPrice,
        };
        console.log(productId, 'added to Inventory');
      }
    };

    const decrementProduct = (productId) => {
      if (newCart[productId] && cart[productId].prouductQuantity > 1) {
        newCart[productId].prouductQuantity--;
        console.log('decrement Performed for product', productId);
      } else {
        delete newCart[productId];
        console.log('deleted Product', productId, 'from Cart');
      }
    };

    switch (ActionType) {
      case 'INC':
        incrementProduct(productId);
        break;
      case 'DEC':
        decrementProduct(productId);
        break;
    }

    setCart(newCart);
    console.log('newcart value ', newCart);
    localStorage.setItem('cartData', JSON.stringify(newCart));
    console.log('local storage updated with current cart obj');
  };

  const contextValue = {
    CartFunctions,
    Products,
    cart,
  };
  return <LocalContext.Provider value={contextValue}>{props.children}</LocalContext.Provider>;
};
