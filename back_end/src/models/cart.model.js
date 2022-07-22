const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
  {
    avatar: { type: String, required: true },
    title: { type: String, required: true },
    rating: { type: Number, required: true },
    price: { type: Number, required: true },
    category: {
      type: String,
      emun: ["men", "women", "kids"],
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("cart", cartSchema);
