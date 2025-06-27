import {
  Box,
  Grid,
  Link,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { ICFacebook, ICInstagram, ICZalo } from "../../assets";

interface IDefaultFooterProps {
  hasDivider?: boolean;
}

const DefaultFooter = ({ hasDivider = true }: IDefaultFooterProps) => {
  const factories = [
    { name: "Nhà Máy Miền Nam", address: "A2- KCN Định Quán, Đồng Nai" },
    { name: "Nhà Máy Miền Bắc", address: "Vân Du – Thạch Thành, Thanh Hóa" },
  ];

  const storeSystems = [
    {
      city: "Hà Nội",
      address:
        "Số 10, Ngõ 30, Nguyễn Thị Định, P. Trung Hoà, Cầu Giấy, Hà Nội – 0385162929",
    },
    {
      city: "TP. Hồ Chí Minh",
      address: "488/4 Cộng Hòa P.13 quận Tân Bình – 0932181068",
    },
    {
      city: "Đà Nẵng",
      address: "114 Trần Thủ Độ, Khuê Trung, Cẩm Lệ, Đà Nẵng – 0343 642 299",
    },
    { city: "Cần Thơ", address: "164D Trần Ngọc Quế Cần Thơ – 0379 508 899" },
  ];

  const support = [
    { label: "THÔNG TIN LIÊN HỆ", link: "/" },
    { label: "CHÍNH SÁCH ĐỔI TRẢ", link: "/" },
    { label: "HƯỚNG DẪN MUA HÀNG", link: "/" },
    { label: "CHÍNH SÁCH GIAO HÀNG", link: "/" },
    { label: "CHÍNH SÁCH THANH TOÁN", link: "/" },
  ];

  return (
    <Box
      component="footer"
      sx={{
        borderTop: hasDivider ? "1px solid #EFECEC" : "none",
        px: { xs: 2, sm: 4, md: 10, lg: 16 },
        py: { xs: 4, sm: 6, md: 8 },
        backgroundColor: "#fff",
      }}
    >
      <Grid container spacing={4}>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <Box display="flex" flexDirection="column" gap={4}>
            <Box display="flex" flexDirection="column" gap={2}>
              <Typography fontSize={18} fontWeight={600}>
                NHÀ MÁY SẢN XUẤT
              </Typography>
              {factories.map((factory, idx) => (
                <Box key={idx}>
                  <Typography fontSize={14} fontWeight={500}>
                    {factory.name}
                  </Typography>
                  <Typography fontSize={14}>{factory.address}</Typography>
                </Box>
              ))}
            </Box>

            <Box display="flex" flexDirection="column" gap={2}>
              <Typography fontSize={18} fontWeight={600}>
                KẾT NỐI VỚI CHÚNG TÔI
              </Typography>
              <Box display="flex" gap={2}>
                <img src={ICFacebook} width={30} height={30} alt="Facebook" />
                <img src={ICInstagram} width={30} height={30} alt="Instagram" />
                <img src={ICZalo} width={35} height={35} alt="Zalo" />
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 6 }}>
          <Box display="flex" flexDirection="column" gap={2}>
            <Typography fontSize={18} fontWeight={600}>
              HỆ THỐNG CỬA HÀNG
            </Typography>
            {storeSystems.map((store, idx) => (
              <Box key={idx}>
                <Typography fontSize={14} fontWeight={500}>
                  {store.city}
                </Typography>
                <Typography fontSize={14}>{store.address}</Typography>
              </Box>
            ))}
          </Box>
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            height="100%"
            gap={5}
          >
            <Box display="flex" flexDirection="column" gap={2}>
              <Typography fontSize={18} fontWeight={600}>
                HỖ TRỢ
              </Typography>
              {support.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.link}
                  underline="none"
                  color="inherit"
                >
                  {item.label}
                </Link>
              ))}
            </Box>

            <Box display="flex" flexDirection="column" gap={1}>
              <Typography fontSize={18} fontWeight={600}>
                ĐẶT HÀNG XUẤT KHẨU
              </Typography>
              <Typography fontSize={14} fontWeight={600}>
                order@mayvietviet.com
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DefaultFooter;
