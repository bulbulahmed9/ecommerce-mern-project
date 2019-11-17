const Cart = require("../models/Cart.model");

// add to cart
// access : private
// route api/cart

const addCart = async (req, res) => {
  const user = req.user.id;
  const item = {
    product: req.body.product,
    quantity: req.body.quantity
  };

  try {
    const cart = await Cart.findOne({ user: user });
    if (cart) {
      let products = cart.items.map(item => item.product + " ");
      if (products.includes(item.product)) {
        Cart.findOneAndUpdate(
          {
            user: user,
            items: {
              $elemMatch: { product: item.product }
            }
          },
          {
            $inc: { "items.$.quantity": item.quantity }
          }
        );
        res.send("Added");
      } else {
        cart.items.push(item);
        await cart.save();
        res.end();
      }
    } else {
      Cart.create({
        user: user,
        items: [item]
      });
      res.end();
    }
  } catch (err) {
    console.error(err.message);
    res.send("Server Error");
  }
};

// get from cart
const getItem = async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.user.id }).populate(
      "items.product"
    );
    if (!cart) {
      return res.send("Null");
    }
    res.send(cart);
  } catch (err) {
    console.error(err.message);
    res.send("Server Error");
  }
};

// put to cart
// problem,
const updateCart = async (req, res) => {
  try {
    const cart = await Cart.findById(req.body.cartId);
    cart.items = cart.items.filter(item => item.id != req.body.itemId);
    await cart.save();
    res.end();
  } catch (err) {
    console.error(err.message);
    res.send("Server Error");
  }
};

// delete cart
// problem
const deleteCart = async (req, res) => {
  try {
    await Cart.findByIdAndRemove(req.query.id);
    res.end();
  } catch (err) {
    console.error(err.message);
    res.send("Server Error");
  }
};


module.exports = {
  addCart,
  getItem,
  updateCart,
  deleteCart
};
