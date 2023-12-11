/* eslint-disable @next/next/no-img-element */
'use client';
import { Col, Container, Row } from 'react-bootstrap';

const RegisterBanner = () => {
  return (
    <section className="Register-banner overflow-hidden ">
      <Container className="h-100 d-flex justify-content-between  overflow-scroll">
        <Row>
          <Col>
            <div className=" d-flex justify-content-center flex-column">
              <p className="register-text text-center text-white m-0">
                Register with us and get access to a world of exclusive{' '}
                <span className="current-page">PRO Benefits</span>{' '}
                <img className="mx-1 mt-4 mt-md-0" src="/genral/Vector3.png" alt="img"></img>
              </p>
              <button className="reg-button primary-button">Register With Us</button>
            </div>
          </Col>
        </Row>
        <Row className="cards gap-2 position-relative d-none d-xl-flex  justify-content-center">
          <Col sm={6} className="perk-card bg-white mb-2 me-2">
            <img src="/how-it-wroks/icon-1.png" alt="test" />
            <br />
            <span className="perk-card-heading">Networking Event Invites</span>
            <br />
            <span className="perk-card-mutedText">Exclusive Access to Premier Industry Events</span>
          </Col>
          <Col sm={6} className="perk-card bg-white mb-2 me-2">
            <img src="/how-it-wroks/icon-1.png" alt="test" />
            <br />
            <span className="perk-card-heading">Networking Event Invites</span>
            <br />
            <span className="perk-card-mutedText">Exclusive Access to Premier Industry Events</span>
          </Col>
          <Col sm={6} className="perk-card bg-white mb-2 me-2">
            <img src="/how-it-wroks/icon-1.png" alt="test" />
            <br />
            <span className="perk-card-heading">Networking Event Invites</span>
            <br />
            <span className="perk-card-mutedText">Exclusive Access to Premier Industry Events</span>
          </Col>
          <Col sm={6} className="perk-card bg-white mb-2 me-2">
            <img src="/how-it-wroks/icon-1.png" alt="test" />
            <br />
            <span className="perk-card-heading">Networking Event Invites</span>
            <br />
            <span className="perk-card-mutedText">Exclusive Access to Premier Industry Events</span>
          </Col>
          <img
            className="redgrid position-absolute"
            src="/how-it-wroks/DotGridRed.png"
            style={{ width: '150px' }}
            alt="test"
          ></img>
        </Row>
      </Container>
    </section>
  );
};

export default RegisterBanner;
