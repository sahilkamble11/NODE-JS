const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Welcome to the Basic Node.js Project!");
});

router.get("/about", (req, res) => {
    res.send("This is an about page!");
});

module.exports = router;
