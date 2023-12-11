/* eslint-disable @next/next/no-img-element */
'use client';
import { Col, Container, Row } from 'react-bootstrap';

const Testimonies = () => {
  const repeater = [1, 2, 3, 4];
  return (
    <section className="testimonie-section pt-5 pb-5 position-relative">
      <img
        className="testimonie-frag position-absolute top-0 start-0"
        src="/Fragments/testimonie-top-frag.png"
        alt="frag-img"
      />
      <img
        className="testimonie-frag position-absolute bottom-0 end-0"
        src="/Fragments/testimonie-bottom-frag.png"
        alt="frag-img"
      />
      <Container className="d-flex flex-column align-items-center d-lg-block">
        <Row>
          <Col className="th pb-5">
            What our <span>Professionals</span> say about us!
          </Col>
        </Row>
        <Row className="gy-2 d-flex justify-content-center justify-content-lg-start">
          {repeater.map((num, index) => {
            return (
              <Col key={num} className="aj col-auto">
                <div className="testimonie-card bg-white aj flex-column p-3 rounded-4">
                  <img className="testimonie-img" src="/genral/testimonie-card-img.png" alt="test" />
                  <div className="testimonie-profile d-flex mt-3 align-items-center  w-100">
                    <img className="profile-image me-2 " src="/genral/person-profile.png" alt="test" />
                    <div className="d-flex flex-column align-items-start">
                      <span className="test-profile-name">Tanu Gupta</span>
                      <span className="test-profile-profession">interior desgin</span>
                    </div>
                  </div>
                  <p
                    className="testimonie-desc mt-2"
                    style={{ fontSize: '13.5px', fontWeight: '400', lineHeight: '150%', color: '#8e9295' }}
                  >
                    Mistry.Store is offering all building material under one roof which makes my life easier. I
                    recommend them to all people I know. I hope they keeps providing us with good service
                  </p>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Testimonies;
