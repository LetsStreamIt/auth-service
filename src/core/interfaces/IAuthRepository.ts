import mongoose, { Document } from 'mongoose'
import { IUser } from '../models/User'

/**
 * IAuthRepository
 * @interface
 * Interface that defines the methods for the auth repository
 */
export interface IAuthRepository {
  /**
   * Create user
   * @param {string} email - The email
   * @param {string} password - The password
   * @returns {Promise<Document>} - The created user
   */
  createUser(email: string, password: string): Promise<Document>
  /**
   * Find user by email
   * @param {string} email - The email
   * @returns {Promise<IUser | null>} - The found user
   */
  findUserByEmail(email: string): Promise<IUser | null>
  /**
   * Compare passwords
   * @param {string} storedPassword - The stored password
   * @param {string} enteredPassword - The entered password
   * @returns {Promise<boolean>} - The comparison result
   */
  comparePasswords(storedPassword: string, enteredPassword: string): Promise<boolean>
  /**
   * Delete user
   * @param {string} email - The email
   * @returns {Promise<mongoose.mongo.DeleteResult>} - The result
   */
  deleteUser(email: string): Promise<mongoose.mongo.DeleteResult>
}
