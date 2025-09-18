import { Router } from "express";
import { PostController } from "../controllers/PostController.js";
import { PostValidation } from "../middlewares/PostValidation.js"

const postRouter = Router();

postRouter.get("/", PostController.getAll);
postRouter.post("/", PostValidation.validateProduct, PostController.createPost);

export default postRouter;
