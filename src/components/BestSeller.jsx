import React from "react";
import sportsData from "../assets/sportsData.js";
import Title from './Title.jsx'
import ProductItem from "./ProductItem.jsx";

const BestSeller = () => {
  const Products = sportsData.filter((it) => it.sport == "badminton");
  return (
    <div className="my-10">
      <div className="text-center text-3xl py-8 ">
        <Title t1={'BEST'} t2={'SELLER'} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600 ">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione
          omnis, sint fugit facilis rem quia.
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

export default BestSeller;
