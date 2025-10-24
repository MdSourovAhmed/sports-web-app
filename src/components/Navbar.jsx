// import React, { useState } from "react";
// import { NavLink, Link } from "react-router-dom";
// import logo from "../assets/logo.PNG";
// import search from "../assets/search.png";
// import cart from "../assets/cart.png";
// import user from "../assets/user.png";
// import menu from "../assets/menu.png";
// import close from "../assets/close.PNG";

// const Navbar = () => {
//   const cart_number = 1;
//   const [isOpen, setisOpen] = useState(false);
//   return (
//     <div className="flex items-center justify-between py-5 font-medium">
//       <img src={logo} alt="" className="w-38" />
//       <ul className="hidden sm:flex gap-5 text-sm text-gray-600">
//         <Lists />
//         {/* <NavLink to="/" className="flex flex-col items-center gap-1">
//           Home
//           <hr className="hidden w-2/4 border-none h-[1.5px] bg-gray-600" />
//         </NavLink>
//         <NavLink to="/collection" className="flex flex-col items-center gap-1">
//           Collection
//           <hr className="hidden w-2/4 border-none h-[1.5px] bg-gray-600" />
//         </NavLink>
//         <NavLink to="/about" className="flex flex-col items-center gap-1">
//           About
//           <hr className="hidden w-2/4 border-none h-[1.5px] bg-gray-600" />
//         </NavLink>
//         <NavLink to="/contract" className="flex flex-col items-center gap-1">
//           Contract
//           <hr className="hidden w-2/4 border-none h-[1.5px] bg-gray-600" />
//         </NavLink> */}
//       </ul>
//       <div className="flex items-center gap-6">
//         <img src={search} alt="" className="w-5 cursor-pointer" />
//         <div className="group relative">
//           <img src={user} className="w-5 cursor-pointer" alt="" />
//           <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
//             <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-600">
//               <p className="cursor-pointer hover:text-black">Profile</p>
//               <p className="cursor-pointer hover:text-black">Orders</p>
//               <p className="cursor-pointer hover:text-black">Loguot</p>
//             </div>
//           </div>
//         </div>
//         <Link to="/" className="relative">
//           <img src={cart} className="w-5 min-w-5" alt="" />
//           <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center bg-gray-600 leading-4 text-white aspect-square rounded-full text-[8px] ">
//             8
//           </p>
//         </Link>
//         <img
//           onClick={() => setisOpen(true)}
//           src={menu}
//           className="w-5 cursor-pointer sm:hidden"
//           alt=""
//         />
//       </div>
//       <div
//         className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
//           isOpen ? "w-full" : "w-0"
//         } `}
//       >
//         <div className="flex flex-col text=gray-600">
//           <div className="flex items-center gap-4 p-3">
//             <img
//               onClick={() => setisOpen(false)}
//               src={close}
//               className="w-5 cursor-pointer"
//               alt=""
//             />
//             <p>Close</p>
//           </div>
//           <NavLink
//             to="/"
//             onClick={() => {
//               setisOpen(false);
//             }}
//             className="py-2 pl-1 border"
//           >
//             Home
//           </NavLink>
//           <NavLink
//             to="/collection"
//             onClick={() => {
//               setisOpen(false);
//             }}
//             className="py-2 pl-1 border"
//           >
//             Collection
//           </NavLink>
//           <NavLink
//             to="/about"
//             onClick={() => {
//               setisOpen(false);
//             }}
//             className="py-2 pl-1 border"
//           >
//             About
//           </NavLink>
//           <NavLink
//             to="/contract"
//             onClick={() => {
//               setisOpen(false);
//             }}
//             className="py-2 pl-1 border"
//           >
//             Contract
//           </NavLink>
//         </div>
//         {/* <Lists /> */}
//       </div>
//     </div>
//   );
// };

// const Lists = () => {
//   return (
//     <>
//       <NavLink to="/" className="flex flex-col items-center gap-1">
//         Home
//         <hr className="hidden w-2/4 border-none h-[1.5px] bg-gray-600" />
//       </NavLink>
//       <NavLink to="/collection" className="flex flex-col items-center gap-1">
//         Collection
//         <hr className="hidden w-2/4 border-none h-[1.5px] bg-gray-600" />
//       </NavLink>
//       <NavLink to="/about" className="flex flex-col items-center gap-1">
//         About
//         <hr className="hidden w-2/4 border-none h-[1.5px] bg-gray-600" />
//       </NavLink>
//       <NavLink to="/contract" className="flex flex-col items-center gap-1">
//         Contract
//         <hr className="hidden w-2/4 border-none h-[1.5px] bg-gray-600" />
//       </NavLink>
//     </>
//   );
// };

// export default Navbar;

import React, { useContext, useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.PNG";
import searchIcon from "../assets/search.png";
import cartIcon from "../assets/cart.png";
import userIcon from "../assets/user.png";
import menuIcon from "../assets/menu.png";
import closeIcon from "../assets/close.PNG";
import { ShopContext } from "../contexts/ShopContext";

const Navbar = ({ cartCount = 0 }) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { setShowSearch } = useContext(ShopContext);

  const navigate = useNavigate();

  return (
    <nav className="flex items-center justify-between py-5 font-medium relative">
      <img
        src={logo}
        onClick={() => navigate("/")}
        alt="Site Logo"
        className="w-32 cursor-pointer"
      />{" "}
      {/* Assumed w-32; adjust as needed */}
      {/* Desktop Nav */}
      <ul className="hidden sm:flex gap-5 text-sm text-gray-600">
        <NavLinks orientation="horizontal" />
      </ul>
      {/* Desktop Actions */}
      <div className="flex items-center gap-6" role="menubar">
        <img
          onClick={() => setShowSearch(true)}
          src={searchIcon}
          alt="Search"
          className="w-5 cursor-pointer"
          role="button"
          aria-label="Open search"
        />

        <UserDropdown />

        <Link to="/cart" className="relative" aria-label="Shopping Cart">
          <img src={cartIcon} className="w-5" alt="Cart Icon" />
          {cartCount > 0 && (
            <span className="absolute -right-1 -bottom-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
              {cartCount}
            </span>
          )}
        </Link>

        {/* Mobile Menu Toggle */}
        <img
          src={menuIcon}
          alt="Open Menu"
          className="w-5 cursor-pointer sm:hidden"
          role="button"
          aria-label="Toggle mobile menu"
          onClick={() => setIsMobileOpen(true)}
        />
      </div>
      {/* Mobile Menu Overlay */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-gray-300 bg-opacity-30 z-10 sm:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}
      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 sm:hidden ${
          isMobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold">Menu</h2>
          <img
            src={closeIcon}
            alt="Close Menu"
            className="w-5 cursor-pointer"
            role="button"
            aria-label="Close menu"
            onClick={() => setIsMobileOpen(false)}
          />
        </div>
        <ul className="flex flex-col p-4 text-gray-600">
          <NavLinks
            orientation="vertical"
            onLinkClick={() => setIsMobileOpen(false)}
          />
        </ul>
      </div>
    </nav>
  );
};

// Reusable Nav Links Component
const NavLinks = ({ orientation = "horizontal", onLinkClick }) => {
  const baseClass = "flex flex-col items-center gap-1 py-2";
  const verticalClass = "border-b border-gray-200";
  const activeClass =
    "text-gray-900 after:content-[''] after:block after:w-1/2 after:h-[1.5px] after:bg-gray-900 after:rounded";

  const handleClick = (e) => {
    if (onLinkClick) onLinkClick();
  };

  return (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `${baseClass} ${orientation === "vertical" ? verticalClass : ""} ${
            isActive ? activeClass : ""
          }`
        }
        onClick={handleClick}
      >
        Home
      </NavLink>
      <NavLink
        to="/collection"
        className={({ isActive }) =>
          `${baseClass} ${orientation === "vertical" ? verticalClass : ""} ${
            isActive ? activeClass : ""
          }`
        }
        onClick={handleClick}
      >
        Collection
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          `${baseClass} ${orientation === "vertical" ? verticalClass : ""} ${
            isActive ? activeClass : ""
          }`
        }
        onClick={handleClick}
      >
        About
      </NavLink>
      <NavLink
        to="/contract" // Fixed: was "contract" – assuming "contact"
        className={({ isActive }) =>
          `${baseClass} ${orientation === "vertical" ? verticalClass : ""} ${
            isActive ? activeClass : ""
          }`
        }
        onClick={handleClick}
      >
        Contract
      </NavLink>
    </>
  );
};

// User Dropdown Component
const UserDropdown = () => {
  return (
    <div className="relative group" role="menu">
      <img
        src={userIcon}
        alt="User Profile"
        className="w-5 cursor-pointer"
        role="button"
        aria-label="User menu"
      />
      <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg py-1 z-30 transition-all duration-200">
        <Link
          to="/profile"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          role="menuitem"
        >
          Profile
        </Link>
        <Link
          to="/orders"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          role="menuitem"
        >
          Orders
        </Link>
        <button
          className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          role="menuitem"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
