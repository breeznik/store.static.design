import Image from 'next/image';

const AutoSlider = () => {
  const bannerArray = [
    'Always Low Price',
    'Dedicated RelationShip Manager',
    'Multi Category Store',
    'Simplified learning',
  ];

  return (
    <section className="section-autoSlider">
      <div className="container-fluid h-100 w-100 overflow-hidden position-relative">
        <div
          className="auto-slider-row row h-100 align-items-center gap-5 flex-nowrap "
          style={{ width: 'fit-content' }}
        >
          {bannerArray.map((banner, index) => {
            return (
              <div
                className="col-auto me-5 d-flex gap-3 justify-content-center align-items-center overflow-hidden"
                key={index}
              >
                <Image src={`/auto-slider/image-${index + 1}.png`} alt="i" width={25} height={25}></Image>
                <div className="desc text-nowrap primary-color fw-600">{banner}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AutoSlider;
