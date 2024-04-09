import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Success.css";
import { Link } from "react-router-dom";
import { clearOrders } from "../cart/cartSlice";

const SuccessPage = () => {
  const orders = useSelector((state) => state.carts.orders);
  const totalAmount = orders[0].totalPurchaseAmount + 100;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClearOrder = () => {
    dispatch(clearOrders());
    navigate("/");
  };

  return (
    <>
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row px-4 px-lg-5 py-lg-4 align-items-center">
            <div className="col-lg-6">
              <h1 className="h2 text-uppercase mb-0">Order Completed</h1>
            </div>
            <div className="col-lg-6 text-lg-end">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-lg-end mb-0 px-0 bg-light">
                  <li className="breadcrumb-item">
                    <Link className="text-dark" to={"/"}>
                      Home
                    </Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link className="text-dark" to={"/cart"}>
                      Cart
                    </Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link className="text-dark" to={"/order/new"}>
                      Checkout
                    </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Order Completed
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>

      <div className="card mt-50 mb-50">
        <div className="col d-flex">
          <span className="text-muted" id="orderno">
            order #{orders[0].orderId}
          </span>
        </div>
        <div className="gap">
          <div className="col-2 d-flex mx-auto"></div>
        </div>

        <div className="title mx-auto text-capitalize">
          Thank you {orders[0].firstName} for your order!
        </div>
        <div className="main">
          <span id="sub-title">
            <p>
              <b>Payment Summary</b>
            </p>
          </span>
          {orders[0] &&
            orders[0].cart.map((OrderBought) => (
              <div key={OrderBought.productId} className="row row-main">
                <div className="col-3">
                  <img className="img-fluid" src={OrderBought.img} />
                </div>
                <div className="col-6">
                  <div className="row d-flex">
                    <p>
                      <b>{OrderBought.title}</b>
                    </p>
                  </div>
                </div>
                <div className="col-3 d-flex justify-content-end">
                  <p>
                    <b>${OrderBought.price}</b>
                  </p>
                </div>
              </div>
            ))}

          <hr />
          <div className="total">
            <div className="row">
              <div className="col">
                <b> Shipping:(100)</b>
              </div>
              <div className="col d-flex justify-content-end">
                <b>$100</b>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <b> Total:</b>
              </div>
              <div className="col d-flex justify-content-end">
                <b>${totalAmount.toFixed(2)}</b>
              </div>
            </div>
            <button
              onClick={handleClearOrder}
              className="btn btn-dark rounded-5 d-flex mx-auto"
            >
              <i className="fas fa-trash-alt small"> Clear Orders</i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SuccessPage;
