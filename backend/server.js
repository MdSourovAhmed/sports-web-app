const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const Product = require("./models/Product");
// const authRoutes = require('./routes/authRoutes');
// const imageRoutes = require('./routes/imageRoutes');
// const clientRoutes = require("./routes/client");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "25mb" }));
app.use(express.urlencoded({ limit: "25mb" }));
// app.use(cors());
app.use(express.json());

connectDB();

// app.delete('/api/admin/product/:id',async(req,res)=>{
//     console.log('Deletion request received with req: ', req.params.id);
// })

// ... other code ...
app.use("/api/client", require("./routes/userRoutes"));
app.use("/api/client", require("./routes/authRoutes"));
app.use("/api/client", require("./routes/clientRoutes"));
// app.use("/api/client", require("./routes/order"));
app.use("/api/client", require("./routes/orderRoutes"));



app.use("/api/admin", require("./routes/orderRoutes"));
app.use("/api/admin/", require("./routes/productRoute"));

// app.get("/api/client/products/", async (req, res) => {
//   console.log("req received...");
//   try {
//     const {
//       sport,
//       type,
//       brand,
//       price_min,
//       price_max,
//       sort = "relevant",
//       page = 1,
//       limit = 20,
//     } = req.query;

//     // Build query
//     let filterQuery = { stock: { $gt: 0 } }; // Only in-stock

//     // Multi-select filters (comma-separated → $in array)
//     if (sport) filterQuery.sport = { $in: sport.split(",") };
//     if (type) filterQuery.type = { $in: type.split(",") };
//     if (brand) filterQuery.brand = { $in: brand.split(",") };

//     // Price range
//     if (price_min || price_max) {
//       filterQuery.price = {};
//       if (price_min) filterQuery.price.$gte = parseFloat(price_min);
//       if (price_max) filterQuery.price.$lte = parseFloat(price_max);
//     }

//     // Sorting
//     let sortOptions = { createdAt: -1 }; // Default: newest
//     switch (sort) {
//       case "low-high":
//         sortOptions = { price: 1 };
//         break;
//       case "high-low":
//         sortOptions = { price: -1 };
//         break;
//       default:
//         sortOptions = { createdAt: -1 }; // Relevant = newest
//     }

//     // Pagination
//     const skip = (parseInt(page) - 1) * parseInt(limit);

//     // Execute query
//     const products = await Product.find(filterQuery)
//       .sort(sortOptions)
//       .limit(parseInt(limit))
//       .skip(skip);

//     const total = await Product.countDocuments(filterQuery);
//     const pages = Math.ceil(total / parseInt(limit));

//     res.json({ products, total, pages });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Server Error" });
//   }
// });

// app.use('/api/client/',clientRoute);

// app.use('/api/client', authRoutes);
// app.use('/api/auth', authRoutes);
// app.use('/api/images', imageRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
