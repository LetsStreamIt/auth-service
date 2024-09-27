import { Router } from 'express'
import { registerUser, loginUser } from '../controllers/AuthController'
import { getData, refreshToken, validateToken } from '../controllers/TokenController'

const router = Router()

router.post('/register', registerUser)
router.post('/login', loginUser)
router.post('/refresh', refreshToken)
router.post('/validate', validateToken)
router.get('/data', getData)

export default router
