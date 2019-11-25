const express = require("express");
const connectDB = require("./config/db");
const path = require('path');
const app = express();
const cors = require('cors')

// Connect DB
connectDB();

// init middleware
app.use(express.json({ extended: false }));
app.use(cors())

// Define Route
app.use("/api/users", require("./routes/api/register"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/products", require("./routes/api/product.routes"));
app.use("/api/cart", require("./routes/api/cart.routes")); 
app.use("/api/order", require("./routes/api/order.routes"));  

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
