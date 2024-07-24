import { Request, Response, Router } from "express"

const router = Router()

router.route("/check")
  .get((_: Request, res: Response) => {
    res.json({ message: "ok"})
  })

export default router