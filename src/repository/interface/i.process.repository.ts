import Process from "../../model/process"

export default interface IProcessRepository {
  get(): Process[]
  getById(id: number): Process | null
}