const express = require("express");
const router = express.Router();

const { getOrders } = require("../controllers/OrderController");

router.get("/", getOrders);

module.exports = router;