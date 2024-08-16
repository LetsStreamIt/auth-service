import express from 'express'
import { registerUser, authUser } from '../controllers/authController'
import { refreshToken, validateToken } from '../controllers/tokenController'

const router = express.Router()

router.post('/register', registerUser)
router.post('/login', authUser)
router.post('/refresh', refreshToken)
router.post('/validate', validateToken)

export default router
