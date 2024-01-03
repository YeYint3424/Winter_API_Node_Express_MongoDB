const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema(
  {
    title: { type: String },
    description: { type: String },
    img: [{ url: { type: String } }],
    userId: { type: mongoose.Schema.ObjectId, ref: "User" },
    status: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
