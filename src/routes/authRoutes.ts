import express from 'express'
import { registerUser, authUser, refreshToken } from '../controllers/authController'

const router = express.Router()

router.post('/register', registerUser)
router.post('/login', authUser)
router.post('/refresh', refreshToken)

export default router
