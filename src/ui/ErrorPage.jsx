import { Link, useRouteError, useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  const error = useRouteError();
  return (
    <section
      style={{ marginTop: "-150px" }}
      className="min-vh-100 d-flex justify-content-center align-items-center"
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="text-center">
              <h2 className="d-flex justify-content-center align-items-center gap-2 mb-4">
                <span className="display-1 fw-bold">4</span>
                <span className="display-1 fw-bold text-danger">0</span>
                <span className="display-1 fw-bold bsb-flip-h">4</span>
              </h2>
              <h3 className="h2 mb-2">
                Oops! {error.message || error.data} ⁉️
              </h3>

              <button
                className="btn bsb-btn-5xl btn-dark rounded-pill px-5 fs-6 m-0"
                onClick={() => navigate(-1)}
                role="button"
              >
                Go Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
