import { ProfileService } from '../../core/services/ProfileService'

export class ProfileUseCase {
  private profileService: ProfileService

  constructor(profileService: ProfileService) {
    this.profileService = profileService
  }

  async createUserProfile(email: string, username: string, accessToken: string) {
    return await this.profileService.createUserProfile(email, username, accessToken)
  }
}
