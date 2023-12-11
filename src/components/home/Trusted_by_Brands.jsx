'use client';
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Trusted_by_Brands = () => {
  const industrieArray = [
    'Electricals & Lights',
    'Paints & Chemicals',
    'Plywood & Boards',
    'Hardware & Tools',
    'Sanitary & Plumbing',
  ];
  const Brand_Cat = {
    'Electricals & Lights': ['electric-brand', 'electric-brand', 'electric-brand', 'electric-brand', 'electric-brand'],
    'Paints & Chemicals': [
      'Paints-brand',
      'Paints-brand',
      'Paints-brand',
      'Paints-brand',
      'Paints-brand',
      'Paints-brand',
      'Paints-brand',
      'Paints-brand',
    ],
    'Plywood & Boards': [
      'Plywood-brand',
      'Plywood-brand',
      'Plywood-brand',
      'Plywood-brand',
      'Plywood-brand',
      'Plywood-brand',
      'Plywood-brand',
      'Plywood-brand',
    ],
    'Hardware & Tools': [
      'Hardware-brand',
      'Hardware-brand',
      'Hardware-brand',
      'Hardware-brand',
      'Hardware-brand',
      'Hardware-brand',
      'Hardware-brand',
      'Hardware-brand',
    ],
    'Sanitary & Plumbing': [
      'Sanitary-brand',
      'Sanitary-brand',
      'Sanitary-brand',
      'Sanitary-brand',
      'Sanitary-brand',
      'Sanitary-brand',
      'Sanitary-brand',
      'Sanitary-brand',
    ],
  };
  const [selectedIndustrie, setSelectedIndustrie] = useState(0);
  return (
    <section className="p-sm-3">
      <Container className="brand-component-cotanier px-sm-5 py-sm-3 border shadow ">
        <Row className="brand-container-heading genral-Heading mt-4 text-center text-md-start ">
          <Col className="px-0">
            Trusted by <span className="current-page">75+ Brands</span>
          </Col>
        </Row>
        <Row className="mt-4  gy-2 d-flex  justify-content-start flex-nowrap overflow-scroll">
          {industrieArray.map((industrie, index) => {
            return (
              <Col
                key={index}
                className={`py-2 px-4 border rounded-pill col-auto me-1 me-md-3 cursor-pointer ${
                  index === selectedIndustrie && 'selected-industrie'
                } `}
                onClick={() => setSelectedIndustrie(index)}
              >
                <span className="brand-industries">{industrie}</span>
              </Col>
            );
          })}
        </Row>
        <Row className="gy-3 mt-4 mb-5 d-flex justify-content-center justify-content-md-start ">
          {Brand_Cat[industrieArray[selectedIndustrie]].map((brand, index) => {
            return (
              <Col xs={6} key={index} className="aj rounded-3 individual-brand me-2 me-sm-4">
                <img className="" src="/brands/brand-2.png" alt="brand-img" />
                {/* {brand} */}
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Trusted_by_Brands;

//brand card
{
  /* <Col className=" aj rounded-3 individual-brand ">
<img className="" src="/brands/brand-1.png" alt="brand-img" />
</Col> */
}
