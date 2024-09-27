import { TokenData } from '../models/TokenData'

export interface ITokenService {
  refreshToken(refreshToken: string): Promise<string>
  validateToken(accessToken: string): Promise<boolean>
  getData(accessToken: string): Promise<TokenData>
  generateToken(data: TokenData, expiresIn: string): string
}
