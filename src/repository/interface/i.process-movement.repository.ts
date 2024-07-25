import ProcessMovement from "../../model/process-movement"

export default interface IProcessMovementRepository {
  getById(id: number): ProcessMovement | undefined
  save(process: ProcessMovement): ProcessMovement
}