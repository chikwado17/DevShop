import { Link } from "react-router-dom";
import product1 from "../../assets/img/product-1.jpg";

const ProductsListItem = () => {
  return (
    <>
      <section className="py-5">
        <header>
          <p className="small text-muted small text-uppercase mb-1">
            Made the hard way
          </p>
          <h2 className="h5 text-uppercase mb-4">Top trending products</h2>
        </header>
        <div className="row">
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <div className="product text-center">
              <div className="position-relative mb-3">
                <div className="badge text-white bg-"></div>
                <a className="d-block" href="detail.html">
                  <img className="img-fluid w-100" src={product1} alt="..." />
                </a>
                <div className="product-overlay">
                  <ul className="mb-0 list-inline">
                    <li className="list-inline-item m-0 p-0">
                      <Link className="btn btn-sm btn-dark" to={"cart"}>
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
      </section>
    </>
  );
};

export default ProductsListItem;
