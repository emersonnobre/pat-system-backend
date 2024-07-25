import { inject, injectable } from "tsyringe"
import jwt from "jsonwebtoken"
import CreateUserRequest from "../../crossCutting/request/create-user.request"
import ApiResponse from "../../crossCutting/response/api.reponse"
import CreateUserResponse from "../../crossCutting/response/user/create-user.response"
import IUserService from "../interface/i.user.service"
import UserRepository from "../../repository/implementation/user.repository"
import IUserRepository from "../../repository/interface/i.user.repository"
import User from "../../model/user"
import PasswordUtilities from "../../util/security/password-utilities"
import { userToCreateUserResponse } from "../../util/mapping/user.mapper"
import AuthUserRequest from "../../crossCutting/request/auth-user.request"

@injectable()
export default class UserService implements IUserService {
  constructor(@inject(UserRepository) private _userRepository: IUserRepository) { }

  create(request: CreateUserRequest): ApiResponse<CreateUserResponse> {
    const user: User = new User(this._userRepository.getLastId() + 1, request.name, request.email, PasswordUtilities.hashPassword(request.password))
    this._userRepository.save(user)
    return { success: true, httpStatusCode: 201, data: userToCreateUserResponse(user) }
  }

  auth(request: AuthUserRequest): ApiResponse<string | undefined> {
    const user = this._userRepository.getByEmail(request.email)
    if (!user)
      return { success: false, httpStatusCode: 401, message: "Usuário não encontrado!", data: undefined }

    const validPassword = user.comparePassword(request.password)

    if (!validPassword)
      return { success: false, httpStatusCode: 401, message: "Senha inválida!", data: undefined }
    
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET || "chave_secreta", {
      expiresIn: 86400
    })

    return { success: true, httpStatusCode: 200, data: token }
  }
}