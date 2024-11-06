import { AuthUseCase } from '../../../application/usecases/AuthUseCase'
import axios from 'axios'
import logger from '../../Logger'
import { standardConfig } from '../../../config'

/**
 * ProfileRepository class
 * This class is responsible for handling the communication with the Profile service
 * in order to create a user profile.
 */
export class ProfileRepository {
  private authUseCase: AuthUseCase

  /**
   * Constructor
   * @param {AuthUseCase} authUseCase - The authentication use case
   */
  constructor(authUseCase: AuthUseCase) {
    this.authUseCase = authUseCase
  }

  /**
   * Create a user profile
   * @param {string} email - The email of the user
   * @param {string} username - The username of the user
   * @param {string} accessToken - The access token of the user
   * @returns {Promise<void>} The result of the creation
   * @throws {Error} If the user profile could not be created
   * @throws {Error} If the user could not be deleted
   * @throws {Error} If the profile service is not available
   */
  async createUserProfile(email: string, username: string, accessToken: string) {
    const profileServiceUri = `http://${standardConfig.PROFILE_SERVICE_HOSTNAME}:${standardConfig.PROFILE_SERVICE_PORT}`
    const response = await axios.post(
      `${profileServiceUri}/users`,
      { email: email, username: username },
      { headers: { Authorization: `Bearer ${accessToken}` } }
    )
    if (response.status !== 201) {
      logger.error('Profile service error')
      logger.info(`Deleting user with email: ${email}`)
      const deleteResult = await this.authUseCase.delete(email)
      if (deleteResult.deletedCount === 0) {
        throw new Error('User deletion error')
      }
      throw new Error('Profile service error')
    }
  }
}