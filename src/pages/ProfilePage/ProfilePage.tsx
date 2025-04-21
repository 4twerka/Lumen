import React from "react";
// import { useAppDispatch, useAppSelector } from "../../hooks";
import { Box } from "@mui/material";
import { Outlet, useLocation } from "react-router";
import styles from "./ProfilePage.module.css";
import BreadcrumbsProfilePage from "./components/BreadcrumbsProfilePage/BreadcrumbsProfilePage";
import ProfileTitle from "./components/ProfileTitle";
import ProfileNavigation from "./components/ProfileNavigation";


const ProfilePage: React.FC = () => {
  // const token = useAppSelector((state) => state.user.token);

  const location = useLocation();
  // useEffect(() => {
  //   if (!token) {
  //     navigate('/login')
  //   }
  // })
  const pathNameTitle = (path: string) => {
    if (path === "/profile/my-orders") {
      return "Мої замовлення";
    } else if (path === "/profile/my-data") {
      return "Мої дані";
    } else return "";
  };
  return (
    <div className={`${styles.profilePageWrapper} container`}>
      <BreadcrumbsProfilePage title={pathNameTitle(location.pathname)} />
      <ProfileTitle />
      <Box sx={{ display: "flex", gap: "1.5rem" }}>
        <ProfileNavigation />
        <Box sx={{ display: location.pathname === '/profile' ? "none" : "block", width: {xs: "100%", md: "calc(80% - 1.5rem)"} }}>
          <Outlet />
        </Box>
      </Box>
    </div>
  );
};

export default ProfilePage;
