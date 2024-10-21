import { AuthUseCase } from '../../../application/usecases/AuthUseCase'
import axios from 'axios'

export class ProfileRepository {
  private authUseCase: AuthUseCase

  constructor(authUseCase: AuthUseCase) {
    this.authUseCase = authUseCase
  }

  async createUserProfile(email: string, username: string, accessToken: string) {
    const profileServiceUri = `${process.env.PROFILE_SERVICE_URI}` || 'http://localhost:3001'
    const response = await axios.post(
      `${profileServiceUri}/users`,
      { email: email, username: username },
      { headers: { Authorization: `Bearer ${accessToken}` } }
    )
    if (response.status !== 201) {
      const deleteResult = await this.authUseCase.delete(email)
      if (deleteResult.deletedCount === 0) {
        throw new Error('User deletion error')
      }
      throw new Error('Profile service error')
    }
  }
}
