const express = require("express");
const { MongoClient } = require("mongodb");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = 5000;

app.use(cors());

let db;
let products;

// Connect to MongoDB
MongoClient.connect(process.env.MONGO_URI)
  .then((client) => {
    db = client.db(process.env.DB_NAME);
    products = db.collection("products");
    console.log("✅ Connected to MongoDB");
  })
  .catch((err) => console.error("❌ MongoDB connection failed:", err));

// GET /products
app.get("/products", async (req, res) => {
  try {
    const result = await products.find().limit(20).toArray();
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch products" });
  }
});

// GET /products/:id
app.get("/products/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await products.findOne({ product_id: id });
    if (!result) return res.status(404).json({ error: "Product not found" });
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: "Error fetching product" });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Node.js Product API running at http://localhost:${PORT}`);
});
