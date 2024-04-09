import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  getCurrentQuantityById,
  incrementCartQuantity,
  decrementCartQuantity,
} from "../../features/cart/cartSlice";

const ShopListItem = ({ product }) => {
  const cart = useSelector((state) =>
    state.carts.cart.find((c) => c.productId === product.id)
  );

  const currentCartQuantity = useSelector(getCurrentQuantityById(product.id));

  const isInCart = currentCartQuantity > 0;

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    const newItem = {
      productId: product.id,
      title: product.title,
      img: product.image,
      quantity: 1,
      price: product.price,
      totalPrice: product.price * 1, // quantity is set to 1 by default
    };

    dispatch(addToCart(newItem));
  };

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
                {!isInCart && (
                  <button
                    onClick={handleAddToCart}
                    className="btn btn-sm btn-dark"
                  >
                    Add to cart
                  </button>
                )}
                {isInCart && (
                  <div
                    style={{ backgroundColor: "#000" }}
                    className="border d-flex align-items-center justify-content-between px-3"
                  >
                    <span className="small text-uppercase text-gray headings-font-family">
                      Quantity
                    </span>
                    <div className="quantity">
                      <button
                        onClick={() =>
                          dispatch(decrementCartQuantity(cart?.productId))
                        }
                        className="dec-btn p-0"
                      >
                        <i
                          style={{ color: "#fff" }}
                          className="fas fa-caret-left"
                        ></i>
                      </button>
                      <input
                        className="form-control form-control-sm border-0 shadow-0 p-0"
                        type="text"
                        value={cart.quantity}
                        onChange={() => "setValue"}
                      />
                      <button
                        onClick={() =>
                          dispatch(incrementCartQuantity(cart?.productId))
                        }
                        className="inc-btn p-0"
                      >
                        <i
                          style={{ color: "#fff" }}
                          className="fas fa-caret-right"
                        ></i>
                      </button>
                    </div>
                  </div>
                )}
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
