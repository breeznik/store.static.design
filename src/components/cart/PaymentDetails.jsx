import { Carter_One } from 'next/font/google';
import { useEffect, useRef, useState } from 'react';

const PaymentDetails = ({ cartTotal }) => {
  const paymentref = useRef(null);

  const payMentChecker = (index) => {
    paymentref.current.children[index].children[2].checked = true;
  };

  return (
    <div className="payment-details mb-5  mt-4 d-flex  flex-column gap-4">
      <div className="total-payable d-flex">
        <span className="flex-grow-1 text-start">Total Payable</span>
        <span className="flex-grow-1 text-end inter-font"> {cartTotal}</span>
      </div>
      <div className="coupons-wrapper ">
        <div className="wrapper-heading fw-600 mb-2">Apply Coupon</div>
        <div className="coupons mt-1 d-flex flex-wrap justify-content-center justify-content-lg-start gap-2">
          {[...'-'.repeat(1)].map((text, index) => {
            return (
              <div key={index} className="coupon rounded-4 d-flex px-2 py-3">
                <div className="couponImg me-2 aj">
                  <img src="/icons/coupon.png" alt="test" />
                </div>
                <div className="d-flex flex-column me-4">
                  <div className="couponName fw-600">m3m 500</div>
                  <div className="couponTagline text-muted">Save another Rs. 500 on this order</div>
                </div>
                <button className="primary-color ms-auto border-0">Apply</button>
              </div>
            );
          })}
        </div>
      </div>
      <div className="payment-method-wrapper">
        <div className="wrapper-heading fw-600">Choose a Payment Method</div>
        <div ref={paymentref} className="payment-methods rounded-4 overflow-hidden cursor-pointer ">
          <div onClick={() => payMentChecker(0)} className="payment-method aj p-3 d-flex ">
            <div className="img-wrapper aj rounded-2 me-2">
              <img src="/icons/upi.png" alt="upi" />
            </div>
            <span className="ms-1 fw-600  rounded-2">UPI</span>
            <input checked name="same" className="ms-auto aj" type="radio" />
          </div>
          <div onClick={() => payMentChecker(1)} className="payment-method aj p-3 d-flex ">
            <div className="img-wrapper aj rounded-2 me-2">
              <img src="/icons/card-pos.png" alt="upi" />
            </div>
            <span className="ms-1 fw-600 rounded-2">Cards, Net banking & more</span>
            <input name="same" className="ms-auto aj" type="radio" />
          </div>
          <div onClick={() => payMentChecker(2)} className="payment-method border-0 aj p-3 d-flex ">
            <div className="img-wrapper aj rounded-2 me-2">
              <img src="/icons/cashDeck.png" alt="upi" />
            </div>
            <span className="ms-1 fw-600  ounded-2">Cash on Delivery</span>
            <input name="same" className="ms-auto aj" type="radio" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentDetails;
