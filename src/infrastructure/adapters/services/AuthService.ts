import { PasswordUseCase } from '../../../application/usecases/PasswordUseCase'
import { ProfileUseCase } from '../../../application/usecases/ProfileUseCase'
import { TokenUseCase } from '../../../application/usecases/TokenUseCase'
import { IUserRepository } from '../../../domain/interfaces/UserRepository'
import { CodedError } from '../../../domain/models/CodedError'
import { TokenData } from '../../../domain/models/TokenData'
import { IUser } from '../../../domain/models/User'
import { IAuthService } from '../../../domain/services/IAuthService'
import logger from '../../Logger'

export class AuthService implements IAuthService {
  constructor(
    private readonly userRepository: IUserRepository,
    private readonly profileUseCase: ProfileUseCase,
    private readonly tokenUseCase: TokenUseCase,
    private readonly passwordUseCase: PasswordUseCase
  ) {}

  async registerUser(email: string, password: string, username: string): Promise<IUser> {
    const existingUser = await this.userRepository.findUserByEmail(email)
    if (existingUser) {
      throw new CodedError(400, 'User already exists')
    }

    const user = await this.userRepository.createUser({ email, password })
    const data = new TokenData(user.id, email)
    const accessToken = await this.tokenUseCase.generate(data, '15m')

    logger.info(`Creating profile for user: ${email}`)
    await this.profileUseCase.createUserProfile(email, username, accessToken)
    return user
  }

  async loginUser(email: string, password: string) {
    logger.info(`Logging in user with email: ${email}`)
    const user = await this.userRepository.findUserByEmail(email)

    if (!user) {
      throw new CodedError(401, 'Invalid credentials')
    }

    logger.info(user.password)

    const isPasswordValid = await this.passwordUseCase.comparePasswords(password, user.password)
    if (!isPasswordValid) {
      throw new CodedError(401, 'Invalid credentials')
    }

    return user
  }

  async deleteUser(email: string): Promise<boolean> {
    return await this.userRepository.deleteUser(email)
  }
}
