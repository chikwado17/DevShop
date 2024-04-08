import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const AppLayout = () => {
  return (
    <>
      <Header />
      <div className="container">
        <main>
          <Outlet />
        </main>
      </div>
      <Footer />
    </>
  );
};

export default AppLayout;
