// // import { createContext } from "react";
// // // import products from '../assets/products'

// // export const ShopContext=createContext();

// // const ShopContextProvider=(props)=>{
// //     const values={

// //     };
// //     return (
// //         <ShopContext.Provider value={values}>
// //             {props.children}
// //         </ShopContext.Provider>
// //     )
// // }

// // export default ShopContextProvider;

// import React, { createContext, useState, useMemo } from "react";
// // import products from '../assets/products'

// export const ShopContext = createContext();

// const ShopContextProvider = (props) => {
//   const [user, setUser] = useState(null); // null for unauthenticated, or { id, name, email } after login
//   const [cartItems, setCartItems] = useState({});
//   const [searchQuery, setSearchQuery] = useState("");
//   const [search,setSearch]=useState('');
//   const [showSearch,setShowSearch]=useState(false);

//   // Computed cart count
//   const cartCount = useMemo(() => {
//     return Object.values(cartItems).reduce((total, count) => total + count, 0);
//   }, [cartItems]);

//   // Auth functions
//   const login = (userData) => {
//     setUser(userData);
//     // Optionally store in localStorage: localStorage.setItem('user', JSON.stringify(userData));
//   };

//   const logout = () => {
//     setUser(null);
//     // localStorage.removeItem('user');
//   };

//   // Cart functions (basic)
//   const addToCart = (itemId) => {
//     setCartItems((prev) => ({ ...prev, [itemId]: (prev[itemId] || 0) + 1 }));
//   };

//   const removeFromCart = (itemId) => {
//     setCartItems((prev) => ({
//       ...prev,
//       [itemId]: Math.max(0, (prev[itemId] || 0) - 1),
//     }));
//   };

//   const updateCartItemCount = (itemId, newCount) => {
//     setCartItems((prev) => ({ ...prev, [itemId]: newCount }));
//   };

//   const getTotalCartAmount = () => {
//     // Implement based on products data
//     return 0;
//   };

//   const values = {
//     search,
//     setSearch,
//     showSearch,
//     setShowSearch,
//     user,
//     login,
//     logout,
//     cartItems,
//     addToCart,
//     removeFromCart,
//     updateCartItemCount,
//     getTotalCartAmount,
//     cartCount,
//     searchQuery,
//     setSearchQuery,
//   };

//   return (
//     <ShopContext.Provider value={values}>{props.children}</ShopContext.Provider>
//   );
// };

// export default ShopContextProvider;

import React, { createContext, useState, useMemo } from "react";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const [user, setUser] = useState(null);
  const [cartItems, setCartItems] = useState({});
  const [searchQuery, setSearchQuery] = useState("");
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  // Calculate total number of items in the cart
  const cartCount = useMemo(() => {
    return Object.values(cartItems).reduce(
      (total, item) => total + (item.quantity || 0),
      0
    );
  }, [cartItems]);

  // --- Authentication ---
  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  // --- Cart functions ---
  const addToCart = (product, selectedSize) => {
    if (!product || !product.id) return;

    setCartItems((prev) => {
      const existing = prev[product.id];

      // If product exists in cart
      if (existing) {
        return {
          ...prev,
          [product.id]: {
            ...existing,
            quantity: existing.quantity + 1,
            selectedSize, // update if changed
          },
        };
      }

      // If product is new
      return {
        ...prev,
        [product.id]: {
          product: {
            id: product.id,
            name: product.name,
            image: product.image || product.images?.[0],
            price: product.price,
            brand: product.brand,
          },
          selectedSize,
          quantity: 1,
        },
      };
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((prev) => {
      const updated = { ...prev };
      if (updated[productId]) {
        if (updated[productId].quantity > 1) {
          updated[productId].quantity -= 1;
        } else {
          delete updated[productId];
        }
      }
      return updated;
    });
  };

  const updateCartItemCount = (productId, newCount) => {
    setCartItems((prev) => ({
      ...prev,
      [productId]: {
        ...prev[productId],
        quantity: newCount,
      },
    }));
  };

  const getTotalCartAmount = () => {
    return Object.values(cartItems).reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  };

  

  const values = {
    search,
    setSearch,
    showSearch,
    setShowSearch,
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
