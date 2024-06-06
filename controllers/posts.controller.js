import PostsRepository from "../repositories/posts.repository.js";

export default class PostsController {
  constructor() {
    this.postsRepository = new PostsRepository();
  }
  list(req, res) {}
  show(req, res) {}
  create(req, res) {}
  update(req, res) {}
  delete(req, res) {}
}
