import mongoose, { Document, Schema } from 'mongoose'

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

const AccessToken = mongoose.model<IAccessToken>('AccessToken', AccessTokenSchema)
export default AccessToken
