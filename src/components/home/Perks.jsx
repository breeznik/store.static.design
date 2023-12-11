'use client';

import { Col, Container, Row } from 'react-bootstrap';

const Perks = () => {
  const repeater = [1, 2, 3, 4];
  return (
    <section className="perks-section">
      <Container className="h-100">
        <Row className="d-flex justify-content-center position-relative">
          <img
            className="perk-frag-image position-absolute d-none d-md-inline"
            src="/Fragments/community-frag.png"
            alt="frag-img"
          />
          <Col sm={12} lg={6} className="d-flex flex-column">
            <div className="perk-left-heading mb-5 ">
              Exclusive platform for all
              <br />
              <span>Home Building Professionals</span>
            </div>
            <p className="perks-p">
              Introducing Mistry.Store, India{"'"}s first organized platform that simplifies building material purchases
              for home-building professionals like Architects, Interior Decorators, Contractors & Skilled workers.
            </p>
            <p className="perks-p mt-2">
              A comprehensive platform dealing in over 100+ brands across Plywood & Boards, Hardware & Tools,
              Electricals & Lights, Paints & Chemicals, Sanitary & Plumbing.
            </p>
          </Col>
          <Col sm={12} lg={6}>
            <Row className="perk-cards d-flex justify-content-center justify-content-xl-end gap-sm-2 ">
              {repeater.map((num, index) => {
                return (
                  <Col xs={5} key={index} className="perk-card  col-auto  px-2 py-3 rounded-5 mb-2 me-1 me-sm-2">
                    <div className="perk-card-top aj p-2 p-sm-0">
                      <img src={`/perks/image-${num}.png`} alt="perk-icon" />
                    </div>
                    <div className="perk-card-bottom ">
                      <div className="perk-card-heading text-center mb-1">Always Low Prices</div>
                      <div className="perk-card-muted-text text-center  h-100">
                        We offer low prices everyday on quality and original products
                      </div>
                    </div>
                  </Col>
                );
              })}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Perks;
