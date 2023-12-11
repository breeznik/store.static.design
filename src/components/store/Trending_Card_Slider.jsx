/* eslint-disable @next/next/no-img-element */
'use client';

import { Container } from 'react-bootstrap';
import Slider from 'react-slick';

const TrendingStoreCard = (props) => {
  const repeater = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const settings = {
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
          slidesToScroll: 1,
          focusOnSelect: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Container className={`slider-container w-100`}>
      <Slider {...settings} className="d-flex">
        {repeater.map((num, index) => {
          return (
            <div key={index} className={`flier-2 p-1 ${props.style ? props.style : ''}`}>
              <img className="fill" src={props.img} alt="flier-image" />
            </div>
          );
        })}
      </Slider>
    </Container>
  );
};

export default TrendingStoreCard;
