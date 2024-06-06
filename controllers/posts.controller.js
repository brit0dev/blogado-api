import PostsRepository from "../repositories/posts.repository.js";
import { isValidObjectId } from "mongoose";

export default class PostsController {
  constructor() {
    this.postsRepository = new PostsRepository();
  }
  async index(req, res) {
    const posts = await this.postsRepository.list();

    return res.status(200).json(posts);
  }
  async show(req, res) {
    const { id } = req.params;

    if (isValidObjectId(id)) {
      const post = await this.postsRepository.findById(id);

      return res.json(post);
    }

    throw { APIMessage: "Invalid ID" };
  }
  async create(req, res) {
    const { title, content, author, tags } = req.body;

    if (!author) throw { APIMessage: "Author required." };
    if (!(title || content)) throw { APIMessage: "Title or content required." };

    return res
      .status(201)
      .json(
        await this.postsRepository.create({ title, content, author, tags })
      );
  }
  async delete(req, res) {
    const { id } = req.params;

    if (isValidObjectId(id)) {
      await this.postsRepository.delete(id);
      return res.json({});
    }

    throw { APIMessage: "Invalid ID" };
  }
  async update(req, res) {
    const { id } = req.params;
    const { title, content, author, tags } = req.body;

    if (!author) throw { APIMessage: "Author required." };
    if (!(title || content)) throw { APIMessage: "Title or content required." };

    if (isValidObjectId(id)) {
      const updatedPost = await this.postsRepository.update(id, {
        title,
        content,
        author,
        tags,
      });

      return res.json(updatedPost);
    }

    throw { APIMessage: "Invalid ID" };
  }
}
