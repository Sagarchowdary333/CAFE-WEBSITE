const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json([
    {
      id: 1,
      name: "Sagar",
      phone: "9876543210"
    },
    {
      id: 2,
      name: "Chowdary",
      phone: "9876543211"
    }
  ]);
});

module.exports = router;