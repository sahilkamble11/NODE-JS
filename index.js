const express = require("express");
const app = express();
const port = 3000;

// Middleware
app.use(express.json());

// Home Route
const homeRoute = require("./routes/home");
app.use("/", homeRoute);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
