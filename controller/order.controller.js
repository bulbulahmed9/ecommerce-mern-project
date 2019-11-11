const Order = require("../models/Order.model");

// @route   Post api/order
// @description   order product
// @access  private

const order = async (req, res) => {
  const { name } = req.body;
  try {
    let order = await Order.find();
    order = new Order({
      name,
      user: req.user.id
    });
    await order.save();
    res.send(order);
  } catch (err) {
    console.error(err.message);
    res.send("server error");
  }
};

module.exports = order;
