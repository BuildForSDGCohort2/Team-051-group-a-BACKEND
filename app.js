const express = require("express");
const createDbConnection = require("./models/dbConnection");
const User = require('./models/User')
// Initialize Express app
const app = express();

createDbConnection()
app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
});

// Export app module
module.exports = app;
