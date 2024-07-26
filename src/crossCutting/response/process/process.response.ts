import { AutoMap } from "@automapper/classes"
import CreateUserResponse from "../user/create-user.response"
import ProcessMovementResponse from "./process-movement.response"

export default class ProcessResponse {
  @AutoMap()
  id: number
  @AutoMap()
  number: string
  @AutoMap()
  created_at: string
  @AutoMap()
  updated_at: string
  @AutoMap()
  debt_amount: number
  @AutoMap()
  judge_name: string
  @AutoMap()
  distribution: string
  @AutoMap()
  civil_court: string
  @AutoMap()
  prescription_date: string
  @AutoMap()
  prescription_date_validated: boolean
  @AutoMap()
  executed: string
  @AutoMap()
  subject: string
  @AutoMap()
  court: string
  @AutoMap()
  jurisdiction: string
  @AutoMap()
  control_number: string
  @AutoMap()
  document: string
  created_by: CreateUserResponse
  updated_by: CreateUserResponse
  movements?: ProcessMovementResponse[]
}