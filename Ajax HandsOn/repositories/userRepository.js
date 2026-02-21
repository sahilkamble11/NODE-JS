const connection = require('../config/db');

// CREATE
exports.createUser = (name, contact, callback) => {
    const sql = "INSERT INTO users (name, contact) VALUES (?, ?)";
    connection.query(sql, [name, contact], callback);
};

// READ
exports.getAllUsers = (callback) => {
    const sql = "SELECT * FROM users";
    connection.query(sql, callback);
};

// UPDATE
exports.updateUser = (id, name, contact, callback) => {
    const sql = "UPDATE users SET name=?, contact=? WHERE id=?";
    connection.query(sql, [name, contact, id], callback);
};

// DELETE
exports.deleteUser = (id, callback) => {
    const sql = "DELETE FROM users WHERE id=?";
    connection.query(sql, [id], callback);
};
