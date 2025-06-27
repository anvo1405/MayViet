import { Box, Typography } from "@mui/material";
import {
  ICFastDelivery,
  ICFreeReturn,
  ICOrderTracking,
  ICService247,
} from "../../../assets";

const CustomerBenefits = () => {
  const benefits = [
    { icon: ICService247, label: "DỊCH VỤ 24/7" },
    { icon: ICFreeReturn, label: "HOÀN TRẢ MIỄN PHÍ" },
    { icon: ICOrderTracking, label: "THEO DÕI ĐƠN HÀNG" },
    { icon: ICFastDelivery, label: "GIAO HÀNG NHANH CHÓNG" },
  ];

  return (
    <Box
      sx={{
        backgroundColor: "#82B9BC",
        py: { xs: 4, md: 8 },
        px: 2,
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: { xs: 3, md: 6 },
      }}
    >
      {benefits.map((benefit, index) => (
        <Box
          key={index}
          display="flex"
          alignItems="center"
          color="white"
          sx={{
            maxWidth: 260,
            gap: 2,
            flex: "1 1 220px", 
            justifyContent: "flex-start",
          }}
        >
          <Box
            component="img"
            src={benefit.icon}
            alt={benefit.label}
          />
          <Typography maxWidth={'140px'} fontSize={18} fontWeight={600}>
            {benefit.label}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default CustomerBenefits;
