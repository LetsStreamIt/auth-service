import { TokenData } from '../models/TokenData'

/**
 * Token service interface
 */
export interface ITokenService {
  /**
   * Generates a new access token
   * @param {string} refreshToken - The refresh token
   * @returns {Promise<string>} The new access token
   * @throws {CodedError} If the refresh token is invalid
   * @throws {CodedError} If the refresh token is expired
   */
  refreshToken(refreshToken: string): Promise<string>
  /**
   * Validates an access token
   * @param {string} accessToken - The access token
   * @returns {Promise<boolean>} Whether the token is valid
   * @throws {CodedError} If the token is not provided
   */
  validateToken(accessToken: string): Promise<boolean>
  /**
   * Gets the data from an access token
   * @param {string} accessToken - The access token
   * @returns {Promise<TokenData>} The token data
   * @throws {CodedError} If the token is not provided
   * @throws {CodedError} If the token is invalid
   * @throws {CodedError} If the token is expired
   */
  getData(accessToken: string): Promise<TokenData>
  /**
   * Generates a new token
   * @param {TokenData} data - The data to encode in the token
   * @param {string} expiresIn - The token expiration time
   * @returns {string} The generated token
   */
  generateToken(data: TokenData, expiresIn: string): string
}
