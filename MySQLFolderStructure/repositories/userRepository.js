// repositories/userRepository.js
const db = require("../config/db");
const User = require("../models/userModel");

exports.findAll = (callback) => {
  const sql = "SELECT * FROM users";

  db.query(sql, (err, results) => {
    if (err) return callback(err);

    const users = results.map(u => new User(u.id, u.name, u.contact));
    callback(null, users);
  });
};
