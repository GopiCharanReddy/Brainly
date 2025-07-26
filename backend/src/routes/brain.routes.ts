import { Router } from "express";
import { authMiddleware } from "../middlewares/auth.middleware";
import {shareLink, sharedLink} from '../controllers/brain.controllers'
const router = Router();

router.route('/share').post(authMiddleware, shareLink)
router.route('/:shareId').get(sharedLink)

export default router