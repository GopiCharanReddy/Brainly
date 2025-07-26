import { Router } from "express";
import {
  postContent,
  getContent,
  deleteContent,
} from "../controllers/content.controllers";
import { authMiddleware } from "../middlewares/auth.middleware";

const router = Router();
router
  .route("/")
  .post(authMiddleware, postContent)
  .get(authMiddleware, getContent)
  .delete(authMiddleware, deleteContent);

export default router;