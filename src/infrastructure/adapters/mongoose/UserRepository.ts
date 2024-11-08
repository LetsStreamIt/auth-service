import { IUserRepository } from '../../../domain/interfaces/UserRepository'
import { IUser } from '../../../domain/models/User'
import { UserModel, UserDocument } from './UserSchema'
import { standardConfig } from '../../../domain/config'
import logger from '../../Logger'
import mongoose from 'mongoose'

export class MongoUserRepository implements IUserRepository {
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
    const user: UserDocument | null = await UserModel.findOne({ email })
    logger.error('Helo from findUserByEmail')
    logger.error(user)
    logger.error(user?.toObject)
    return user ? user.toObject() : null
  }

  async createUser(user: IUser) {
    const createdUser: UserDocument = await UserModel.create(user)
    logger.info(`Creating user with email: ${user.email}`)
    return createdUser.toObject()
  }

  async deleteUser(email: string) {
    logger.info(`Deleting user with email: ${email}`)
    const res = await UserModel.deleteOne({ email })
    return res.deletedCount === 1
  }
}
