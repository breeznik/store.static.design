'use client';

import { Col, Container, Row } from 'react-bootstrap';

const AppDownload = () => {
  return (
    <section className="app-download-section aj">
      <Container className="d-flex  d-flex justify-content-center justify-content-md-start">
        <Row className="w-100 d-flex  justify-content-center justify-content-lg-between flex-nowrap">
          <Col md={7} className="aj ">
            <div className="flex-column  text-center text-md-start" style={{ height: 'fit-content' }}>
              <span className="download-heading">
                Download the Mistry.Store <br /> App now
              </span>
              <div className="download-buttons d-flex flex-md-nowrap mt-4 flex-wrap justify-content-center">
                <img className="download-button me-md-3 mb-2 mb-md-0" src="/static-buttons/google-play.png" alt="" />
                <img className="download-button" src="/static-buttons/appstore.png" alt="" />
              </div>
            </div>
          </Col>
          <Col className="d-none d-lg-flex justify-content-center align-items-center">
            <div>
              <img src="/genral/phone.png" alt="phone-img" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default AppDownload;
