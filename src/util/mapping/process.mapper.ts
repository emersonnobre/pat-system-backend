import { inject, singleton } from "tsyringe"
import Process from "../../model/process"
import ProcessResponse from "../../crossCutting/response/process/process.response"
import UserRepository from "../../repository/implementation/user.repository"
import IUserRepository from "../../repository/interface/i.user.repository"
import { userToCreateUserResponse } from "./user.mapper"
import ProcessMovement from "../../model/process-movement"
import ProcessMovementResponse from "../../crossCutting/response/process/process-movement.response"
import ProcessShortResponse from "../../crossCutting/response/process/process-short.response"
import { mapper } from "./automapper"

@singleton()
export default class ProcessMapper {
  constructor(@inject(UserRepository) private _userRepository: IUserRepository) { }

  modelToResponse(model: Process): ProcessResponse {
    const created_by = this._userRepository.getById(model.created_by_id)
    const updated_by = this._userRepository.getById(model.updated_by_id)

    const response = mapper.map(model, Process, ProcessResponse)
    
    response.created_by = userToCreateUserResponse(created_by)
    response.updated_by = userToCreateUserResponse(updated_by)
    response.movements = model.movements?.map(movement => this.modelToProcessMovementResponse(movement))
    
    return response
  }

  modelToShortResponse(model: Process): ProcessShortResponse {
    return mapper.map(model, Process, ProcessShortResponse)
  }

  private modelToProcessMovementResponse(model: ProcessMovement): ProcessMovementResponse {
    return {
      id: model.id,
      description: model.description,
      type: model.type,
      created_at: model.created_at
    }
  }
}