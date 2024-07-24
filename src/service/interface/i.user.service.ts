import AuthUserRequest from "../../crossCutting/request/auth-user.request"
import CreateUserRequest from "../../crossCutting/request/create-user.request"
import ApiResponse from "../../crossCutting/response/api.reponse"
import CreateUserResponse from "../../crossCutting/response/user/create-user.response"

export default interface IUserService {
  create(request: CreateUserRequest): ApiResponse<CreateUserResponse>
  auth(request: AuthUserRequest): ApiResponse<string | undefined>
}