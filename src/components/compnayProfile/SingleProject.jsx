/* eslint-disable @next/next/no-img-element */
'use client';
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import MediaGallary from './mediaGallary';
import Link from 'next/link';

const SingleProject = () => {
  const [gallaryPreview, setGallaryPreview] = useState(true);

  return (
    <div className="single-project-wrapper h-100">
      {gallaryPreview && (
        <>
          <div className="cover-img overflow-hidden mb-1 w-100">
            <img
              src="https://s3-alpha-sig.figma.com/img/93d5/d294/c7fcbc1fd3679097d53c817b67a59881?Expires=1697414400&Signature=G8lfNWIEqxbPlsdjXgqksPvhFolNfdH4rBQfkEcSExkl2nEDDjWsAOJ36GFgHgkYV5qbwNHk8tO-zzz7TuzKKu1wmM6y~sL1265KHyYT-EVXk7uI608tRD7U0TuTX6THpogV0PukErEykQlFQyTFpQjPBAAnlWwTNk9ThCe-JKvRLtF1s~leuqijLN2F3fnwr0404qWYeTZ4f78f4hxrTpQgTeEAUdfleQVysziqcWwY9fd-msIqQ2f~hQtDGYcQwsSc0B9hBLpdfePzqEwJQ-Z35W6CoVBSfoOEo5W50VFMhM36NyakDCcpIhaklv8bNLsb-pl6FyUvzqARdRXYAA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt="head-image"
            />
            <Link href={'/profile'} className="backarrow position-absolute cursor-pointer">
              <img src="/company-profile/icons/back-arrow.png" alt="" />
            </Link>
          </div>
          <Container>
            <div className="project-Details mt-2 d-flex flex-column gap-3">
              <div className="top-details bg-white fs-13 ">
                <div className="projectName fw-600 fs-18 mb-2">Arpit and Sunita Home Decor Villa</div>
                <div className="location mb-2 text-muted">
                  <img className="me-2" src="/company-profile/icons/location.png" alt="icon" />
                  DLF Phase II
                </div>
                <div className="subDetails mb-3 text-muted">
                  <img className="me-2" src="/company-profile/icons/calendar.png" alt="icon" />3 months
                </div>
              </div>

              <div className="projectInfo bg-white">
                <span className="heading fw-600">Project Info</span>
                <p className="fs-12">
                  The project went on for a duration of 4 months in which we gave the handover of the entire Interior
                  Design of a 3BHK Flat to the owners who were really happy with the design and handover
                </p>
              </div>
              <MediaGallary gallaryPreview={gallaryPreview} setGallaryPreview={setGallaryPreview} />
            </div>
          </Container>
        </>
      )}
      {!gallaryPreview && <MediaGallary gallaryPreview={gallaryPreview} setGallaryPreview={setGallaryPreview} />}
    </div>
  );
};

export default SingleProject;
