import React from "react";
import { DefaultFooter, DefaultHeader } from "../components";
import { Box } from "@mui/material";

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <DefaultHeader />
      <Box component="main" flex={1}>
        {children}
      </Box>
      <DefaultFooter />
    </Box>
  );
};

export default DefaultLayout;
