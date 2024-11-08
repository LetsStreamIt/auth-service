import { Document, Schema, model } from 'mongoose'
import bcrypt from 'bcrypt'

/**
 * User interface
 * @extends {Document}
 */
export interface IUser extends Document {
  /**
   * The user email.
   * @type {string}
   */
  email: string
  /**
   * The user password.
   * @type {string}
   */
  password: string
  /**
   * Match the entered password with the user password.
   * @param {string} enteredPassword The entered password.
   * @returns {Promise<boolean>} A promise that resolves to a boolean indicating if the passwords match.
   */
  matchPassword(enteredPassword: string): Promise<boolean>
}

const userSchema: Schema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
})

// Hash the password before saving the user
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next()
  }

  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password as string, salt)
  next()
})

// Compare the entered password with the user password
userSchema.methods.matchPassword = async function (enteredPassword: string) {
  return bcrypt.compare(enteredPassword, this.password)
}

/**
 * User model
 * @type {IUser}
 * @extends {Model<IUser>}
 */
export const User = model<IUser>('User', userSchema)
