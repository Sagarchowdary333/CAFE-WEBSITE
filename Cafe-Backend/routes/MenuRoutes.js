const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
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

module.exports = router;