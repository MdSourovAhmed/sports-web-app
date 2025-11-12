// // const express = require("express");
// // const router = express.Router();
// // // const Product = require("../models/Product");
// // const {
// //     getFilteredProducts
// // //   getProducts,
// // //   getProductById,
// // //   updateProduct,
// // } = require("../controllers/clientController");

// // // const { authMiddleware, adminOnly } = require("../middleware/auth");

// // // // router.post("/create", createProduct);
// // router.get("/products", getFilteredProducts);
// // // router.get("/product/:id", authMiddleware, adminOnly, deleteProduct);
// // // router.put("/update/:id", authMiddleware, adminOnly, updateProduct);

// // // List products (public: with filters, sorting, pagination)
// // // const getFilteredProducts = () => (
// // //   "/",
// // //   async (req, res) => {
// // //     try {
// // //       const {
// // //         sport,
// // //         type,
// // //         brand,
// // //         price_min,
// // //         price_max,
// // //         sort = "relevant",
// // //         page = 1,
// // //         limit = 20,
// // //       } = req.query;

// // //       // Build query
// // //       let filterQuery = { stock: { $gt: 0 } }; // Only in-stock

// // //       // Multi-select filters (comma-separated → $in array)
// // //       if (sport) filterQuery.sport = { $in: sport.split(",") };
// // //       if (type) filterQuery.type = { $in: type.split(",") };
// // //       if (brand) filterQuery.brand = { $in: brand.split(",") };

// // //       // Price range
// // //       if (price_min || price_max) {
// // //         filterQuery.price = {};
// // //         if (price_min) filterQuery.price.$gte = parseFloat(price_min);
// // //         if (price_max) filterQuery.price.$lte = parseFloat(price_max);
// // //       }

// // //       // Sorting
// // //       let sortOptions = { createdAt: -1 }; // Default: newest
// // //       switch (sort) {
// // //         case "low-high":
// // //           sortOptions = { price: 1 };
// // //           break;
// // //         case "high-low":
// // //           sortOptions = { price: -1 };
// // //           break;
// // //         default:
// // //           sortOptions = { createdAt: -1 }; // Relevant = newest
// // //       }

// // //       // Pagination
// // //       const skip = (parseInt(page) - 1) * parseInt(limit);

// // //       // Execute query
// // //       const products = await Product.find(filterQuery)
// // //         .sort(sortOptions)
// // //         .limit(parseInt(limit))
// // //         .skip(skip);

// // //       const total = await Product.countDocuments(filterQuery);
// // //       const pages = Math.ceil(total / parseInt(limit));

// // //       res.json({ products, total, pages });
// // //     } catch (err) {
// // //       console.error(err);
// // //       res.status(500).json({ message: "Server Error" });
// // //     }
// // //   }
// // // );

// // module.exports = router;

// const express = require("express");
// const {
//   getFilteredProducts,
//   getLatestProducts,
//   getBestSellers,
// } = require("../controllers/clientController"); // Adjust path

// const router = express.Router();

// // General filtered products (for Collection page)
// router.get("/products", getFilteredProducts);

// // Latest collections (newest products)
// router.get("/latest", getLatestProducts);

// // Best sellers (badminton-specific)
// router.get("/bestsellers", getBestSellers);

// module.exports = router;

const express = require("express");
const {
  relatedProducts,
  getProductById,
  getFilteredProducts,
  getLatestProducts,
  getBestSellers,
  searchProducts,
} = require("../controllers/clientController");

const router = express.Router();

// General filtered products (for Collection)
router.get("/products/related", relatedProducts);
router.get("/products", getFilteredProducts);
router.get("/product/:id", getProductById);

// Latest collections
router.get("/latest", getLatestProducts);

// Best sellers
router.get("/bestsellers", getBestSellers);

// NEW: Search products (combines text search with filters)
router.get("/search", searchProducts);

module.exports = router;
