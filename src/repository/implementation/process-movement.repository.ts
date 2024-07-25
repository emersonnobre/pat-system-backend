import fs from "fs"
import { singleton } from "tsyringe"
import IProcessMovementRepository from "../interface/i.process-movement.repository"
import ProcessMovement from "../../model/process-movement"

@singleton()
export default class ProcessMovementRepository implements IProcessMovementRepository {
  private movements: ProcessMovement[] = []
  constructor() {
    this.sync()
  }

  private sync() {
    const json: { 
      _id: number
      _type: string
      _description: string
      _created_at: string
      _active: boolean
      _process_id: number
    }[] = require("../../database/process-movement.json")
    this.movements = json.map(item => new ProcessMovement(item._id, item._type, item._description, item._created_at, item._active, item._process_id))
  }

  getById(id: number): ProcessMovement | undefined {
    return this.movements.find(movement => movement.id == id)
  }

  save(movement: ProcessMovement): ProcessMovement {
    if (movement.id && movement.id != 0) {
      this.movements = this.movements.map(x => x.id == movement.id ? movement : x)
    } else {
      this.movements.push(movement)
    }
    const json = JSON.stringify(this.movements, null, 2)
    fs.writeFileSync("src/database/process-movement.json", json, "utf8")
    this.sync()
    return movement
  }
}