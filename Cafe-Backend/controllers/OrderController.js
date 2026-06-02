const db = require("../config/db");

const getOrders = (req, res) => {
  db.query("SELECT * FROM orders", (err, results) => {
    if (err) {
      return res.status(500).json(err);
    }
    res.json(results);
  });
};

module.exports = {
  getOrders
};