import { inject, injectable } from "tsyringe"
import ApiResponse from "../../crossCutting/response/api.reponse"
import IProcessService from "../interface/i.process.service"
import ProcessRepository from "../../repository/implementation/process.repository"
import IProcessRepository from "../../repository/interface/i.process.repository"
import ProcessMapper from "../../util/mapping/process.mapper"
import ProcessResponse from "../../crossCutting/response/process/process.response"

@injectable()
export default class ProcessService implements IProcessService {
  constructor(
    @inject(ProcessRepository) private _processRepository: IProcessRepository,
    @inject(ProcessMapper) private _processMapper: ProcessMapper,
  ) { }

  get(): ApiResponse<ProcessResponse[]> {
    const processes = this._processRepository.get()
    const mappedProcesses = processes.map(process => this._processMapper.modelToProcessResponse(process))
    return { success: true, httpStatusCode: 200, data: mappedProcesses }
  }
}