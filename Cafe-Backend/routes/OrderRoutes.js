const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json([
    {
      orderId: 1,
      item: "Cappuccino",
      quantity: 2
    },
    {
      orderId: 2,
      item: "Latte",
      quantity: 1
    }
  ]);
});

module.exports = router;