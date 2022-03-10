require("dotenv").config();
require("express-async-errors");
const express = require("express");
const connect = require("./db/connect.js");
const notFound = require("./middlewares/not-found.js");
const errorHandler = require("./middlewares/error-handler.js");
const routerPosts = require("./routes/posts.route.js");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ROUTES
app.use("/api/v1/posts", routerPosts);

// middlewares
app.use(notFound);
app.use(errorHandler);

// PORT
const port = process.env.PORT || 5000;

// CONNECTION->DATABASE AND LISTEN ON PORT->5000
const start = async () => {
  try {
    await connect(process.env.MONGO_URI);
    app.listen(port, console.log(`server listening on port ${port}`));
  } catch (error) {}
};

start();
