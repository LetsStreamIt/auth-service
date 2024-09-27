import { Request, Response } from 'express'
import { AuthUseCase } from '../../application/usecases/AuthUseCase'
import { AuthRepository } from '../adapters/repositories/AuthRepository'
import { AuthService } from '../../core/services/AuthService'
import { Error } from 'mongoose'
import { CodedError } from '../../core/models/ICodedError'

// Instantiate use case with repository and service
const authRepository = new AuthRepository()
const authService = new AuthService(authRepository)
const authUseCase = new AuthUseCase(authService)

// Register
export const registerUser = async (req: Request, res: Response) => {
  const { email, password } = req.body
  if (!email || !password) {
    res.status(400).json({ message: 'Invalid user data' })
  }
  try {
    const user = await authUseCase.register(email, password)
    res.status(201).json(user)
  } catch (error) {
    if (error instanceof CodedError) {
      res.status(error.code).json({ message: error.message })
    } else if (error instanceof Error) {
      res.status(400).json({ message: error.message })
    }
  }
}

// Login
export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body
  if (!email || !password) {
    res.status(400).json({ message: 'Invalid user data' })
  }
  try {
    const user = await authUseCase.login(email, password)
    res.status(200).json(user)
  } catch (error) {
    if (error instanceof CodedError) {
      res.status(error.code).json({ message: error.message })
    } else if (error instanceof Error) {
      res.status(400).json({ message: error.message })
    }
  }
}
