// import environmental variables from our variables.env file
require("dotenv").config();

const app = require("./app");
const db = require("./models/connection");

// this matches all routes and all methods
app.use((req, res, next) => {
    res.status(404).send({
        status: 404,
        error: "Not found",
    });
});

// error handler middleware
app.use((error, req, res, next) => {
    res.status(error.status || 500).send({
        error: {
            status: error.status || 500,
            message: error.message || "Internal Server Error",
        },
    });
});

app.set("port", process.env.PORT || 8600);


const server = app.listen(app.get("port"), () => {
    console.debug(
        `Connected & Express is Serving on → PORT http://127.0.0.1:${
        server.address().port
      }`
    );
});