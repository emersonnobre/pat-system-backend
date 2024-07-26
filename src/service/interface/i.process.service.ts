import PaginationFilterRequest from "../../crossCutting/request/comum/pagination.filter.request"
import GetProcessesFilterRequest from "../../crossCutting/request/process/get-processes.filter.request"
import ApiResponse from "../../crossCutting/response/api.reponse"
import PaginatedResponse from "../../crossCutting/response/comum/paginated.response"
import ProcessShortResponse from "../../crossCutting/response/process/process-short.response"
import ProcessResponse from "../../crossCutting/response/process/process.response"

export default interface IProcessService {
  get(filters: PaginationFilterRequest<GetProcessesFilterRequest>): ApiResponse<PaginatedResponse<ProcessShortResponse[]>>
  getById(id: number): ApiResponse<ProcessResponse>
}