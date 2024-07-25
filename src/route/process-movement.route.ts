import { Router } from "express"
import { container } from "tsyringe"
import ProcessMovementController from "../controller/process-movement.controller"
import auth from "../middleware/auth.middleware"

const controller = container.resolve(ProcessMovementController)
const router = Router()

router.route("/movements/:id").put(auth, controller.update.bind(controller))

export default router