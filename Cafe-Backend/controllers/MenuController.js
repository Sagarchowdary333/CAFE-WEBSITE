const db = require("../config/db");

const getMenu = (req, res) => {
  db.query("SELECT * FROM menu", (err, results) => {
    if (err) {
      return res.status(500).json(err);
    }
    res.json(results);
  });
};

module.exports = {
  getMenu
};