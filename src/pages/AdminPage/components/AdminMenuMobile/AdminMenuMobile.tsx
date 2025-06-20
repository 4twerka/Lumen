import { Box, styled, Typography } from "@mui/material";
import { Link } from "react-router";
import React from "react";
import UnionIcon from "../../../../assets/Union.svg?react";
import ShapeIcon from "../../../../assets/Shape.svg?react";
import LetterIcon from "../../../../assets/OpenLetter.svg?react";

const StyledLink = styled(Link)({
  textDecoration: "none",
  color: "#111111",
  padding: "0.5rem 1rem",
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  width: "100%",
  borderRadius: "4px",
  fontSize: "1rem",
  lineHeight: "1.5rem",
  fontWeight: 400,
  backgroundColor: "#F1F1F4",
  "&:hover": {
    backgroundColor: "#E0E0E5",
  },
});

const AdminMenuMobile: React.FC = () => {
  return (
    <Box component={"nav"} sx={{ display: { xs: "block", md: "none" } }}>
      <Typography sx={{ fontWeight: 500, color: "#111111", pb: "2rem" }}>
        Меню
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
        <StyledLink to={"/admin/main"}>
          <LetterIcon />
          Головна
        </StyledLink>
        <StyledLink to={"/admin/products"}>
          <UnionIcon />
          Товари
        </StyledLink>
        <StyledLink to={"/admin/orders"}>
          <ShapeIcon />
          Замовлення
        </StyledLink>
      </Box>
    </Box>
  );
};

export default AdminMenuMobile;
