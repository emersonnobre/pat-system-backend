import { AutoMap } from "@automapper/classes"

export default class ProcessMovement {
  private _id: number
  private _type: string
  private _active: boolean
  private _description: string
  private _created_at: string
  private _process_id: number

  constructor(
    id: number,
    type: string,
    description: string,
    created_at: string,
    active: boolean,
    process_id: number
  ) 
  {
    this._id = id
    this._type = type
    this._description = description
    this._created_at = created_at
    this._active = active
    this._process_id = process_id
  }

  @AutoMap()
  public get id(): number {
    return this._id
  }
  @AutoMap()
  public get type(): string {
    return this._type
  }
  @AutoMap()
  public get active(): boolean {
    return this._active
  }
  @AutoMap()
  public get description(): string {
    return this._description
  }
  @AutoMap()
  public get created_at(): string {
    return this._created_at
  }
  public set id(id: number) {
    this._id = id
  }
  public set type(type: string) {
    this._type = type
  }
  public set active(active: boolean) {
    this._active = active
  }
}