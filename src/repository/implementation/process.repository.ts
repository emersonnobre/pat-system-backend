import { injectable } from "tsyringe"
import fs from "fs"
import Process from "../../model/process"
import IProcessRepository from "../interface/i.process.repository"
import dbInterface from "../../database/interface"

@injectable()
export default class ProcessRepository implements IProcessRepository {
  private processes: Process[] = []
  constructor() {
    this.syncProcesses()
  }

  private syncProcesses() {
    this.processes = dbInterface.getProcesses()
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
    const json = JSON.stringify(this.processes.map(item => ({ ...item, _movements: undefined })), null, 2)
    fs.writeFileSync("src/database/process.json", json, "utf8")
    return process
  }
}