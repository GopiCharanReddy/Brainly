import { Router } from "express";
import { authMiddleware } from "../middlewares/auth.middleware";
import {sharedLink, shareLink} from '../controllers/brain.controllers'
const router = Router();

router.route('/share').post(authMiddleware, shareLink)
router.route('/:shareLink').get(sharedLink)

export default router