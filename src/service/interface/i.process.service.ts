import ApiResponse from "../../crossCutting/response/api.reponse"
import ProcessResponse from "../../crossCutting/response/process/process.response"

export default interface IProcessService {
  get(): ApiResponse<ProcessResponse[]>
}