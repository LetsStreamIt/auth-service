import { Request, Response } from 'express'
import { register, RegistrationError } from '../db/userDB'

/**
 * Handles the registration of a new user
 * @param req The request object
 * @param res The response object
 * @returns void
 */
async function handleRegistration(req: Request, res: Response) {
  const { email, password, username } = req.body

  const result = await register(email, password, username)
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
