import fs from "fs"
import { singleton } from "tsyringe"
import IProcessMovementRepository from "../interface/i.process-movement.repository"
import ProcessMovement from "../../model/process-movement"
import dbInterface from "../../database/interface"

@singleton()
export default class ProcessMovementRepository implements IProcessMovementRepository {
  private movements: ProcessMovement[] = []
  constructor() {
    this.sync()
  }

  private sync() {
    this.movements = dbInterface.getMovements()
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