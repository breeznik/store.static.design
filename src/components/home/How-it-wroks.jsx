'use client';
import { Col, Container, Row } from 'react-bootstrap';

const Howit_Works = () => {
  return (
    <section className="how-it-works p-3 p-md-0">
      <Container className=" mb-4 how-it-works-container border">
        <Row className=" text-center text-md-start" style={{ marginBottom: '58px' }}>
          <Col sm={12}>
            <div className="genral-Heading">
              Here’s how <span className="current-page">Mistry.Store</span> works
            </div>
            <div className="hiw-heading-child">All your home building materials, just a few steps away!</div>
          </Col>
        </Row>
        <Row style={{ minHeight: '424px' }}>
          <Col sm={12} md={5} className=" d-flex align-items-center justify-content-center justify-content-md-start ">
            <div className="w-100">
              <div
                className="d-flex border justify-content-center flex-wrap flex-sm-nowrap"
                style={{ marginBottom: '48px' }}
              >
                <div className="me-3">
                  <img src="/how-it-wroks/icon-1.png" className="img-fluid rounded-top" alt="test" />
                </div>

                <div className="" style={{ width: '339px', textAlign: 'start' }}>
                  <div className="hiw-content-heading text-center text-sm-start">Search & send your requirements</div>
                  <div className="text-muted hiw-content text-center text-sm-start">
                    Send your product requirements by sharing images, adding items from our master list, calling your RM
                    or Whatsapp
                  </div>
                </div>
              </div>
              <div
                className=" d-flex  border justify-content-center flex-wrap flex-sm-nowrap"
                style={{ marginBottom: '48px' }}
              >
                <div className="me-3">
                  <img src="/how-it-wroks/icon-2.png" className="img-fluid rounded-top" alt="test" />
                </div>

                <div style={{ width: '339px', textAlign: 'start' }}>
                  <div className="hiw-content-heading text-center text-sm-start">Review & confirm order</div>
                  <div className="text-muted hiw-content text-center text-sm-start">
                    Review the quote an text-center text-sm-startd confirm your order
                  </div>
                </div>
              </div>
              <div className=" d-flex  border justify-content-center flex-wrap flex-sm-nowrap">
                <div className="me-3">
                  <img src="/how-it-wroks/icon-3.png" className="img-fluid rounded-top" alt="test" />
                </div>

                <div style={{ width: '339px', textAlign: 'start' }}>
                  <div className="hiw-content-heading text-center text-sm-start">Get delivery support</div>
                  <div className="text-muted hiw-content text-center text-sm-start">
                    See realtime status and get end-to-end support for delivery onsite
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col md={7} className="border d-none d-md-block">
            <div className=" position-relative video-responsive  w-100 h-100">
              <iframe
                className="w-100 h-100 hiw-video rounded-4 "
                src={`https://www.youtube.com/embed/D9GGU4f7Ttk`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
              />
              <img src="/how-it-wroks/dotGrid.png" alt="grid" className="hiw-grid" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Howit_Works;
