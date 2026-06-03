const express = require("express");
const cors = require("cors");

require("./config/db");

const menuRoutes = require("./routes/MenuRoutes");
const customerRoutes = require("./routes/CustomerRoutes");
const orderRoutes = require("./routes/OrderRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Cafe Backend Running Successfully");
});

app.use("/menu", menuRoutes);
app.use("/customers", customerRoutes);
app.use("/orders", orderRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});