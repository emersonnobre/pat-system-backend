import { inject, injectable } from "tsyringe"
import { Request, Response } from "express"
import ProcessService from "../service/implementation/process.service"
import IProcessService from "../service/interface/i.process.service"
import PaginationFilterRequest from "../crossCutting/request/comum/pagination.filter.request"
import GetProcessesFilterRequest from "../crossCutting/request/process/get-processes.filter.request"
import UpdateDocumentRequest from "../crossCutting/request/process/update-document.request"
import UpdatePrescriptionDateValidationRequest from "../crossCutting/request/process/update-prescription-date-validation.request"

@injectable()
export default class ProcessController {
  constructor(@inject(ProcessService) private _processService: IProcessService) { }

  get(req: Request, res: Response) {
    const { 
      limit, 
      offset, 
      judgeName,
      executedName,
      prescriptionDateStart,
      prescriptionDateEnd,
      order,
      orderBy,
    } = req.query

    const filters: PaginationFilterRequest<GetProcessesFilterRequest> = {
      limit: Number(limit) || 10,
      offset: Number(offset) || 0,
      filter: {
        judgeName: judgeName?.toString() || undefined,
        executedName: executedName?.toString() || undefined,
        prescriptionDateStart: prescriptionDateStart ? new Date(prescriptionDateStart.toString()) : undefined,
        prescriptionDateEnd: prescriptionDateEnd ? new Date(prescriptionDateEnd.toString()) : undefined,
        order: order?.toString() || "asc",
        orderBy: orderBy?.toString() || "number",
      },
    }

    const response = this._processService.get(filters)
    res.status(response.httpStatusCode).json(response)
  }

  getById(req: Request, res: Response) {
    const { id } = req.params
    const response = this._processService.getById(Number(id))
    res.status(response.httpStatusCode).json(response)
  }

  updateDocument(req: Request, res: Response) {
    const { id } = req.params
    const request: UpdateDocumentRequest = req.body
    const response = this._processService.updateDocument(Number(id), request)
    res.status(response.httpStatusCode).json(response)
  }

  updatePrescriptionValidation(req: Request, res: Response) {
    const { id } = req.params
    const request: UpdatePrescriptionDateValidationRequest = req.body
    const response = this._processService.updatePrescriptionValidation(Number(id), request)
    res.status(response.httpStatusCode).json(response)
  }
}