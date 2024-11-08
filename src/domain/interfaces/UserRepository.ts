import { IUser } from '../models/User'

/**
 * IAuthRepository
 * @interface
 * Interface that defines the methods for the auth repository
 */
export interface IUserRepository {
  /**
   * Create user
   * @param {IUser} user - The user
   * @returns {Promise<IUser>} - The created user
   */
  createUser(user: IUser): Promise<IUser>

  /**
   * Find user by email
   * @param {string} email - The email
   * @returns {Promise<IUser | null>} - The found user
   */
  findUserByEmail(email: string): Promise<IUser | null>

  /**
   * Delete user
   * @param {string} email - The email
   * @returns {Promise<mongoose.mongo.DeleteResult>} - The result
   */
  deleteUser(email: string): Promise<boolean>
}
