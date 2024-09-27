import { User } from '../../../core/models/User'
import { IAuthRepository } from '../../../core/interfaces/IAuthRepository'
import bcrypt from 'bcrypt'
import mongoose from 'mongoose'

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
    return User.findOne({ email }).exec()
  }

  async createUser(email: string, password: string) {
    const user = new User({ email, password })
    return user.save()
  }

  async comparePasswords(storedPassword: string, enteredPassword: string) {
    return bcrypt.compare(enteredPassword, storedPassword)
  }
}
