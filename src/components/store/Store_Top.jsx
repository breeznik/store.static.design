/* eslint-disable @next/next/no-img-element */
'use client';
import { useRouter } from 'next/navigation';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import QuntityChanger from '../cart/QuntityChanger';

const Store_Top = () => {
  const repeater = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const router = useRouter();
  return (
    <div className="d-flex flex-column gap-lg-5 align-items-center w-100">
      <Container fluid className="store-top-section position-relative overflow-hidden rounded-bottom-4 mb-3 p-0">
        <div className="header-img">
          <img className="w-100" src="/genral/bulding-2.jpg" alt="img" />
        </div>

        <Row
          className="
          position-absolute ms-auto
          buttons d-flex align-items-center justify-content-between w-100  gy-1"
        >
          <Col className="col-auto">
            <div className="store-icon-bg text-white py-3 px-3 d-flex align-items-center">
              <img className="me-2" src="/cat-img/image-5.png" alt="icon" />
              MYSTRY.STORE
            </div>
          </Col>
          <Col className="col-auto cursor-pointer">
            <div className="store-icon-bg text-white px-3 py-3 w-100 d-flex" onClick={() => router.push('/cart')}>
              <img className="cart-img" src="/genral/shopping-boldcart.png" alt="icon" />
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="store-offer-section w-100 overflow-hidden shadow-md p-lg-4">
        <Row className="px-4 p-lg-0 flex-nowrap mb-2">
          <Col className="d-flex align-items-center special-offer fw-600 flex-wrap p-0 gap-0 ">
            <div className="d-flex flex-wrap align-items-center gap-1">
              <img className="me-2" src="/genral/ticket.png" alt="icon" />
              <span className="primary-color">Special Offer for</span>
              <>
                <span className="text-nowrap"> M3M Merina Residents</span>
              </>
            </div>
          </Col>
          <Col lg={6} className="col-auto p-0 d-flex align-items-center justify-content-center">
            <div className="special-offer-star position-relative d-flex align-items-center justify-content-center ">
              <img src="/genral/offer-star.png" alt="" />
              <span className="position-absolute offer-text top-50 start-50 translate-middle text-center primary-color fw-600 ">
                SPACIAL <br /> OFFER
              </span>
            </div>
          </Col>
        </Row>
        <Row className="offer-info d-flex flex-wrap px-4 p-lg-0 gap-lg-4">
          <Col className="offer-desc p-0">
            <p>
              {`Whether you're moving into a new home or looking to upgrade your current one, we've got you covered. Our
              wide selection of fans, lights, & other homebuilding materials is sure to meet your needs & exceed your
              expectations`}
            </p>
          </Col>
          <Col xs={12} md={6} className="offer-perks p-0 d-flex align-items-center">
            <div className="primary-color d-flex gap-2 text-center text-nowrap w-100 align-items-center justify-content-center">
              <div className="offer-perk">
                The <span className="">Delivery Fee</span> <br />
                is on us
              </div>
              <div className="offer-perk ">
                The <span className="">Installation Fee</span>
                <br /> is on us
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Store_Top;
