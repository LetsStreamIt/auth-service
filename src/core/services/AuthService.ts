import { IAuthRepository } from '../interfaces/IAuthRepository'
import { CodedError } from '../models/CodedError'
import { IAuthService } from './IAuthService'

export class AuthService implements IAuthService {
  private authRepository: IAuthRepository

  constructor(authRepository: IAuthRepository) {
    this.authRepository = authRepository
  }

  async registerUser(email: string, password: string) {
    const existingUser = await this.authRepository.findUserByEmail(email)
    if (existingUser) {
      throw new CodedError(400, 'User already exists')
    }

    return this.authRepository.createUser(email, password)
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
