const User = require('../models/User.model')

// @route   Put api/order
// @description   order product
// @access  private

const order = async(req, res) => {
    const {
        name
      } = req.body;
      const newOrder = {
        name
      };
    try {
        const user = await User.findByIdAndUpdate(req.user.id );
        console.log(user);

      user.orders.unshift(newOrder);

      await user.save();
      res.json(user);

            
    } catch (err) {
        console.error(err.message)
        res.send('server error')
    }
}

module.exports = order
