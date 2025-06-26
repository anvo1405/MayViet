import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { guestOnlyPaths, ROUTE_PATHS } from "./routes";

interface PublicRouteProps {
  children: React.ReactNode;
}

const PublicRoute: React.FC<PublicRouteProps> = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  const isGuestOnlyRoute = guestOnlyPaths.includes(location.pathname);

  if (isAuthenticated && isGuestOnlyRoute) {
    return <Navigate to={ROUTE_PATHS.HOME} replace />;
  }

  return <>{children}</>;
};

export default PublicRoute;
