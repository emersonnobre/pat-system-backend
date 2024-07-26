import fs from "fs"
import { injectable } from "tsyringe"
import User from "../../model/user"
import IUserRepository from "../interface/i.user.repository"
import dbInterface from "../../database/interface"

@injectable()
export default class UserRepository implements IUserRepository {
  private users: User[] = []
  constructor() {
    this.syncUsers()
  }

  getById(id: number): User | undefined {
    this.syncUsers()
    return this.users.find(user => user.id == id)
  }

  getByEmail(email: string): User | undefined {
    this.syncUsers()
    return this.users.find(user => user.email == email)
  }

  private syncUsers() {
    this.users = dbInterface.getUsers()
  }

  save(user: User): void {
    this.users.push(user)
    const json = JSON.stringify(this.users, null, 2)
    fs.writeFileSync("src/database/user.json", json, "utf8")
    this.syncUsers()
  }

  getLastId(): number {
    return this.users.length ? this.users[0].id : 0
  }
}