import { Request, Response } from 'express'
import { AuthUseCase } from '../../application/usecases/AuthUseCase'
import { AuthRepository } from '../adapters/repositories/AuthRepository'
import { AuthService } from '../../domain/services/AuthService'
import { Error } from 'mongoose'
import { CodedError } from '../../domain/models/CodedError'
import { TokenUseCase } from '../../application/usecases/TokenUseCase'
import { TokenData } from '../../domain/models/TokenData'
import { ProfileRepository } from '../adapters/repositories/ProfileRepository'
import { ProfileService } from '../../domain/services/ProfileService'
import { ProfileUseCase } from '../../application/usecases/ProfileUseCase'
import logger from '../Logger'

/**
 * AuthController class
 * This class is responsible for handling the authentication routes
 * in the API.
 */
export class AuthController {
  // Instantiate use case with repository and service
  private authUseCase: AuthUseCase
  private tokenUseCase: TokenUseCase
  private profileUseCase: ProfileUseCase

  /**
   * Constructor
   * @param {TokenUseCase} tokenUseCase - The token use case
   */
  constructor(tokenUseCase: TokenUseCase) {
    this.tokenUseCase = tokenUseCase
    const authRepository = new AuthRepository()
    const profileRepository = new ProfileRepository()
    const profileService = new ProfileService(profileRepository)
    this.profileUseCase = new ProfileUseCase(profileService)
    const authService = new AuthService(authRepository, this.profileUseCase, this.tokenUseCase)
    this.authUseCase = new AuthUseCase(authService)
    profileRepository.setAuthUseCase(this.authUseCase)
  }

  /**
   * Register a new user
   * @param {Request} req - The request object
   * @param {Response} res - The response object
   * @returns {Promise<void>} The result of the registration
   */
  registerUser = async (req: Request, res: Response) => {
    const { email, password, username } = req.body
    if (!email || !password || !username) {
      logger.error('Invalid user data')
      res.status(400).json({ message: 'Invalid user data' })
    }
    logger.info(`Registering user with email: ${email}`)
    try {
      const user = await this.authUseCase.register(email, password, username)
      const data = new TokenData(user.id, email)
      const accessToken = await this.tokenUseCase.generate(data, '15m')
      const refreshToken = await this.tokenUseCase.generate(data, '24h')
      res.cookie('refreshToken', refreshToken, { httpOnly: true, sameSite: 'none', secure: true })
      res.status(201).json({ ...data, accessToken, refreshToken })
    } catch (error) {
      if (error instanceof CodedError) {
        logger.error(error.message)
        res.status(error.code).json({ message: error.message })
      } else if (error instanceof Error) {
        logger.error(error.message)
        res.status(400).json({ message: error.message })
      }
    }
  }

  /**
   * Login a user
   * @param {Request} req - The request object
   * @param {Response} res - The response object
   * @returns {Promise<void>} The result of the login
   */
  loginUser = async (req: Request, res: Response) => {
    const { email, password } = req.body
    if (!email || !password) {
      logger.error('Invalid user data')
      res.status(400).json({ message: 'Invalid user data' })
    }
    logger.info(`Logging in user with email: ${email}`)
    try {
      const user = await this.authUseCase.login(email, password)
      const data = new TokenData(user.id, email)
      const accessToken = await this.tokenUseCase.generate(data, '15m')
      const refreshToken = await this.tokenUseCase.generate(data, '24h')
      res.cookie('refreshToken', refreshToken, { httpOnly: true, sameSite: 'none', secure: true })
      res.status(200).json({ ...data, accessToken, refreshToken })
    } catch (error) {
      if (error instanceof CodedError) {
        logger.error(error.message)
        res.status(error.code).json({ message: error.message })
      } else if (error instanceof Error) {
        logger.error(error.message)
        res.status(400).json({ message: error.message })
      }
    }
  }

  /**
   * Logout a user
   * @param {Request} req - The request object
   * @param {Response} res - The response object
   * @returns {Promise<void>} The result of the logout
   */
  logoutUser = async (req: Request, res: Response) => {
    res.clearCookie('refreshToken')
    res.status(200).json({ message: 'User logged out' })
  }
}
