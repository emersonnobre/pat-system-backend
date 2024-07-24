import { injectable } from "tsyringe"
import Process from "../../model/process"
import IProcessRepository from "../interface/i.process.repository"
import ProcessMovement from "../../model/process-movement"

@injectable()
export default class ProcessRepository implements IProcessRepository {
  private processes: Process[] = []
  constructor() {
    this.syncProcesses()
  }

  private syncProcesses() {
    const json: { 
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
      created_by_id: number
      updated_by_id: number
      movements: [{ 
        id: number
        type: string
        description: string
        created_at: string
      }]
    }[] = require("../../database/process.json")

    this.processes = []
    json.forEach(element => {
      this.processes.push(new Process(
        element.id,
        element.number,
        element.created_at,
        element.updated_at,
        element.debt_amount,
        element.judge_name,
        element.distribution,
        element.civil_court,
        element.prescription_date,
        element.prescription_date_validated,
        element.executed,
        element.subject,
        element.court,
        element.jurisdiction,
        element.control_number,
        element.document,
        element.created_by_id,
        element.updated_by_id,
        element.movements.map(movement => new ProcessMovement(movement.id, movement.type, movement.description, movement.created_at)) // todo ver uma forma melhor de mapear
      ))
    });
  }

  get(): Process[] {
    this.syncProcesses()
    return this.processes
  }
}