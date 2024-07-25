import { AutoMap } from "@automapper/classes"
import PasswordUtilities from "../util/security/password-utilities"

export default class User {
  private _id: number
  private _name: string
  private _email: string
  private _password: string

  constructor(id: number, name: string, email: string, password: string) {
    this._id = id
    this._name = name
    this._email = email
    this._password = password
  }

  @AutoMap()
  public get id(): number {
    return this._id
  }

  @AutoMap()
  public get name(): string {
    return this._name
  }

  @AutoMap()
  public get email(): string {
    return this._email
  }

  public comparePassword(password: string): boolean {
    return PasswordUtilities.comparePassword(password, this._password)
  }
}