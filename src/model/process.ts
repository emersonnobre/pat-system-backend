import { AutoMap } from "@automapper/classes"
import ProcessMovement from "./process-movement"

export default class Process {
  private _id: number
  private _number: string
  private _created_at: string
  private _updated_at: string
  private _debt_amount: number
  private _judge_name: string
  private _distribution: string
  private _civil_court: string
  private _prescription_date: string
  private _prescription_date_validated: boolean
  private _executed: string
  private _subject: string
  private _court: string
  private _jurisdiction: string
  private _control_number: string
  private _document: string
  private _created_by_id: number
  private _updated_by_id: number
  private _movements?: ProcessMovement[] | undefined
 
  constructor(
    id: number,
    number: string,
    created_at: string,
    updated_at: string,
    debt_amount: number,
    judge_name: string,
    distribution: string,
    civil_court: string,
    prescription_date: string,
    prescription_date_validated: boolean,
    executed: string,
    subject: string,
    court: string,
    jurisdiction: string,
    control_number: string,
    document: string,
    created_by_id: number,
    updated_by_id: number,
    movements: ProcessMovement[]) 
  {
    this._id = id
    this._number = number
    this._created_at = created_at
    this._updated_at = updated_at
    this._debt_amount = debt_amount
    this._judge_name = judge_name
    this._distribution = distribution
    this._civil_court = civil_court
    this._prescription_date = prescription_date
    this._prescription_date_validated = prescription_date_validated
    this._executed = executed
    this._subject = subject
    this._court = court
    this._jurisdiction = jurisdiction
    this._control_number = control_number
    this._document = document
    this._created_by_id = created_by_id
    this._updated_by_id = updated_by_id
    this._movements = movements
  }

  getCreatedById(): number {
    return this.created_by_id
  }

  getUpdatedById(): number {
    return this.updated_by_id
  }

  @AutoMap()
  public get id(): number {
    return this._id
  }
  @AutoMap()
  public get number(): string {
    return this._number
  }
  @AutoMap()
  public get created_at(): string {
    return this._created_at
  }
  @AutoMap()
  public get updated_at(): string {
    return this._updated_at
  }
  public set updated_at(updated_at: string) {
    this._updated_at = updated_at
  }
  @AutoMap()
  public get debt_amount(): number {
    return this._debt_amount
  }
  @AutoMap()
  public get judge_name(): string {
    return this._judge_name
  }
  @AutoMap()
  public get distribution(): string {
    return this._distribution
  }
  @AutoMap()
  public get civil_court(): string {
    return this._civil_court
  }
  @AutoMap()
  public get prescription_date(): string {
    return this._prescription_date
  }
  @AutoMap()
  public get prescription_date_validated(): boolean {
    return this._prescription_date_validated
  }
  @AutoMap()
  public get executed(): string {
    return this._executed
  }
  @AutoMap()
  public get subject(): string {
    return this._subject
  }
  @AutoMap()
  public get court(): string {
    return this._court
  }
  @AutoMap()
  public get jurisdiction(): string {
    return this._jurisdiction
  }
  @AutoMap()
  public get control_number(): string {
    return this._control_number
  }
  @AutoMap()
  public get document(): string {
    return this._document
  }
  public set document(document: string) {
    this._document = document
  }
  @AutoMap()
  public get created_by_id(): number {
    return this._created_by_id
  }
  @AutoMap()
  public get updated_by_id(): number {
    return this._updated_by_id
  }
  public set updated_by_id(_updated_by_id: number) {
    this._updated_by_id = _updated_by_id
  }
  @AutoMap()
  public get movements(): ProcessMovement[] | undefined {
    return this._movements
  }
}
