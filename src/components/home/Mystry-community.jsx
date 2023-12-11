'use client';
import { Col, Container, Row } from 'react-bootstrap';

const MystryCommunity = () => {
  const repeater = [1, 2, 3, 4, 5, 6, 7, 8];
  const communityText = [
    'Architects',
    'Contractors',
    'Electrical expert',
    'Paint Experts',
    'Interior Designers',
    'Carpenter Expert',
    'Plumbing Expert',
    'Plumbing Expert',
  ];
  return (
    <section className="mystry-commnity-section">
      <Container className="mb-5  px-sm-3 ">
        <Row className="">
          <Col className="community-heading  text-center text-sm-start text-md-center border">
            <div>
              Be a part of <span>Mistry’s Growing Community</span>
            </div>
          </Col>
        </Row>
        <div className="px-sm-5">
          <Row className="community-card-row  gy-3 gy-md-5  px-sm-4 px-lg-5  position-relative ">
            {repeater.map((num, index) => {
              return (
                <Col className="aj p-2 h-auto  overflow-hidden" key={num + index} xs={6} sm={6} md={4} xl={3}>
                  <div className="community-card aj flex-column  h-100 w-100">
                    <div className="community-cardTop mb-3 ">
                      <img src={`/community/img-${num}.png`} alt="img-1" />
                    </div>
                    <span className="communit-card-text text-center text-nowrap ">{communityText[index]}</span>
                  </div>
                </Col>
              );
            })}
            <img
              className="community-frag-image position-absolute end-0"
              src="/Fragments/community-frag.png"
              alt="frag-img"
            />
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default MystryCommunity;
