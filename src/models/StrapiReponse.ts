export interface StrapiResponse<T> {
  data: Array<{ id: number; attributes: T }>;
}
