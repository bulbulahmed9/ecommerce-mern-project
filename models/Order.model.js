const mongoose = require("mongoose");

const OrderSchema = mongoose.Schema({
  name: {
    type: String
  },
  user: { type: mongoose.Schema.ObjectId, ref: "User" }
});

module.exports = Order = mongoose.model("Order", OrderSchema);
