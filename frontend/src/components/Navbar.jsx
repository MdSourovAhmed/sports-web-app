import React, { useContext, useEffect, useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import searchIcon from "../assets/search.png";
import cartIcon from "../assets/cart.png";
import userIcon from "../assets/user.png";
import menuIcon from "../assets/menu.png";
import closeIcon from "../assets/close.png";
import { ShopContext } from "../contexts/ShopContext";

const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { setShowSearch, cartCount, user, logout } = useContext(ShopContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="flex items-center justify-between py-5 font-medium relative">
      {/* Logo */}
      <img
        src={logo}
        onClick={() => navigate("/")}
        alt="Site Logo"
        className="w-[max(10%,96px)] cursor-pointer"
      />

      {/* Desktop Nav Links */}
      <ul className="hidden sm:flex gap-5 text-sm text-gray-600">
        <NavLinks />
      </ul>

      {/* Right-side Actions */}
      <div className="flex items-center gap-6">
        {/* Search */}
        <img
          onClick={() => setShowSearch(true)}
          src={searchIcon}
          alt="Search"
          className="w-5 cursor-pointer"
        />

        {/* User Dropdown */}
        <UserDropdown user={user} logout={handleLogout} />

        {/* Cart with live counter */}
        <Link to="/cart" className="relative">
          <img src={cartIcon} className="w-5" alt="Cart" />
          {cartCount > 0 && (
            <span className="absolute -right-1 -bottom-1 flex h-4 w-4 items-center justify-center rounded-full bg-gray-500 text-xs font-bold text-white">
              {cartCount}
            </span>
          )}
        </Link>

        {/* Mobile menu toggle */}
        <img
          src={menuIcon}
          alt="Open Menu"
          className="w-5 cursor-pointer sm:hidden"
          onClick={() => setIsMobileOpen(true)}
        />
      </div>

      {/* Mobile menu overlay */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-gray-300 bg-opacity-30 z-10 sm:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Mobile Menu Drawer */}
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
            onClick={() => setIsMobileOpen(false)}
          />
        </div>
        <ul className="flex flex-col p-4 text-gray-600">
          <NavLinks onLinkClick={() => setIsMobileOpen(false)} />
        </ul>
      </div>
    </nav>
  );
};

// Nav Links Component
const NavLinks = ({ onLinkClick }) => {
  const linkClass = ({ isActive }) =>
    `flex flex-col items-center gap-1 py-2 ${
      isActive
        ? "text-gray-900 after:content-[''] after:block after:w-1/2 after:h-[1.5px] after:bg-gray-900 after:rounded"
        : "text-gray-600"
    }`;

  return (
    <>
      <NavLink to="/" className={linkClass} onClick={onLinkClick}>
        Home
      </NavLink>
      <NavLink to="/collection" className={linkClass} onClick={onLinkClick}>
        Collection
      </NavLink>
      <NavLink to="/about" className={linkClass} onClick={onLinkClick}>
        About
      </NavLink>
      <NavLink to="/contact" className={linkClass} onClick={onLinkClick}>
        Contact
      </NavLink>
    </>
  );
};

// User Dropdown Component
const UserDropdown = ({ user, logout }) => (
  <div className="relative group">
    <img
      src={user?.profileImage || userIcon}
      alt="User"
      className={`${user ? "w-7 rounded-full" : "w-5"} cursor-pointer`}
    />
    {user ? (
      <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg py-1 z-30 transition-all duration-200">
        <Link
          to="/profile"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          {/* {user ? "Profile" : "Sign In"} */} Profile
        </Link>
        <Link
          to="/orders"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          {/* {user ? "Orders" : "Sign In"} */} Orders
        </Link>
        {user && (
          <button
            onClick={logout}
            className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Logout
          </button>
        )}
      </div>
    ) : (
      <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg py-1 z-30 transition-all duration-200">
        <Link
          to="/login"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          {/* {user ? "Profile" : "Sign In"} */} Log In
        </Link>
        <Link
          to="/login"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          {/* {user ? "Orders" : "Sign In"} */} Sign Up
        </Link>
      </div>
    )}
  </div>
);

export default Navbar;
