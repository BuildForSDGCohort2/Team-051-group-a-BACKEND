const express = require("express");

// Initialize Express app
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
});

// Export app module
module.exports = app;
