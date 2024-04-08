import Breadcrumb from "./Breadcrumb";
import Categories from "./Categories";
import ShippingDetails from "./ShippingDetails";

const Home = () => {
  return (
    <>
      <Breadcrumb />
      <Categories />
      <div className="py-5"></div>
      <ShippingDetails />
    </>
  );
};

export default Home;
