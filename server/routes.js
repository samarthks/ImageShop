const express = require("express");
const products = require("./products.json");
require('dotenv').config();

module.exports = function getRoutes() {
  const router = express.Router();
  router.get("/products", (req, res) => {
    res.status(200).json({ products });
  });
  router.get("/products/:productId", getProduct);

  return router;
};

function getProduct(req, res) {
  const { productId } = req.params;
  const product = products.find((product) => product.id === productId);
  try {
    if (!product) {
      throw Error("No items");
    }
    res.status(200).json({ product });
  } catch (error) {
    return res.status(400).json({ statusCode: 404, message: error.message });
  }
}
