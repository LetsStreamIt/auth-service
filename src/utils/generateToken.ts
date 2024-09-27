import jwt from 'jsonwebtoken'

const generateToken = (jwtSecret: string, id: string, expiresIn: string) => {
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
