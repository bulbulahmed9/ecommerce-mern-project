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
        res.send('Added');
      }else {
          cart.items.push(item)
          await cart.save();
          res.end();
      } 
    } else {
        Cart.create({
            user: user,
            items: [item]
        })
        res.end();
    }
  } catch (err) {
    console.error(err.message);
    res.send("Server Error");
  }
};

// get from cart
const getItem = async (req, res) => {};
module.exports = {
  addCart,
  getItem
};
