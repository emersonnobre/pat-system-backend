export default class ProcessMovement {
  private id: number
  private type: string
  private description: string
  private created_at: string

  constructor(
    id: number,
    type: string,
    description: string,
    created_at: string) 
  {
    this.id = id
    this.type = type
    this.description = description
    this.created_at = created_at
  }
}