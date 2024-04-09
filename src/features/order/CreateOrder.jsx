import { useSelector } from "react-redux";
import store from "../../store";
import {
  clearCartItem,
  getTotalAmountInCart,
  userOrders,
} from "../cart/cartSlice";
import { Form, Link, redirect } from "react-router-dom";
import { v4 as uuid } from "uuid";

const CheckOut = () => {
  const cart = useSelector((state) => state.carts.cart);

  const totalPricesInCart = useSelector(getTotalAmountInCart);
  const totalPurchasePrice = totalPricesInCart + 100;

  return (
    <>
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row px-4 px-lg-5 py-lg-4 align-items-center">
            <div className="col-lg-6">
              <h1 className="h2 text-uppercase mb-0">Checkout</h1>
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
                  <li className="breadcrumb-item active" aria-current="page">
                    Checkout
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <h2 className="h5 text-uppercase mb-4">Billing details</h2>
        <div className="row">
          <div className="col-lg-8">
            <Form method="POST" action="/order/new">
              <div className="row gy-3">
                <div className="col-lg-6">
                  <label
                    className="form-label text-sm text-uppercase"
                    htmlFor="firstName"
                  >
                    First name
                  </label>
                  <input
                    className="form-control form-control-lg"
                    type="text"
                    name="firstName"
                    placeholder="Enter your first name"
                  />
                </div>
                <div className="col-lg-6">
                  <label
                    className="form-label text-sm text-uppercase"
                    htmlFor="lastName"
                  >
                    Last name
                  </label>
                  <input
                    className="form-control form-control-lg"
                    type="text"
                    name="lastName"
                    placeholder="Enter your last name"
                  />
                </div>
                <div className="col-lg-6">
                  <label
                    className="form-label text-sm text-uppercase"
                    htmlFor="email"
                  >
                    Email address
                  </label>
                  <input
                    className="form-control form-control-lg"
                    type="email"
                    name="email"
                    placeholder="e.g. Jason@example.com"
                  />
                </div>
                <div className="col-lg-6">
                  <label
                    className="form-label text-sm text-uppercase"
                    htmlFor="phone"
                  >
                    Phone number
                  </label>
                  <input
                    className="form-control form-control-lg"
                    type="tel"
                    name="phone"
                    placeholder="e.g. +02 245354745"
                  />
                </div>
                <div className="col-lg-6">
                  <label
                    className="form-label text-sm text-uppercase"
                    htmlFor="company"
                  >
                    Company name (optional)
                  </label>
                  <input
                    className="form-control form-control-lg"
                    type="text"
                    name="company"
                    placeholder="Your company name"
                  />
                </div>
                <div className="col-lg-12">
                  <label
                    className="form-label text-sm text-uppercase"
                    htmlFor="address"
                  >
                    Address line 1
                  </label>
                  <input
                    className="form-control form-control-lg"
                    type="text"
                    name="address"
                    placeholder="House number and street name"
                  />
                </div>
                <div className="col-lg-12">
                  <label
                    className="form-label text-sm text-uppercase"
                    htmlFor="addressalt"
                  >
                    Address line 2
                  </label>
                  <input
                    className="form-control form-control-lg"
                    type="text"
                    name="addressalt"
                    placeholder="Apartment, Suite, Unit, etc (optional)"
                  />
                </div>
                <div className="col-lg-6">
                  <label
                    className="form-label text-sm text-uppercase"
                    htmlFor="city"
                  >
                    Town/City
                  </label>
                  <input
                    className="form-control form-control-lg"
                    type="text"
                    name="city"
                  />
                </div>
                <div className="col-lg-6">
                  <label
                    className="form-label text-sm text-uppercase"
                    htmlFor="state"
                  >
                    State/County
                  </label>
                  <input
                    className="form-control form-control-lg"
                    type="text"
                    name="state"
                  />
                </div>

                <div className="col-lg-12 form-group">
                  <input
                    type="hidden"
                    name="cart"
                    value={JSON.stringify(cart)}
                  />
                  <input
                    type="hidden"
                    name="totalPurchaseAmount"
                    value={totalPurchasePrice}
                  />
                  <button className="btn btn-dark" type="submit">
                    Place order
                  </button>
                </div>
              </div>
            </Form>
          </div>
          <div className="col-lg-4">
            <div className="card border-0 rounded-0 p-lg-4 bg-light">
              <div className="card-body">
                <h5 className="text-uppercase mb-4">Your order</h5>
                <ul className="list-unstyled mb-0">
                  {cart.length > 0 &&
                    cart.map((inCart) => (
                      <li
                        key={inCart.productId}
                        className="d-flex align-items-center border-bottom my-3 justify-content-between"
                      >
                        <strong className="small">{inCart.title}</strong>

                        <span className="text-muted small">
                          ${inCart.price}
                        </span>
                      </li>
                    ))}

                  <li className="d-flex align-items-center justify-content-between">
                    <strong className="small fw-bold">Sub Total</strong>

                    <span className="text-muted small">
                      ${totalPricesInCart.toFixed(2)}
                    </span>
                  </li>

                  <li className="border-bottom my-2"></li>
                  <li className="d-flex align-items-center justify-content-between">
                    <strong className="small fw-bold">Shipping($100)</strong>
                    <span className="text-muted small">$100</span>
                  </li>

                  <li className="border-bottom my-2"></li>

                  <li className="d-flex align-items-center justify-content-between">
                    <strong className="text-uppercase small fw-bold">
                      Total
                    </strong>
                    <span>${totalPricesInCart + 100}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export const action = async ({ request }) => {
  const data = Object.fromEntries(await request.formData());
  const unique_id = uuid();
  const small_id = unique_id.slice(0, 8);

  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    orderId: small_id,
    totalPurchaseAmount: Number(data.totalPurchaseAmount),
  };

  store.dispatch(userOrders(order));
  store.dispatch(clearCartItem());

  return redirect("/success");
};

export default CheckOut;
