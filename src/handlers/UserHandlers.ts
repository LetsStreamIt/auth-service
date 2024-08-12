import { Request, Response } from 'express'
import { register, RegistrationError } from '../db/userDB'

async function handleRegistration(req: Request, res: Response) {
  const { email, password, username } = req.body

  // Call the register function and wait for the Either result
  const result = await register(email, password, username)

  // Handle the result as a standard Either
  result.caseOf({
    Left: (error) => {
      // Handle the error case
      let errorMsg: string
      if (error == RegistrationError.Unexpected) {
        errorMsg = 'Unexpected'
      } else {
        errorMsg = 'Email already exists'
      }
      res.status(400).json({ success: false, message: errorMsg })
    },
    Right: () => {
      // Handle the success case
      res.status(201).json({ success: true })
    }
  })
}

export { handleRegistration }
