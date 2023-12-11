'use client';

import { Col, Container, Row } from 'react-bootstrap';
import Slider from 'react-slick';

const TrendingSlider = (props) => {
  const repeater = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  var settings = {
    dots: true,
    slidesToShow: 3,
    autoplay: true,
    speed: 500,
    focusOnSelect: false,
    infinite: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
    ],
  };
  return (
    <Container className="p-1 mb-2" fluid>
      <Slider {...settings}>
        {repeater.map((num, index) => {
          return (
            <div key={index} className="flier aj p-2">
              <img className="fill" src="/flier/image1.png" alt="flier-image" />
            </div>
          );
        })}
      </Slider>
    </Container>
  );
};

export default TrendingSlider;
