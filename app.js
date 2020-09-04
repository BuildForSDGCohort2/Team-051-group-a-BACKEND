const express = require("express");
const createDbConnection = require("./models/dbConnection");
// Initialize Express app
const app = express();

// initiate db connection
createDbConnection();

app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
});

// Export app module
module.exports = app;
