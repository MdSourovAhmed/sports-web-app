import React, { useEffect, useState } from "react";
import sportsData from "../assets/sportsData.js";
import Title from "../components/Title.jsx";
import ProductItem from "../components/ProductItem.jsx";

const Collection = () => {
  const Products = sportsData;
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setShowFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setsubCategory] = useState([]);

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) =>
        prev.filter((it) => it.imageCategory !== e.target.value)
      );
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setsubCategory((prev) =>
        prev.filter((it) => it.imageCategory !== e.target.value)
      );
    } else {
      setsubCategory((prev) => [...prev, e.target.value]);
    }
  };

  useEffect(() => {
    console.log(category);
  }, [category]);

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* Filter Option */}
      <div className="min-w-60">
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="my-2 text-xl flex items-center cursor-pointer gap-2"
        >
          FILTERS
          <img
            src=""
            alt="Dropdown"
            className={`h-3 sm:hidden ${showFilter ? "rotate-90" : ""}`}
          />
        </p>
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? "" : "hidden"
          }`}
        >
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"cricket"}
                onChange={toggleCategory}
              />
              Cricket
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"football"}
                onChange={toggleCategory}
              />
              Football
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"badminton"}
                onChange={toggleCategory}
              />
              Badminton
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"basketball"}
                onChange={toggleCategory}
              />
              Basketball
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"tenis"}
                onChange={toggleCategory}
              />
              Tenis
            </p>
          </div>
        </div>

        {/* Sub Category */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? "" : "hidden"
          }`}
        >
          <p className="mb-3 text-sm font-medium">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value="Top"
                onChange={toggleSubCategory}
              />
              Top
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value="Medium"
                onChange={toggleSubCategory}
              />
              Medium
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value="Less"
                onChange={toggleSubCategory}
              />
              Less
            </p>
          </div>
        </div>

        {/* Right SIde */}

        <div className="flex-1">
          <div className="flex justify-between test-base sm:text-2xl mb-4">
            <Title t1={"ALL"} t2={"COLLETIONS"} />
            <select
              name=""
              className="border-2 border-gray-300 text-sm px-2"
              id=""
            >
              <option value="relavent">Sort by: Relavent</option>
              <option value="low-high">Sort by: Low to High</option>
              <option value="high-to">Sort by: High to Low</option>
            </select>
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
      </div>
    </div>
  );
};

export default Collection;
