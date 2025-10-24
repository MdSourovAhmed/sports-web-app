// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import products from '../assets/sportsData';

// const Products = () => {
//   const { productId } = useParams();
//   console.log(products);
//   const [productData, setProductData] = useState(false);
//   const [img, setImg] = useState("");

//   const fetchData=()=>{
//     products.map((item)=>{
//       console.log(item);
//       if(item.id===productId){
//         setProductData(item);
//         setImg(item.image);
//         return null;
//       }
//     })
//   }

//   useEffect(()=>{
//     fetchData();
//   },[productId]);

//   return productData? (
//   <div className="border-t-2 py-10 transition-opacity ease-in duration-500 opacity-100 ">
//     <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
//       <div className="flex sm:flex-col overflow-x sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
//         {
//           productData.image.map((imge,index)=>(
//             <img onClick={()=>setImg(imge)} src={imge} alt={index} className="w-[24%] sm:w-full " />
//           ))
//         }
//       </div>
//       <div className="w-full sm:w-[80%] ">
//         <img src={img} alt="Its here" className="w-full h-auto" />
//       </div>
//     </div>

//     {/* Product Details */}

//     <div className="flex-1">
//       <h1 className="font-medium text-2xl mt-2 ">{productData.name}</h1>
//       <p className="mt-2 text-gray-600">{productData.averageRating}</p>
//       <p className="mt-4 font-medium text-3xl text-gray-600">{productData.price}</p>
//       <p className="mt-4 text-gray-600 md:w-4/5">{productData.description}</p>
//       <div className="flex gap-4 my-8 flex-col">
//         <p>Select Size</p>
//         <div className="flex gap-4">
//             {
//               productData.size.map((itm,idx)=>(
//                 <button onClick={} className="border py-2 px-4 bg-gray-100">{itm}</button>
//               ))
//             }
//         </div>
//       </div>
//     </div>
//   </div>
// ):<div className="opacity-100">Nothig Found...</div>
// };

// export default Products;

import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ShopContext } from "../contexts/ShopContext"; // Adjust path as needed
import products from "../assets/sportsData";

const Products = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { addToCart, cartItems } = useContext(ShopContext);
  console.log(products);
  const [productData, setProductData] = useState(null);
  const [img, setImg] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [addedToCart, setAddedToCart] = useState(false);

  const fetchData = () => {
    const foundProduct = products.find(
      (item) => item.id === parseInt(productId)
    );
    if (foundProduct) {
      setProductData(foundProduct);
      setImg(foundProduct.images?.[0] || foundProduct.image || "");
      setSelectedSize(foundProduct.specifications?.size || ""); // Default to first size if available
    } else {
      // Optionally navigate to 404 or collection
      navigate("/collection");
    }
  };

  useEffect(() => {
    fetchData();
  }, [productId]);

  const handleSizeClick = (size) => {
    console.log("clicked");
    setSelectedSize(size);
    console.log(selectedSize);
  };

  const handleAddToCart = () => {
    if (selectedSize && productData.stock > 0) {
      // addToCart(productData.id);
      addToCart(productData, selectedSize);

      setAddedToCart(true);
      setTimeout(() => setAddedToCart(false), 2000); // Toast-like feedback
    }
  };

  if (!productData) {
    return (
      <div className="opacity-100 text-center py-10">Nothing Found...</div>
    );
  }

  return (
    <div className="border-t-2 py-10 transition-opacity ease-in duration-500 opacity-100">
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* Image Gallery */}
        <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-hidden justify-between sm:justify-normal sm:w-[18.7%] w-full">
          {productData.images && productData.images.length > 0 ? (
            productData.images.map((imge, index) => (
              <img
                key={index}
                onClick={() => setImg(imge)}
                src={imge}
                alt={`${productData.name} - view ${index + 1}`}
                // className={`w-[24%] sm:w-full cursor-pointer transition-opacity hover:opacity-80 ${img === imge ? "ring-2 ring-gray-500" : ""}`}
                className={`w-[24%] sm:w-full cursor-pointer h-auto sm:mb-3 flex-shrink-0}`}
              />
            ))
          ) : (
            <img
              src={productData.image}
              alt={productData.name}
              className="w-[24%] sm:w-full"
            />
          )}
        </div>
        <div className="w-full sm:w-[80%]">
          <img
            src={img || productData.image}
            alt={productData.name}
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>

      {/* Product Details */}
      <div className="flex-1 mt-8">
        {/* Header Info */}
        <div className="flex items-start justify-between">
          <div>
            <h1 className="font-medium text-2xl">{productData.name}</h1>
            <p className="mt-2 text-gray-600 flex items-center">
              {productData.averageRating} / 5 Stars • {productData.brand} •{" "}
              {productData.sport} {productData.type}
            </p>
          </div>
          <p className="font-medium text-3xl text-gray-600">
            ${productData.price}
          </p>
        </div>

        {/* Description */}
        <p className="mt-4 text-gray-600 md:w-4/5">{productData.description}</p>

        {/* Stock & Tags */}
        <div className="mt-6 flex items-center justify-between">
          <p className="text-gray-600">
            {productData.stock > 0
              ? `In Stock: ${productData.stock} left`
              : "Out of Stock"}
          </p>
          <div className="flex gap-2">
            {productData.tags?.map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-gray-100 text-xs rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Size Selector */}
        <div className="flex gap-4 my-8 flex-col">
          <p className="font-medium">Select Size</p>
          <div className="flex gap-4 flex-wrap">
            {
              productData.specifications.size.map(
                (itm, indx) => (
                  <button
                    key={indx}
                    onClick={() => handleSizeClick(itm)}
                    className={`border cursor-pointer py-2 px-4 rounded-md transition-colors ${
                      selectedSize === itm
                        ? "bg-gray-500 text-white border-gray-500"
                        : "bg-gray-100 hover:bg-gray-200"
                    }`}
                  >
                    {itm}
                  </button>
                )
                // Array.isArray(productData.specifications.size) ? (
                //   productData.specifications.size.map((itm, idx) => (
                //     <button
                //       key={idx}
                //       onClick={() => handleSizeClick(itm)}
                //       className={`border cursor-pointer py-2 px-4 rounded-md transition-colors ${
                //         selectedSize === itm
                //           ? "bg-gray-500 text-white border-gray-500"
                //           : "bg-gray-100 hover:bg-gray-200"
                //       }`}
                //     >
                //       {itm}
                //     </button>
                //   ))
                // ) : (
                //   <button
                //     onClick={() =>
                //       handleSizeClick(productData.specifications.size)
                //     }
                //     className="border  cursor-pointer py-2 px-4 bg-gray-100 rounded-md"
                //   >
                //     {productData.specifications.size}
                //   </button>
                // )
              )
              // : (
              //   <p className="text-gray-500">Size not specified</p>
              // )
            }
          </div>
        </div>

        {/* Specifications */}
        {productData.specifications &&
          Object.keys(productData.specifications).length > 0 && (
            <div className="mb-8">
              <p className="font-medium mb-4">Specifications</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                {Object.entries(productData.specifications).map(
                  ([key, value]) => (
                    <div key={key} className="bg-gray-50 p-3 rounded-md">
                      <p className="text-gray-600 capitalize">
                        {key.replace(/_/g, " ")}:
                      </p>
                      <p className="font-medium">
                        {Array.isArray(value) ? value.join(", ") : value}
                      </p>
                    </div>
                  )
                )}
              </div>
            </div>
          )}

        {/* Add to Cart */}
        <div className="flex gap-4 items-center">
          <button
            onClick={handleAddToCart}
            disabled={!selectedSize || productData.stock === 0}
            className={`px-8 py-3 rounded-md font-medium transition-colors ${
              !selectedSize || productData.stock === 0
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-gray-700 cursor-pointer hover:bg-gray-600 text-white"
            }`}
          >
            {productData.stock === 0 ? "Out of Stock" : "Add to Cart"}
          </button>
          {addedToCart && (
            <span className="text-green-600 font-medium">Added to Cart!</span>
          )}
        </div>

        {/* Reviews Placeholder */}
        <div className="mt-12">
          <h2 className="font-medium text-xl mb-4">
            Reviews ({Math.round(productData.averageRating * 20)}% Positive)
          </h2>
          <p className="text-gray-600">
            No reviews yet. Be the first to review this product.
          </p>
          {/* Add review form or list here in future */}
        </div>
      </div>
    </div>
  );
};

export default Products;
