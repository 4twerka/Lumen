import { Box } from "@mui/material";
import React from "react";

interface PageWrapperProps {
  children: React.ReactNode;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  return (
    <Box
      sx={{
        display: { xs: "block", md: "flex" },
        width: "100%",
        padding: { xs: "16px 16px", md: "48px 80px" },
        gap: "1.25rem",
        backgroundColor: "#FCFCFC",
      }}
    >
      {children}
    </Box>
  );
};

export default PageWrapper;
