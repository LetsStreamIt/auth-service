import jwt from 'jsonwebtoken'
import { jwtSecret } from '../controllers/tokenController'

const generateToken = (id: string, expiresIn: string) => {
  return jwt.sign(
    {
      data: id
    },
    jwtSecret,
    {
      expiresIn
    }
  )
}

export default generateToken
