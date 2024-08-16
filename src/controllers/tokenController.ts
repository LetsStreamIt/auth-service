import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'

export const refreshToken = async (req: Request, res: Response) => {
  const { refreshToken } = req.body

  if (!refreshToken) {
    res.status(401).json({ message: 'Refresh token not provided' })
    return
  }

  try {
    // Verify the refresh token
    const decoded = jwt.verify(refreshToken, process.env.JWT_SECRET as string) as { data: string }

    // Issue a new access token
    const newAccessToken = jwt.sign({ data: decoded.data }, process.env.JWT_SECRET as string, {
      expiresIn: '15m'
    })

    res.status(201).json({ accessToken: newAccessToken })
  } catch {
    res.status(401).json({ message: 'Invalid refresh token' })
  }
}
