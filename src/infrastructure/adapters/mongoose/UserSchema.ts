import { Schema, model, Document } from 'mongoose'
import { IUser } from '../../../domain/models/User'

export interface UserDocument extends Document, IUser {
  id: string
  email: string
  password: string
  matchPassword(enteredPassword: string): Promise<boolean>
}

const userSchema: Schema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
})

export const UserModel = model<UserDocument>('User', userSchema)
