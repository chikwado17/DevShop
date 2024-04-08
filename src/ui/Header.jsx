import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header bg-white">
      <div className="container px-lg-3">
        <nav className="navbar navbar-expand-lg navbar-light py-3 px-lg-0">
          <a className="navbar-brand" href="index.html">
            <span className="fw-bold text-uppercase text-dark">
              DevEmma Shop
            </span>
          </a>
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
                  <small className="text-gray fw-normal">(2)</small>
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
