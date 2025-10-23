// import { createContext } from "react";
// // import products from '../assets/products'

// export const ShopContext=createContext();

// const ShopContextProvider=(props)=>{
//     const values={

//     };
//     return (
//         <ShopContext.Provider value={values}>
//             {props.children}
//         </ShopContext.Provider>
//     )
// }

// export default ShopContextProvider;

import React, { createContext, useState, useMemo } from "react";
// import products from '../assets/products'

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const [user, setUser] = useState(null); // null for unauthenticated, or { id, name, email } after login
  const [cartItems, setCartItems] = useState({});
  const [searchQuery, setSearchQuery] = useState("");

  // Computed cart count
  const cartCount = useMemo(() => {
    return Object.values(cartItems).reduce((total, count) => total + count, 0);
  }, [cartItems]);

  // Auth functions
  const login = (userData) => {
    setUser(userData);
    // Optionally store in localStorage: localStorage.setItem('user', JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    // localStorage.removeItem('user');
  };

  // Cart functions (basic)
  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: (prev[itemId] || 0) + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: Math.max(0, (prev[itemId] || 0) - 1),
    }));
  };

  const updateCartItemCount = (itemId, newCount) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newCount }));
  };

  const getTotalCartAmount = () => {
    // Implement based on products data
    return 0;
  };

  const values = {
    user,
    login,
    logout,
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItemCount,
    getTotalCartAmount,
    cartCount,
    searchQuery,
    setSearchQuery,
  };

  return (
    <ShopContext.Provider value={values}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
