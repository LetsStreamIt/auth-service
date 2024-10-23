/**
 * TokenData model
 */
export class TokenData {
  /**
   * The user ID.
   * @type {string}
   */
  id: string
  /**
   * The user email.
   * @type {string}
   */
  email: string

  /**
   * Creates a new TokenData.
   * @param {string} id The user ID.
   * @param {string} email The user email.
   */
  constructor(id: string, email: string) {
    this.id = id
    this.email = email
  }
}
