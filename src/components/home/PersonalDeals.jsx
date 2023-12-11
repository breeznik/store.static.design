/* eslint-disable @next/next/no-img-element */
'use client';
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const PersonalDeals = () => {
  const [productType, setProductType] = useState(0);
  const DealType = ['Post Purchase', 'Suggested Products'];
  const [AddedProduct, setAddedProduct] = useState([0]);
  const repeater = [1, 2, 3, 4, 5, 6];

  const addHandler = (product) => {
    if (AddedProduct.includes(product)) {
      const updatedArray = AddedProduct.filter((prevProduct) => prevProduct !== product);
      console.log(updatedArray, 'removed');
      setAddedProduct(updatedArray);
      return;
    }
    setAddedProduct((prev) => [...prev, product]);
    console.log(AddedProduct, 'adding');
  };
  return (
    <section className=" m-md-g-0">
      <Container className="personal-deals-container shadow p-4">
        <Row className="d-flex flex-column" style={{ gap: '12px', marginBottom: '28px' }}>
          <Col className="d-flex justify-content-between flex-wrap ">
            <div className="d-flex gap-2  align-items-center ">
              <img style={{ width: '20px', height: '20px' }} src="/genral/tag-2.png" alt="tag" />
              <span className="text-nowrap dealHeading">Deals Curated for You</span>
            </div>
            <span className="view-text current-page aj cursor-pointer btn-response-1 ">view all</span>
          </Col>
          <Col className="h-max-content d-flex gap-1 gap-md-3 flex-nowrap overflow-scroll">
            {DealType.map((deal, index) => {
              return (
                <span
                  key={index}
                  className={`p-2 px-4 ${
                    index === productType && 'personal-product-head text-light bg-crimson '
                  } fw-semibold  rounded-pill border cursor-pointer text-nowrap`}
                  onClick={() => setProductType(index)}
                >
                  {deal}
                </span>
              );
            })}
          </Col>
        </Row>
        <Row className="d-flex flex-wrap flex-column flex-md-row aj">
          <Col>
            <Row className="d-flex gap-xs-5 gap-lg-0">
              {repeater.map((num, index) => {
                return (
                  <Col
                    key={index}
                    xs={6}
                    sm={4}
                    xl={2}
                    className="deal-product af flex-column  aj mb-3 "
                    onClick={() => addHandler(index)}
                  >
                    <div className="cardTop position-relative mb-2 " style={{ width: 'fit-content' }}>
                      <img
                        className="p-3 s-color screw"
                        style={{ borderRadius: '12px' }}
                        src="/genral/screw.png"
                        alt="image"
                      />
                      <img
                        className="position-absolute p-2 bg-white shadow top-0 start-100 translate-middle add-product cursor-pointer"
                        style={{ width: '12px', height: '12px', boxSizing: 'content-box', borderRadius: '4px' }}
                        src={`/genral/${AddedProduct.includes(index) ? 'check-mark' : 'plus'}.png`}
                        alt="icon"
                      />
                    </div>
                    <div className="cardBottom">{DealType[productType]}</div>
                  </Col>
                );
              })}
            </Row>
          </Col>
          <Col xs={2} className="aj">
            <span className="current-page cursor-pointer btn-response-1 text-nowrap">View more {'>>'}</span>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default PersonalDeals;
