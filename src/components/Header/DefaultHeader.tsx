import { useState } from "react";
import {
  Box,
  Link,
  Typography,
  useMediaQuery,
  Drawer,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
  Snackbar,
  Alert,
  Badge,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import CloseIcon from "@mui/icons-material/Close";
import { ROUTE_PATHS } from "../../config/Routes/routes";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { authApi } from "../../services";
import { LOCAL_STORAGE_KEY } from "../../enums";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

interface IDefaultHeaderProps {
  hasDivider?: boolean;
}

const DefaultHeader = ({ hasDivider = true }: IDefaultHeaderProps) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const { isAuthenticated, user } = useAuth();
  const cartItems = useSelector((state: RootState) => state.cart.items.length);

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [logoutSuccess, setLogoutSuccess] = useState(false);
  const menuOpen = Boolean(anchorEl);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    try {
      await authApi.logout();
    } catch (error) {
      console.error("Logout failed:", error);
    } finally {
      localStorage.removeItem(LOCAL_STORAGE_KEY.ACCESS_TOKEN);
      localStorage.removeItem(LOCAL_STORAGE_KEY.USER);
      handleMenuClose();
      setLogoutSuccess(true);
      navigate(ROUTE_PATHS.HOME);
    }
  };

  const link = [
    { label: "PAPASAN", link: "/" },
    { label: "SOFA MÂY", link: "/" },
    { label: "BÀN MÂY", link: "/" },
    { label: "GHẾ MÂY ĐƠN", link: "/" },
    { label: "GIƯỜNG TỦ", link: "/" },
    { label: "THÙNG ĐỰNG ĐỒ", link: "/" },
    { label: "VẬT DỤNG DECOR", link: "/" },
  ];

  return (
    <Box
      component="header"
      display="flex"
      flexDirection="column"
      alignItems="center"
      sx={{
        px: "20px",
        py: "25px",
        borderBottom: `${hasDivider ? "1px solid" : ""}`,
        borderColor: "#EFECEC",
      }}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        width="100%"
      >
        <Box display="flex" alignItems="flex-end" gap={1}>
          <Typography fontSize={14}>Tổng đài</Typography>
          <Typography fontSize={18} fontWeight={800}>
            1800 8100
          </Typography>
        </Box>

        <Box display="flex" gap={4} alignItems="center">
          {!isMobile && (
            <>
              {isAuthenticated ? (
                <>
                  <IconButton onClick={handleMenuOpen}>
                    <Avatar>{user?.name?.[0] || "U"}</Avatar>
                  </IconButton>
                  <Menu
                    anchorEl={anchorEl}
                    open={menuOpen}
                    onClose={handleMenuClose}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "right",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                  >
                    <MenuItem disabled>
                      Xin chào, {user?.user_name || "Người dùng"}
                    </MenuItem>
                    <MenuItem onClick={handleLogout} sx={{ color: "#d32f2f" }}>
                      Đăng xuất
                    </MenuItem>
                  </Menu>
                </>
              ) : (
                <Link
                  href={ROUTE_PATHS.LOGIN}
                  fontSize={18}
                  fontWeight={600}
                  underline="hover"
                  sx={{ cursor: "pointer", color: "#00A79D" }}
                >
                  Đăng nhập
                </Link>
              )}
            </>
          )}
          <Badge
            badgeContent={cartItems}
            color="error"
            sx={{
              "& .MuiBadge-badge": {
                fontSize: 12,
                height: 20,
                minWidth: 20,
                padding: "0 6px",
                color: "#fff",
                backgroundColor: "#d32f2f",
              },
            }}
          >
            <ShoppingBagOutlinedIcon
              onClick={() => navigate(ROUTE_PATHS.CART)}
              sx={{ cursor: "pointer" }}
            />
          </Badge>

          <FavoriteBorderOutlinedIcon sx={{ cursor: "pointer" }} />
          <SearchOutlinedIcon sx={{ cursor: "pointer" }} />

          {isMobile && (
            <IconButton onClick={() => setDrawerOpen(true)}>
              <MenuIcon />
            </IconButton>
          )}
        </Box>
      </Box>

      <Typography
        onClick={() => navigate(ROUTE_PATHS.HOME)}
        fontSize={48}
        fontWeight={700}
        color="#389395"
        sx={{ cursor: "pointer", mt: 2 }}
      >
        MÂY VIỆT
      </Typography>

      {!isMobile && (
        <Box display="flex" gap="20px" mt={2}>
          {link.map((item) => (
            <Link
              key={item.label}
              href={item.link}
              underline="none"
              color="inherit"
              fontWeight={500}
            >
              {item.label}
            </Link>
          ))}
        </Box>
      )}

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Box width={250} p={2}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb={2}
          >
            <Typography variant="h6">Menu</Typography>
            <IconButton onClick={() => setDrawerOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Box>
          {link.map((item) => (
            <Box key={item.label} my={1}>
              <Link
                href={item.link}
                underline="none"
                color="inherit"
                fontSize={16}
                onClick={() => setDrawerOpen(false)}
              >
                {item.label}
              </Link>
            </Box>
          ))}

          <Box mt={3}>
            {isAuthenticated ? (
              <>
                <Typography fontWeight={600}>
                  Xin chào, {user?.name || "Người dùng"}
                </Typography>
                <Link
                  component="button"
                  underline="hover"
                  fontSize={16}
                  mt={1}
                  sx={{ color: "#d32f2f" }}
                  onClick={() => {
                    setDrawerOpen(false);
                    handleLogout();
                  }}
                >
                  Đăng xuất
                </Link>
              </>
            ) : (
              <Link
                href={ROUTE_PATHS.LOGIN}
                fontSize={18}
                fontWeight={600}
                underline="hover"
                sx={{ color: "#00A79D" }}
                onClick={() => setDrawerOpen(false)}
              >
                Đăng nhập
              </Link>
            )}
          </Box>
        </Box>
      </Drawer>
      <Snackbar
        open={logoutSuccess}
        autoHideDuration={3000}
        onClose={() => setLogoutSuccess(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={() => setLogoutSuccess(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          Đăng xuất thành công!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default DefaultHeader;
