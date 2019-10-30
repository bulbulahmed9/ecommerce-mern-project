const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true
  },
  email: {
    type: String,
    trim: true,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  updated: Date,
  created: {
    type: Date,
    default: Date.now()
  },
  seller: {
    type: Boolean,
    default: false
  },
  orders: [{ name: String }]
});

module.exports = User = mongoose.model("User", UserSchema);
