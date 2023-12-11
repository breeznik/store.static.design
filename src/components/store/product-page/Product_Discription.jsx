'use client';

import { Container } from 'react-bootstrap';

const Product_Discription = ({ productData }) => {
  const repeater = [1, 2, 3, 4, 5, 6];
  return (
    <Container className="prod-desc-section px-3 mt-3">
      <div className="prod-details-wrapper">
        <div className="prod-name fw-600 mb-3">{productData.productName}</div>
        <div>
          <div className="d-flex align-items-center">
            <div className="prod-rating aj gap-1 me-4 ">
              <img src="/icons/star-2.png" alt="icon" />
              4.9
            </div>
            <div className="highlighted-note rounded-3 px-2 py-1 fw-600">Delivery in 2 days</div>
            <div className="price d-flex flex-column align-items-end ms-auto">
              <span className="actualprice text-decoration-line-through">₹{productData.prevPrice}</span>
              <div className="offered-price fw-600">₹{productData.currentPrice}</div>
            </div>
          </div>
          <hr className="my-4" />
          <div className="prod-details mb-4">
            <div className="prod-detail-heading mb-1">Description</div>
            <p className="prod-details-content mb-4">
              Type: Pyramid design with premium black finish Size: 60cm size is suitable for 2-3 burner stove Suction
              Capacity: 1050 m3/hr suction power is sui
            </p>
            <div className="prod-detail-heading mb-1">Product Description</div>
            <div className="prod-details-content">
              <p>
                Green MR grade plywood has the power to withstand weather changes, thereby adding an edge to the concept
                of durability. This commercial ply is limited to interior applications such as furniture including
                tables, chairs and cabinets
              </p>
              <span className="fw-600">Key Features:</span>
              <ul className="text-muted m-0">
                <li>Boiling water proof</li>
                <li>Borer proof and termite resistant</li>
                <li>Preservative treated</li>
              </ul>
            </div>
          </div>
          <div className="prod-specification mb-4">
            <div className="prod-speci-heading mb-2">Specification</div>
            <div className="specification-table   ">
              <div className="tbody border rounded-4 overflow-hidden">
                {repeater.map((num, index) => {
                  return (
                    <div key={index} className="tr d-flex p-2 px-3">
                      <span className="td speci-name">Brand</span>
                      <span className="speci-data td">1Greenply</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="prod-details">
            <div className="prod-detail-heading mb-2">About Brand</div>
            <p className="prod-details-content">
              Greenply Industries is an interior eco-friendly infrastructure company with over 30 years of experience in
              manufacturing and marketing a comprehensive range of plywood, block boards, decorative, veneers, flush
              doors, and other allied products have always been in forefront driving product innovations, ensuring a
              steady supply of health safe products to its discerning consumers. The company is the first one in the
              wood & panel industry to introduce a range of Zero Emission (E-0) products keeping in mind the health
              interest of its consumers to safeguard the indoor air quality by reducing formaldehyde emission to
              negligible or equal to zero. The products not only stand for strength and durability but are also
              internationally certified by CARB (California Air Resource Board) and EPA (Environmental Protection
              Agency) to meet the global safety standards. Greenply has also introduced specialised feature like
              Virashield Protection and Fire-Retardant parameter across its product portfolio to ensure safety and
              protection to the household.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Product_Discription;
