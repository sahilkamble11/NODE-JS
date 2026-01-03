// services/userService.js
const repo = require("../repositories/userRepository");

exports.findAll = (callback) => {
  repo.findAll(callback);
};
 