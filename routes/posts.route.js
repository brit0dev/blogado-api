import express from "express";
import PostsController from "../controllers/posts.controller.js";

const postsRouter = express.Router();
const postsController = new PostsController();

postsRouter.get("/", (req, res) => postsController.index(req, res));
postsRouter.get("/:id", (req, res) => postsController.show(req, res));
postsRouter.post("/", (req, res) => postsController.create(req, res));
postsRouter.delete("/:id", (req, res) => postsController.delete(req, res));
postsRouter.put("/:id", (req, res) => postsController.update(req, res));

export default postsRouter;
