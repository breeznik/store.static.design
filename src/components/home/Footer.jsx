'use client';

import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <section className="footer-section position-relative d-flex justify-content-center">
      <Container className="contactUs-container rounded-3 text-white d-none d-lg-flex  position-absolute start-50  translate-middle align-items-center justify-content-between">
        <span>
          Find Building Material for your next <br /> construction project!
        </span>
        <button className="primary-button">Contact Us</button>
      </Container>
      <div className="footer-div mt-auto d-flex  flex-wrap ">
        <div className="footer-main-logo d-flex flex-column">
          <img src="/genral/logo.png" alt="image" />
          <span className="w-100 mt-2 mt-md-0">Copyright © 2023 Infraequity Technologies Private Limited</span>
        </div>
        <div className="footer-pages  col-auto d-flex flex-column">
          <span className="text-nowrap">Home</span>
          <span className="text-nowrap">About Us</span>
          <span className="text-nowrap">Partner with Us</span>
          <span className="text-nowrap">Careers</span>
          <span className="text-nowrap">Contact Us</span>
        </div>
        <div className="footer-pages  col-auto d-flex flex-column ">
          <span className="text-nowrap">Privacy Policy</span>
          <span className="text-nowrap">Terms & Conditions</span>
          <span className="text-nowrap">Returns Policy</span>
          <span className="text-nowrap">Shipping & Delivery Policy</span>
          <span className="text-nowrap">Terms of Trade</span>
        </div>

        <div className=" col-auto d-flex flex-column gap-3 ">
          <div className="footer-contact-heading">Contact Us</div>
          <div className="contact-mediums">
            <div className="contact-medium">
              <img className="me-2" src="/footer-contact/call-calling.png" alt="icon" />
              <span>+91 8070880707</span>
            </div>
            <div className="contact-medium">
              <img className="me-2" src="/footer-contact/call-calling.png" alt="icon" />
              <span>Marketing: marketing@mistry.store</span>
            </div>
            <div className="contact-medium">
              <img className="me-2" src="/footer-contact/sms-edit.png" alt="icon" />
              <span>Sales: sales@mistry.store</span>
            </div>
            <div className="contact-medium">
              <img className="me-2" src="/footer-contact/location.png" alt="icon" />
              <span>Plot no 24, CRPF Road, Sector 61, Gurugram</span>
            </div>
            <div className="social-icon d-flex gap-3 pt-2">
              <img src="/footer-contact/social-icons/instagram.png" alt="" />
              <img src="/footer-contact/social-icons/instagram.png" alt="" />
              <img src="/footer-contact/social-icons/instagram.png" alt="" />
              <img src="/footer-contact/social-icons/instagram.png" alt="" />
              <img src="/footer-contact/social-icons/instagram.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
