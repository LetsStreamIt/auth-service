import mongoose, { Document } from 'mongoose'
import { IUser } from '../models/User'

/**
 * Interface for the AuthService class
 * @interface
 */
export interface IAuthService {
  /**
   * Registers a new user
   * @param {string} email - The email of the user
   * @param {string} password - The password of the user
   * @param {string} username - The username of the user
   * @returns {Promise<Document>} The created user
   * @throws {CodedError} If the user already exists
   */
  registerUser(email: string, password: string, username: string): Promise<Document>
  /**
   * Logs in a user
   * @param {string} email - The email of the user
   * @param {string} password - The password of the user
   * @returns {Promise<IUser>} The logged in user
   * @throws {CodedError} If the credentials are invalid
   */
  loginUser(email: string, password: string): Promise<IUser>
  /**
   * Deletes a user
   * @param {string} email - The email of the user
   * @returns {Promise<mongoose.mongo.DeleteResult>} The result of the deletion
   */
  deleteUser(email: string): Promise<mongoose.mongo.DeleteResult>
}
