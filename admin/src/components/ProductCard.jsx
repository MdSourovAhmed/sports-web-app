// // src/components/ProductCard.jsx
// import React from "react";
// import { Trash2 } from "lucide-react";

// const ProductCard = ({ item, onDelete }) => {
//   return (
//     <div className="flex items-start gap-4 p-3 border rounded-lg bg-white hover:shadow-sm transition">
//       <img
//         src={item.images?.[0] || "https://via.placeholder.com/80x80?text=No+Image"}
//         alt={item.name}
//         className="w-20 h-20 object-cover rounded-md flex-shrink-0"
//       />
//       <div className="flex-1">
//         <h3 className="font-medium text-gray-800 truncate">{item.name}</h3>
//         <p className="text-sm text-gray-600">{item.sport?.toUpperCase() || ""} • {item.type}</p>
//         <p className="text-sm text-gray-700 font-semibold mt-1">${(item.price || 0).toFixed(2)}</p>
//       </div>
//       <div>
//         <button
//           onClick={() => onDelete(item)}
//           className="p-2 rounded-full hover:bg-red-100 transition"
//           title="Delete"
//         >
//           <Trash2 className="w-5 h-5 text-red-600" />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;

// import { Trash2, Edit2 } from "lucide-react";

// const ProductCard = ({ item, onDelete, onEdit }) => {
//   return (
//     <div className="border rounded-lg p-3 bg-white shadow hover:shadow-md transition flex justify-between items-center">
//       <div className="flex gap-3 items-center">
//         <img
//           src={item.images?.[0] || "https://via.placeholder.com/60x60?text=No+Image"}
//           alt={item.name}
//           className="w-12 h-12 object-cover rounded-md"
//         />
//         <div>
//           <p className="font-medium">{item.name}</p>
//           <p className="text-gray-600 text-sm">{item.sport} | {item.type}</p>
//           <p className="text-gray-700 font-semibold">${item.price?.toFixed(2)}</p>
//         </div>
//       </div>

//       <div className="flex gap-2">
//         <button
//           onClick={() => onEdit(item)}
//           className="p-2 rounded-full hover:bg-blue-100 transition"
//           title="Edit Product"
//         >
//           <Edit2 className="w-5 h-5 text-blue-600" />
//         </button>

//         <button
//           onClick={() => onDelete(item)}
//           className="p-2 rounded-full hover:bg-red-100 transition"
//           title="Remove Product"
//         >
//           <Trash2 className="w-5 h-5 text-red-600" />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;

// src/components/ProductCard.jsx
import React from "react";
import { Trash2, Edit2 } from "lucide-react";

const ProductCard = ({ item, onDelete, onEdit }) => {
  return (
    <div className="border rounded-lg p-4 bg-white hover:shadow-sm transition flex flex-col gap-2">
      <img
        src={
          item.images?.[0] ||
          "https://via.placeholder.com/100x100?text=No+Image"
        }
        alt={item.name}
        className="w-full h-36 object-cover rounded-md"
      />
      <p className="font-semibold text-gray-800 truncate">{item.name}</p>
      <p className="text-gray-600 text-sm">{item.sport || "-"}</p>
      <p className="text-gray-600 text-sm">{item.type || "-"}</p>
      <p className="text-gray-700 font-semibold">
        ${(item.price || 0).toFixed(2)}
      </p>

      <div className="flex justify-end gap-2">
        <button
          onClick={() => onEdit(item)}
          className="p-2 rounded-full hover:bg-blue-100 transition"
          title="Edit Product"
        >
          <Edit2 className="w-5 h-5 text-blue-600" />
        </button>

        <button
          onClick={() => onDelete(item)}
          className="p-2 rounded-full hover:bg-red-100 transition"
          title="Remove Product"
        >
          <Trash2 className="w-5 h-5 text-red-600" />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
