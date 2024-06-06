import express from "express";
import PostsController from "../controllers/posts.controller.js";

const postsRouter = express.Router();
const postsController = new PostsController();

postsRouter.get("/", postsController.list);
postsRouter.get("/:id", postsController.show);
postsRouter.post("/", postsController.create);
postsRouter.delete("/:id", postsController.delete);
postsRouter.put("/:id", postsController.update);

export default postsRouter;
