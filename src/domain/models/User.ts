/**
 * User interface
 * @extends {Document}
 */
export interface IUser {
  /**
   * The user ID.
   * @type {string}
   */
  id?: string
  /**
   * The user email.
   * @type {string}
   */
  email: string
  /**
   * The user password.
   * @type {string}
   */
  password: string
}
