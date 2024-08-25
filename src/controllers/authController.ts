import { Request, Response } from 'express'
import User from '../models/user'
import generateToken from '../utils/generateToken'

// Register a new user
export const registerUser = async (req: Request, res: Response) => {
  const { email, password } = req.body

  const userExists = await User.findOne({ email })

  if (userExists) {
    res.status(400).json({ message: 'User already exists' })
    return
  }

  try {
    const user = await User.create({
      email,
      password
    })

    if (user) {
      const accessToken = generateToken(user.email as string, '15m')
      const refreshToken = generateToken(user.email as string, '24h')
      res.cookie('refreshToken', refreshToken, { httpOnly: true })

      res.status(201).json({
        _id: user._id,
        email: user.email,
        accessToken,
        refreshToken
      })
    } else {
      res.status(400).json({ message: 'Invalid user data' })
    }
  } catch {
    res.status(400).json({ message: 'Invalid user data' })
  }
}

// Login a user and return a token
export const authUser = async (req: Request, res: Response) => {
  const { email, password } = req.body

  try {
    const user = await User.findOne({ email })

    if (user && (await user.matchPassword(password))) {
      const accessToken = generateToken(user.email as string, '15m')
      const refreshToken = generateToken(user.email as string, '24h')
      res.cookie('refreshToken', refreshToken, { httpOnly: true })

      res.status(200).json({
        _id: user._id,
        email: user.email,
        accessToken,
        refreshToken
      })
    } else {
      res.status(401).json({ message: 'Invalid email or password' })
    }
  } catch {
    res.status(400).json({ message: 'Invalid login data' })
  }
}
