import { Link, useLoaderData } from "react-router-dom";
import ShopListItem from "./ShopListItem";
import { BASE_URL } from "../../utils/API";

const Shop = () => {
  const products = useLoaderData();
  console.log(products);

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
      <div className="col-lg-12 mb-5 mb-lg-0 py-5">
        <div className="row mb-3 py-5 align-items-center">
          <div className="col-lg-6 mb-2 mb-lg-0">
            <p className="text-sm text-muted mb-0">
              Showing - {products.length} results
            </p>
          </div>
          <div className="col-lg-6">
            <ul className="list-inline d-flex align-items-center justify-content-lg-end mb-0">
              <li className="list-inline-item text-muted me-3">
                <a className="reset-anchor p-0" href="#!">
                  <i className="fas fa-th-large"></i>
                </a>
              </li>
              <li className="list-inline-item text-muted me-3">
                <a className="reset-anchor p-0" href="#!">
                  <i className="fas fa-th"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <select
                  className="selectpicker"
                  data-customclass="form-control form-control-sm"
                >
                  <option value>Sort By</option>
                  <option value="default">Default sorting</option>
                  <option value="popularity">Popularity</option>
                  <option value="low-high">Price: Low to High</option>
                  <option value="high-low">Price: High to Low</option>
                </select>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          {products.map((product) => (
            <div key={product.id} className="col-xl-3 col-lg-4 col-sm-6">
              <ShopListItem product={product} />
            </div>
          ))}
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
    </>
  );
};

export const loader = async () => {
  const res = await fetch(`${BASE_URL}/products`);
  const data = await res.json();

  return data;
};

export default Shop;
