import { IAuthService } from '../../core/services/IAuthService'

export class AuthUseCase {
  private authService: IAuthService

  constructor(authService: IAuthService) {
    this.authService = authService
  }

  async register(email: string, password: string) {
    return await this.authService.registerUser(email, password)
  }

  async login(email: string, password: string) {
    return await this.authService.loginUser(email, password)
  }

  async delete(email: string) {
    return await this.authService.deleteUser(email)
  }
}
