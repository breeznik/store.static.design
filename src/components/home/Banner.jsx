const Banner = (props) => {
  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div
                className={`get-estimate-box d-flex align-items-center justify-content-center justify-content-md-start ${
                  props.gradient && 'banner-gradient-2'
                } `}
              >
                <div
                  className={`w-50 text-end d-none d-md-inline`}
                  style={props.marginRight && { marginRight: '98px' }}
                >
                  <img src={props?.img} alt="image" className="img-fluid" />
                </div>
                <div className="w-xs-100 w-md-50 p-4 pe-md-4 p-lg-0">
                  <div className="text-center text-md-end">{props.children}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
