const express = require("express");
const router = express.Router();
const { Product } = require("../models");
// const { firebase } = require('../database');

router.get("/", async (req, res) => {
  const products = await Product.find({});
  return res.json(products);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  return res.json(product);
});

router.post("/", async (req, res) => {
  const { name, description, category, zipcode } = req.body;
  console.log(
    "🚀 ~ file: product.js ~ line 19 ~ router.post ~ req.body",
    req.body
  );
  const product = await Product.create({ name, description, category, zipcode });
  return res.json(product);
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;
  const product = await Product.findByIdAndUpdate(
    id,
    { name, description },
    {
      new: true,
    }
  );
  return res.json(product);
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  await Product.findByIdAndDelete(id);
  return res.send("product deleted");
});

module.exports = router;
