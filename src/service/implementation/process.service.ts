import { inject, injectable } from "tsyringe"
import ApiResponse from "../../crossCutting/response/api.reponse"
import Process from "../../model/process"
import IProcessService from "../interface/i.process.service"
import ProcessRepository from "../../repository/implementation/process.repository"
import IProcessRepository from "../../repository/interface/i.process.repository"

@injectable()
export default class ProcessService implements IProcessService {
  constructor(@inject(ProcessRepository) private _processRepository: IProcessRepository) { }

  get(): ApiResponse<Process[]> {
    const processes = this._processRepository.get()
    return { success: true, httpStatusCode: 200, data: processes }
  }
}