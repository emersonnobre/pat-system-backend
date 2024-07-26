import { createMap, createMapper } from "@automapper/core"
import { classes } from "@automapper/classes"
import Process from "../../model/process"
import ProcessResponse from "../../crossCutting/response/process/process.response"

export const mapper = createMapper({
  strategyInitializer: classes(),
})

createMap(mapper, Process, ProcessResponse)