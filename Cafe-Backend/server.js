const express = require("express");
const cors = require("cors");

require("./config/db");

const menuRoutes = require("./routes/MenuRoutes");
const customerRoutes = require("./routes/CustomerRoutes");
const orderRoutes = require("./routes/OrderRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// Home Route
app.get("/", (req, res) => {
  res.send("Cafe Backend Running");
});

// Menu Route
app.use("/menu", menuRoutes);

// Customer Route
app.use("/customers", customerRoutes);

// Order Route
app.use("/orders", orderRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});