'use client';
/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/navigation';
import React from 'react';

const CheckoutStepper = ({ setComponentIndex, componentIndex }) => {
  const router = useRouter();
  const dashPrinter = (s = '', active = false) => {
    return (
      <div
        className={`inactive-dash text-nowrap position-absolute overflow-hidden ${s}
      ${active && 'dash'}`}
      >
        {['-'.repeat(19)].map((dash) => {
          return <>{dash}</>;
        })}
      </div>
    );
  };
  return (
    <div className="checkoutStepper mb-4 bg-white ">
      <div
        className="top-static d-flex align-items-center fw-600 mb-4
      "
      >
        <img
          className="me-3 cursor-pointer"
          onClick={() => {
            if (componentIndex === 0) {
              router.back.length > 0 ? router.back() : router.push('/store  ');
            } else {
              setComponentIndex((prev) => (prev > 1 ? prev - 1 : 0));
            }
          }}
          src="/icons/left-arrow.png"
          alt="leftArrow"
        />
        <span className="m-0 d-flex align-items-center fw-600">Checkout</span>
      </div>
      <div className="stepper-wrapper">
        <div className="stepper d-flex  position-relative mb-2">
          <div
            className="step position-relative d-flex align-items-center overflow-hidden text-nowrap justify-content-center"
            style={componentIndex >= 0 ? { color: 'red' } : {}}
          >
            <div className="stepIcon aj cursor-pointer active-step">
              <img src="/stepper/step-1.png" alt="step-1" />
            </div>
            <div className="position-absolute half-dash bg-white h-100 start-0"></div>
          </div>

          <div
            className="step position-relative overflow-hidden d-flex text-nowrap justify-content-center"
            style={componentIndex >= 1 ? { color: 'red' } : {}}
          >
            <div className={`stepIcon aj cursor-pointer ${componentIndex >= 1 && 'active-step'}`}>
              <img src={componentIndex >= 1 ? '/stepper/step-2.png' : '/stepper/step-2-inactive.png'} alt="step-2" />
            </div>
          </div>
          <div className="step position-relative d-flex overflow-hidden text-nowrap justify-content-center">
            <div className={`stepIcon aj cursor-pointer ${componentIndex >= 2 && 'active-step'}`}>
              <img src={componentIndex >= 2 ? '/stepper/step-3.png' : '/stepper/step-3-inactive.png'} alt="step-3" />
            </div>
            <div className="position-absolute half-dash bg-white h-100 start-50"></div>
          </div>
        </div>
        <div className="step-names d-flex w-100 mb-3">
          <span className="step-name">Review items</span>
          <span className="step-name">Delivery Details</span>
          <span className="step-name">Payment Details</span>
        </div>
      </div>
    </div>
  );
};

export default CheckoutStepper;
