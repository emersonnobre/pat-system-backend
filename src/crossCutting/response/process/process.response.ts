import CreateUserResponse from "../user/create-user.response"
import ProcessMovementResponse from "./process-movement.response"

export default interface ProcessResponse {
  id: number
  number: string
  created_at: string
  updated_at: string
  debt_amount: number
  judge_name: string
  distribution: string
  civil_court: string
  prescription_date: string
  prescription_date_validated: boolean
  executed: string
  subject: string
  court: string
  jurisdiction: string
  control_number: string
  document: string
  created_by: CreateUserResponse
  updated_by: CreateUserResponse
  movements?: ProcessMovementResponse[]
}