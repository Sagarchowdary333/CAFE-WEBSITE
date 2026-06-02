const express = require("express");
const cors = require("cors");

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
app.get("/menu", (req, res) => {
  res.json([
    {
      id: 1,
      name: "Cappuccino",
      price: 120
    },
    {
      id: 2,
      name: "Latte",
      price: 150
    }
  ]);
});

// Customer Route
app.use("/customers", customerRoutes);

// Order Route
app.use("/orders", orderRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});