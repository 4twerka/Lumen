import { Button, ButtonProps } from "@mui/material";
import React from "react";

interface AdminMainButtonProps extends ButtonProps {
  children: React.ReactNode;
  isActive: boolean;
}

const AdminMainButton: React.FC<AdminMainButtonProps> = ({
  children,
  isActive,
  ...props
}) => {
  return (
    <Button
      variant={isActive ? "contained" : "outlined"}
      sx={{
        width: { xs: "calc(50% - 0.5rem)", md: "109px" },
        height: "48px",
        border: "1px solid #0E402D",
        borderRadius: "0.5rem",
        fontWeight: 600,
        fontSize: "1rem",
        lineHeight: "1.25rem",
        textTransform: "none",
        color: isActive ? "#FDF5ED" : "#2E2E2E",
        backgroundColor: isActive ? "#0E402D" : "initial"
      }}
      {...props}
    >
      {children}
    </Button>
  );
};

export default AdminMainButton;
