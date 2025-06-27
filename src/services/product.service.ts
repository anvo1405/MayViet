import axiosClient from "../api/axiosClient";
import { IGetFeaturedProductsResponse } from "../types";

export const productApi = {
  getFeaturedProductList: (): Promise<IGetFeaturedProductsResponse> => {
    return axiosClient.get("/test/products");
  },
};
