import { AutoMap } from "@automapper/classes"

export default class CreateUserResponse {
  @AutoMap()
  id: number
  @AutoMap()
  name: string
  @AutoMap()
  email: string
}