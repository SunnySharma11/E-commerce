import React from "react";
import "./allcss.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from '../contextApi/AuthContext'

const Navbar = () => {
  const { isLoggedIn, logOutUser } = useAuth();
  const navigate = useNavigate();

  // Handle click for protected links
  const handleProtectedClick = (event, path) => {
    if (!isLoggedIn) {
      event.preventDefault(); // Prevent default navigation
      navigate("/login"); // Redirect to login
    }
  };

  return (
    <div className="nav d-flex tw:justify-between py-3 tw:items-center">
      <div className="d-flex">
        <h3>Logo</h3>
        <ul className="d-flex list-unstyled gap-3 tw:ml-15">
          <li className="tw:mt-1.5">
            <NavLink to="/" className="tw:text-lg">Home</NavLink>
          </li>
          <li className="tw:mt-1.5 tw:ml-1">
            <NavLink to="/shop" className="tw:text-lg">Shop</NavLink>
          </li>

          {/* Cart (Always Visible, But Redirects if Not Logged In) */}
          <li className="tw:mt-1.5 tw:ml-1">
            <NavLink to="/cart" className="tw:text-lg" onClick={(e) => handleProtectedClick(e, "/cart")}>
              Cart
            </NavLink>
          </li>

          {/* Contacts (Always Visible, But Redirects if Not Logged In) */}
          <li className="tw:mt-1.5 tw:ml-1">
            <NavLink to="/contact" className="tw:text-lg" onClick={(e) => handleProtectedClick(e, "/contact")}>
              Contacts
            </NavLink>
          </li>

          <li className="tw:mt-1.5 tw:ml-1">
            <NavLink to="/about" className="tw:text-lg">About</NavLink>
          </li>

          {!isLoggedIn ? (
            <>
              <li className="tw:mt-1.5 tw:ml-1">
                <NavLink to="/login" className="tw:text-lg ">
                  Login
                </NavLink>
              </li>
              <li className="tw:mt-1.5 tw:ml-1">
                <NavLink to="/register" className="tw:text-lg ">
                  Register
                </NavLink>
              </li>
            </>
          ) : (
            <li className="tw:mt-1.5 tw:ml-1">
              <button
                onClick={logOutUser}
                className="tw:bg-red-500 tw:px-3 tw:py-1 tw:rounded tw-text-white"
              >
                Logout
              </button>
            </li>
          )}
        </ul>
      </div>

      <div>
        <i className="fa-solid fa-magnifying-glass tw:mr-5 tw:text-lg"></i>

        {/* Cart Icon (Always Visible, But Redirects if Not Logged In) */}
        <NavLink to="/cart" className="tw:mr-5" onClick={(e) => handleProtectedClick(e, "/cart")}>
          <i className="fa-solid fa-cart-shopping tw:text-lg"></i>
        </NavLink>

        <i className="fa-regular fa-heart tw:text-xl tw:mr-5"></i>
      </div>
    </div>
  );
};

export default Navbar;
