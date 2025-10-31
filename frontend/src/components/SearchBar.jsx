// import React, { useContext, useEffect, useState } from "react";
// import { ShopContext } from "../contexts/ShopContext";
// import search_bar from "../assets/search.png";
// import close from "../assets/close.png";
// import { useLocation } from "react-router-dom";

// const SearchBar = () => {
//   const { search, setSearch, showSearch, setShowSearch } =
//     useContext(ShopContext);
//   const [visible, setVisible] = useState(false);
//   const pageLocation = useLocation();

//   useEffect(() => {
//     if (pageLocation.pathname.includes("collection")) {
//       setVisible(true);
//     } else {
//       setVisible(false);
//     }
//   }, [pageLocation]);

//   return showSearch && visible ? (
//     <div className=" border-t border-gray-400 bg-gray-50 text-center ">
//       <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2">
//         <input
//           value={search}
//           onChange={() => setSearch(e.target.value)}
//           type="text"
//           className="flex-1 outline-none bg-inherit text-sm"
//           placeholder="Search"
//         />
//         <img src={search_bar} className="w-4" alt="" />
//       </div>
//       <img
//         onClick={() => setShowSearch(false)}
//         src={close}
//         alt=""
//         className="inline w-4 cursor-pointer"
//       />
//     </div>
//   ) : null;
// };

// export default SearchBar;

import React, { useContext, useEffect, useState, useCallback } from "react";
import { ShopContext } from "../contexts/ShopContext";
import { useNavigate } from "react-router-dom";
import search_bar from "../assets/search.png";
import close from "../assets/close.png";
import { useLocation } from "react-router-dom";
import api from "../utils/api"; // Your API instance

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch, setSearchResults } =
    useContext(ShopContext);
  const [visible, setVisible] = useState(false);
  const [searchLoading, setSearchLoading] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const pageLocation = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (pageLocation.pathname.includes("collection")) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [pageLocation]);

  // Debounced search function
  const debouncedSearch = useCallback(
    debounce(async (query) => {
      if (query.trim() && query.length > 2) {
        // Min 3 chars
        setSearchLoading(true);
        try {
          const response = await api.get("/client/search", {
            params: { q: query, limit: 5 }, // Live search with 5 results
          });
          setSearchResults(response.data.products || []);
          setDropdownVisible(true);
        } catch (err) {
          console.error("Search error:", err);
          setSearchResults([]);
          setDropdownVisible(false);
        } finally {
          setSearchLoading(false);
        }
      } else {
        setSearchResults([]);
        setDropdownVisible(false);
      }
    }, 300), // 300ms debounce
    []
  );

  useEffect(() => {
    debouncedSearch(search);
  }, [search, debouncedSearch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search.trim()) {
      navigate(`/search?q=${encodeURIComponent(search.trim())}`);
      setShowSearch(false);
    }
  };

  const handleProductClick = (productId) => {
    navigate(`/products/${productId}`);
    setShowSearch(false);
    setSearch("");
    setDropdownVisible(false);
  };

  // Debounce utility (if not using lodash; add lodash or this inline)
  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  if (!showSearch || !visible) return null;

  return (
    <div className="border-t border-gray-400 bg-gray-50 text-center">
      <form onSubmit={handleSubmit} className="py-4">
        <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2 relative">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            className="flex-1 outline-none bg-inherit text-sm"
            placeholder="Search products..."
            autoFocus
          />
          <img src={search_bar} className="w-4" alt="Search" />
        </div>
      </form>

      {/* Live Search Dropdown */}
      {dropdownVisible && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-300 rounded-md shadow-lg max-h-64 overflow-y-auto z-10 mx-auto w-3/4 sm:w-1/2">
          {searchLoading ? (
            <p className="px-4 py-2 text-gray-500 text-sm">Searching...</p>
          ) : searchResults.length > 0 ? (
            searchResults.map((item) => (
              <div
                key={item.id || item.sku}
                onClick={() => handleProductClick(item.id || item.sku)}
                className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 cursor-pointer border-b last:border-b-0"
              >
                <img
                  src={item.images?.[0]}
                  alt={item.name}
                  className="w-12 h-12 object-cover rounded"
                />
                <div>
                  <p className="font-medium text-sm">{item.name}</p>
                  <p className="text-xs text-gray-500">
                    {item.brand} - ${item.price}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p className="px-4 py-2 text-gray-500 text-sm">No results found</p>
          )}
        </div>
      )}

      <img
        onClick={() => {
          setShowSearch(false);
          setSearch("");
          setDropdownVisible(false);
          setSearchResults([]);
        }}
        src={close}
        alt="Close Search"
        className="inline w-4 cursor-pointer mb-2"
      />
    </div>
  );
};

export default SearchBar;
