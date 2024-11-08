import { IPasswordService } from '../../domain/services/IPasswordService'

/**
 * PasswordUseCase
 * @class
 * PasswordUseCase class that contains the use cases for the password
 */
export class PasswordUseCase {
  private readonly passwordService: IPasswordService

  /**
   * PasswordUseCase constructor
   * @param {IPasswordService} passwordService - The password service
   * @returns {PasswordUseCase} A new PasswordUseCase object
   */
  constructor(passwordService: IPasswordService) {
    this.passwordService = passwordService
  }

  /**
   * Hash a password
   * @param {string} password - The password to hash
   * @returns {Promise<string>} The hashed password
   */
  async hashPassword(password: string) {
    return await this.passwordService.hashPassword(password)
  }

  /**
   * Compare a password with a hash
   * @param {string} password - The password to compare
   * @param {string} hash - The hash to compare
   * @returns {Promise<boolean>} The result of the comparison
   */
  async comparePasswords(password: string, hash: string) {
    return await this.passwordService.comparePasswords(password, hash)
  }
}
