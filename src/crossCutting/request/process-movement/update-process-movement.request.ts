import { AutoMap } from "@automapper/classes"

export default class UpdateProcessMovementRequest {
  @AutoMap()
  type: string
  @AutoMap()
  active: boolean
}