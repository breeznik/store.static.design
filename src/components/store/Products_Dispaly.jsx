/* eslint-disable @next/next/no-img-element */
'use client';
import Link from 'next/link';
import React, { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { LocalContext } from '../localContext/LocalContext';
import QuntityChanger from '../cart/QuntityChanger';

const Product_Dispaly = ({ productType, productTypeIndex }) => {
  const { CartFunctions, cart } = useContext(LocalContext);

  return (
    <Container className="product-display-section px-4 py-3">
      <div className="product-display-top d-flex align-items-center ">
        <>
          <div className="product-icon me-1">
            <img src="/icons/chimney.png" alt="product-icon" />
          </div>
          <span className="product-heading me-3 fw-600">{productType['headTitle']}</span>
        </>
        <div className="highlighted-notes py-1 px-2 text-nowrap">
          {productType['highLightedNotes'].map((noteObj, index) => {
            return (
              <span key={index} className="note">
                {noteObj.note}
              </span>
            );
          })}
        </div>
      </div>

      <Row className="products d-flex pt-3">
        {Object.values(productType['Products']).map((ProductObj, index) => {
          return (
            <Col
              key={index}
              xs={6}
              md={4}
              lg={3}
              xxl={2}
              className="product-col col-auto pb-3 d-flex justify-content-center"
            >
              <div className="product-card d-flex flex-column align-items-center">
                <Link href={`/store/${ProductObj.productId}-${productTypeIndex}`}>
                  <div className="product-card-head mb-4">
                    <img src={ProductObj.productImg} alt="product-img" />
                  </div>
                  <div className="product-card-body w-100 mb-0 mb-sm-3">
                    <div className="product-company">{ProductObj.productCompany}</div>
                    <div className="product-name">{ProductObj.productName}</div>
                  </div>
                </Link>
                <div className=" w-100 d-flex justify-content-between align-items-center justify-content-center">
                  <div className="price">
                    <span className="actualprice text-decoration-line-through">₹{ProductObj.prevPrice}</span>
                    <div className="offered-price fw-600">₹{ProductObj.currentPrice}</div>
                  </div>
                  {cart[ProductObj.productId] ? (
                    <QuntityChanger productId={ProductObj.productId} />
                  ) : (
                    <div
                      onClick={() => CartFunctions(ProductObj.productId, 'INC', productTypeIndex)}
                      className="prodcut-add-btn primary-color border rounded-3  cursor-pointer"
                    >
                      Add
                    </div>
                  )}
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Product_Dispaly;
