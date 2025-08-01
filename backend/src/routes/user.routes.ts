import express from 'express'
import { signup, signin } from '../controllers/user.controllers'
const router = express.Router()

router.route('/signup').post(signup)
router.route('/signin').post(signin)

export default router