import { TokenData } from '../../domain/models/TokenData'
import { ITokenService } from '../../domain/services/ITokenService'

/**
 * TokenUseCase
 * @class
 * TokenUseCase class that contains the use cases for the token
 */
export class TokenUseCase {
  private readonly tokenService: ITokenService

  /**
   * TokenUseCase constructor
   * @param {ITokenService} tokenService - The token service
   */
  constructor(tokenService: ITokenService) {
    this.tokenService = tokenService
  }

  /**
   * Refresh token
   * @param {string} refreshToken - The refresh token
   * @returns {Promise<string>} - The access token
   * @throws {CodedError} - If the refresh token is invalid
   */
  async refresh(refreshToken: string) {
    return await this.tokenService.refreshToken(refreshToken)
  }

  /**
   * Validate token
   * @param {string} accessToken - The access token
   * @returns {Promise<boolean>} - The validation result
   * @throws {CodedError} - If the access token is invalid
   */
  async validate(accessToken: string) {
    return await this.tokenService.validateToken(accessToken)
  }

  /**
   * Get data from token
   * @param {string} accessToken - The access token
   * @returns {Promise<TokenData>} - The token data
   * @throws {CodedError} - If the access token is invalid
   */
  async getData(accessToken: string) {
    return await this.tokenService.getData(accessToken)
  }

  /**
   * Generate token
   * @param {TokenData} data - The token data
   * @param {string} expiresIn - The expiration time
   * @returns {Promise<string>} - The generated token
   */
  async generate(data: TokenData, expiresIn: string) {
    return this.tokenService.generateToken(data, expiresIn)
  }
}
