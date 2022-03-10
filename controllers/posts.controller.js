const { StatusCodes } = require("http-status-codes");
const Post = require("../models/Post");

const getAllPosts = async (req, res) => {
  const posts = await Post.find({});
  res.status(StatusCodes.OK).json({ posts });
};
const createPost = async (req, res) => {
  const data = req.body;

  const post = await Post.create({ ...data });

  if (!post) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ msg: "something is error , please try again...." });
  }

  res.status(StatusCodes.CREATED).json({ post });
};

module.exports = { getAllPosts, createPost };
