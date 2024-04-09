import { useDispatch } from "react-redux";
import {
  incrementCartQuantity,
  decrementCartQuantity,
  deleteCart,
} from "./cartSlice";

const CartTable = ({ cartItem }) => {
  const dispatch = useDispatch();

  return (
    <tr>
      <th className="ps-0 py-3 border-light" scope="row">
        <div className="d-flex align-items-center">
          <a
            className="reset-anchor d-block animsition-link"
            href="detail.html"
          >
            <img src={cartItem.img} alt="..." width="70" />
          </a>
          <div className="ms-3">
            <strong className="h6">
              <a className="reset-anchor animsition-link" href="#!">
                {cartItem.title}
              </a>
            </strong>
          </div>
        </div>
      </th>
      <td className="p-3 align-middle border-light">
        <p className="mb-0 small">${cartItem.price}</p>
      </td>
      <td className="p-3 align-middle border-light">
        <div className="border d-flex align-items-center justify-content-between px-3">
          <span className="small text-uppercase text-gray headings-font-family">
            Quantity
          </span>
          <div className="quantity">
            <button
              onClick={() =>
                dispatch(decrementCartQuantity(cartItem.productId))
              }
              className="dec-btn p-0"
            >
              <i className="fas fa-caret-left"></i>
            </button>
            <input
              className="form-control form-control-sm border-0 shadow-0 p-0"
              type="text"
              value={cartItem.quantity}
              onChange={() => "setValue"}
            />
            <button
              onClick={() =>
                dispatch(incrementCartQuantity(cartItem.productId))
              }
              className="inc-btn p-0"
            >
              <i className="fas fa-caret-right"></i>
            </button>
          </div>
        </div>
      </td>
      <td className="p-3 align-middle border-light">
        <p className="mb-0 small">${cartItem.totalPrice.toFixed(2)}</p>
      </td>
      <td className="p-3 align-middle border-light">
        <a
          onClick={(e) => {
            e.preventDefault();
            dispatch(deleteCart(cartItem.productId));
          }}
          className="reset-anchor"
          href="#!"
        >
          <i className="fas fa-trash-alt small text-muted"></i>
        </a>
      </td>
    </tr>
  );
};

export default CartTable;
