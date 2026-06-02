const db = require("../config/db");

const getCustomers = (req, res) => {
  db.query("SELECT * FROM customers", (err, results) => {
    if (err) {
      return res.status(500).json(err);
    }
    res.json(results);
  });
};

module.exports = {
  getCustomers
};