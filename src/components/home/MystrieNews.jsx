'use client';

import { Col, Container, Row } from 'react-bootstrap';

const MystrieNews = () => {
  const repeater = [1, 2, 3, 4];
  return (
    <section className="mystry-news-section aj pt-5">
      <Container
        className=" d-flex mystrie-news-container flex-column align-items-center d-lg-block"
        style={{ minHeight: '521px' }}
      >
        <div className="news-heading genral-Heading mb-4">
          <span>Mistry.Store</span> in News
        </div>

        <Row className="d-flex gap-3 mb-5 justify-content-center justify-content-lg-start">
          {repeater.map((num, index) => {
            return (
              <Col key={index} lg={3} className="news-card p-0 rounded-4 overflow-hidden">
                <div className="news-head-img mb-3 d-none d-md-flex justify-content-md-center align-items-md-center">
                  <img src={`/news-channels/news-${num}.png`} alt="news-img" />
                </div>
                <div className="news-card-body  d-flex flex-column justify-content-between px-3 py-3 ">
                  <div className="headline mb-2">Mistry.Store simplifies materials supply for home interiors</div>
                  <span className="news-readMore mt-4">Read more -{'>'}</span>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default MystrieNews;
