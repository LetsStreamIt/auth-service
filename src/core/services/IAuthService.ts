import { Document } from 'mongoose'
import { IUser } from '../models/User'

export interface IAuthService {
  registerUser(email: string, password: string): Promise<Document>
  loginUser(email: string, password: string): Promise<IUser>
}
