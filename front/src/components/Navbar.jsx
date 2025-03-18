import React from "react";
import "./allcss.css";
import { NavLink } from 'react-router-dom'
import { useAuth } from '../contextApi/AuthContext'


const Navbar = () => {
 

  return (
    <div className="nav d-flex tw:justify-between py-3 tw:items-center">
      <div className="d-flex">
        <h3>Logo</h3>
        <ul className="d-flex list-unstyled gap-3 tw:ml-15">
          <li className="tw:mt-1.5">
            <NavLink to="/" className="tw:text-lg">
              Home
            </NavLink>
          </li>
          <li className="tw:mt-1.5 tw:ml-1">
            <NavLink to="/shop" className="tw:text-lg">
              Shop
            </NavLink>
          </li>
          <li className="tw:mt-1.5 tw:ml-1">
            <NavLink to="/cart" className="tw:text-lg">
              Cart
            </NavLink>
          </li>
          <li className="tw:mt-1.5 tw:ml-1">
            <NavLink to="/about" className="tw:text-lg">
              About
            </NavLink>
          </li>

          <li className="tw:mt-1.5 tw:ml-1">
            <NavLink to="/contact" className="tw:text-lg">
              Contacts
            </NavLink>
          </li>
          <li className="tw:mt-1.5 tw:ml-1">
            <NavLink to="/register" className="tw:text-lg">
              Register
            </NavLink>
          </li>
          <li className="tw:mt-1.5 tw:ml-1">
            <NavLink to="/payment" className="tw:text-lg">
              Payment
            </NavLink>
          </li>
        </ul>
      </div>
      <div>
        <i className="fa-solid fa-magnifying-glass tw:mr-5 tw:text-lg"></i>
        <NavLink to="/cart" className="tw:mr-5">
          <i className="fa-solid fa-cart-shopping  tw:text-lg"></i>
        </NavLink>
        <i className="fa-regular fa-heart tw:text-xl tw:mr-5"></i>
      </div>
    </div>
  );
};

export default Navbar;

//   return (
//         <>
//           <header className="navv">
//             <div className="container">
//               <div className="logo-brand">
//                 <NavLink to="/">Mr Hacker</NavLink>
//               </div>
    
//               <nav>
//                 <ul>
//                   <li>
//                     <NavLink to="/"> Home </NavLink>
//                   </li>
//                   <li>
//                     <NavLink to="/contact"> Contact </NavLink>
//                   </li>
//                   <li>
//                     <NavLink to="/service"> Service </NavLink>
//                   </li>
//                       {isLoggedIn ?(
//                         <li>
//                         <NavLink to="/logout"> Logout </NavLink>
//                       </li>) :
//                       (
//                         <>
//                         <li>
//                       <NavLink to="/register"> Register </NavLink>
//                       </li>
//                       <li>
//                         <NavLink to="/login"> Login </NavLink>
//                       </li>
//                         </>
//                       )
//                       }
                    
//                 </ul>
//               </nav>
//             </div>
//           </header>
//         </>
//       )
// }

// export default Navbar
