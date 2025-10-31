const express = require("express");
const router = express.Router();
const {
  createOrder,
  updateOrderInfo,
  getAllOrders,
  getUserOrders,
  updateOrderStatus,
  cancelOrder,
} = require("../controllers/orderController");
const { authMiddleware, adminOnly } = require("../middleware/auth");

// Optionally use authentication middleware
// const { protect, adminOnly } = require("../utils/authMiddleware");

// Public or protected as per your app’s flow
router.post("/place-order",authMiddleware, createOrder);
router.get("/orders", getAllOrders); // admin route
router.get("/orders/my/",authMiddleware, getUserOrders);
// router.get("/orders/:userId", getUserOrders);
router.put("/update-order/:orderId",authMiddleware, updateOrderInfo);
router.patch("/update-order-status/:orderId", updateOrderStatus);
router.put("/cancel-order/:orderId",authMiddleware, cancelOrder);

module.exports = router;
