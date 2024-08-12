import User, { IUser } from '../models/User'
import bcrypt from 'bcrypt'
import { Either, Left, Right } from 'purify-ts/Either'
import { MongoServerError } from 'mongodb'

enum RegistrationError {
  EmailAlreadyExists,
  Unexpected
}

const SALT_ROUNDS = 10

// Define the register function using Either
async function register(
  email: string,
  password: string,
  username: string
): Promise<Either<RegistrationError, IUser>> {
  const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS)

  try {
    const user = await User.create({
      email: email,
      password: hashedPassword,
      username: username
    })
    return Right(user)
  } catch (error) {
    if (error instanceof MongoServerError && error.code === 11000) {
      return Left(RegistrationError.EmailAlreadyExists) // Handle duplicate key error
    } else {
      return Left(RegistrationError.Unexpected) // Handle any other errors
    }
  }
}

export { register, RegistrationError }
