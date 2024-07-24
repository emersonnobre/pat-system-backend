import { container } from "tsyringe"
import IUserRepository from "../repository/interface/i.user.repository"
import UserRepository from "../repository/implementation/user.repository"
import IUserService from "../service/interface/i.user.service"
import UserService from "../service/implementation/user.service"

container.registerSingleton<IUserRepository>(UserRepository)
container.registerSingleton<IUserService>(UserService)