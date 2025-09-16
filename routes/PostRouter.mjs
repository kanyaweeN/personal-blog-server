import { Router } from "express";
import { PostController } from "../controllers/PostController.js";

const postRouter = Router();

postRouter.get("/", PostController.getAll);
postRouter.post("/", PostController.createPost);

export default postRouter;
