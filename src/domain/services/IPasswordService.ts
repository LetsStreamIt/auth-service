/**
 * Password service interface
 * @interface
 * Interface that defines the methods for the password service
 */
export interface IPasswordService {
  /**
   * Hash password
   * @param {string} password - The password
   * @returns {Promise<string>} - The hashed password
   */
  hashPassword(password: string): Promise<string>

  /**
   * Compare passwords
   * @param {string} storedPassword - The stored password
   * @param {string} enteredPassword - The entered password
   * @returns {Promise<boolean>} - The comparison result
   */
  comparePasswords(storedPassword: string, enteredPassword: string): Promise<boolean>
}
