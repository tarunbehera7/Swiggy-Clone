import React from "react";
import ReactDOM from "react-dom/client";
// import logo from './logo/Screenshot (76).png';
import Header from "./components/Header";
// import Body from "./components/Body";
// import Body6 from "./components/Body6";
// import Body61 from "./components/Body61";
import Body7 from "./components/Body7";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import ResMenu from "./components/ResMenu";
import Cart from "./components/Cart";
import { CartProvider } from "./components/CartContext";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Order from "./components/Order";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="app">
      <Header />
      {/* <Body6 />  */}
      {/* <Body61 /> */}
      {/* <Body7 /> */}
      <Outlet />
      <Footer />
      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element : <App />,
        children: [
            {
                path: "/",
                element : <Body7 />
            },
            {
                path: "/about",
                element : <About />
            },
            {
                path: "/contact",
                element : <Contact />
            },
            {
                path: "/cart",
                element : <Cart />
            },
            {
                path: "/order",
                element : <Order />
            },
            {
              path: "/res/:resId",
              element : <ResMenu />
            }
        ],
        errorElement : <Error />
        
    },
])

const root = ReactDOM.createRoot(
        document.getElementById("root"));
root.render(
  <CartProvider> 
    <RouterProvider router={appRouter}/> 
  </CartProvider>
); 