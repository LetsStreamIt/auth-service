import jwt from 'jsonwebtoken'

const generateToken = (id: string, expiresIn: string) => {
  return jwt.sign(
    {
      data: id
    },
    process.env.JWT_SECRET as string,
    {
      expiresIn
    }
  )
}

export default generateToken
