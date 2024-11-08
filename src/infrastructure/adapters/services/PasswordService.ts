import bcrypt from 'bcrypt'
import { IPasswordService } from '../../../domain/services/IPasswordService'
import logger from '../../Logger'

export class StandardPasswordService implements IPasswordService {
  async hashPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt(10)
    return bcrypt.hash(password, salt)
  }

  async comparePasswords(enteredPassword: string, storedPassword: string): Promise<boolean> {
    logger.info(enteredPassword, storedPassword)
    logger.info('Comparing passwords', { enteredPassword, storedPassword })
    return bcrypt.compare(enteredPassword, storedPassword)
  }
}
