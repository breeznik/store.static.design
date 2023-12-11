/* eslint-disable @next/next/no-img-element */
import React, { useRef, useState } from 'react';
import { Modal } from 'react-bootstrap';

const ContactForm = () => {
  const [show, setShow] = useState(false);
  const formRef = useRef();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const submitHandler = (e) => {
    e.preventDefault();
    if (formRef.current[2].value.length < 10) {
      alert('Movile number to be of 10 Digits');
    }
    if (formRef.current.checkValidity() && formRef.current[2].value.length === 10) {
      handleClose();
    }
  };

  const formOnChange = (e, formIndex) => {
    console.log(formRef.current[formIndex]);
    console.log(formRef);
    switch (formIndex) {
      case 2:
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
    <div className="ContactForm flex-column d-flex justify-content-center align-items-center">
      <img className="mb-2" src="/company-profile/contact.png" alt="icon" />
      <span className="mb-3">Sounds good? Book an appointment and discuss the details of your project</span>
      <button className="border-0 text-white fw-600 p-3 rounded-4 w-100" onClick={handleShow}>
        <img className="me-2" src="/company-profile/icons/calendar-search.png" alt="icon" />
        Book Appointment
      </button>
      {show && (
        <Modal className="modal" show={show}>
          <div className="contact-form-wrapper border text-dark p-2">
            <form
              ref={formRef}
              onSubmit={(e) => submitHandler(e)}
              className="d-flex flex-column gap-3 border rounded-1 p-3"
            >
              <span className="contact-form-heading fw-600 text-start">
                Contact j Design Group - Interior Designers Miami - Modern
              </span>
              <input required type="email" placeholder="Email" />
              <input required type="text" placeholder="Your name" />
              <input
                minLength="10"
                required
                onChange={(e) => formOnChange(e, 2)}
                type="number"
                placeholder="Phone number"
              />
              <input type="text" placeholder="City,state" />
              <textarea required name="message" placeholder="Message" cols="30" rows="5"></textarea>
              <button type="submit" className="border formbutton py-2 text-center rounded-2">
                Send Message
              </button>
              <button onClick={handleClose} className="border formbutton py-2 text-center rounded-2">
                Close Form
              </button>
            </form>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default ContactForm;
