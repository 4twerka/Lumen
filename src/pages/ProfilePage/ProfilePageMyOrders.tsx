import React from "react";
// import { useAppDispatch, useAppSelector } from "../../hooks";
import { Box } from "@mui/material";
import { useLocation } from "react-router";
import styles from "./ProfilePage.module.css";
import BreadcrumbsProfilePage from "./components/BreadcrumbsProfilePage/BreadcrumbsProfilePage";
import ProfileTitle from "./components/ProfileTitle";
import ProfileNavigation from "./components/ProfileNavigation";
import Orders from "./Orders";


const ProfilePageMyOrders: React.FC = () => {
//   const token = useAppSelector((state) => state.user.token);

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
        <Box sx={{ display: location.pathname === '/profile' ? "none" : "block", width: {xs: "100%", md: "80%"} }}>
          <Orders />
        </Box>
      </Box>
    </div>
  );
};

export default ProfilePageMyOrders;
