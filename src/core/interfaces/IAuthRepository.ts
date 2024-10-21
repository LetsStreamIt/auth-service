import mongoose, { Document } from 'mongoose'
import { IUser } from '../models/User'

/**
 * @interface IAuthRepository
 * Describes the contract for any repository that handles User persistence
 */
export interface IAuthRepository {
  createUser(email: string, password: string): Promise<Document>
  findUserByEmail(email: string): Promise<IUser | null>
  comparePasswords(storedPassword: string, enteredPassword: string): Promise<boolean>
  deleteUser(email: string): Promise<mongoose.mongo.DeleteResult>
}
