import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Home from "./ui/Home";
import Shop, { loader as ShopLoader } from "./pages/shop/Shop";
import CartOverview from "./features/cart/CartOverview";
import CreateOrder from "./features/order/CreateOrder";
import SuccessPage from "./features/order/SuccessPage";
import Order from "./features/order/Order";
import NotFoundPage from "./pages/NotFoundPage";
import ErrorPage from "./ui/ErrorPage";

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        { path: "/", element: <Home /> },
        {
          path: "/shop",
          element: <Shop />,
          loader: ShopLoader,
          errorElement: <ErrorPage />,
        },
        { path: "/cart", element: <CartOverview /> },
        { path: "/order/new", element: <CreateOrder /> },
        { path: "/success", element: <SuccessPage /> },
        { path: "/order/:id", element: <Order /> },
        { path: "*", element: <NotFoundPage /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
