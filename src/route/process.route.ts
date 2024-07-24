import { Router } from "express"
import { container } from "tsyringe"
import ProcessController from "../controller/process.controller"
import auth from "../middleware/auth.middleware"

const controller = container.resolve(ProcessController)
const router = Router()

router.route("/processes").get(auth, controller.get.bind(controller))

export default router