import { Menu } from "@mui/material";
import React from "react";
import AdminMenu from "./AdminMenu";
import UserMenu from "./UserMenu";
import NotAuthMenu from "./NotAuthMenu";

interface ProfileMenuProps {
  anchorProfileEl: null | HTMLElement;
  openProfile: boolean;
  handleCloseProfile: () => void;
  isAuth: boolean;
  userRole?: "admin" | "user";
}

const ProfileMenu: React.FC<ProfileMenuProps> = ({
  anchorProfileEl,
  openProfile,
  handleCloseProfile,
  isAuth,
  userRole,
}) => {
  return (
    <Menu
      sx={{ "& .MuiMenu-list": { padding: "1rem" } }}
      id="profile-btn"
      anchorEl={anchorProfileEl}
      open={openProfile}
      onClose={handleCloseProfile}
      MenuListProps={{
        "aria-labelledby": "profile-btn",
      }}
    >
      {isAuth ? (
        <>
          {userRole === "admin" ? (
            <AdminMenu handleCloseProfile={handleCloseProfile} />
          ) : (
            <UserMenu handleCloseProfile={handleCloseProfile} />
          )}
        </>
      ) : (
        <NotAuthMenu />
      )}
    </Menu>
  );
};

export default ProfileMenu;
