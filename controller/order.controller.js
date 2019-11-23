const User = require("../models/User.model");

const order = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    user.orders = user.orders.concat(req.body.order);
    await user.save();
    res.end();
  } catch (err) {
    console.error(err.messsage);
    res.send("Server Error");
  }
};

module.exports = order;
