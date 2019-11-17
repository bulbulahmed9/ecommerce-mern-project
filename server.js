const express = require("express");
const connectDB = require("./config/db");

const app = express();

// Connect DB
connectDB();

// init middleware
app.use(express.json({ extended: false }));

// Define Route
app.use("/api/users", require("./routes/api/register"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/products", require("./routes/api/product.routes"));
app.use("/api/cart", require("./routes/api/cart.routes")); 
app.use("/api/order", require("./routes/api/order.routes"));  

app.get("/", (req, res) => {
  res.send("Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
