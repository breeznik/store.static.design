/* eslint-disable @next/next/no-img-element */
'use client';
import { Container } from 'react-bootstrap';

const Store_ContactUS = () => {
  return (
    <Container className="saction-contact-footer  w-100 px-3 d-flex flex-column gap-3 mb-4">
      <div className="contact-headings fw-600  align-items-center">
        <span className="get-in-touch me-1">Get in Touch </span> <br className="d-lg-none" />
        <div className="d-lg-none">to know more</div>
      </div>
      <div className="contact-mediums primary-color d-flex flex-column gap-2">
        <div className="contact-medium d-flex align-items-center">
          <img className="me-3" src="/red-contact-icon/call-calling.png" alt="icon" />
          <span>+91 8070880707</span>
        </div>
        <div className="contact-medium d-flex align-items-center">
          <img className="me-3" src="/red-contact-icon/call-calling.png" alt="icon" />
          <span>Marketing: marketing@mistry.store</span>
        </div>
        <div className="contact-medium d-flex align-items-center">
          <img className="me-3" src="/red-contact-icon/sms-edit.png" alt="icon" />
          <span>Sales: sales@mistry.store</span>
        </div>
        <div className="contact-medium d-flex align-items-center">
          <img className="me-3" src="/red-contact-icon/location.png" alt="icon" />
          <span>Plot no 24, CRPF Road, Sector 61, Gurugram</span>
        </div>
      </div>
    </Container>
  );
};

export default Store_ContactUS;
