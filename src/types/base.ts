export type BaseResponse<T> = {
  data: T;
  status: any;
};

export type Params = {
  total?: number;
  skip?: number;
  limit?: number;
  q?: string;
};
