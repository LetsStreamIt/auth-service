import { Request, Response } from 'express'
import { AuthUseCase } from '../../application/usecases/AuthUseCase'
import { AuthRepository } from '../adapters/repositories/AuthRepository'
import { AuthService } from '../../core/services/AuthService'
import { Error } from 'mongoose'
import { CodedError } from '../../core/models/CodedError'
import { TokenUseCase } from '../../application/usecases/TokenUseCase'
import { TokenData } from '../../core/models/TokenData'
import { ProfileRepository } from '../adapters/repositories/ProfileRepository'
import { ProfileService } from '../../core/services/ProfileService'
import { ProfileUseCase } from '../../application/usecases/ProfileUseCase'

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
    const authRepository = new AuthRepository()
    const authService = new AuthService(authRepository)
    this.authUseCase = new AuthUseCase(authService)
    this.tokenUseCase = tokenUseCase
    this.profileUseCase = new ProfileUseCase(
      new ProfileService(new ProfileRepository(this.authUseCase))
    )
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
      res.status(400).json({ message: 'Invalid user data' })
    }
    try {
      const user = await this.authUseCase.register(email, password)
      const data = new TokenData(user.id, email)
      const accessToken = await this.tokenUseCase.generate(data, '15m')
      this.profileUseCase.createUserProfile(email, username, accessToken)
      const refreshToken = await this.tokenUseCase.generate(data, '24h')
      res.cookie('refreshToken', refreshToken, { httpOnly: true })
      res.status(201).json({ ...data, accessToken, refreshToken })
    } catch (error) {
      if (error instanceof CodedError) {
        res.status(error.code).json({ message: error.message })
      } else if (error instanceof Error) {
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
      res.status(400).json({ message: 'Invalid user data' })
    }
    try {
      const user = await this.authUseCase.login(email, password)
      const data = new TokenData(user.id, email)
      const accessToken = await this.tokenUseCase.generate(data, '15m')
      const refreshToken = await this.tokenUseCase.generate(data, '24h')
      res.cookie('refreshToken', refreshToken, { httpOnly: true })
      res.status(200).json({ ...data, accessToken, refreshToken })
    } catch (error) {
      if (error instanceof CodedError) {
        res.status(error.code).json({ message: error.message })
      } else if (error instanceof Error) {
        res.status(400).json({ message: error.message })
      }
    }
  }
}
