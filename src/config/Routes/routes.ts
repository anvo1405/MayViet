import DefaultLayout from "../../layouts/DefaultLayout";
import NotFoundLayout from "../../layouts/NotFoundLayout";
import { CartPage, LoginPage, NotFoundPage } from "../../pages";
import HomePage from "../../pages/HomePage/HomePage";

export const ROUTE_PATHS = {
  HOME: "/",
  LOGIN: "/dang-nhap",
  CART: "/gio-hang",
  PAYMENT_INFO: "/thong-tin-thanh-toan",
};

export const guestOnlyPaths = [ROUTE_PATHS.LOGIN];

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
    path: ROUTE_PATHS.CART,
    element: CartPage,
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
