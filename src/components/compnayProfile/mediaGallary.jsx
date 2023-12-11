/* eslint-disable @next/next/no-img-element */
import React, { useRef, useState } from 'react';
import { Col, Row } from 'react-bootstrap';

const MediaGallary = ({ gallaryPreview, setGallaryPreview }) => {
  const [currentMedia, setCurrentMedia] = useState(0);
  const rowRef = useRef();

  const wheel = (e) => {
    console.log(rowRef);
    rowRef.current.scrollLeft = rowRef.current.scrollLeft + e.deltaY;
    console.log(e.target.scrollLeft, e.deltaY);
  };

  return (
    <div className="media-gallary-wrapper bg-white overflow-hidden">
      {gallaryPreview ? (
        <>
          <div className="previewMode mb-3">
            <div className="heading fw-600 mb-1">Project Pictures</div>
            <div className="gallary-state fs-12">
              <span className="photoCount">{`14 Photo(s)`}</span>,<span>{` 1 Video(s)`}</span>
            </div>
          </div>
          <Row className="media-row">
            {[...'test'.repeat(5), 'video'].map((string, index) => {
              return (
                <Col
                  xs={4}
                  sm={3}
                  md={2}
                  key={index}
                  className="media-col 
              d-flex justify-content-center mb-3 px-2
                
            "
                >
                  <div
                    className="media-wrapper overflow-hidden rounded-3 cursor-pointer"
                    onClick={() => setGallaryPreview(false)}
                  >
                    <img
                      src="https://s3-alpha-sig.figma.com/img/51d9/ae3c/d80d9025f93e0f624fa6ccee24ca5eee?Expires=1697414400&Signature=G-W1TdQ2p~G3Pa7JHqTI7QL8gipTYFotbf0QjSeV3dHeTKLUgJd6Pd9q~Wfn6IzPfpS2ZKjTUc2WgAySsEQ-HJOsr-CulLUhTIc23WRHlJHKW8PFYfsWvDL9pfMQLm3VCTMk6FCoGn99x2IAl-zXrf-6ZaktvJ8akATiIEujHfvmhP6K6jzvuLUZgqZwwp4tgMDJSWrDcqs0WGKjEj~LM-2BfigjJhvn-eE8iBUM0r-OWxkjQbgoQdTizTjJpJq40Iifot4c34exxB5k0oEkiloRJC8sEpgZgEccpufmR037r9PF57HGJNYtSFZcoHHe81dC3X6I0z61SiNyhjAR9g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                      alt=""
                    />
                  </div>
                </Col>
              );
            })}
          </Row>
        </>
      ) : (
        <div className="fullGallary bg-black min-vh-100 overflow-hidden">
          <div className="back-arrow  position-absolute cursor-pointer" onClick={() => setGallaryPreview(true)}>
            <img src="/company-profile/icons/back-arrow-white.png" alt="" />
          </div>
          <div className="text-white h-100 content d-flex align-items-center justify-content-center">
            {currentMedia % 2 === 0 ? (
              <img
                src="https://s3-alpha-sig.figma.com/img/51d9/ae3c/d80d9025f93e0f624fa6ccee24ca5eee?Expires=1697414400&Signature=G-W1TdQ2p~G3Pa7JHqTI7QL8gipTYFotbf0QjSeV3dHeTKLUgJd6Pd9q~Wfn6IzPfpS2ZKjTUc2WgAySsEQ-HJOsr-CulLUhTIc23WRHlJHKW8PFYfsWvDL9pfMQLm3VCTMk6FCoGn99x2IAl-zXrf-6ZaktvJ8akATiIEujHfvmhP6K6jzvuLUZgqZwwp4tgMDJSWrDcqs0WGKjEj~LM-2BfigjJhvn-eE8iBUM0r-OWxkjQbgoQdTizTjJpJq40Iifot4c34exxB5k0oEkiloRJC8sEpgZgEccpufmR037r9PF57HGJNYtSFZcoHHe81dC3X6I0z61SiNyhjAR9g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt=""
              />
            ) : (
              <div className="video-wrapper">
                {/* <iframe
                  className="rounded-4 video"
                  src={`https://www.youtube.com/embed/D9GGU4f7Ttk`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Embedded youtube"
                /> */}
                <video className="video" controls autoPlay>
                  <source src="/company-profile/sample-video.mp4" type="video/mp4" />
                </video>
              </div>
            )}
          </div>
          <Row
            ref={rowRef}
            onWheel={wheel}
            className="fullmodeRow flex-nowrap m-0 position-absolute w-100 overflow-x-scroll px-3"
          >
            {[...'test'.repeat(60)].map((string, index) => {
              return (
                <Col key={index} className="fullmodeCol col-auto px-2">
                  <div
                    className={`full-mode-media cursor-pointer ${index === currentMedia ? 'active' : 'in-active'}`}
                    onClick={() => setCurrentMedia(index)}
                  >
                    <img
                      draggable={false}
                      className="rounded-3"
                      src="https://s3-alpha-sig.figma.com/img/51d9/ae3c/d80d9025f93e0f624fa6ccee24ca5eee?Expires=1697414400&Signature=G-W1TdQ2p~G3Pa7JHqTI7QL8gipTYFotbf0QjSeV3dHeTKLUgJd6Pd9q~Wfn6IzPfpS2ZKjTUc2WgAySsEQ-HJOsr-CulLUhTIc23WRHlJHKW8PFYfsWvDL9pfMQLm3VCTMk6FCoGn99x2IAl-zXrf-6ZaktvJ8akATiIEujHfvmhP6K6jzvuLUZgqZwwp4tgMDJSWrDcqs0WGKjEj~LM-2BfigjJhvn-eE8iBUM0r-OWxkjQbgoQdTizTjJpJq40Iifot4c34exxB5k0oEkiloRJC8sEpgZgEccpufmR037r9PF57HGJNYtSFZcoHHe81dC3X6I0z61SiNyhjAR9g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                      alt=""
                    />
                  </div>
                </Col>
              );
            })}
          </Row>
        </div>
      )}
    </div>
  );
};

export default MediaGallary;
