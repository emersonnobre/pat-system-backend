import CreateUserResponse from "../../crossCutting/response/user/create-user.response"
import User from "../../model/user"
import { mapper } from "./automapper"

export function userToCreateUserResponse(user: User): CreateUserResponse {
  return mapper.map(user, User, CreateUserResponse)
}