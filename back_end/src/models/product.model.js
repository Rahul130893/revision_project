const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    avatar: { type: String, required: true },
    title: { type: String, required: true },
    rating: { type: Number, required: true },
    price: { type: Number, required: true },
    category: {
      type: String,
      emun: ["men", "women", "kid"],
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports= mongoose.model("product", productSchema)