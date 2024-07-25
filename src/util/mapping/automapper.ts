import { createMap, createMapper } from "@automapper/core"
import { classes } from "@automapper/classes"
import Process from "../../model/process"
import ProcessResponse from "../../crossCutting/response/process/process.response"
import ProcessShortResponse from "../../crossCutting/response/process/process-short.response"

export const mapper = createMapper({
  strategyInitializer: classes(),
})

createMap(mapper, Process, ProcessResponse)
createMap(mapper, Process, ProcessShortResponse)