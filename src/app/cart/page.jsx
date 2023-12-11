'use client';
import Cart from '@/components/cart/Cart';
import { LocalContext } from '@/components/localContext/LocalContext';
import { useContext, useEffect } from 'react';

const CartPage = () => {
  const { CartFunctions } = useContext(LocalContext);

  return (
    <div className="cartPage border  border-primary min-vh-100">
      <Cart />
    </div>
  );
};

export default CartPage;
