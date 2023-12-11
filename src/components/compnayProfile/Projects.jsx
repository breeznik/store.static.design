/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';

const Projects = ({ ProjectPreview, setProjectPreview }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const router = useRouter();
  return (
    <div className="project-component">
      {!ProjectPreview && (
        <img
          onClick={() => setProjectPreview((prev) => !prev)}
          className="mb-3 cursor-pointer"
          src="/company-profile/icons/back-arrow.png"
          alt="icon"
        />
      )}
      <div className="preview-mode mb-3">
        <div className="d-flex justify-content-between">
          <span className="projectCount fw-600">58 projects</span>
          {ProjectPreview && (
            <span
              className="viewAll fw-600 primary-color cursor-pointer"
              onClick={() => setProjectPreview((prev) => !prev)}
            >
              View All
            </span>
          )}
        </div>
      </div>

      <Row className="project-row d-flex justify-content-center justify-content-lg-start">
        {[...'-'.repeat(ProjectPreview ? 4 : 20)].map((dash, index) => {
          return (
            <Col key={index} className="project-col col-auto pb-3">
              <div
                className="project-card overflow-hidden p-1 border d-flex align-items-center"
                onClick={() => router.push('/profile/1')}
              >
                <div className="content position-relative overflow-hidden">
                  <img className="background-img" src="/company-profile/project.png" alt="" />
                  <div className="project-details position-absolute p-2 fw-600">
                    <div className="d-flex justify-content-between">
                      <span className="mediaCount">15 photos</span>
                      <div className="projectCompletionStatus px-2 rounded-pill">onTime</div>
                    </div>
                    <div className="projectName">Arpit and Sunita Home Decor Villa</div>
                  </div>
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default Projects;
