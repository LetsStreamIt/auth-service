import { ProfileRepository } from '../../infrastructure/adapters/repositories/ProfileRepository'

export class ProfileService {
  private profileRepository: ProfileRepository

  constructor(profileRepository: ProfileRepository) {
    this.profileRepository = profileRepository
  }

  async createUserProfile(email: string, username: string, accessToken: string) {
    return this.profileRepository.createUserProfile(email, username, accessToken)
  }
}
