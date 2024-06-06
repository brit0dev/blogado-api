import { Post } from "../models/post.model.js";

export default class PostsRepository {
  async list() {
    return await Post.find({}, { __v: false }).lean();
  }
  async findById(id) {
    const post = await Post.findById(id, { __v: false }).lean();

    if (post == null) throw { APIMessage: "Not Found", APIStatus: 404 };

    return post;
  }
  async create(data) {
    return await Post.create(data);
  }
  async update(id, data) {
    const updatedPost = await Post.findByIdAndUpdate(id, data, {
      lean: true,
      projection: { __v: false },
      new: true,
    });

    if (updatedPost == null) throw { APIMessage: "Not Found", APIStatus: 404 };

    return updatedPost;
  }
  async delete(id) {
    const deleteQuery = await Post.deleteOne({ _id: id });

    if (deleteQuery.deletedCount == 0)
      throw { APIMessage: "Not Found", APIStatus: 404 };

    return true;
  }
}
