import { injectable } from "tsyringe"
import fs from "fs"
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
      _id: number
      _number: string
      _created_at: string
      _updated_at: string
      _debt_amount: number
      _judge_name: string
      _distribution: string
      _civil_court: string
      _prescription_date: string
      _prescription_date_validated: boolean
      _executed: string
      _subject: string
      _court: string
      _jurisdiction: string
      _control_number: string
      _document: string
      _created_by_id: number
      _updated_by_id: number
      _movements: [{ 
        id: number
        type: string
        description: string
        created_at: string
        active: boolean
      }]
    }[] = require("../../database/process.json")

    this.processes = []
    json.forEach(element => {
      this.processes.push(new Process(
        element._id,
        element._number,
        element._created_at,
        element._updated_at,
        element._debt_amount,
        element._judge_name,
        element._distribution,
        element._civil_court,
        element._prescription_date,
        element._prescription_date_validated,
        element._executed,
        element._subject,
        element._court,
        element._jurisdiction,
        element._control_number,
        element._document,
        element._created_by_id,
        element._updated_by_id,
        element._movements.map(movement => new ProcessMovement(movement.id, movement.type, movement.description, movement.created_at, movement.active, element._id)) // todo ver uma forma melhor de mapear
      ))
    });
  }

  get(): Process[] {
    this.syncProcesses()
    return this.processes
  }

  getById(id: number): Process | null {
    this.syncProcesses()
    return this.processes.find(process => process.id == id)
  }

  save(process: Process): Process {
    if (process.id && process.id != 0) {
      this.processes = this.processes.map(x => x.id == process.id ? process : x)
    } else {
      this.processes.push(process)
    }
    const json = JSON.stringify(this.processes, null, 2)
    fs.writeFileSync("src/database/process.json", json, "utf8")
    return process
  }
}