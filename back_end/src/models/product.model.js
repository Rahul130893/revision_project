const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    avatar: { type: String, required: true },
    title: { type: String, required: true },
    rating: { type: Number, required: true },
    price: { type: Number, required: true },
    category: {
      type: String,
      emun: ["men", "women", "kids"],
    },
    user_id:{type: mongoose.Schema.Types.ObjectId, ref:"user", required: true }
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports= mongoose.model("product", productSchema)