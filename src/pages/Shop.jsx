import { Link } from "react-router-dom";
import product1 from "../assets/img/product-1.jpg";

const Shop = () => {
  return (
    <>
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row px-4 px-lg-5 py-lg-4 align-items-center">
            <div className="col-lg-6">
              <h1 className="h2 text-uppercase mb-0">Shop</h1>
            </div>
            <div className="col-lg-6 text-lg-end">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-lg-end mb-0 px-0 bg-light">
                  <li className="breadcrumb-item">
                    <Link className="text-dark" to={"/"}>
                      Home
                    </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Shop
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>

      <div className="col-lg-9 order-1 order-lg-2 mb-5 mb-lg-0">
        <div className="row mb-3 align-items-center"></div>
        <div className="row">
          <div className="col-lg-4 col-sm-6">
            <div className="product text-center">
              <div className="mb-3 position-relative">
                <div className="badge text-white bg-"></div>
                <a className="d-block" href="detail.html">
                  <img className="img-fluid w-100" src={product1} alt="..." />
                </a>
                <div className="product-overlay">
                  <ul className="mb-0 list-inline">
                    <li className="list-inline-item m-0 p-0">
                      <Link to={"/cart"} className="btn btn-sm btn-dark">
                        Add to cart
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <h6>
                <a className="reset-anchor" href="#!">
                  Kui Ye Chen’s AirPods
                </a>
              </h6>
              <p className="small text-muted">$250</p>
            </div>
          </div>
        </div>
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-center justify-content-lg-end">
            <li className="page-item mx-1">
              <a className="page-link" href="#!" aria-label="Previous">
                <span aria-hidden="true">«</span>
              </a>
            </li>
            <li className="page-item mx-1 active">
              <a className="page-link" href="#!">
                1
              </a>
            </li>
            <li className="page-item mx-1">
              <a className="page-link" href="#!">
                2
              </a>
            </li>
            <li className="page-item mx-1">
              <a className="page-link" href="#!">
                3
              </a>
            </li>
            <li className="page-item ms-1">
              <a className="page-link" href="#!" aria-label="Next">
                <span aria-hidden="true">»</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Shop;
