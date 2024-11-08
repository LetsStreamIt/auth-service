import { IAuthService } from '../../domain/services/IAuthService'
import { PasswordUseCase } from './PasswordUseCase'

/**
 * AuthUseCase
 * @class
 * AuthUseCase class that contains the use cases for the authentication
 */
export class AuthUseCase {
  private authService: IAuthService
  private passwordUseCase: PasswordUseCase

  /**
   * AuthUseCase constructor
   * @param {IAuthService} authService - The authentication service
   */
  constructor(authService: IAuthService, passwordUseCase: PasswordUseCase) {
    this.authService = authService
    this.passwordUseCase = passwordUseCase
  }

  /**
   * Register a new user
   * @param {string} email - The email of the user
   * @param {string} password - The password of the user
   * @param {string} username - The username of the user
   * @returns {Promise<Document>} The result of the registration
   */
  async register(email: string, password: string, username: string) {
    const hashedPassword = await this.passwordUseCase.hashPassword(password)
    return this.authService.registerUser(email, hashedPassword, username)
  }

  /**
   * Log in a user
   * @param {string} email - The email of the user
   * @param {string} password - The password of the user
   * @returns {Promise<IUser>} The user that logged in
   * @throws {CodedError} If the user does not exist
   * @throws {CodedError} If the password is incorrect
   */
  async login(email: string, password: string) {
    const res = await this.authService.loginUser(email, password)
    return res
  }

  /**
   * Delete a user
   * @param {string} email - The email of the user
   * @returns {Promise<boolean>} The result of the deletion
   */
  async delete(email: string) {
    return this.authService.deleteUser(email)
  }
}
