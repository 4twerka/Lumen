import React, { useEffect, useRef, useState } from "react";
import styles from "./Header.module.css";
import LogoIcon from "../../assets/Logo2.svg?react";
import SearchIcon from "../../assets/Search.svg?react";
import UserIcon from "../../assets/User.svg?react";
import ShoppingIcon from "../../assets/Shopping.svg?react";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Badge,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router";
import { useAppDispatch, useAppSelector } from "../../hooks";
import ProfileMenu from "./components/ProfileMenu/ProfileMenu";
import { getUserInfo } from "../../store/slices/userSlice";
import SearchMenu from "./components/SearchMenu/SearchMenu";
import AdminHeader from "./components/AdminHeader";

const nav = [
  { name: "Каталог", path: "/catalog" },
  { name: "Сезонна колекція", path: "#sezon-collection" },
  { name: "Про нас", path: "#about-us" },
  { name: "Контакти", path: "#contacts" },
];
const navMobile = [
  { name: "Каталог", path: "/catalog" },
  { name: "Сезонна колекція", path: "#sezon-collection" },
  { name: "Корзина", path: "/order" },
  { name: "Про нас", path: "#about-us" },
  { name: "Контакти", path: "#contacts" },
];

const navAdmin = [
  { name: "Головна", path: "/admin/main" },
  { name: "Товари", path: "/admin/products" },
  { name: "Замовлення", path: "/admin/orders" },
];

const Header: React.FC = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorProfileEl, setAnchorProfileEl] =
    React.useState<null | HTMLElement>(null);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const token = useAppSelector((state) => state.user.token);
  const carts = useAppSelector((state) => state.products.carts);
  const user = useAppSelector((state) => state.user.user);
  const userRole = user?.role;

  useEffect(() => {
    if (token) {
      dispatch(getUserInfo());
    }
  }, [dispatch, token]);

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

  const [search, setSearch] = useState("");
  const [searchInFocus, setSearchInFocus] = useState(false);
  const searchWrapperRef = useRef<HTMLLabelElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchWrapperRef.current &&
        !searchWrapperRef.current.contains(event.target as Node)
      ) {
        setSearchInFocus(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header
      className={`${styles.header} ${
        userRole === "admin" ? styles.headerAdmin : ""
      }`}
    >
      <div className={styles["header-wrapper"]}>
        <Box sx={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
          <IconButton
            onClick={handleOpenNavMenu}
            sx={{ display: { xs: "block", md: "none" }, height: "40px" }}
          >
            <MenuIcon />
          </IconButton>
          <Box>
            <LogoIcon
              onClick={() => handleNavigate("/")}
              className={styles.logo}
            />
            {userRole === "admin" && (
              <Typography
                sx={{
                  display: { xs: "block", md: "none" },
                  fontSize: "0.875rem",
                  fontWeight: 400,
                }}
              >
                Адміністративна панель
              </Typography>
            )}
          </Box>
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
          {(userRole === "admin" ? navAdmin : navMobile).map((navItem) => (
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
        {userRole === "admin" ? (
          <AdminHeader />
        ) : (
          <>
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
              <label ref={searchWrapperRef} className={styles["input-wrapper"]}>
                <span className={styles["input-icon"]}>
                  <SearchIcon />
                </span>
                <input
                  autoComplete="off"
                  onFocus={() => setSearchInFocus(true)}
                  onChange={(e) => setSearch(e.target.value)}
                  value={search}
                  id="search"
                  className={styles.input}
                  placeholder="Search"
                />
                {searchInFocus && search.length > 2 && (
                  <SearchMenu
                    setSearch={setSearch}
                    setSearchInFocus={setSearchInFocus}
                    search={search}
                  />
                )}
              </label>
              <Box sx={{ display: "flex", gap: { xs: "0.5rem", md: "2rem" } }}>
                <IconButton
                  id="profile-btn"
                  onClick={handleOpenProfile}
                  sx={{ height: "40px" }}
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
                  sx={{ display: { xs: "none", md: "block" }, height: "40px" }}
                >
                  <Badge badgeContent={carts.length} color="primary">
                    <ShoppingIcon />
                  </Badge>
                </IconButton>
              </Box>
            </Box>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
