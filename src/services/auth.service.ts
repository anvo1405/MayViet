import axiosClient from "../api/axiosClient";
import { ILoginRequest, ILoginResponse, ILogoutResponse } from "../types";

export const authApi = {
  login: (params: ILoginRequest): Promise<ILoginResponse> => {
    return axiosClient.post("/ecommerce/auth/login", params);
  },
  logout: (): Promise<ILogoutResponse> => {
    return axiosClient.post("/ecommerce/auth/logout");
  },
};
