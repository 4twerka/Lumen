import React from "react";
import styles from "./AdminPage.module.css";
import { useAppSelector } from "../../hooks";
import { Link, Navigate, Outlet, useLocation } from "react-router";
import { Box, styled } from "@mui/material";
import UnionIcon from "../../assets/Union.svg?react";
import ShapeIcon from "../../assets/Shape.svg?react";
import LetterIcon from "../../assets/OpenLetter.svg?react";
import Loader from "../../components/Loader/Loader";

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
  "&:hover": {
    backgroundColor: "rgba(115, 39, 13, 0.04)",
  },
});

const AdminPage: React.FC = () => {
  const userRole = useAppSelector((state) => state.user.user?.role);
  const isLoading = useAppSelector((state) => state.user.isLoading);
  const location = useLocation();

  if (userRole === undefined) {
    return null;
  }

  if (userRole !== "admin") {
    return <Navigate to="/" />;
  }

  return (
    <div className={`${styles.adminPageWrapper}`}>
      <Box
        sx={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          right: "50%",
          backgroundColor: "#F1F1F4",
          zIndex: 0,
        }}
      ></Box>
      <div className={`${styles.adminPage} container`}>
        <Box
          component={"nav"}
          sx={{
            flex: "0 0 25%",
            padding: "64px 40px 80px 80px",
            backgroundColor: "#F1F1F4",
            display: { xs: "none", md: "flex" },
            flexDirection: "column",
            gap: "0.5rem",
          }}
        >
          <StyledLink
            sx={
              location.pathname === "/admin/main"
                ? { backgroundColor: "#73270D1F" }
                : { backgroundColor: "#FCFCFC" }
            }
            to={"/admin/main"}
          >
            <LetterIcon />
            Головна
          </StyledLink>
          <StyledLink
            sx={
              location.pathname === "/admin/products"
                ? { backgroundColor: "#73270D1F" }
                : { backgroundColor: "#FCFCFC" }
            }
            to={"/admin/products"}
          >
            <UnionIcon />
            Товари
          </StyledLink>
          <StyledLink
            sx={
              location.pathname === "/admin/orders"
                ? { backgroundColor: "#73270D1F" }
                : { backgroundColor: "#FCFCFC" }
            }
            to={"/admin/orders"}
          >
            <ShapeIcon />
            Замовлення
          </StyledLink>
        </Box>
        <Box
          sx={{
            flex: "1 1 auto",
            backgroundColor: "#ffffff",
            padding: "64px 40px",
          }}
        >
          {isLoading ? <Loader /> : <Outlet />}
        </Box>
      </div>
    </div>
  );
};

export default AdminPage;
