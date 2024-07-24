import ApiResponse from "../../crossCutting/response/api.reponse"
import Process from "../../model/process"

export default interface IProcessService {
  get(): ApiResponse<Process[]>
}