import mongoose, { Document, Schema } from 'mongoose'

/**
 * @interface IUser
 * @property {string} email The email of the user
 * @property {string} password The password of the user
 * @property {string} username The username of the user
 * Represents a user in the database
 */
export interface IUser extends Document {
  email: string
  password: string
  username: string
}

const UserSchema: Schema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  username: { type: String, required: true }
})

/**
 * The User model
 */
const User = mongoose.model<IUser>('User', UserSchema)
export default User
