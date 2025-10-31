// const mongoose = require("mongoose");

// const orderItemSchema = new mongoose.Schema({
//   product: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "Product",
//     required: true,
//   },
//   name: String,
//   price: Number,
//   selectedSize: String,
//   quantity: { type: Number, default: 1 },
// });

// const orderSchema = new mongoose.Schema(
//   {
//     user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
//     items: [orderItemSchema],
//     shippingAddress: { type: Object }, // expand as needed
//     totalAmount: { type: Number, required: true },
//     status: {
//       type: String,
//       enum: ["pending", "accepted", "rejected", "shipped", "delivered"],
//       default: "pending",
//     },
//     paymentMethod: { type: String },
//     notes: { type: String },
//   },
//   { timestamps: true }
// );

// module.exports = mongoose.model("Order", orderSchema);




const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    items: [
      {
        productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
        quantity: { type: Number, required: true },
        size: { type: String },
      },
    ],
    deliveryInfo: {
      firstName: String,
      lastName: String,
      email: String,
      street: String,
      city: String,
      zip: String,
      country: String,
      phone: String,
    },
    paymentMethod: { type: String, enum: ["bkash", "nagad", "cod"], default: "cod" },
    totalAmount: { type: Number, required: true },
    status: {
      type: String,
      enum: ["pending", "processing", "shipped", "delivered", "cancelled"],
      default: "pending",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
