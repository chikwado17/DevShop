const ShippingDetails = () => {
  return (
    <>
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row text-center gy-3">
            <div className="col-lg-4">
              <div className="d-inline-block">
                <div className="d-flex align-items-end">
                  <svg className="svg-icon svg-icon-big svg-icon-light"></svg>
                  <div className="text-start ms-3">
                    <h6 className="text-uppercase mb-1">Free shipping</h6>
                    <p className="text-sm mb-0 text-muted">
                      Free shipping worldwide
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="d-inline-block">
                <div className="d-flex align-items-end">
                  <svg className="svg-icon svg-icon-big svg-icon-light"></svg>
                  <div className="text-start ms-3">
                    <h6 className="text-uppercase mb-1">24 x 7 service</h6>
                    <p className="text-sm mb-0 text-muted">
                      Free shipping worldwide
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="d-inline-block">
                <div className="d-flex align-items-end">
                  <svg className="svg-icon svg-icon-big svg-icon-light"></svg>
                  <div className="text-start ms-3">
                    <h6 className="text-uppercase mb-1">Festivaloffers</h6>
                    <p className="text-sm mb-0 text-muted">
                      Free shipping worldwide
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container p-0">
          <div className="row gy-3">
            <div className="col-lg-6">
              <h5 className="text-uppercase">Let's be friends!</h5>
              <p className="text-sm text-muted mb-0">
                Nisi nisi tempor consequat laboris nisi.
              </p>
            </div>
            <div className="col-lg-6">
              <form action="#">
                <div className="input-group">
                  <input
                    className="form-control form-control-lg"
                    type="email"
                    placeholder="Enter your email address"
                    aria-describedby="button-addon2"
                  />
                  <button
                    className="btn btn-dark"
                    id="button-addon2"
                    type="submit"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShippingDetails;
