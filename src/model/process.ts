import ProcessMovement from "./process-movement"

export default class Process {
  private id: number
  private number: string
  private created_at: string
  private updated_at: string
  private debt_amount: number
  private judge_name: string
  private distribution: string
  private civil_court: string
  private prescription_date: string
  private prescription_date_validated: boolean
  private executed: string
  private subject: string
  private court: string
  private jurisdiction: string
  private control_number: string
  private document: string
  private created_by_id: number
  private updated_by_id: number
  private movements?: ProcessMovement[]

  constructor(
    id: number,
    number: string,
    created_at: string,
    updated_at: string,
    debt_amount: number,
    judge_name: string,
    distribution: string,
    civil_court: string,
    prescription_date: string,
    prescription_date_validated: boolean,
    executed: string,
    subject: string,
    court: string,
    jurisdiction: string,
    control_number: string,
    document: string,
    created_by_id: number,
    updated_by_id: number,
    movements: ProcessMovement[]) 
  {
    this.id = id
    this.number = number
    this.created_at = created_at
    this.updated_at = updated_at
    this.debt_amount = debt_amount
    this.judge_name = judge_name
    this.distribution = distribution
    this.civil_court = civil_court
    this.prescription_date = prescription_date
    this.prescription_date_validated = prescription_date_validated
    this.executed = executed
    this.subject = subject
    this.court = court
    this.jurisdiction = jurisdiction
    this.control_number = control_number
    this.document = document
    this.created_by_id = created_by_id
    this.updated_by_id = updated_by_id
    this.movements = movements
  }
}