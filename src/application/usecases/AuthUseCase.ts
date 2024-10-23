import { IAuthService } from '../../core/services/IAuthService'

/**
 * AuthUseCase
 * @class
 * AuthUseCase class that contains the use cases for the authentication
 */
export class AuthUseCase {
  private authService: IAuthService

  /**
   * AuthUseCase constructor
   * @param {IAuthService} authService - The authentication service
   */
  constructor(authService: IAuthService) {
    this.authService = authService
  }

  /**
   * Register a new user
   * @param {string} email - The email of the user
   * @param {string} password - The password of the user
   * @returns {Promise<Document>} The result of the registration
   */
  async register(email: string, password: string) {
    return await this.authService.registerUser(email, password)
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
    return await this.authService.loginUser(email, password)
  }

  /**
   * Delete a user
   * @param {string} email - The email of the user
   * @returns {Promise<mongoose.mongo.DeleteResult>} The result of the deletion
   */
  async delete(email: string) {
    return await this.authService.deleteUser(email)
  }
}
