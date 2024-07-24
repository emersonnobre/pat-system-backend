import { inject, injectable } from "tsyringe"
import { Request, Response } from "express"
import ProcessService from "../service/implementation/process.service"
import IProcessService from "../service/interface/i.process.service"

@injectable()
export default class ProcessController {
  constructor(@inject(ProcessService) private _processService: IProcessService) { }

  get(req: Request, res: Response) {
    const response = this._processService.get()
    res.status(response.httpStatusCode).json(response)
  }
}