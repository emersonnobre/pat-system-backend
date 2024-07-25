import Process from "../../model/process"
import { inject, singleton } from "tsyringe"
import ProcessResponse from "../../crossCutting/response/process/process.response"
import UserRepository from "../../repository/implementation/user.repository"
import IUserRepository from "../../repository/interface/i.user.repository"
import { userToCreateUserResponse } from "./user.mapper"
import ProcessMovement from "../../model/process-movement"
import ProcessMovementResponse from "../../crossCutting/response/process/process-movement.response"
import ProcessShortResponse from "../../crossCutting/response/process/process-short.response"

@singleton()
export default class ProcessMapper {
  constructor(@inject(UserRepository) private _userRepository: IUserRepository) { }

  modelToProcessResponse(model: Process): ProcessResponse {
    const created_by = this._userRepository.getById(model.getCreatedById())
    const updated_by = this._userRepository.getById(model.getCreatedById())

    return {
      id: model.id,
      number: model.number,
      created_at: model.created_at,
      updated_at: model.updated_at,
      debt_amount: model.debt_amount,
      judge_name: model.judge_name,
      distribution: model.distribution,
      civil_court: model.civil_court,
      prescription_date: model.prescription_date,
      prescription_date_validated: model.prescription_date_validated,
      executed: model.executed,
      subject: model.subject,
      court: model.court,
      jurisdiction: model.jurisdiction,
      control_number: model.control_number,
      document: model.document,
      //@ts-ignore
      created_by: userToCreateUserResponse(created_by),
      //@ts-ignore
      updated_by: userToCreateUserResponse(updated_by),
      movements: model.movements?.map(movement => this.modelToProcessMovementResponse(movement))
    }
  }

  modelToProcessShortResponse(model: Process): ProcessShortResponse {
    return {
      id: model.id,
      number: model.number,
      debt_amount: model.debt_amount,
      judge_name: model.judge_name,
      distribution: model.distribution,
      civil_court: model.civil_court,
      prescription_date: model.prescription_date,
      executed: model.executed
    }
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