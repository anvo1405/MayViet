import DefaultLayout from "../../layouts/DefaultLayout";
import NotFoundLayout from "../../layouts/NotFoundLayout";
import { CartPage, DeliveryInformationPage, LoginPage, NotFoundPage, RegisterPage } from "../../pages";
import HomePage from "../../pages/HomePage/HomePage";

export const ROUTE_PATHS = {
  HOME: "/",
  LOGIN: "/dang-nhap",
  REGISTER: "/dang-ky",
  CART: "/gio-hang",
  PAYMENT_INFO: "/thong-tin-thanh-toan",
  DELIVERY_INFORMATION: "/thong-tin-giao-hang",
};

export const guestOnlyPaths = [ROUTE_PATHS.LOGIN, ROUTE_PATHS.REGISTER];

export const ROUTES = [
  {
    path: ROUTE_PATHS.HOME,
    element: HomePage,
    layout: DefaultLayout,
    isProtected: false,
  },
  {
    path: ROUTE_PATHS.LOGIN,
    element: LoginPage,
    layout: DefaultLayout,
    isProtected: false,
  },
  {
    path: ROUTE_PATHS.REGISTER,
    element: RegisterPage,
    layout: DefaultLayout,
    isProtected: false,
  },
  {
    path: ROUTE_PATHS.CART,
    element: CartPage,
    layout: DefaultLayout,
    isProtected: true,
  },
  {
    path: ROUTE_PATHS.DELIVERY_INFORMATION,
    element: DeliveryInformationPage,
    layout: DefaultLayout,
    isProtected: true,
  },
  {
    path: "*",
    element: NotFoundPage,
    layout: NotFoundLayout,
    isProtected: false,
  },
];
