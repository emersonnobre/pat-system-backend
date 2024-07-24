import CreateUserResponse from "../../crossCutting/response/user/create-user.response"
import User from "../../model/user"

export function userToCreateUserResponse(user: User): CreateUserResponse {
  return {
    id: user.getId(),
    email: user.getEmail(),
    name: user.getName(),
  }
}