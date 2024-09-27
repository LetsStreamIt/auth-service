export interface ITokenService {
  refreshToken(refreshToken: string): Promise<string>
  validateToken(accessToken: string): Promise<boolean>
  getData(accessToken: string): Promise<string>
}
