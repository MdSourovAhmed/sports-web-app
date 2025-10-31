// const express = require("express");
// const router = express.Router();
// const multer = require("multer");
// const { storage } = require("../utils/cloudinary");
// const upload = multer({ storage });

// const { authMiddleware, adminOnly } = require("../middleware/auth");
// const productController = require("../controllers/productController");

// // Public list
// router.get("/list", productController.listProducts);

// // Get single
// router.get("/:id", productController.getProduct);

// // Admin create
// router.post(
//   "/create",
//   authMiddleware,
//   adminOnly,
//   upload.array("images", 8),
//   productController.createProduct
// );

// // Admin update
// router.put(
//   "/update/:id",
//   authMiddleware,
//   adminOnly,
//   upload.array("images", 8),
//   productController.updateProduct
// );

// // Admin delete
// router.delete(
//   "/remove/:id",
//   authMiddleware,
//   adminOnly,
//   productController.deleteProduct
// );

// module.exports = router;

const express = require("express");
const router = express.Router();
const {
  relatedProducts,
  createProduct,
  listProducts,
  deleteProduct,
  updateProduct,
} = require("../controllers/productController");

const { authMiddleware, adminOnly } = require("../middleware/auth");

router.post("/product/create", createProduct);
// router.post("/create", authMiddleware, adminOnly, createProduct);
router.get("/product/list", listProducts);
// router.get("/product/related", relatedProducts);
router.delete("/product/:id", deleteProduct);
// router.delete("/product/:id", authMiddleware, adminOnly, deleteProduct);
router.put("/product/:id", updateProduct);
// router.put("/product/:id", authMiddleware, adminOnly, updateProduct);

module.exports = router;
