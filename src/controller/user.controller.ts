import { inject, injectable } from "tsyringe"
import { Request, Response } from "express"
import UserService from "../service/implementation/user.service"
import IUserService from "../service/interface/i.user.service"
import CreateUserRequest from "../crossCutting/request/create-user.request"
import AuthUserRequest from "../crossCutting/request/auth-user.request"

@injectable()
export default class UserController {
  constructor(@inject(UserService) private _userService: IUserService) { }

  create(req: Request, res: Response) {
    const request = req.body as CreateUserRequest
    const response = this._userService.create(request)
    res.status(response.httpStatusCode).json(response)
  }

  auth(req: Request, res: Response) {
    const request = req.body as AuthUserRequest
    const response = this._userService.auth(request)
    res.status(response.httpStatusCode).json(response)
  }
}