// controllers/userController.js
const service = require("../services/userService");

exports.findAll = (req, res) => {
  service.findAll((err, users) => {
    if (err) return res.status(500).json({ message: err.message });
    if (!users || users.length === 0) return res.status(404).json({ message: 'No users found' });
    res.status(200).json(users);
  });
};
