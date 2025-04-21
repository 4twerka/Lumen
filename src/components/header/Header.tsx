import React from "react";
import styles from "./Header.module.css";
import LogoIcon from "../../assets/Logo2.svg?react";
import SearchIcon from "../../assets/Search.svg?react";
import UserIcon from "../../assets/User.svg?react";
import ShoppingIcon from "../../assets/Shopping.svg?react";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router";
import { useAppSelector } from "../../hooks";
import ProfileMenu from "./components/ProfileMenu/ProfileMenu";

const nav = [
  { name: "Каталог", path: "/catalog" },
  { name: "Сезонна колекція", path: "#sezon-collection" },
  { name: "Про нас", path: "#about-us" },
  { name: "Контакти", path: "#contacts" },
];

const Header: React.FC = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorProfileEl, setAnchorProfileEl] =
    React.useState<null | HTMLElement>(null);
  const navigate = useNavigate();
  const token = useAppSelector((state) => state.user.token);
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenProfile = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorProfileEl(event.currentTarget);
  };
  const handleCloseProfile = () => {
    setAnchorProfileEl(null);
  };

  const openProfile = Boolean(anchorProfileEl);

  const location = useLocation();

  const handleNavigate = (path: string) => {
    const isHashLink = path.startsWith("#");
    const currentPath = location.pathname;
    if (isHashLink) {
      const fullPath = "/" + path;

      if (currentPath !== "/") {
        navigate(fullPath);
      } else {
        window.location.hash = path;
      }
    } else {
      navigate(path);
    }

    handleCloseNavMenu();
  };

  return (
    <header className={styles.header}>
      <div className={styles["header-wrapper"]}>
        <Box sx={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
          <IconButton
            onClick={handleOpenNavMenu}
            sx={{ display: { xs: "block", md: "none" }, height: "40px" }}
          >
            <MenuIcon />
          </IconButton>
          <LogoIcon
            onClick={() => handleNavigate("/")}
            className={styles.logo}
          />
        </Box>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{ display: { xs: "block", md: "none" } }}
        >
          {nav.map((navItem) => (
            <MenuItem
              href={navItem.path}
              key={navItem.name}
              onClick={() => {
                handleCloseNavMenu();
                handleNavigate(navItem.path);
              }}
            >
              <Typography sx={{ textAlign: "center" }}>
                {navItem.name}
              </Typography>
            </MenuItem>
          ))}
        </Menu>

        <nav className={styles.navigation}>
          {nav.map((navItem) => (
            <Button
              key={navItem.name}
              sx={{
                fontSize: "0.875rem",
                fontWeight: 400,
                lineHeight: "20px",
                textTransform: "initial",
              }}
              color="inherit"
              onClick={() => handleNavigate(navItem.path)}
            >
              {navItem.name}
            </Button>
          ))}
        </nav>
        <Box
          sx={{
            display: "flex",
            gap: { xs: "0.25rem", md: "1rem" },
            alignItems: "center",
            flex: 1,
            justifyContent: "flex-end",
          }}
        >
          <label className={styles["input-wrapper"]}>
            <span className={styles["input-icon"]}>
              <SearchIcon />
            </span>
            <input id="search" className={styles.input} placeholder="Search" />
          </label>
          <Box sx={{ display: "flex", gap: "2rem" }}>
            <IconButton
              id="profile-btn"
              onClick={handleOpenProfile}
              sx={{ display: { xs: "none", md: "block" }, height: "40px" }}
            >
              <UserIcon />
            </IconButton>
            <ProfileMenu
              anchorProfileEl={anchorProfileEl}
              isAuth={!!token}
              openProfile={openProfile}
              handleCloseProfile={handleCloseProfile}
            />
            <IconButton
              onClick={() => navigate("/order")}
              sx={{ height: "40px" }}
            >
              <ShoppingIcon />
            </IconButton>
          </Box>
        </Box>
      </div>
    </header>
  );
};

export default Header;
