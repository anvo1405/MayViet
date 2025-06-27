import { ICustomer } from "./customer.type";
import { IUser } from "./user.type";

export interface ILoginRequest{
    phone: string,
    password: string,
}

export interface ILoginResponse{
status?: string,
token: string,
user: IUser,
customer: ICustomer
}

export interface ILogoutResponse{
    status: boolean,
    message: string,
}