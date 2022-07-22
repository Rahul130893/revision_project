const express = require("express");
const Product = require("../models/product.model");
const router = express.Router();
const authenticate = require("../middlewares/authenticate");

router.get("", async (req, res) => {
  try {
    const products = await Product.find().lean().exec();

    return res.status(200).send({ products: products }); // []
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).lean().exec();
    return res.status(200).send(product);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const item = await Product.findByIdAndDelete(req.params.id).lean().exec();

    return res.status(200).send(item);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.post("/", authenticate, async (req, res) => {
  req.body.user_id = req.user._id;
  try {
    const product = await Product.create(req.body);
    return res.status(200).send(product);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});

module.exports = router;
