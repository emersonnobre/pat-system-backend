import Process from "../model/process"
import ProcessMovement from "../model/process-movement"
import User from "../model/user"

const getUsers = () => {
  const json: { 
    _id: number
    _name: string
    _email: string
    _password: string
  }[] = require("./user.json")
  return json.map(item => new User(item._id, item._name, item._email, item._password))
}

const getMovements = () => {
  const json: { 
    _id: number
    _type: string
    _description: string
    _created_at: string
    _active: boolean
    _process_id: number
  }[] = require("./process-movement.json")
  return json.map(item => new ProcessMovement(item._id, item._type, item._description, item._created_at, item._active, item._process_id))
}

const getMovementsByProcess = (process_id: number) => {
  const json: { 
    _id: number
    _type: string
    _description: string
    _created_at: string
    _active: boolean
    _process_id: number
  }[] = require("./process-movement.json")
  return json.filter(item => item._process_id == process_id)
    .map(item => new ProcessMovement(item._id, item._type, item._description, item._created_at, item._active, item._process_id))
}

const getProcesses = () => {
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
  }[] = require("./process.json")
  return json.map(item => {
    const movements = getMovementsByProcess(item._id)
    return new Process(
      item._id,
      item._number,
      item._created_at,
      item._updated_at,
      item._debt_amount,
      item._judge_name,
      item._distribution,
      item._civil_court,
      item._prescription_date,
      item._prescription_date_validated,
      item._executed,
      item._subject,
      item._court,
      item._jurisdiction,
      item._control_number,
      item._document,
      item._created_by_id,
      item._updated_by_id,
      movements,
    ) 
  })
}

export default {
  getMovements,
  getProcesses,
  getUsers,
}