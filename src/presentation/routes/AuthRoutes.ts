import { Router } from 'express'
import { AuthController } from '../controllers/AuthController'
import { TokenService } from '../../domain/services/TokenService'
import { TokenUseCase } from '../../application/usecases/TokenUseCase'
import { TokenController } from '../controllers/TokenController'

const router = Router()

const tokenService = new TokenService()
const tokenUseCase = new TokenUseCase(tokenService)
const tokenController = new TokenController(tokenUseCase)

const authController = new AuthController(tokenUseCase)

router.post('/register', authController.registerUser)
router.post('/login', authController.loginUser)
router.post('/logout', authController.logoutUser)
router.post('/refresh', tokenController.refreshToken)
router.post('/validate', tokenController.validateToken)
router.get('/data', tokenController.getData)

export default router
