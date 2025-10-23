// import React, { useEffect } from "react";
// import Title from "./Title";
// import ProductItem from "./ProductItem";

// import sportsData from "../assets/sportsData.js";

// const LatestCollections = () => {
//   //   useEffect(() => {}, []);
//   const Products = sportsData.slice(0, 10);
//   //   console.log(Products);
//   return (
//     <div className="my-10 ">
//       <div className="text-center py-8 text-3xl">
//         <Title t1={"LATEST"} t2={"COLLECTIONS"} />
//         <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base test-gray-600 ">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa aut
//           vitae suscipit recusandae omnis, minima quisquam esse cum tenetur
//           commodi.
//         </p>
//       </div>
//       <div className="grid grid-col-2 sm:grid-col-3 md:grid-cols-4 lg:grid-col-5 gap-4 gap-y-6">
//         {Products.map((item, index) => {
//           <ProductItem
//             id={index}
//             image={item.imageUrl}
//             name={item.name}
//             price={Products[0].price}
//           />;
//         })}
//       </div>
//     </div>
//   );
// };

// export default LatestCollections;






import React from "react";
import Title from "./Title";
import ProductItem from "./ProductItem";

import sportsData from "../assets/sportsData.js";

const LatestCollections = () => {
  const Products = sportsData.slice(0, 10);

  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title t1={"LATEST"} t2={"COLLECTIONS"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa aut
          vitae suscipit recusandae omnis, minima quisquam esse cum tenetur
          commodi.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {Products.map((item, index) => (
          <ProductItem
            key={index}
            id={index}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default LatestCollections;
