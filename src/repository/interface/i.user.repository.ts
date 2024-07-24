import User from "../../model/user"

export default interface IUserRepository {
  save(user: User): void
  getLastId(): number
  getByEmail(email: string): User | undefined
}