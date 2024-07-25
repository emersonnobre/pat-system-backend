import { inject, singleton } from "tsyringe"
import IProcessMovementService from "../interface/i.process-movement.service"
import UpdateProcessMovementRequest from "../../crossCutting/request/process-movement/update-process-movement.request"
import ApiResponse from "../../crossCutting/response/api.reponse"
import ProcessMovementRepository from "../../repository/implementation/process-movement.repository"
import IProcessMovementRepository from "../../repository/interface/i.process-movement.repository"

@singleton()
export default class ProcessMovementService implements IProcessMovementService {
  constructor(@inject(ProcessMovementRepository) private _processMovementRepository: IProcessMovementRepository) { }

  update(id: number, request: UpdateProcessMovementRequest): ApiResponse<undefined> {
    const movement = this._processMovementRepository.getById(id)
    if (!movement)
      return { success: false, httpStatusCode: 404, data: undefined, message: "Movimentação não encontrada!" }

    movement.type = request.type
    movement.active = request.active

    this._processMovementRepository.save(movement)

    return { success: true, httpStatusCode: 204, data: undefined }
  }
}