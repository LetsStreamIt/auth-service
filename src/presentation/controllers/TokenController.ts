import { Request, Response } from 'express'
import { TokenUseCase } from '../../application/usecases/TokenUseCase'
import { CodedError } from '../../domain/models/CodedError'

/**
 * TokenController class
 * This class is responsible for handling the token routes
 * in the API.
 */
export class TokenController {
  private readonly tokenUseCase: TokenUseCase

  /**
   * Constructor
   * @param {TokenUseCase} tokenUseCase - The token use case
   */
  constructor(tokenUseCase: TokenUseCase) {
    this.tokenUseCase = tokenUseCase
  }

  /**
   * Refresh the access token
   * @param {Request} req - The request object
   * @param {Response} res - The response object
   * @returns {Promise<void>} The result of the token refresh
   */
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

  /**
   * Validate the access token
   * @param {Request} req - The request object
   * @param {Response} res - The response object
   * @returns {Promise<void>} The result of the token validation
   */
  validateToken = async (req: Request, res: Response) => {
    const authHeader = req.headers.authorization

    if (!authHeader?.startsWith('Bearer ')) {
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

  /**
   * Get data from the access token
   * @param {Request} req - The request object
   * @param {Response} res - The response object
   * @returns {Promise<void>} The data from the access token
   */
  getData = async (req: Request, res: Response) => {
    const authHeader = req.headers.authorization

    if (!authHeader?.startsWith('Bearer ')) {
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
