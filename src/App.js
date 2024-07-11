import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import HeaderComponent from "./components/Header";
import Body from "./components/Body";
import Footer from "./Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import { Error } from "./components/Error";
import Cart from "./components/Cart";
import { CartProvider, useCart } from "./utils/CartContext";
import Notification from "./components/Notification";

const AppLayout = () => {
  const { notification } = useCart();

  return (
    <>
      <Notification message={notification.message} show={notification.show} />
      <div className="app">
        <HeaderComponent />
        <div className="content">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />
      },
      {
        path: "/cart",
        element: <Cart />
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CartProvider>
    <RouterProvider router={appRouter} />
  </CartProvider>
);
