import { Router } from "express"
import UserController from "../controller/user.controller"
import { container } from "tsyringe"

const controller = container.resolve(UserController)
const router = Router()

router.route("/user").post(controller.create.bind(controller))
router.route("/user/auth").post(controller.auth.bind(controller))

export default router