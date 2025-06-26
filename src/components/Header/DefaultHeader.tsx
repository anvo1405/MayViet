import { Box, Button, Link, Typography } from "@mui/material";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { ROUTE_PATHS } from "../../config/Routes/routes";
import { useNavigate } from "react-router-dom";

const DefaultHeader = () => {
  const link = [
    { label: "PAPASAN", link: "/" },
    { label: "SOFA MÂY", link: "/" },
    { label: "BÀN MÂY", link: "/" },
    { label: "GHẾ MÂY ĐƠN", link: "/" },
    { label: "GIƯỜNG TỦ", link: "/" },
    { label: "THÙNG ĐỰNG ĐỒ", link: "/" },
    { label: "VẬT DỤNG DECOR", link: "/" },
  ];

  const navigate = useNavigate();
  return (
    <Box
      component="header"
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      sx={{ px: "20px", py: "25px" }}
    >
      <Box
        display={"flex"}
        sx={{ width: "100%", justifyContent: "space-between" }}
      >
        <Box display={"flex"} alignItems={"flex-end"} gap={1}>
          <Typography fontSize={14}>Tổng đài</Typography>
          <Typography fontSize={18} fontWeight={800}>
            1800 8100
          </Typography>
        </Box>
        <Box display={"flex"} gap={4}>
          <ShoppingBagOutlinedIcon
            onClick={() => navigate(ROUTE_PATHS.CART)}
            sx={{ cursor: "pointer" }}
          />
          <FavoriteBorderOutlinedIcon
            onClick={() => console.log("Icon clicked")}
            sx={{ cursor: "pointer" }}
          />
          <SearchOutlinedIcon
            onClick={() => console.log("Icon clicked")}
            sx={{ cursor: "pointer" }}
          />
        </Box>
      </Box>
      <Link
      href={ROUTE_PATHS.LOGIN}
        fontSize={18}
        fontWeight={600}
        alignSelf={"flex-end"}
        my={2}
        underline="hover"
        sx={{ cursor: "pointer", color: "#00A79D" }}
      >
        Đăng nhập
      </Link>
      <Typography fontSize={48} fontWeight={700} color="#389395">
        MÂY VIỆT
      </Typography>
      <Box display={"flex"} sx={{ gap: "20px" }}>
        {link.map((item) => (
          <Link href={item.link} underline="none" color="inherit">
            {item.label}
          </Link>
        ))}
      </Box>
    </Box>
  );
};

export default DefaultHeader;
