import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const cart = useSelector((state) => state.carts.cart);

  return (
    <header className="header bg-white">
      <div className="container px-lg-3">
        <nav className="navbar navbar-expand-lg navbar-light py-3 px-lg-0">
          <Link className="navbar-brand" to={"/"}>
            <span className="fw-bold text-uppercase text-dark">
              DevEmma Shop
            </span>
          </Link>
          <button
            className="navbar-toggler navbar-toggler-end"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to={"/"}>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={"/shop"}>
                  Shop
                </NavLink>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to={"/cart"}>
                  <i className="fas fa-dolly-flatbed me-1 text-gray"></i>Cart
                  {cart.length > 0 && (
                    <small className="text-gray fw-normal">
                      ({cart.length})
                    </small>
                  )}
                </NavLink>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#!">
                  <i className="fas fa-user me-1 text-gray fw-normal"></i>Login
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
