const express = require("express");
const {
  getAllPosts,
  createPost,
} = require("../controllers/posts.controller.js");
const router = express.Router();

router.route("/").get(getAllPosts).post(createPost);

module.exports = router;
