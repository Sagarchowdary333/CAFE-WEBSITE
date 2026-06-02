const express = require("express");
const router = express.Router();

const { getCustomers } = require("../controllers/CustomerController");

router.get("/", getCustomers);

module.exports = router;