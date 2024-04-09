import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Spinner from "./Spinner";

const AppLayout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  if (isLoading) {
    return <Spinner isLoading={isLoading} />;
  }

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
