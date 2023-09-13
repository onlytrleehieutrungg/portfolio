import { BaseResponse, Params } from "../types/base";
import { ProductData } from "../types/product";
import axiosClient from "../utils/axios";

export const productApi = {
  async getAll(params?: Partial<Params>): Promise<BaseResponse<ProductData>> {
    return await axiosClient.get("/products", { params });
  },
  getBySearchValue(
    params?: Partial<Params>
  ): Promise<BaseResponse<ProductData>> {
    return axiosClient.get(`/product/Search`, { params });
  },
};
