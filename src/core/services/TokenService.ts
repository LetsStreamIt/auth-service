import jwt from 'jsonwebtoken'
import generateToken from '../../utils/generateToken'
import { ITokenService } from './ITokenService'
import { CodedError } from '../models/ICodedError'

export class TokenService implements ITokenService {
  private jwtSecret: string

  constructor() {
    this.jwtSecret = process.env.JWT_SECRET || 'testingsecret'
  }

  async refreshToken(refreshToken: string) {
    if (!refreshToken) {
      throw new CodedError(400, 'Refresh token not provided')
    }
    try {
      // Verify the refresh token
      const decoded = jwt.verify(refreshToken, this.jwtSecret) as { data: string }

      // Issue a new access token
      const newAccessToken = generateToken(this.jwtSecret, decoded.data, '15m')
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
      // TODO: Data should be modelled inside core/models
      const decoded = jwt.verify(accessToken, this.jwtSecret) as { data: string }

      return decoded.data
    } catch {
      throw new CodedError(401, 'Invalid access token')
    }
  }
}
