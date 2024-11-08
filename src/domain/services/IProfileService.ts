export interface IProfileService {
  /**
   * Create a new user profile
   * @param {string} email - The email of the user
   * @param {string} username - The username of the user
   * @param {string} accessToken - The access token of the user
   * @returns {Promise<void>} The result of the creation
   * @throws {CodedError} If the user profile could not be created
   */
  createUserProfile(email: string, username: string, accessToken: string): Promise<void>
}
