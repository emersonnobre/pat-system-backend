import { createMap, createMapper } from "@automapper/core"
import { classes } from "@automapper/classes"
import Process from "../../model/process"
import ProcessResponse from "../../crossCutting/response/process/process.response"
import ProcessShortResponse from "../../crossCutting/response/process/process-short.response"
import UpdateProcessMovementRequest from "../../crossCutting/request/process-movement/update-process-movement.request"
import ProcessMovement from "../../model/process-movement"

export const mapper = createMapper({
  strategyInitializer: classes(),
})

createMap(mapper, Process, ProcessResponse)
createMap(mapper, Process, ProcessShortResponse)
createMap(mapper, UpdateProcessMovementRequest, ProcessMovement)