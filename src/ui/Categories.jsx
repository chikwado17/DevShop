import { Link } from "react-router-dom";
import catimg1 from "../assets/img/cat-img-1.jpg";
import catimg2 from "../assets/img/cat-img-2.jpg";
import catimg3 from "../assets/img/cat-img-3.jpg";
import catimg4 from "../assets/img/cat-img-4.jpg";

const Categories = () => {
  return (
    <section className="pt-5">
      <header className="text-center">
        <p className="small text-muted small text-uppercase mb-1">
          Carefully created collections
        </p>
        <h2 className="h5 text-uppercase mb-4">Browse our categories</h2>
      </header>
      <div className="row">
        <div className="col-md-4">
          <Link className="category-item" to={"/shop"}>
            <img className="img-fluid" src={catimg1} alt="" />
            <strong className="category-item-title">Clothes</strong>
          </Link>
        </div>
        <div className="col-md-4">
          <Link className="category-item mb-4" to={"/shop"}>
            <img className="img-fluid" src={catimg2} alt="" />
            <strong className="category-item-title">Shoes</strong>
          </Link>
          <Link className="category-item" to={"/shop"}>
            <img className="img-fluid" src={catimg3} alt="" />
            <strong className="category-item-title">Watches</strong>
          </Link>
        </div>
        <div className="col-md-4">
          <Link className="category-item" to={"/shop"}>
            <img className="img-fluid" src={catimg4} alt="" />
            <strong className="category-item-title">Electronics</strong>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Categories;
