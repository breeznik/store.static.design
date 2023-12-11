/* eslint-disable @next/next/no-img-element */
import { useContext, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { LocalContext } from '../localContext/LocalContext';

const OrderList = ({ cartTotal, setButtonDisable }) => {
  const { cart } = useContext(LocalContext);

  useEffect(() => {
    if (Object.values(cart).length > 0) {
      setButtonDisable((prev) => {
        return {
          ...prev,
          0: false,
        };
      });
    } else {
      setButtonDisable((prev) => {
        return {
          ...prev,
          0: true,
        };
      });
    }
  }, [cart]);

  return (
    <div className="orderlist mt-4 h-100 position-relative d-flex flex-column">
      <div className="heading fw-600 mb-2">Order List</div>
      <Row className="product-cards">
        {Object.values(cart).length > 0 &&
          Object.values(cart).map((cartProductObj, index) => {
            return (
              <Col key={index} xs={12} className="card-col mb-4 mb-lg-3">
                <CartProductCard cartProductObj={cartProductObj} />
              </Col>
            );
          })}
      </Row>
      <div className="amountTotal-div rounded-4 px-3 py-4">
        <div className="charge-variations pb-3">
          <div className="charge d-flex justify-content-between">
            <span className="charge-heading">Sub total</span>
            <span className="charge-amount inter-font">{cartTotal}</span>
          </div>
        </div>
        <div className="TotalPayable d-flex justify-content-between mt-3 mb-3">
          <span className="heading">Total payable</span>
          <span className="totalAmount fw-600 inter-font">{cartTotal}</span>
        </div>
        <span className="note">Save another 1000 by applying a coupon on payment page</span>
      </div>
    </div>
  );
};
export default OrderList;

const CartProductCard = ({ cartProductObj }) => {
  const { CartFunctions, Products } = useContext(LocalContext);
  console.log('printing products ', Products);
  return (
    <div className="card d-flex flex-row gap-3 gap-md-4 p-2 p-md-4 rounded-4 border position-relative">
      <div className="cardTop aj px-2 py-4">
        <img
          className="fill"
          src={Products[cartProductObj.productTypeIndex]?.Products[cartProductObj.productId].productImg}
          alt="product"
        />
      </div>
      <div className="cardbody d-flex flex-column justify-content-sm-evenly gap-2 gap-md-3">
        <span className="product-name">Faber HOOD PLUTO PB BF BK 60 Wall Mounted Chimney</span>
        {Products[cartProductObj.productTypeIndex]?.highLightedNotes.map((noteObj, index) => {
          return (
            <span key={index} className="higlightedNotes fw-600 py-1 px-2">
              {noteObj.note}
            </span>
          );
        })}
        <div className="body-bottom d-flex align-items-center justify-content-between gap-2">
          <div className="price d-flex align-items-center gap-1">
            <span className="currentPrice fw-600">
              ₹{Products[cartProductObj.productTypeIndex]?.Products[cartProductObj.productId].currentPrice}
            </span>
            <span className="previousePrice text-decoration-line-through">
              ₹{Products[cartProductObj.productTypeIndex]?.Products[cartProductObj.productId].prevPrice}
            </span>
          </div>
          <div className="quntity d-flex rounded-2 overflow-hidden">
            <button className="bg-white " onClick={() => CartFunctions(cartProductObj.productId, 'DEC')}>
              <img src="/icons/minus.png" alt="icons" />
            </button>
            <span className="quntity-number text-white aj px-1">{cartProductObj['prouductQuantity']}</span>
            <button className="bg-white" onClick={() => CartFunctions(cartProductObj.productId, 'INC')}>
              <img src="/icons/plus.png" alt="icons" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

//vertical cards on lg
// const CartProductCard = ({ cartProductObj }) => {
//   const { CartFunctions, Products } = useContext(LocalContext);
//   console.log('printing products ', Products);
//   return (
//     <div className="card d-flex flex-row flex-md-column gap-3 gap-md-4 p-2 rounded-4 align-items-md-center">
//       <div className="cardTop aj px-2 py-4 w-md-100">
//         <img
//           className="fill"
//           src={Products[cartProductObj.productTypeIndex]?.Products[cartProductObj.productId].productImg}
//           alt="product"
//         />
//       </div>
//       <div className="cardbody d-flex flex-column justify-content-sm-evenly gap-2 gap-md-3">
//         <span className="product-name">Faber HOOD PLUTO PB BF BK 60 Wall Mounted Chimney</span>
//         {Products[cartProductObj.productTypeIndex]?.highLightedNotes.map((noteObj, index) => {
//           return (
//             <span key={index} className="higlightedNotes fw-600 py-1 px-2">
//               {noteObj.note}
//             </span>
//           );
//         })}
//         <div className="body-bottom d-flex align-items-center justify-content-between gap-2">
//           <div className="price d-flex align-items-center gap-1">
//             <span className="currentPrice fw-600">
//               ₹{Products[cartProductObj.productTypeIndex]?.Products[cartProductObj.productId].currentPrice}
//             </span>
//             <span className="previousePrice text-decoration-line-through">
//               ₹{Products[cartProductObj.productTypeIndex]?.Products[cartProductObj.productId].prevPrice}
//             </span>
//           </div>
//           <div className="quntity d-flex rounded-2 overflow-hidden ">
//             <button className="bg-white " onClick={() => CartFunctions(cartProductObj.productId, 'DEC')}>
//               <img src="/icons/minus.png" alt="icons" />
//             </button>
//             <span className="quntity-number text-white aj px-1">{cartProductObj['prouductQuantity']}</span>
//             <button className="bg-white" onClick={() => CartFunctions(cartProductObj.productId, 'INC')}>
//               <img src="/icons/plus.png" alt="icons" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
