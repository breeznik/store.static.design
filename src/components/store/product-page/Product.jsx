/* eslint-disable @next/next/no-img-element */
'use client';
import { Container } from 'react-bootstrap';
import Store_ContactUS from '../Store_ContactUS';
import Product_Discription from './Product_Discription';
import Product_Top_Header from './Product_Top_header';
import { useContext } from 'react';
import { LocalContext } from '@/components/localContext/LocalContext';
import QuntityChanger from '@/components/cart/QuntityChanger';

const Product = ({ productCode }) => {
  const { cart, CartFunctions, Products } = useContext(LocalContext);
  const productTypeIndex = productCode.split('-')[1];
  const productId = productCode.split('-')[0];
  return (
    <>
      <div className="product-details d-flex flex-column flex-lg-row  justify-content-center h-100">
        <div className="w-100">
          <Product_Top_Header cart={cart} prductImage={Products[productTypeIndex].Products[productId].productImg} />
          <Product_Discription productData={Products[productTypeIndex].Products[productId]} />
          <Store_ContactUS />
          <div className="addToCart border d-flex gap-5 align-items-center justify-content-center justify-content-lg-start p-3 position-sticky">
            <Container className="d-flex  justify-content-between align-items-center">
              <div className="price d-flex flex-column">
                <span className="actualprice text-decoration-line-through">
                  ₹{Products[productTypeIndex].Products[productId].prevPrice}
                </span>
                <div className="offered-price fw-600">
                  ₹{Products[productTypeIndex].Products[productId].currentPrice}
                </div>
              </div>
              {cart[productId] ? (
                <QuntityChanger productId={productId} />
              ) : (
                <button
                  className="primary-button aj flex-nowrap text-nowrap gap-2 px-5 "
                  onClick={() => CartFunctions(productId, 'INC', productTypeIndex)}
                >
                  <img src="/genral/shopping-boldcart.png" alt="" />
                  Add To Cart
                </button>
              )}
            </Container>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
