/* eslint-disable react/jsx-key */
import { Container } from 'react-bootstrap';
import CheckoutStepper from './CheckoutStepper';
import OrderList from './OrderList';
import DeliveryForm from './DeliveryForm';
import PaymentDetails from './PaymentDetails';
import { useContext, useEffect, useRef, useState } from 'react';
import { LocalContext } from '../localContext/LocalContext';

const Cart = () => {
  const { cart } = useContext(LocalContext);
  const [componentIndex, setComponentIndex] = useState(0);
  const formRef = useRef(null);

  const [buttonDisable, setButtonDisable] = useState({
    0: true,
    1: true,
    2: false,
  });

  let cartTotal = 0;
  let formatedCartTotal;

  (() => {
    Object.values(cart).map((productObj) => {
      cartTotal += productObj['prouductQuantity'] * productObj['productPrice'];
    });
    formatedCartTotal = new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 2,
    }).format(cartTotal);
  })();

  const componentArray = [
    <OrderList cartTotal={formatedCartTotal} setButtonDisable={setButtonDisable} />,
    <DeliveryForm formRef={formRef} setButtonDisable={setButtonDisable} />,
    <PaymentDetails cartTotal={formatedCartTotal} setButtonDisable={setButtonDisable} buttonDisable={buttonDisable} />,
    <OrderSuccess />,
  ];

  const checkoutProgressHandler = (action) => {
    if (componentIndex === 1) {
      if (!formRef.current.checkValidity()) {
        formRef.current[5].click();
        return;
      }
    }

    setComponentIndex((prev) => (prev < 3 ? prev + 1 : 0));
  };
  return (
    <div className="cart d-flex flex-column min-vh-100 px-0 position-relative aling-items-center">
      <div className="cartTop pt-3 px-3">
        {componentIndex !== 3 && (
          <CheckoutStepper componentIndex={componentIndex} setComponentIndex={setComponentIndex} />
        )}
      </div>
      <Container fluid={'md'} className="content-container d-flex flex-column">
        <div className="contentDiv w-100">{componentArray[componentIndex]}</div>

        <button
          disabled={buttonDisable[componentIndex]}
          className={`mt-auto mx-auto mb-2 checkout-progress-btn border border-0 text-center text-white p-3 rounded-4 cursor-pointer ${
            buttonDisable[componentIndex] && 'disable-button'
          }`}
          onClick={checkoutProgressHandler}
        >
          {componentIndex <= 2 ? `Procced (${componentIndex + 1}/3)` : 'View Order Details'}
        </button>
      </Container>
    </div>
  );
};

export default Cart;

const OrderSuccess = () => {
  return (
    <div className="order-success  d-flex flex-column align-items-center mt-auto">
      <img src="/icons/success-check.png" alt="" />
      <span className="fw-600">Your Order has been placed</span>
      <spam className="mt-2 sub-text text-muted">We will reach out to you shortly</spam>
    </div>
  );
};
