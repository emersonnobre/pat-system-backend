export default interface PaginationFilterRequest<T> {
  limit: number
  offset: number
  filter: T
}