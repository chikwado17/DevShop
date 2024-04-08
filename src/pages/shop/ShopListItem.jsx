import { Link } from "react-router-dom";

const ShopListItem = ({ product }) => {
  return (
    <>
      <div className="product text-center">
        <div className="mb-3 position-relative">
          <div className="badge text-white bg-"></div>
          <a className="d-block" href="#!">
            <img className="img-fluid w-100" src={product?.image} alt="..." />
          </a>
          <div className="product-overlay">
            <ul className="mb-0 list-inline">
              <li className="list-inline-item m-0 p-0">
                <button className="btn btn-sm btn-dark">Add to cart</button>
              </li>
            </ul>
          </div>
        </div>
        <h6>
          <a className="reset-anchor" href="#!">
            {product.title}
          </a>
        </h6>
        <p className="small text-muted">${product.price}</p>
      </div>
    </>
  );
};

export default ShopListItem;
