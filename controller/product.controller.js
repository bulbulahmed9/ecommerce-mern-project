const Product = require("../models/Product.model");

const addProduct = async (req, res) => {
  const { name, des, price } = req.body
  try {
    let product = await Product.find()
      product = new Product({
        name, des, price
      });
      await product.save();
      res.send("Successfully Added product to database");
  } catch (err) {
    console.error(err.message)
    res.send('Server Error')
  }
};

const getProduct = async (req, res) => {
  try {
    const product = await Product.find();
    if (!product) {
      return res.send("Product is not available at this time");
    }
    res.send(product);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

module.exports = {
  getProduct,
  addProduct
};
