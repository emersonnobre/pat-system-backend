export default interface GetProcessesFilterRequest {
  judgeName?: string
  executedName?: string
  prescriptionDateStart?: Date
  prescriptionDateEnd?: Date
  order: string
  orderBy: string
}