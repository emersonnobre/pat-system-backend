import PasswordUtilities from "../util/security/password-utilities"

export default class User {
  private id: number
  private name: string
  private email: string
  private password: string

  constructor(id: number, name: string, email: string, password: string) {
    this.id = id
    this.name = name
    this.email = email
    this.password = password
  }

  public getId(): number {
    return this.id
  }

  public getEmail(): string {
    return this.email
  }

  public getName(): string {
    return this.name
  }

  public comparePassword(password: string): boolean {
    return PasswordUtilities.comparePassword(password, this.password)
  }
}