const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: "Name is required"
  },
  description: {
    type: String,
    trim: true
  },
  price: {
    type: Number,
    required: "Price is required"
  },
  updated: Date,
  created: {
    type: Date,
    default: Date.now
  }
});

module.exports = Product = mongoose.model("Product", ProductSchema);
