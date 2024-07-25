export default class ProcessMovement {
  private _id: number
  private _type: string
  private _description: string
  private _created_at: string

  constructor(
    id: number,
    type: string,
    description: string,
    created_at: string) 
  {
    this._id = id
    this._type = type
    this._description = description
    this._created_at = created_at
  }

  public get id(): number {
    return this._id
  }
  public get type(): string {
    return this._type
  }
  public get description(): string {
    return this._description
  }
  public get created_at(): string {
    return this._created_at
  }
}