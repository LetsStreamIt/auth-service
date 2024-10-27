import { User } from '../../../core/models/User'
import { IAuthRepository } from '../../../core/interfaces/IAuthRepository'
import bcrypt from 'bcrypt'
import mongoose from 'mongoose'
import logger from '../../Logger'
import { standardConfig } from '../../../config'

/**
 * AuthRepository
 * This class is responsible for handling all the database operations related to the user.
 * It implements the IAuthRepository interface.
 */
export class AuthRepository implements IAuthRepository {
  constructor() {
    const mongoUri = `mongodb://${standardConfig.MONGO_HOSTNAME}:${standardConfig.MONGO_PORT}/auth`
    try {
      mongoose
        .connect(mongoUri, {
          socketTimeoutMS: 1000
        })
        .then(() => logger.info('Connected to MongoDB'))
    } catch (error) {
      logger.error('Error connecting to MongoDB', error)
      process.exit(1)
    }
  }
  async findUserByEmail(email: string) {
    logger.info(`Finding user with email: ${email}`)
    return User.findOne({ email })
  }

  async createUser(email: string, password: string) {
    const user = new User({ email, password })
    logger.info(`Creating user with email: ${email}`)
    return User.create(user)
  }

  async comparePasswords(storedPassword: string, enteredPassword: string) {
    return bcrypt.compare(enteredPassword, storedPassword)
  }

  async deleteUser(email: string) {
    logger.info(`Deleting user with email: ${email}`)
    return User.deleteOne({ email })
  }
}
