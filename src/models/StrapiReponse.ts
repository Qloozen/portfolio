export interface ResponseCollection<T> {
  data: Array<{ id: number; attributes: T }>;
}

export interface ResponseObject<T> {
  data: { id: number; attributes: T };
}
