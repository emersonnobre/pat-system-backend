import { inject, injectable } from "tsyringe"
import ApiResponse from "../../crossCutting/response/api.reponse"
import IProcessService from "../interface/i.process.service"
import ProcessRepository from "../../repository/implementation/process.repository"
import IProcessRepository from "../../repository/interface/i.process.repository"
import ProcessMapper from "../../util/mapping/process.mapper"
import ProcessResponse from "../../crossCutting/response/process/process.response"
import ProcessShortResponse from "../../crossCutting/response/process/process-short.response"
import PaginationFilterRequest from "../../crossCutting/request/comum/pagination.filter.request"
import GetProcessesFilterRequest from "../../crossCutting/request/process/get-processes.filter.request"
import PaginatedResponse from "../../crossCutting/response/comum/paginated.response"
import "../../util/prototypes/array.prototypes"

@injectable()
export default class ProcessService implements IProcessService {
  constructor(
    @inject(ProcessRepository) private _processRepository: IProcessRepository,
    @inject(ProcessMapper) private _processMapper: ProcessMapper,
  ) { }

  get(filters: PaginationFilterRequest<GetProcessesFilterRequest>): ApiResponse<PaginatedResponse<ProcessShortResponse[]>> {
    const { filter } = filters
    let processes = this._processRepository.get()

    if (filter.executedName)
      processes = processes.filter(process => process.executed.includes(filter.executedName || ""))

    if (filter.judgeName)
      processes = processes.filter(process => process.judge_name.includes(filter.judgeName))

    // if (filter.prescriptionDateStart) TODO: implementar comparacao das datas do filtro
    //   processes = processes.filter(process => process.debt_amount >= filter.debtAmountMax)

    const totalCount = processes.length

    processes = processes.skip(filters.offset).take(filters.limit)
    const mappedProcesses = processes.map(process => this._processMapper.modelToProcessShortResponse(process))
    const paginatedResponse: PaginatedResponse<ProcessShortResponse[]> = { limit: filters.limit, offset: filters.offset, totalCount, data: mappedProcesses } 
    return { success: true, httpStatusCode: 200, data: paginatedResponse }
  }
}