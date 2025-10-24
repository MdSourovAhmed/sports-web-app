// import React from 'react'

// const Cart = () => {
//   return (
//     <div>

//     </div>
//   )
// }

// export default Cart

// import React, { useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import { ShopContext } from "../contexts/ShopContext";

// const Cart = () => {
//   const {
//     cartItems,
//     removeFromCart,
//     addToCart,
//     updateCartItemCount,
//     getTotalCartAmount,
//   } = useContext(ShopContext);
//   const navigate = useNavigate();

//   const itemsArray = Object.values(cartItems);
//   const totalAmount = getTotalCartAmount();

//   if (itemsArray.length === 0) {
//     return (
//       <div className="min-h-[60vh] flex flex-col items-center justify-center text-center">
//         <h2 className="text-2xl font-semibold mb-3">Your Cart is Empty 🛒</h2>
//         <p className="text-gray-600 mb-6">
//           Looks like you haven’t added anything yet.
//         </p>
//         <button
//           onClick={() => navigate("/collection")}
//           className="px-6 py-3 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition"
//         >
//           Continue Shopping
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="border-t-2 py-10 transition-opacity ease-in duration-500 opacity-100">
//       <h1 className="text-2xl font-semibold mb-8">Your Shopping Cart</h1>

//       <div className="flex flex-col lg:flex-row gap-10">
//         {/* Left: Cart Items */}
//         <div className="flex-1 space-y-6">
//           {itemsArray.map(({ product, selectedSize, quantity }) => (
//             <div
//               key={product.id}
//               className="flex flex-col sm:flex-row gap-6 border-b pb-6"
//             >
//               {/* Product Image */}
//               <div className="w-full sm:w-1/4 flex-shrink-0">
//                 <img
//                   src={product.image}
//                   alt={product.name}
//                   className="w-full h-auto rounded-lg object-cover"
//                 />
//               </div>

//               {/* Product Info */}
//               <div className="flex-1 flex flex-col justify-between">
//                 <div>
//                   <h2 className="text-lg font-medium">{product.name}</h2>
//                   <p className="text-gray-500">
//                     {product.brand} • Size:{" "}
//                     <span className="font-medium text-gray-700">
//                       {selectedSize}
//                     </span>
//                   </p>
//                   <p className="text-gray-700 mt-1">${product.price}</p>
//                 </div>

//                 {/* Quantity Control */}
//                 <div className="flex items-center gap-4 mt-4">
//                   <div className="flex items-center border rounded-md">
//                     <button
//                       onClick={() => removeFromCart(product.id)}
//                       className="px-3 py-1 text-lg font-medium hover:bg-gray-100 transition"
//                     >
//                       -
//                     </button>
//                     <input
//                       type="number"
//                       min="1"
//                       className="w-12 text-center border-l border-r"
//                       value={quantity}
//                       onChange={(e) =>
//                         updateCartItemCount(
//                           product.id,
//                           parseInt(e.target.value)
//                         )
//                       }
//                     />
//                     <button
//                       onClick={() => addToCart(product)}
//                       className="px-3 py-1 text-lg font-medium hover:bg-gray-100 transition"
//                     >
//                       +
//                     </button>
//                   </div>

//                   <p className="text-gray-600 ml-auto font-medium">
//                     Subtotal: ${(product.price * quantity).toFixed(2)}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Right: Summary */}
//         <div className="w-full lg:w-1/3 bg-gray-50 rounded-xl p-6 h-fit">
//           <h2 className="text-xl font-medium mb-4">Order Summary</h2>
//           <div className="flex justify-between text-gray-600 mb-2">
//             <span>Items ({itemsArray.length})</span>
//             <span>
//               {itemsArray.reduce((total, i) => total + i.quantity, 0)} pcs
//             </span>
//           </div>
//           <div className="flex justify-between text-gray-600 mb-4">
//             <span>Subtotal</span>
//             <span>${totalAmount.toFixed(2)}</span>
//           </div>
//           <div className="border-t pt-4 flex justify-between font-semibold text-lg">
//             <span>Total</span>
//             <span>${totalAmount.toFixed(2)}</span>
//           </div>

//           <div className="mt-6 flex flex-col gap-3">
//             <button
//               onClick={() => navigate("/checkout")}
//               className="w-full py-3 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition"
//             >
//               Proceed to Checkout
//             </button>
//             <button
//               onClick={() => navigate("/collection")}
//               className="w-full py-3 border border-gray-400 rounded-md hover:bg-gray-100 transition"
//             >
//               Continue Shopping
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cart;

import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../contexts/ShopContext";
import { Trash2 } from "lucide-react"; // 👈 icon from lucide-react (already available)
import TotalOrder from "./TotalOrder";

const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    addToCart,
    updateCartItemCount,
    getTotalCartAmount,
  } = useContext(ShopContext);
  const navigate = useNavigate();

  const [toastMessage, setToastMessage] = useState(""); // toast text
  const [showToast, setShowToast] = useState(false); // toast visibility

  const showToastMessage = (msg) => {
    setToastMessage(msg);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000); // disappears after 2s
  };

  const itemsArray = Object.values(cartItems);
  const totalAmount = getTotalCartAmount();

  if (itemsArray.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center">
        <h2 className="text-2xl font-semibold mb-3">Your Cart is Empty 🛒</h2>
        <p className="text-gray-600 mb-6">
          Looks like you haven’t added anything yet.
        </p>
        <button
          onClick={() => navigate("/collection")}
          className="px-6 py-3 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition"
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="border-t border-gray-400 py-10 relative">
      {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-5 right-5 bg-gray-800 text-white px-5 py-3 rounded-lg shadow-md transition-opacity duration-500 animate-fadeIn z-50">
          {toastMessage}
        </div>
      )}

      <h1 className="text-2xl font-semibold mb-8">Your Shopping Cart</h1>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left: Cart Items */}
        <div className="flex-1 space-y-6">
          {itemsArray.map(({ product, selectedSize, quantity }) => (
            <div
              key={product.id}
              className="flex flex-col sm:flex-row gap-6 border-b pb-6 relative group"
            >
              {/* Remove Icon */}
              <button
                onClick={() => {
                  removeFromCart(product.id);
                  showToastMessage("Removed from cart");
                }}
                className="absolute top-2 right-2 text-gray-500 hover:text-red-500 transition"
              >
                <Trash2 size={20} />
              </button>

              {/* Product Image */}
              <div className="w-full sm:w-1/4 flex-shrink-0">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-auto rounded-lg object-cover shadow-sm"
                />
              </div>

              {/* Product Info */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h2 className="text-lg font-medium">{product.name}</h2>
                  <p className="text-gray-500">
                    {product.brand} • Size:{" "}
                    <span className="font-medium text-gray-700">
                      {selectedSize}
                    </span>
                  </p>
                  <p className="text-gray-700 mt-1 font-medium">
                    ${product.price}
                  </p>
                </div>

                {/* Quantity Control */}
                <div className="flex items-center gap-4 mt-4">
                  <div className="flex items-center border rounded-md shadow-sm">
                    <button
                      onClick={() => {
                        removeFromCart(product.id);
                        showToastMessage("Quantity decreased");
                      }}
                      className="px-3 py-1 text-lg font-medium hover:bg-gray-100 transition"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      min="1"
                      className="w-12 text-center border-l border-r"
                      value={quantity}
                      onChange={(e) => {
                        const val = parseInt(e.target.value) || 1;
                        updateCartItemCount(product.id, val);
                        showToastMessage("Quantity updated");
                      }}
                    />
                    <button
                      onClick={() => {
                        addToCart(product);
                        showToastMessage("Quantity increased");
                      }}
                      className="px-3 py-1 text-lg font-medium hover:bg-gray-100 transition"
                    >
                      +
                    </button>
                  </div>

                  <p className="text-gray-600 ml-auto font-medium">
                    Subtotal: ${(product.price * quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <TotalOrder itemsArray={itemsArray} totalAmount={totalAmount} />
      </div>

      {/* Toast fade-in animation */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn {
            animation: fadeIn 0.3s ease-in-out;
          }
        `}
      </style>
    </div>
  );
};

export default Cart;
