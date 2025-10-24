// import React, { useEffect, useState } from "react";
// import sportsData from "../assets/sportsData.js";
// import filter_arrow from "../assets/filter.png";
// import Title from "../components/Title.jsx";
// import ProductItem from "../components/ProductItem.jsx";

// const Collection = () => {
//   const Products = sportsData;
//   const [showFilter, setShowFilter] = useState(false);
//   const [filterProducts, setShowFilterProducts] = useState([]);
//   const [category, setCategory] = useState([]);
//   const [subCategory, setsubCategory] = useState([]);

//   const toggleCategory = (e) => {
//     if (category.includes(e.target.value)) {
//       setCategory((prev) =>
//         prev.filter((it) => it.imageCategory !== e.target.value)
//       );
//     } else {
//       setCategory((prev) => [...prev, e.target.value]);
//     }
//   };

//   const toggleSubCategory = (e) => {
//     if (subCategory.includes(e.target.value)) {
//       setsubCategory((prev) =>
//         prev.filter((it) => it.imageCategory !== e.target.value)
//       );
//     } else {
//       setsubCategory((prev) => [...prev, e.target.value]);
//     }
//   };

//   useEffect(() => {
//     console.log(category);
//   }, [category]);

//   return (
//     <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
//       {/* Filter Option */}
//       <div className="min-w-50">
//         <p
//           onClick={() => setShowFilter(!showFilter)}
//           className="my-4 text-xl flex items-center cursor-pointer gap-2"
//         >
//           FILTERS
//           <img
//             src={filter_arrow}
//             alt="Dropdown"
//             className={`h-5 sm:hidden ${showFilter ? "rotate-90" : ""}`}
//           />
//         </p>
//         <div
//           className={`border border-gray-300 pl-5 py-3 mt-6 ${
//             showFilter ? "block" : "hidden sm:block"
//           }`}
//         >
//           <p className="mb-3 text-sm font-medium">CATEGORIES</p>
//           <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
//             <p className="flex gap-2">
//               <input
//                 type="checkbox"
//                 className="w-3"
//                 value={"cricket"}
//                 onChange={toggleCategory}
//               />
//               Cricket
//             </p>
//             <p className="flex gap-2">
//               <input
//                 type="checkbox"
//                 className="w-3"
//                 value={"football"}
//                 onChange={toggleCategory}
//               />
//               Football
//             </p>
//             <p className="flex gap-2">
//               <input
//                 type="checkbox"
//                 className="w-3"
//                 value={"badminton"}
//                 onChange={toggleCategory}
//               />
//               Badminton
//             </p>
//             <p className="flex gap-2">
//               <input
//                 type="checkbox"
//                 className="w-3"
//                 value={"basketball"}
//                 onChange={toggleCategory}
//               />
//               Basketball
//             </p>
//             <p className="flex gap-2">
//               <input
//                 type="checkbox"
//                 className="w-3"
//                 value={"tenis"}
//                 onChange={toggleCategory}
//               />
//               Tenis
//             </p>
//           </div>
//         </div>

//         {/* Sub Category */}
//         <div
//           className={`border border-gray-300 pl-5 py-3 mt-6 ${
//             showFilter ? "block" : "hidden sm:block"
//           }`}
//         >
//           <p className="mb-3 text-sm font-medium">TYPE</p>
//           <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
//             <p className="flex gap-2">
//               <input
//                 type="checkbox"
//                 className="w-3"
//                 value="Top"
//                 onChange={toggleSubCategory}
//               />
//               Top
//             </p>
//             <p className="flex gap-2">
//               <input
//                 type="checkbox"
//                 className="w-3"
//                 value="Medium"
//                 onChange={toggleSubCategory}
//               />
//               Medium
//             </p>
//             <p className="flex gap-2">
//               <input
//                 type="checkbox"
//                 className="w-3"
//                 value="Less"
//                 onChange={toggleSubCategory}
//               />
//               Less
//             </p>
//           </div>
//         </div>
//       </div>
//       {/* Right SIde */}

//         <div className="flex-1">
//           <div className="flex justify-between text-base sm:text-xl mt-4 mb-4">
//             <Title t1={"ALL"} t2={"COLLETIONS"} />
//             <select
//               name=""
//               className="border-2 border-gray-300 text-xs sm:text-sm px-2"
//               id=""
//             >
//               <option value="relavent">Sort by: Relavent</option>
//               <option value="low-high">Sort by: Low to High</option>
//               <option value="high-to">Sort by: High to Low</option>
//             </select>
//           </div>

//           <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 gap-y-6">
//             {Products.map((item, index) => (
//               <ProductItem
//                 key={index}
//                 id={index}
//                 image={item.image}
//                 name={item.name}
//                 price={item.price}
//               />
//             ))}
//           </div>
//         </div>
//     </div>
//   );
// };

// export default Collection;


// import React, { useMemo, useState } from "react";
// import sportsData from "../assets/sportsData.js";
// import filter_arrow from "../assets/filter.png";
// import Title from "../components/Title.jsx";
// import ProductItem from "../components/ProductItem.jsx";

// const Collection = () => {
//   const products = sportsData;
//   const [showFilter, setShowFilter] = useState(false);
//   const [selectedCategories, setSelectedCategories] = useState([]);
//   const [selectedTypes, setSelectedTypes] = useState([]);
//   const [sortBy, setSortBy] = useState("relevant");

//   // Hardcoded categories for now; make dynamic in future
//   const categories = ["general", "cricket", "football", "badminton", "basketball", "tennis"];

//   // Hardcoded types based on new products; expand as needed
//   const types = ["jersey", "sneakers", "trousers", "bat", "ball", "racket", "helmet", "pads", "shuttlecock"];

//   const toggleCategory = (value) => {
//     setSelectedCategories((prev) =>
//       prev.includes(value)
//         ? prev.filter((cat) => cat !== value)
//         : [...prev, value]
//     );
//   };

//   const toggleType = (value) => {
//     setSelectedTypes((prev) =>
//       prev.includes(value)
//         ? prev.filter((type) => type !== value)
//         : [...prev, value]
//     );
//   };

//   // Memoized filtered and sorted products
//   const filteredProducts = useMemo(() => {
//     let filtered = products.filter((item) => item.isActive && item.stock > 0); // Base: active and in-stock

//     if (selectedCategories.length > 0) {
//       filtered = filtered.filter((item) =>
//         selectedCategories.includes(item.imageCategory || item.sport)
//       );
//     }

//     if (selectedTypes.length > 0) {
//       filtered = filtered.filter((item) =>
//         selectedTypes.includes(item.type)
//       );
//     }

//     // Apply sorting
//     switch (sortBy) {
//       case "low-high":
//         return [...filtered].sort((a, b) => (a.price || 0) - (b.price || 0));
//       case "high-low":
//         return [...filtered].sort((a, b) => (b.price || 0) - (a.price || 0));
//       default:
//         return filtered; // No sort for "relevant"
//     }
//   }, [products, selectedCategories, selectedTypes, sortBy]);

//   return (
//     <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t border-gray-400">
//       {/* Filter Sidebar */}
//       <div className="min-w-60">
//         <p
//           onClick={() => setShowFilter(!showFilter)}
//           className="my-2 text-xl flex items-center cursor-pointer gap-2"
//         >
//           FILTERS
//           <img
//             src={filter_arrow}
//             alt="Dropdown"
//             className={`h-5 sm:hidden transition-transform ${showFilter ? "rotate-90" : ""}`}
//           />
//         </p>

//         {/* Categories Filter */}
//         <div
//           className={`border border-gray-300 pl-5 py-3 mt-6 ${
//             showFilter ? "block" : "hidden sm:block"
//           }`}
//         >
//           <p className="mb-3 text-sm font-medium">CATEGORIES</p>
//           <div className="flex flex-col gap-2 text-sm font-light text-gray-700 max-h-48 overflow-y-auto">
//             {categories.map((cat) => (
//               <label key={cat} className="flex items-center gap-2 cursor-pointer">
//                 <input
//                   type="checkbox"
//                   className="w-3"
//                   value={cat}
//                   checked={selectedCategories.includes(cat)}
//                   onChange={() => toggleCategory(cat)}
//                 />
//                 {cat.charAt(0).toUpperCase() + cat.slice(1)}
//               </label>
//             ))}
//           </div>
//         </div>

//         {/* Types Filter */}
//         <div
//           className={`border border-gray-300 pl-5 py-3 mt-6 ${
//             showFilter ? "block" : "hidden sm:block"
//           }`}
//         >
//           <p className="mb-3 text-sm font-medium">TYPE</p>
//           <div className="flex flex-col gap-2 text-sm font-light text-gray-700 max-h-48 overflow-y-auto">
//             {types.map((type) => (
//               <label key={type} className="flex items-center gap-2 cursor-pointer">
//                 <input
//                   type="checkbox"
//                   className="w-3"
//                   value={type}
//                   checked={selectedTypes.includes(type)}
//                   onChange={() => toggleType(type)}
//                 />
//                 {type.charAt(0).toUpperCase() + type.slice(1)}
//               </label>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Products Grid */}
//       <div className="flex-1">
//         <div className="flex justify-between items-center text-base sm:text-2xl mt-4 pb-4">
//           <Title t1="ALL" t2="COLLECTIONS" />
//           <select
//             className="border-2 border-gray-300 text-sm px-2 py-1"
//             value={sortBy}
//             onChange={(e) => setSortBy(e.target.value)}
//           >
//             <option value="relevant">Sort by: Relevant</option>
//             <option value="low-high">Sort by: Low to High</option>
//             <option value="high-low">Sort by: High to Low</option>
//           </select>
//         </div>

//         {filteredProducts.length === 0 ? (
//           <p className="text-gray-500 text-center py-8">No products found matching your filters.</p>
//         ) : (
//           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
//             {filteredProducts.map((item, index) => (
//               <ProductItem
//                 key={item.id || item.sku || index}
//                 id={item.id || index}
//                 image={item.image || item.images?.[0]}
//                 name={item.name}
//                 price={item.price}
//               />
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Collection;




// import React, { useMemo, useState } from "react";
// import products from "../assets/products.js";
// import filter_arrow from "../assets/filter.png";
// import Title from "../components/Title.jsx";
// import ProductItem from "../components/ProductItem.jsx";


import React, { useMemo, useState } from "react";
import products from "../assets/sportsData.js";
import filter_arrow from "../assets/filter.png";
import Title from "../components/Title.jsx";
import ProductItem from "../components/ProductItem.jsx";

const Collection = () => {
  const allProducts = products;
  const [showFilter, setShowFilter] = useState(false);
  const [selectedSports, setSelectedSports] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [sortBy, setSortBy] = useState("relevant");

  // Dynamic unique sports and types for scalability
  const uniqueSports = useMemo(() => {
    const sports = [...new Set(allProducts.map((item) => item.sport))].sort();
    return sports.map((sport) => ({
      value: sport,
      label: sport.charAt(0).toUpperCase() + sport.slice(1),
    }));
  }, [allProducts]);

  const uniqueTypes = useMemo(() => {
    const types = [...new Set(allProducts.map((item) => item.type))].sort();
    return types.map((type) => ({
      value: type,
      label: type.charAt(0).toUpperCase() + type.slice(1),
    }));
  }, [allProducts]);

  const toggleSport = (value) => {
    setSelectedSports((prev) =>
      prev.includes(value)
        ? prev.filter((sport) => sport !== value)
        : [...prev, value]
    );
  };

  const toggleType = (value) => {
    setSelectedTypes((prev) =>
      prev.includes(value)
        ? prev.filter((type) => type !== value)
        : [...prev, value]
    );
  };

  // Memoized filtered and sorted products
  const filteredProducts = useMemo(() => {
    let filtered = allProducts.filter((item) => item.stock > 0); // Base: in-stock only

    if (selectedSports.length > 0) {
      filtered = filtered.filter((item) =>
        selectedSports.includes(item.sport)
      );
    }

    if (selectedTypes.length > 0) {
      filtered = filtered.filter((item) =>
        selectedTypes.includes(item.type)
      );
    }

    // Apply sorting
    switch (sortBy) {
      case "low-high":
        return [...filtered].sort((a, b) => (a.price || 0) - (b.price || 0));
      case "high-low":
        return [...filtered].sort((a, b) => (b.price || 0) - (a.price || 0));
      default:
        return filtered; // No sort for "relevant"
    }
  }, [allProducts, selectedSports, selectedTypes, sortBy]);

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t border-gray-400">
      {/* Filter Sidebar */}
      <div className="min-w-60">
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="my-2 text-xl flex items-center cursor-pointer gap-2"
        >
          FILTERS
          <img
            src={filter_arrow}
            alt="Dropdown"
            className={`h-5 sm:hidden transition-transform ${showFilter ? "rotate-90" : ""}`}
          />
        </p>

        {/* Sports Filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? "block" : "hidden sm:block"
          }`}
        >
          <p className="mb-3 text-sm font-medium">SPORTS</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700 max-h-48 overflow-y-auto">
            {uniqueSports.map(({ value, label }) => (
              <label key={value} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-3"
                  value={value}
                  checked={selectedSports.includes(value)}
                  onChange={() => toggleSport(value)}
                />
                {label}
              </label>
            ))}
          </div>
        </div>

        {/* Types Filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? "block" : "hidden sm:block"
          }`}
        >
          <p className="mb-3 text-sm font-medium">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700 max-h-48 overflow-y-auto">
            {uniqueTypes.map(({ value, label }) => (
              <label key={value} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-3"
                  value={value}
                  checked={selectedTypes.includes(value)}
                  onChange={() => toggleType(value)}
                />
                {label}
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="flex-1">
        <div className="flex justify-between items-center text-base sm:text-2xl mt-4 pb-4">
          <Title t1="ALL" t2="COLLECTIONS" />
          <select
            className="border-2 border-gray-300 text-sm px-2 py-1"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        {filteredProducts.length === 0 ? (
          <p className="text-gray-500 text-center py-8">No products found matching your filters.</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
            {filteredProducts.map((item) => (
              <ProductItem
                key={item.id}
                id={item.id}
                image={item.images?.[0]}
                name={item.name}
                price={item.price}
                brand={item.brand} // Optional: Pass brand if ProductItem supports it
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Collection;