import UpdateProcessMovementRequest from "../../crossCutting/request/process-movement/update-process-movement.request"
import ApiResponse from "../../crossCutting/response/api.reponse"

export default interface IProcessMovementService {
  update(id: number, request: UpdateProcessMovementRequest): ApiResponse<undefined>
}