export default interface ApiResponse<T> {
  success: boolean
  httpStatusCode: number
  message?: string
  data: T
}