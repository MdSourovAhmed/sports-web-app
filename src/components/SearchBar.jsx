import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../contexts/ShopContext";
import search_bar from "../assets/search.png";
import close from "../assets/close.png";
import { useLocation } from "react-router-dom";

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(ShopContext);
  const [visible, setVisible] = useState(false);
  const pageLocation = useLocation();

  useEffect(() => {
    if (pageLocation.pathname.includes("collection")) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [pageLocation]);

  return showSearch && visible ? (
    <div className=" border-t border-gray-400 bg-gray-50 text-center ">
      <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2">
        <input
          value={search}
          onChange={() => setSearch(e.target.value)}
          type="text"
          className="flex-1 outline-none bg-inherit text-sm"
          placeholder="Search"
        />
        <img src={search_bar} className="w-4" alt="" />
      </div>
      <img
        onClick={() => setShowSearch(false)}
        src={close}
        alt=""
        className="inline w-4 cursor-pointer"
      />
    </div>
  ) : null;
};

export default SearchBar;
