import { Box, Typography } from "@mui/material";
import { ICRight, ICSale } from "../../assets";

const SelectPromotionalCard = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#F6F9FA",
        borderRadius: "10px",
        px: 5,
        py: 2,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Box
          component="img"
          src={ICSale}
          alt={"sale"}
          sx={{ width: 24, height: 24 }}
        />
        <Typography fontSize={14} fontWeight={400}>
          Lựa chọn khuyến mãi
        </Typography>
      </Box>
      <Box
        component={"img"}
        src={ICRight}
        alt="right"
        sx={{ width: 18, height: 18 }}
      />
    </Box>
  );
};

export default SelectPromotionalCard;
