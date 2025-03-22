import React from "react";
import { BrowserRouter, Routes, Route , useLocation  } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Login from './pages/Login'
import Register from './pages/Register'
import QuickView from './pages/QuickView'

import PaymentSuccess from "./pages/PaymentSuccess"
import Footer from "./components/Footer";

const Layout = ({ children }) => {         // i am using footer in cart personally
  const location = useLocation();
  const hideFooterRoutes = ["/cart"]; // Add routes where you don't want the footer

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1">{children}</div>
      {!hideFooterRoutes.includes(location.pathname) && <Footer />}
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <ToastContainer position="top-right" autoClose={3000} />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
          <Route path="/quick-view/:id" element={<QuickView />} />
          <Route path="/payment-success" element={<PaymentSuccess />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
