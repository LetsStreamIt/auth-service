import mongoose, { Document, Schema } from 'mongoose'
import bcrypt from 'bcrypt'

/**
 * @interface IUser
 * @property {string} email The email of the user
 * @property {string} password The password of the user
 * @property {string} username The username of the user
 * Represents a user in the database
 */
export interface IUser extends Document {
  email: string
  username: string
  password: string
  matchPassword: (enteredPassword: string) => Promise<boolean>
}

const userSchema: Schema = new Schema({
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true },
  password: { type: String, required: true }
})

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next()
  }

  const salt = await bcrypt.genSalt(10)
  const newPwd = await bcrypt.hash(this.password as string, salt)
  this.set({ password: newPwd })
  next()
})

userSchema.methods.matchPassword = async function (enteredPassword: string) {
  return await bcrypt.compare(enteredPassword, this.password)
}

/**
 * The User model
 */
const User = mongoose.model<IUser>('User', userSchema)
export default User
