import React from "react";
import { DefaultFooter, DefaultHeader } from "../components";
import { Box, Divider } from "@mui/material";
import { useLocation } from "react-router-dom";
import { ROUTE_PATHS } from "../config/Routes/routes";

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const isHome = location.pathname === ROUTE_PATHS.HOME;

  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <DefaultHeader hasDivider={!isHome} />
      <Box component="main" flex={1}>
        {children}
      </Box>
      <DefaultFooter hasDivider={!isHome} />
    </Box>
  );
};

export default DefaultLayout;
