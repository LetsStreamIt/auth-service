import { Request, Response } from 'express'
import { AuthUseCase } from '../../application/usecases/AuthUseCase'
import { AuthRepository } from '../adapters/repositories/AuthRepository'
import { AuthService } from '../../core/services/AuthService'
import { Error } from 'mongoose'
import { CodedError } from '../../core/models/CodedError'
import { TokenUseCase } from '../../application/usecases/TokenUseCase'
import { IAuthRepository } from '../../core/interfaces/IAuthRepository'
import { IAuthService } from '../../core/services/IAuthService'
import { TokenData } from '../../core/models/TokenData'

export class AuthController {
  // Instantiate use case with repository and service
  private authRepository: IAuthRepository
  private authService: IAuthService
  private authUseCase: AuthUseCase
  private tokenUseCase: TokenUseCase

  constructor(tokenUseCase: TokenUseCase) {
    this.authRepository = new AuthRepository()
    this.authService = new AuthService(this.authRepository)
    this.authUseCase = new AuthUseCase(this.authService)
    this.tokenUseCase = tokenUseCase
  }

  // Register
  registerUser = async (req: Request, res: Response) => {
    const { email, password } = req.body
    if (!email || !password) {
      res.status(400).json({ message: 'Invalid user data' })
    }
    try {
      const user = await this.authUseCase.register(email, password)
      const data = new TokenData(user.id, email)
      const accessToken = await this.tokenUseCase.generate(data, '15m')
      const refreshToken = await this.tokenUseCase.generate(data, '1h')
      console.log(accessToken, refreshToken)
      res.status(201).json({ ...data, accessToken, refreshToken })
    } catch (error) {
      if (error instanceof CodedError) {
        res.status(error.code).json({ message: error.message })
      } else if (error instanceof Error) {
        res.status(400).json({ message: error.message })
      }
    }
  }

  // Login
  loginUser = async (req: Request, res: Response) => {
    const { email, password } = req.body
    if (!email || !password) {
      res.status(400).json({ message: 'Invalid user data' })
    }
    try {
      const user = await this.authUseCase.login(email, password)
      const data = new TokenData(user.id, email)
      const accessToken = await this.tokenUseCase.generate(data, '15m')
      const refreshToken = await this.tokenUseCase.generate(data, '1h')
      console.log(accessToken, refreshToken)
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
