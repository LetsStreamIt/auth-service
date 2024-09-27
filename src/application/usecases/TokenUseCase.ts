import { TokenData } from '../../core/models/TokenData'
import { ITokenService } from '../../core/services/ITokenService'

export class TokenUseCase {
  private tokenService: ITokenService

  constructor(tokenService: ITokenService) {
    this.tokenService = tokenService
  }

  async refresh(refreshToken: string) {
    return await this.tokenService.refreshToken(refreshToken)
  }

  async validate(accessToken: string) {
    return await this.tokenService.validateToken(accessToken)
  }

  async getData(accessToken: string) {
    return await this.tokenService.getData(accessToken)
  }

  async generate(data: TokenData, expiresIn: string) {
    return this.tokenService.generateToken(data, expiresIn)
  }
}
