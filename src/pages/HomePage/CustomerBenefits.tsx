import { Box, Typography } from "@mui/material";
import {
  ICFastDelivery,
  ICFreeReturn,
  ICOrderTracking,
  ICService247,
} from "../../assets";

const CustomerBenefits = () => {
  const benefits = [
    {
      icon: ICService247,
      label: "DỊCH VỤ 24/7",
    },
    {
      icon: ICFreeReturn,
      label: "HOÀN TRẢ MIỄN PHÍ",
    },
    {
      icon: ICOrderTracking,
      label: "THEO DÕI ĐƠN HÀNG",
    },
    {
      icon: ICFastDelivery,
      label: "GIAO HÀNG NHANH CHÓNG",
    },
  ];
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      sx={{
        backgroundColor: "#82B9BC",
        width: "100%",
        py: "80px",
        gap: "50px",
      }}
    >
      {benefits.map((benefit, index) => (
        <Box
          key={index}
          display="flex"
          alignItems="center"
          color="white"
          maxWidth={"200px"}
          gap={"15px"}
        >
          <Box
            component="img"
            src={benefit.icon}
            alt={benefit.label}
            sx={{ width: 52, height: 52 }}
          />
          <Typography fontSize={18} fontWeight={600}>
            {benefit.label}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default CustomerBenefits;
