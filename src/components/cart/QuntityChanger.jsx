import React, { useContext } from 'react';
import { LocalContext } from '../localContext/LocalContext';

const QuntityChanger = ({ productId }) => {
  const { cart, CartFunctions } = useContext(LocalContext);
  return (
    <div className="store-quntity d-flex rounded-2 overflow-hidden ">
      <button className="bg-white p-0" onClick={() => CartFunctions(productId, 'DEC')}>
        <img src="/icons/minus.png" alt="icons" />
      </button>
      <span className="quntity-number text-white aj">{cart[productId]?.prouductQuantity}</span>
      <button className="bg-white p-0" onClick={() => CartFunctions(productId, 'INC')}>
        <img src="/icons/plus.png" alt="icons" />
      </button>
    </div>
  );
};

export default QuntityChanger;
