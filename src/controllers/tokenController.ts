import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'

export const jwtSecret = process.env.JWT_SECRET || 'testingsecret'

export const refreshToken = async (req: Request, res: Response) => {
  const { refreshToken } = req.body

  if (!refreshToken) {
    res.status(400).json({ message: 'Refresh token not provided' })
    return
  }

  try {
    // Verify the refresh token
    const decoded = jwt.verify(refreshToken, jwtSecret) as { data: string }

    // Issue a new access token
    const newAccessToken = jwt.sign({ data: decoded.data }, jwtSecret, {
      expiresIn: '15m'
    })

    res.status(201).json({ accessToken: newAccessToken })
  } catch {
    res.status(401).json({ message: 'Invalid refresh token' })
  }
}

export const validateToken = async (req: Request, res: Response) => {
  const authHeader = req.headers.authorization

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    res.status(401).json({ message: 'Authorization header missing or malformed' })
    return
  }

  const accessToken = authHeader.split(' ')[1]
  if (!accessToken) {
    res.status(400).json({ message: 'Access token not provided' })
    return
  }

  try {
    jwt.verify(accessToken, jwtSecret)
    res.status(200).json({ accessToken })
  } catch {
    res.status(401).json({ message: 'Invalid access token' })
  }
}

export const getEmail = async (req: Request, res: Response) => {
  const authHeader = req.headers.authorization

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    res.status(401).json({ message: 'Authorization header missing or malformed' })
    return
  }

  const accessToken = authHeader.split(' ')[1]
  try {
    const decoded = jwt.verify(accessToken, jwtSecret) as {
      data: string
    }
    res.status(200).json({ email: decoded.data })
  } catch {
    res.status(401).json({ message: 'Invalid access token' })
  }
}
