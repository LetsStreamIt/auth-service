import { ProfileUseCase } from '../../application/usecases/ProfileUseCase'
import { TokenUseCase } from '../../application/usecases/TokenUseCase'
import logger from '../../infrastructure/Logger'
import { IAuthRepository } from '../interfaces/IAuthRepository'
import { CodedError } from '../models/CodedError'
import { TokenData } from '../models/TokenData'
import { IAuthService } from './IAuthService'

/**
 * Auth service
 * Implementation of the IAuthService interface
 */
export class AuthService implements IAuthService {
  private readonly authRepository: IAuthRepository
  private readonly profileUseCase: ProfileUseCase
  private readonly tokenUseCase: TokenUseCase

  constructor(
    authRepository: IAuthRepository,
    profileUseCase: ProfileUseCase,
    tokenUseCase: TokenUseCase
  ) {
    this.authRepository = authRepository
    this.profileUseCase = profileUseCase
    this.tokenUseCase = tokenUseCase
  }

  async registerUser(email: string, password: string, username: string) {
    const existingUser = await this.authRepository.findUserByEmail(email)
    if (existingUser) {
      throw new CodedError(400, 'User already exists')
    }
    const res = await this.authRepository.createUser(email, password)
    const data = new TokenData(res.id, email)
    const accessToken = await this.tokenUseCase.generate(data, '15m')
    logger.info(`Creating profile for user: ${email}`)
    await this.profileUseCase.createUserProfile(email, username, accessToken)
    return res
  }

  async loginUser(email: string, password: string) {
    const user = await this.authRepository.findUserByEmail(email)
    if (!user) {
      throw new CodedError(401, 'Invalid credentials')
    }

    const isPasswordValid = await this.authRepository.comparePasswords(user.password, password)
    if (!isPasswordValid) {
      throw new CodedError(401, 'Invalid credentials')
    }

    return user
  }

  async deleteUser(email: string) {
    return this.authRepository.deleteUser(email)
  }
}
