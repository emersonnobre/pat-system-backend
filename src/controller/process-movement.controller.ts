import { inject, injectable } from "tsyringe"
import ProcessMovementService from "../service/implementation/process-movement.service"
import IProcessMovementService from "../service/interface/i.process-movement.service"
import { Request, Response } from "express"
import UpdateProcessMovementRequest from "../crossCutting/request/process-movement/update-process-movement.request"

@injectable()
export default class ProcessMovementController {
  constructor (@inject(ProcessMovementService) private _processMovementService: IProcessMovementService) { }

  update(req: Request, res: Response) {
    const { id } = req.params
    const request: UpdateProcessMovementRequest = req.body
    const response = this._processMovementService.update(Number(id), request)
    res.status(response.httpStatusCode).json(response)
  }
}