import { useEffect } from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';

const formObj = {
  address: '',
  pincode: Number,
  city: '',
  state: '',
  mobileno: Number,
};

const DeliveryForm = ({ formRef, setButtonDisable }) => {
  const formCheckker = () => {
    if (formRef.current.checkValidity() && formRef.current[4].value.length === 10) {
      setButtonDisable((prev) => {
        return {
          ...prev,
          1: false,
        };
      });
    } else {
      setButtonDisable((prev) => {
        return {
          ...prev,
          1: true,
        };
      });
    }
  };
  useEffect(() => {
    formCheckker();
  }, []);

  const FormOnChange = (e) => {
    formCheckker();
  };

  const submitHandler = (e) => {
    e.preventDefault();
    formObj.address = formRef.current[0].value;
    formObj.pincode = formRef.current[1].value;
    formObj.city = formRef.current[2].value;
    formObj.state = formRef.current[3].value;
    formObj.mobileno = formRef.current[4].value;
  };

  // const formOnChange = (e, formIndex) => {
  //   console.log(formRef);
  //   switch (formIndex) {
  //     case 1:
  //       if (e.target.value.length > 4) {
  //         formRef.current[formIndex].value = e.target.value.slice(0, 4);
  //         formRef.current[formIndex].setCustomValidity('pincode is limited to 4 Digits');
  //         formRef.current[formIndex].reportValidity();
  //       } else {
  //         formRef.current[formIndex].setCustomValidity('');
  //         formRef.current[formIndex].removeCustomeValidity

  //       }
  //       break;
  //     case 2:
  //     case 3:
  //       if (!/^[a-zA-Z]+$/.test(formRef.current[formIndex].value)) {
  //         formRef.current[formIndex].value = formRef.current[formIndex].value.replace(/[^a-zA-Z]/g, '');
  //         formRef.current[formIndex].setCustomValidity('Only Accepts String Value');
  //         formRef.current[formIndex].reportValidity();
  //       } else {
  //         formRef.current[formIndex].setCustomValidity('');
  //       }
  //       break;
  //     case 4:
  //       if (e.target.value.length > 9) {
  //         formRef.current[formIndex].value = e.target.value.slice(0, 10);
  //         formRef.current[formIndex].setCustomValidity('Mobile Number is limited to 10 Digits');
  //         formRef.current[formIndex].reportValidity();
  //       } else {
  //         formRef.current[formIndex].setCustomValidity('');
  //       }
  //   }
  // };

  const formOnChange = (e, formIndex) => {
    console.log(formRef);
    switch (formIndex) {
      case 1:
        if (e.target.value.length > 3) {
          formRef.current[formIndex].value = e.target.value.slice(0, 4);
        }
        break;
      case 2:
      case 3:
        if (!/^[a-zA-Z]+$/.test(formRef.current[formIndex].value)) {
          formRef.current[formIndex].value = formRef.current[formIndex].value.replace(/[^a-zA-Z]/g, '');
        }
        break;
      case 4:
        // if (!/^[^0-9]+$/.test(formRef.current[formIndex].value)) {
        //   formRef.current[formIndex].value = formRef.current[formIndex].value.replace(/[^0-9]/g, '');
        // }
        // if (e.target.value.length > 3) {
        //   formRef.current[formIndex].value = e.target.value.slice(0, 10);
        // }

        const inputValue = e.target.value;
        const sanitizedValue = inputValue.replace(/[^\d]/g, ''); // Remove non-digit characters
        formRef.current[formIndex].value = sanitizedValue;
        if (sanitizedValue.length > 10) {
          formRef.current[formIndex].value = sanitizedValue.slice(0, 10);
        }
    }
  };

  return (
    <div className="delivery-form mt-4">
      <div className="delivery-form-heading mb-4">Add Delivery Details</div>
      <Form
        ref={formRef}
        onChange={(e) => FormOnChange(e)}
        onSubmit={(e) => submitHandler(e)}
        className="d-flex flex-column gap-2"
      >
        <div className="mb-3 border-bottom border-dark border-1">
          <FloatingLabel controlId="Address" label="Address*">
            <Form.Control required className="border border-0 w-100 mb-2" type="text" placeholder="Address*" />
          </FloatingLabel>
        </div>
        <div className=" d-flex mb-3 mt-3 gap-3 ">
          <div className=" flex-grow-1 border-bottom">
            <FloatingLabel controlId="Pincode" label="Pincode">
              <Form.Control
                className=" border border-0 w-100 pincode mb-2"
                type="number"
                required
                onChange={(e) => formOnChange(e, 1)}
                placeholder="Pincode"
              />
            </FloatingLabel>
          </div>
          <div className=" flex-grow-1 border-bottom  ">
            <FloatingLabel controlId="City" label="City">
              <Form.Control
                onChange={(e) => formOnChange(e, 2)}
                className=" border border-0 w-100 City mb-2"
                type="text"
                placeholder="City"
                required
              />
            </FloatingLabel>
          </div>
          <div className=" flex-grow-1 border-bottom">
            <FloatingLabel controlId="State" label="State">
              <Form.Control
                onChange={(e) => formOnChange(e, 3)}
                className=" border border-0 w-100 state mb-2"
                type="text"
                placeholder="State"
                required
              />
            </FloatingLabel>
          </div>
        </div>

        <div className="mt-3 border-bottom border-dark">
          <FloatingLabel controlId="Mobile" label="Mobile no.">
            <Form.Control
              onChange={(e) => formOnChange(e, 4)}
              required
              className=" border border-0 w-100 pincode mb-2"
              type="number"
              minLength={'10'}
              placeholder="Mobile no."
            />
          </FloatingLabel>
        </div>

        <button className="d-none" type="submit"></button>
      </Form>
    </div>
  );
};

export default DeliveryForm;
