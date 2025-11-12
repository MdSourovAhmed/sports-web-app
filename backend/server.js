const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const Product = require("./models/Product");

dotenv.config();

const app = express();
// app.use(cors());

app.use(
  cors({
    // origin: ["https://ayah-archive-frontend.vercel.app","http://localhost:5173"], // Allow requests from Vite frontend
    origin: [
      process.env.FRONTEND_URL1,
      process.env.FRONTEND_URL2,
      process.env.FRONTEND_URL3,
    ],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"], // Allowed methods
    allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
  })
);

app.use(express.json({ limit: "25mb" }));
app.use(express.urlencoded({ limit: "25mb" }));
// app.use(cors());
app.use(express.json());

connectDB();

// ... other code ...
app.use("/api/client", require("./routes/userRoutes"));
app.use("/api/client", require("./routes/authRoutes"));
app.use("/api/client", require("./routes/clientRoutes"));
app.use("/api/client", require("./routes/orderRoutes"));
// app.get("/api/client/search", async (req, res) => {
//   console.log("Searching started....", req.query);
//   // res.status(200).json({ mess: "req received." });
//   try {
//     const { q, limit = 10 } = req.query;
//     if (!q || q.trim() === "") {
//       return res.json({ products: [] });
//     }

//     // Use regex search for flexible matching
//     const products = await Product.find({
//       name: { $regex: q, $options: "i" },
//     })
//       .limit(Number(limit))
//       .select("name category price imageUrl"); // select only what you need
//     console.log(products);
//     res.json({ products });
//   } catch (err) {
//     console.error("Search error:", err);
//     res.status(500).json({ error: "Server error" });
//   }
// });

app.use("/api/admin", require("./routes/orderRoutes"));
app.use("/api/admin/", require("./routes/productRoute"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
