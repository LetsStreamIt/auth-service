import express from 'express'
import { registerUser, authUser } from '../controllers/authController'
import { refreshToken, validateToken, getEmail } from '../controllers/tokenController'

const router = express.Router()

router.post('/register', registerUser)
router.post('/login', authUser)
router.post('/refresh', refreshToken)
router.post('/validate', validateToken)
router.get('/email', getEmail)

export default router
