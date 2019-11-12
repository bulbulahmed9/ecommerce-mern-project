const router = require("express").Router();
const Product = require("../../models/Product.model");
const {
  addProduct,
  getProduct
} = require("../../controller/product.controller");

// @route   POST api/products
// @description   Add product
// @access  Admin

// uncomment below route to add product to database

// router.post('/', addProduct) 

// @route   GET api/products
// @description   get product
// @access  Public

router.get("/", getProduct);

module.exports = router;
