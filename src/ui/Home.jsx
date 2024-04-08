import ProductsList from "../features/products/ProductsList";
import Breadcrumb from "./Breadcrumb";
import Categories from "./Categories";
import ShippingDetails from "./ShippingDetails";

const Home = () => {
  return (
    <>
      <Breadcrumb />
      <Categories />
      <ProductsList />
      <ShippingDetails />
    </>
  );
};

export default Home;
