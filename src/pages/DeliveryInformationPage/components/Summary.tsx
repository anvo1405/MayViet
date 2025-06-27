import { Box, Button, Paper, Typography, Divider } from "@mui/material";
import { SelectPromotionalCard } from "../../../components";

const DeliveryInformationPage = ({ cartItems, handleSubmit }: any) => {
  const total = cartItems.reduce(
    (sum: number, item: any) =>
      sum + (item?.product?.product_price_new ?? 0) * item.quantity,
    0
  );

  return (
    <>
      <SelectPromotionalCard />
      <Paper
        elevation={2}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          p: 5,
          mt: 4,
          boxShadow: "none",
          border: "1px solid",
          borderColor: "#00A79D",
          borderRadius: "10px",
        }}
      >
        <Typography variant="h6" gutterBottom>
          TỔNG GIỎ HÀNG
        </Typography>
        <Box display={"flex"} justifyContent={"space-between"}>
          <Typography fontSize={16} fontWeight={500} color="#52627C">
            SẢN PHẨM
          </Typography>
          <Typography fontSize={16} fontWeight={500} color="#52627C">
            THÀNH TIỀN
          </Typography>
        </Box>
        {cartItems.map((item: any, index: number) => (
          <Box key={index} display="flex" justifyContent="space-between" py={1}>
            <Typography display={"flex"} gap={1}>
              {item.product?.product_name}{" "}
              <Typography fontWeight={700}>x {item.quantity}</Typography>
            </Typography>
            <Typography fontWeight={700}>
              {(
                item.product?.product_price_new ?? 0 * item.quantity
              ).toLocaleString("vi-VN")}{" "}
              đ
            </Typography>
          </Box>
        ))}
        <Divider sx={{ my: 1 }} />
        <Box display="flex" justifyContent="space-between">
          <Typography>Tạm tính</Typography>
          <Typography fontWeight={700}>
            {total.toLocaleString("vi-VN")} đ
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography>Phí vận chuyển</Typography>
          <Typography>0 đ</Typography>
        </Box>
        <Divider sx={{ my: 1 }} />
        <Box display="flex" justifyContent="space-between">
          <Typography fontWeight={600}>Tổng cộng</Typography>
          <Typography fontWeight={700} fontSize={24} color="primary">
            {total.toLocaleString("vi-VN")} đ
          </Typography>
        </Box>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
          onClick={handleSubmit}
        >
          Mua Hàng
        </Button>
      </Paper>
    </>
  );
};

export default DeliveryInformationPage;
