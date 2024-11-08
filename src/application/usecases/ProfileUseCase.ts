import { IProfileService } from '../../domain/services/IProfileService'

/**
 * ProfileUseCase
 * @class
 * ProfileUseCase class that contains the use cases for the profile
 */
export class ProfileUseCase {
  private readonly profileService: IProfileService

  /**
   * ProfileUseCase constructor
   * @param {IProfileService} profileService - The profile service
   */
  constructor(profileService: IProfileService) {
    this.profileService = profileService
  }

  /**
   * Create a new user in the profile service
   * @param {string} email - The email of the user
   * @param {string} username - The username of the user
   * @param {string} accessToken - The access token of the user
   * @returns {Promise<void>} The result of the creation
   * @throws {CodedError} If the user could not be created
   */
  async createUserProfile(email: string, username: string, accessToken: string) {
    return await this.profileService.createUserProfile(email, username, accessToken)
  }
}
