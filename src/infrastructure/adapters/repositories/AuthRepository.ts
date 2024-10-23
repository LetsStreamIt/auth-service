import { User } from '../../../core/models/User'
import { IAuthRepository } from '../../../core/interfaces/IAuthRepository'
import bcrypt from 'bcrypt'
import mongoose from 'mongoose'

/**
 * AuthRepository
 * This class is responsible for handling all the database operations related to the user.
 * It implements the IAuthRepository interface.
 */
export class AuthRepository implements IAuthRepository {
  constructor() {
    const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017'
    try {
      mongoose
        .connect(mongoUri, {
          socketTimeoutMS: 1000
        })
        .then(() => console.log('MongoDB connected'))
    } catch (error) {
      console.error('Error connecting to MongoDB:', error)
      process.exit(1)
    }
  }
  async findUserByEmail(email: string) {
    return User.findOne({ email })
  }

  async createUser(email: string, password: string) {
    const user = new User({ email, password })
    return User.create(user)
  }

  async comparePasswords(storedPassword: string, enteredPassword: string) {
    return bcrypt.compare(enteredPassword, storedPassword)
  }

  async deleteUser(email: string) {
    return User.deleteOne({ email })
  }
}
