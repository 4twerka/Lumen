import { Menu } from "@mui/material";
import React from "react";
import UserMenu from "./UserMenu";
import NotAuthMenu from "./NotAuthMenu";

interface ProfileMenuProps {
  anchorProfileEl: null | HTMLElement;
  openProfile: boolean;
  handleCloseProfile: () => void;
  isAuth: boolean;
}

const ProfileMenu: React.FC<ProfileMenuProps> = ({
  anchorProfileEl,
  openProfile,
  handleCloseProfile,
  isAuth,
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
        <UserMenu handleCloseProfile={handleCloseProfile} />
      ) : (
        <NotAuthMenu />
      )}
    </Menu>
  );
};

export default ProfileMenu;
