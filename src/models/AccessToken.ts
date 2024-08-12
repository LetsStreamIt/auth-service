import mongoose, { Document, Schema } from 'mongoose'

/**
 * @interface IAccessToken
 * @property {string} id The id of the access token
 * @property {string} accessToken The access token
 * @property {string} userId The id of the user
 * Represents an access token in the database
 */
export interface IAccessToken extends Document {
  id: string
  accessToken: string
  userId: string
}

const AccessTokenSchema: Schema = new Schema({
  id: { type: String, required: true, unique: true },
  accessToken: { type: String, required: true },
  userId: { type: String, required: true }
})

/**
 * The AccessToken model
 */
const AccessToken = mongoose.model<IAccessToken>('AccessToken', AccessTokenSchema)
export default AccessToken
