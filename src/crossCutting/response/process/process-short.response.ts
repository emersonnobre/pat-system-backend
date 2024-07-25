import { AutoMap } from "@automapper/classes"

export default class ProcessShortResponse {
  @AutoMap()
  id: number
  @AutoMap()
  number: string
  @AutoMap()
  debt_amount: number
  @AutoMap()
  judge_name: string
  @AutoMap()
  distribution: string
  @AutoMap()
  civil_court: string
  @AutoMap()
  prescription_date: string
  @AutoMap()
  executed: string
}