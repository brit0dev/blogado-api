import mongoose from "mongoose";

const postSchema = mongoose.Schema(
  {
    title: { type: String },
    content: { type: String },
    author: { type: String, required: true },
    tags: { type: Array },
  },
  { timestamps: true }
);

export const Post = mongoose.model("Post", postSchema);
