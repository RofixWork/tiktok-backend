const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true,
  },
  channel: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  song: {
    type: String,
    required: true,
    trim: true,
  },
  likes: {
    type: String,
  },
  messages: {
    type: String,
  },
  shares: {
    type: String,
  },
});

module.exports = mongoose.model("tiktokVideos", PostSchema);
