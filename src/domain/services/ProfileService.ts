import { ProfileRepository } from '../../infrastructure/adapters/repositories/ProfileRepository'

/**
 * ProfileService
 * Service for user profile
 */
export class ProfileService {
  private profileRepository: ProfileRepository

  /**
   * ProfileService constructor
   * @param {ProfileRepository} profileRepository - The profile repository
   */
  constructor(profileRepository: ProfileRepository) {
    this.profileRepository = profileRepository
  }

  /**
   * Create a new user profile
   * @param {string} email - The email of the user
   * @param {string} username - The username of the user
   * @param {string} accessToken - The access token of the user
   * @returns {Promise<void>} The result of the creation
   * @throws {CodedError} If the user profile could not be created
   */
  async createUserProfile(email: string, username: string, accessToken: string) {
    return await this.profileRepository.createUserProfile(email, username, accessToken)
  }
}
