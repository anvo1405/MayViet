import axiosClient from "../api/axiosClient";
import { IApiResponse } from "../types/common.type";
import { IGetFeaturedProductsResponse } from "../types/product.type";

export const productApi = {
  getFeaturedProductList: (
  ): Promise<IGetFeaturedProductsResponse> => {
    return axiosClient.get("/test/products");
  },
};
