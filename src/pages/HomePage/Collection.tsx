import { Box, Button, Typography } from "@mui/material";
import { CollectionBackground } from "../../assets";
import { NewBadge } from "../../components";

const Collection = () => {
  return (
    <Box sx={{ position: "relative", px: "20px" }}>
      <Box
        component="img"
        src={CollectionBackground}
        sx={{
          width: "100%",
          objectFit: "contain",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-80%, -50%)",
          gap: 4,
        }}
      >
        <Box display={"flex"} alignItems={"flex-start"} gap={2}>
          <Typography fontSize={36} fontWeight={600} mb={"8px"}>
            BỘ SƯU TẬP
          </Typography>
          <NewBadge />
        </Box>
        <Typography fontSize={14} fontWeight={400} mb={"24px"}>
          Miễn phí giao hàng toàn quốc. Bảo hành 1 năm.
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#090726",
            fontSize: 18,
            px: "30px",
            py: "15px",
          }}
        >
          MUA NGAY
        </Button>
      </Box>
    </Box>
  );
};

export default Collection;
