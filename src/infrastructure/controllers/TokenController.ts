import { Request, Response } from 'express'
import { TokenUseCase } from '../../application/usecases/TokenUseCase'
import { CodedError } from '../../core/models/CodedError'

export class TokenController {
  private tokenUseCase: TokenUseCase

  constructor(tokenUesCase: TokenUseCase) {
    this.tokenUseCase = tokenUesCase
  }
  refreshToken = async (req: Request, res: Response) => {
    if (!req.cookies) {
      res.status(400).json({ message: 'Refresh token not provided' })
      return
    }
    const refreshToken = req.cookies.refreshToken
    try {
      const newAccessToken = await this.tokenUseCase.refresh(refreshToken)
      res.status(201).json({ accessToken: newAccessToken })
    } catch (error) {
      if (error instanceof CodedError) {
        res.status(error.code).json({ message: error.message })
      } else if (error instanceof Error) {
        res.status(400).json({ message: error.message })
      }
    }
  }

  validateToken = async (req: Request, res: Response) => {
    const authHeader = req.headers.authorization

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      res.status(401).json({ message: 'Authorization header missing or malformed' })
      return
    }

    const accessToken = authHeader.split(' ')[1]
    try {
      const valid = await this.tokenUseCase.validate(accessToken)
      if (valid) {
        res.status(200).json({ accessToken })
      } else {
        res.status(401).json({ message: 'Invalid access token' })
      }
    } catch (error) {
      if (error instanceof CodedError) {
        res.status(error.code).json({ message: error.message })
      } else if (error instanceof Error) {
        res.status(400).json({ message: error.message })
      }
    }
  }

  getData = async (req: Request, res: Response) => {
    const authHeader = req.headers.authorization

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      res.status(401).json({ message: 'Authorization header missing or malformed' })
      return
    }

    const accessToken = authHeader.split(' ')[1]
    try {
      const data = await this.tokenUseCase.getData(accessToken)
      res.status(200).json({ data })
    } catch (error) {
      if (error instanceof CodedError) {
        res.status(error.code).json({ message: error.message })
      } else if (error instanceof Error) {
        res.status(400).json({ message: error.message })
      }
    }
  }
}