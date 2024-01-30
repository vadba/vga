import { Router } from "express";
import { PostController } from "./PostsController.js";

export const postRouter = new Router();
export const postDefaultPath = "/server/post";

postRouter.post("/", PostController.createPosts);
postRouter.get("/", PostController.getAllPosts);
postRouter.get("/article/:slug", PostController.getPostBySlug);
postRouter.get("/main", PostController.getMainPosts);
postRouter.get("/recent", PostController.getRecentPosts);
postRouter.get("/edit", PostController.getPost);
postRouter.put("/", PostController.updatePost);
postRouter.delete("/:id", PostController.deletePost);
