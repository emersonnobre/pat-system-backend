import Process from "../../model/process"

export default interface IProcessRepository {
  get(): Process[]
}