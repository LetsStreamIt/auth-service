import { Request, Response } from 'express'
import User from '../models/user'
import generateToken from '../utils/generateToken'
import jwt from 'jsonwebtoken'

// Register a new user
export const registerUser = async (req: Request, res: Response) => {
  const { email, username, password } = req.body

  const userExists = await User.findOne({ email })

  if (userExists) {
    res.status(400).json({ message: 'User already exists' })
    return
  }

  try {
    const user = await User.create({
      email,
      username,
      password
    })

    if (user) {
      res.status(201).json({
        _id: user._id,
        email: user.email,
        username: user.username,
        accessToken: generateToken(user._id as string, '15m'),
        refreshToken: generateToken(user._id as string, '24h')
      })
    } else {
      res.status(400).json({ message: 'Invalid user data' })
    }
  } catch (error) {
    console.error(error)
    res.status(400).json({ message: 'Invalid user data' })
  }
}

// Login a user and return a token
export const authUser = async (req: Request, res: Response) => {
  const { email, password } = req.body

  const user = await User.findOne({ email })

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      email: user.email,
      username: user.username,
      accessToken: generateToken(user._id as string, '15m'),
      refreshToken: generateToken(user._id as string, '24h')
    })
  } else {
    res.status(401).json({ message: 'Invalid email or password' })
  }
}

export const refreshToken = async (req: Request, res: Response) => {
  const { refreshToken } = req.body

  if (!refreshToken) {
    res.status(401).json({ message: 'Refresh token not provided' })
    return
  }

  try {
    // Verify the refresh token
    const decoded = jwt.verify(refreshToken, process.env.JWT_SECRET as string) as { id: string }

    // Issue a new access token
    const newAccessToken = jwt.sign({ id: decoded.id }, process.env.JWT_SECRET as string, {
      expiresIn: '15m'
    })

    res.json({ accessToken: newAccessToken })
  } catch (error) {
    console.log(error)
    res.status(401).json({ message: 'Invalid refresh token' })
  }
}
