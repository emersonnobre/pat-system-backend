import { inject, injectable } from "tsyringe"
import ApiResponse from "../../crossCutting/response/api.reponse"
import IProcessService from "../interface/i.process.service"
import ProcessRepository from "../../repository/implementation/process.repository"
import IProcessRepository from "../../repository/interface/i.process.repository"
import ProcessMapper from "../../util/mapping/process.mapper"
import ProcessShortResponse from "../../crossCutting/response/process/process-short.response"
import PaginationFilterRequest from "../../crossCutting/request/comum/pagination.filter.request"
import GetProcessesFilterRequest from "../../crossCutting/request/process/get-processes.filter.request"
import PaginatedResponse from "../../crossCutting/response/comum/paginated.response"
import Process from "../../model/process"
import { SortOrder } from "../../util/types"
import "../../util/prototypes/array.prototypes"

@injectable()
export default class ProcessService implements IProcessService {
  constructor(
    @inject(ProcessRepository) private _processRepository: IProcessRepository,
    @inject(ProcessMapper) private _processMapper: ProcessMapper,
  ) { }

  get(filters: PaginationFilterRequest<GetProcessesFilterRequest>): ApiResponse<PaginatedResponse<ProcessShortResponse[]>> {
    const { filter } = filters
    const processes = this._processRepository.get()

    let filteredProcesses = this.filter(processes, filter)
    const totalCount = filteredProcesses.length

    const paginatedResponse: PaginatedResponse<ProcessShortResponse[]> = { limit: filters.limit, offset: filters.offset, totalCount, data: undefined }

    if (totalCount == 0)
      return { success: false, httpStatusCode: 404, data: paginatedResponse }

    filteredProcesses = filteredProcesses.skip(filters.offset).take(filters.limit)
    const mappedProcesses = filteredProcesses.map(process => this._processMapper.modelToProcessShortResponse(process))
    paginatedResponse.data = mappedProcesses.orderBy(filter.orderBy as keyof ProcessShortResponse, filter.order as SortOrder)

    return { success: true, httpStatusCode: 200, data: paginatedResponse }
  }

  private filter(processes: Process[], filters: GetProcessesFilterRequest) {
    if (filters.executedName)
      processes = processes.filter(process => process.executed.includes(filters.executedName || ""))
    if (filters.judgeName)
      processes = processes.filter(process => process.judge_name.includes(filters.judgeName))
    if (filters.prescriptionDateStart)
      processes = processes.filter(process => new Date(process.prescription_date) >= filters.prescriptionDateStart)
    if (filters.prescriptionDateEnd)
      processes = processes.filter(process => new Date(process.prescription_date) <= filters.prescriptionDateEnd)
    return processes
  }
}