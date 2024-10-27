import jwt from 'jsonwebtoken'
import { ITokenService } from './ITokenService'
import { CodedError } from '../models/CodedError'
import { TokenData } from '../models/TokenData'
import { standardConfig } from '../../config'

/**
 * Token service
 * Implements the ITokenService interface
 */
export class TokenService implements ITokenService {
  private jwtSecret: string

  constructor() {
    this.jwtSecret = standardConfig.JWT_SECRET
  }

  async refreshToken(refreshToken: string) {
    if (!refreshToken) {
      throw new CodedError(400, 'Token not provided')
    }
    try {
      // Verify the refresh token
      const decoded = jwt.verify(refreshToken, this.jwtSecret) as { data: TokenData }

      // Issue a new access token
      const newAccessToken = this.generateToken(decoded.data, '15m')
      return newAccessToken
    } catch {
      throw new CodedError(401, 'Invalid refresh token')
    }
  }

  async validateToken(accessToken: string) {
    if (!accessToken) {
      throw new CodedError(400, 'Access token not provided')
    }

    try {
      jwt.verify(accessToken, this.jwtSecret)
      return true
    } catch {
      return false
    }
  }

  async getData(accessToken: string) {
    if (!accessToken) {
      throw new CodedError(400, 'Access token not provided')
    }

    try {
      const decoded = jwt.verify(accessToken, this.jwtSecret) as { data: TokenData }

      return decoded.data
    } catch {
      throw new CodedError(401, 'Invalid access token')
    }
  }

  generateToken(data: TokenData, expiresIn: string): string {
    return jwt.sign({ data }, this.jwtSecret, { expiresIn })
  }
}
