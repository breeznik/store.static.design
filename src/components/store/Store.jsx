'use client';
import React, { useContext } from 'react';
import Store_Top from './Store_Top';
import Product_Dispaly from './Products_Dispaly';
import Faq from './Faq';
import Store_ContactUS from './Store_ContactUS';
import TrendingStoreCard from './Trending_Card_Slider';
import { LocalContext } from '../localContext/LocalContext';

const Store = () => {
  const { Products } = useContext(LocalContext);
  return (
    <div className="min-vh-100 store d-flex flex-column align-items-center overflow-hidden">
      <Store_Top />
      <TrendingStoreCard img={'/flier/flier-2.png'} />
      {Products.map((productType, index) => {
        return <Product_Dispaly key={index} productType={productType} productTypeIndex={index} />;
      })}
      <Faq />
      <Store_ContactUS />
    </div>
  );
};

export default Store;
