const express = require("express");
const router = express.Router();

const { getMenu } = require("../controllers/MenuController");

router.get("/", getMenu);

module.exports = router;