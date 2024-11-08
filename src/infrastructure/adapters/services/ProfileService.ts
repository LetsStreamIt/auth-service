import { ProfileRepository } from '../repositories/ProfileRepository'
import { IProfileService } from '../../../domain/services/IProfileService'

export class ProfileService implements IProfileService {
  private readonly profileRepository: ProfileRepository

  /**
   * ProfileService constructor
   * @param {ProfileRepository} profileRepository - The profile repository
   */
  constructor(profileRepository: ProfileRepository) {
    this.profileRepository = profileRepository
  }

  async createUserProfile(email: string, username: string, accessToken: string) {
    return await this.profileRepository.createUserProfile(email, username, accessToken)
  }
}
