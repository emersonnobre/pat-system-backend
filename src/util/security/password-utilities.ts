import bcrypt from "bcrypt"

export default class PasswordUtilities {
  static hashPassword(password: string): string {
    const saltRounds = 10
    const hashedPassword = bcrypt.hashSync(password, saltRounds)
    return hashedPassword
  }

  static comparePassword(password: string, hash: string): boolean {
    const isMatch = bcrypt.compareSync(password, hash)
    return isMatch
  }
}