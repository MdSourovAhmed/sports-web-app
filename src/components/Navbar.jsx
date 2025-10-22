import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../assets/logo.PNG";
import search from "../assets/search.png";
import cart from "../assets/cart.png";
import user from "../assets/user.png";
import menu from "../assets/menu.png";
import close from "../assets/close.PNG";

const Navbar = () => {
  const cart_number = 1;
  const [isOpen, setisOpen] = useState(false);
  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <img src={logo} alt="" className="w-38" />
      <ul className="hidden sm:flex gap-5 text-sm text-gray-600">
        <Lists />
        {/* <NavLink to="/" className="flex flex-col items-center gap-1">
          Home
          <hr className="hidden w-2/4 border-none h-[1.5px] bg-gray-600" />
        </NavLink>
        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          Collection
          <hr className="hidden w-2/4 border-none h-[1.5px] bg-gray-600" />
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1">
          About
          <hr className="hidden w-2/4 border-none h-[1.5px] bg-gray-600" />
        </NavLink>
        <NavLink to="/contract" className="flex flex-col items-center gap-1">
          Contract
          <hr className="hidden w-2/4 border-none h-[1.5px] bg-gray-600" />
        </NavLink> */}
      </ul>
      <div className="flex items-center gap-6">
        <img src={search} alt="" className="w-5 cursor-pointer" />
        <div className="group relative">
          <img src={user} className="w-5 cursor-pointer" alt="" />
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-600">
              <p className="cursor-pointer hover:text-black">Profile</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">Loguot</p>
            </div>
          </div>
        </div>
        <Link to="/" className="relative">
          <img src={cart} className="w-5 min-w-5" alt="" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center bg-gray-600 leading-4 text-white aspect-square rounded-full text-[8px] ">
            8
          </p>
        </Link>
        <img
          onClick={() => setisOpen(true)}
          src={menu}
          className="w-5 cursor-pointer sm:hidden"
          alt=""
        />
      </div>
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
          isOpen ? "w-full" : "w-0"
        } `}
      >
        <div className="flex flex-col text=gray-600">
          <div className="flex items-center gap-4 p-3">
            <img
              onClick={() => setisOpen(false)}
              src={close}
              className="w-5 cursor-pointer"
              alt=""
            />
            <p>Close</p>
          </div>
          <NavLink
            to="/"
            onClick={() => {
              setisOpen(false);
            }}
            className="py-2 pl-1 border"
          >
            Home
          </NavLink>
          <NavLink
            to="/collection"
            onClick={() => {
              setisOpen(false);
            }}
            className="py-2 pl-1 border"
          >
            Collection
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => {
              setisOpen(false);
            }}
            className="py-2 pl-1 border"
          >
            About
          </NavLink>
          <NavLink
            to="/contract"
            onClick={() => {
              setisOpen(false);
            }}
            className="py-2 pl-1 border"
          >
            Contract
          </NavLink>
        </div>
        {/* <Lists /> */}
      </div>
    </div>
  );
};

const Lists = () => {
  return (
    <>
      <NavLink to="/" className="flex flex-col items-center gap-1">
        Home
        <hr className="hidden w-2/4 border-none h-[1.5px] bg-gray-600" />
      </NavLink>
      <NavLink to="/collection" className="flex flex-col items-center gap-1">
        Collection
        <hr className="hidden w-2/4 border-none h-[1.5px] bg-gray-600" />
      </NavLink>
      <NavLink to="/about" className="flex flex-col items-center gap-1">
        About
        <hr className="hidden w-2/4 border-none h-[1.5px] bg-gray-600" />
      </NavLink>
      <NavLink to="/contract" className="flex flex-col items-center gap-1">
        Contract
        <hr className="hidden w-2/4 border-none h-[1.5px] bg-gray-600" />
      </NavLink>
    </>
  );
};

export default Navbar;
