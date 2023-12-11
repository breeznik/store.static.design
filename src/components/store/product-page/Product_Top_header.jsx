/* eslint-disable @next/next/no-img-element */
'use client';
import TrendingSlider from '@/components/home/TrendingSlider';
import { Col, Row } from 'react-bootstrap';
import TrendingStoreCard from '../Trending_Card_Slider';
import { useRouter } from 'next/navigation';

const Store_Top_header = ({ prductImage, cart }) => {
  const router = useRouter();
  return (
    <section className="product-header-section border border d-flex align-items-center justify-content-center p-4 position-relative rounded-bottom-4">
      <div className="product-img-wrapper w-100 h-100 d-flex align-items-center justify-content-center ">
        <TrendingStoreCard style={'product-top-image'} img={prductImage} />
      </div>
      <Row
        className="position-absolute ms-auto buttons d-flex  align-items-center justify-content-between w-100  m-0
      "
      >
        <Col className="col-auto">
          <div
            onClick={() => router.push('/store')}
            className="store-icon-bg text-white p-3 d-flex align-items-center border cursor-pointer"
          >
            <img className="" src="/icons/Back-arrow.png" alt="icon" />
          </div>
        </Col>
        <Col className="col-auto">
          <div
            onClick={() => router.push('/cart')}
            className="store-icon-bg text-white p-3 w-100 d-flex position-relative cursor-pointer "
          >
            <img src="/genral/shopping-boldcart.png" alt="icon" />
            <span className="cart-number position-absolute translate-middle primary-color border-dark px-2 rounded-circle text-white">
              {Object.values(cart).length > 0 && Object.values(cart).length}
            </span>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default Store_Top_header;
