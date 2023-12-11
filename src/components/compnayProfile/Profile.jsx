/* eslint-disable @next/next/no-img-element */
'use client';
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Projects from './Projects';
import ContactForm from './ContactForm';

const Profile = () => {
  const [ProjectPreview, setProjectPreview] = useState(true);

  return (
    <div className="company-profile  overflow-hidden position-relative">
      {ProjectPreview ? (
        <div className="head w-100">
          <div className="headCover w-100">
            <img src="/company-profile/cover.jpg" alt="company-profile-cover" />
          </div>
          <Container>
            <div className="company-details d-flex gap-3 flex-column">
              <div className="details-section pb-3 pt-2">
                <div className="profile-top position-relative d-flex mb-2">
                  <div className="company-profile position-absolute ">
                    <img src="/company-profile/company-profile.png" alt="cp" />
                  </div>
                  <div className="company-state ms-auto">
                    <div className="row1 d-flex gap-3 pb-2">
                      <div className="state-wrapper flex-grow-1 d-flex flex-column align-items-center gap-1">
                        <h5 className="state-data fw-600">105</h5>
                        <span className="state-name">Project</span>
                      </div>
                      <div className="state-wrapper flex-grow-1 d-flex flex-column align-items-center gap-1">
                        <h5 className="state-data fw-600">7y</h5>
                        <span className="state-name">Experience</span>
                      </div>
                      <div className="state-wrapper flex-grow-1 d-flex flex-column align-items-center gap-1">
                        <h5 className="state-data fw-600">8</h5>
                        <span className="state-name">Team Size</span>
                      </div>
                    </div>

                    <div className="row2 pt-1">
                      <button className="border-0 px-4 py-2 me-2 primary-color">View Work</button>
                      <button className="ms-1 border-0 px-4 py-2 primary-color">Book a Call</button>
                    </div>
                  </div>
                </div>

                <div className="company-name mt-1 mb-2">
                  <h6 className="fw-600">Endless interior Design World</h6>
                  <div className="person-profile">
                    <img className="me-1" src="/company-profile/person.png" alt="icon" />
                    <span>Ashish Kumar</span>
                  </div>
                </div>

                <div className="sub-details d-flex text-nowrap mt-1 justify-content-lg-between">
                  <div className="d-flex flex-column me-5 gap-2">
                    <span className="text-start flex-grow-1 ">
                      <img className="me-1" src="/company-profile/icons/path.png" alt="icon" />
                      Interior Design Firm
                    </span>

                    <span className="text-start flex-grow-1  ">
                      <img className="me-1" src="/company-profile/icons/location.png" alt="icon" />
                      Gurgaon
                    </span>
                  </div>

                  <div className="d-flex flex-column ms-3 gap-2">
                    <span className=" text-start flex-grow-1 ">
                      <img className="me-1" src="/company-profile/icons/card-pos.png" alt="icon" />
                      Range : 1L - 1.5L
                    </span>
                    <span className="text-start flex-grow-1 primary-color cursor-pointer-event">
                      <img className="me-1" src="/company-profile/icons/call-calling.png" alt="icon" />
                      Click here to view
                    </span>
                  </div>
                </div>
              </div>

              <div className="details-section py-3">
                <h6 className="fw-600">Projects Society Name</h6>
                <ul>
                  <li>Suncity, sector 14</li>
                  <li>M3M marina, sector 68</li>
                  <li>Sri Vardaman, sector 19</li>
                </ul>
              </div>
              <div className="details-section py-3">
                <h6 className="fw-600">About us</h6>
                <p>
                  End your quest with high style and utra-modern signature modular home interior with ASENCE’s creative
                  fusions.
                </p>
              </div>
              <div className="details-section py-3">
                <h6 className="fw-600">Services Provided</h6>
                <p>
                  Interior Designs, 3D Rendering, Basement Design, Bathroom Design, Custom Furniture, Home Design,
                  Bedroom Design, Color Consulting, Custom Blinds & Shades
                </p>
              </div>
              <div className="details-section py-3">
                <h6 className="fw-600">Awards and Recognition</h6>
                <ul>
                  <li>Best Designer award</li>
                  <li>Certification of Auto cad</li>
                </ul>
              </div>

              <div className="details-section py-3">
                <h6 className="fw-600">{`Talk to people who availed services from {{firmName}}`}</h6>
                <ul className="mb-4">
                  <li>Anil took service of complete interiors for 2BHK flat - Get Anil’s Review</li>
                  <li>Arjun took service of home renovation for 3BHK apartment. - Get Arjun’s Review</li>
                </ul>

                <Projects ProjectPreview={ProjectPreview} setProjectPreview={setProjectPreview} />
                <ContactForm />
              </div>
            </div>
          </Container>
        </div>
      ) : (
        <Container className="border py-3">
          <Projects ProjectPreview={ProjectPreview} setProjectPreview={setProjectPreview} />
        </Container>
      )}
    </div>
  );
};

export default Profile;
