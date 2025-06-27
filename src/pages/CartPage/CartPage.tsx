import {
  Box,
  Typography,
  Checkbox,
  IconButton,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Divider,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import {
  clearCart,
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
  setAllCheck,
  setCheck,
} from "../../store/cartSlice";
import { useNavigate } from "react-router-dom";
import { ROUTE_PATHS } from "../../config/Routes/routes";
import { ICDelete } from "../../assets";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

export default function CartPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const isAllChecked = cartItems.every((item) => item.isCheck);

  const total = cartItems
    .filter((item) => item.isCheck)
    .reduce(
      (acc, item) =>
        acc + (item.product?.product_price_new || 0) * item.quantity,
      0
    );

  const handleToggleAll = () => {
    dispatch(setAllCheck(!isAllChecked));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleToggleItemCheck = (id: number, checked: boolean) => {
    dispatch(setCheck({ id, isCheck: checked }));
  };

  const handleDecreaseQuantity = (id: number) => {
    dispatch(decreaseQuantity(id));
  };

  const handleIncreaseQuantity = (id: number) => {
    dispatch(increaseQuantity(id));
  };

  const handleRemoveItem = (id: number) => {
    dispatch(removeFromCart(id));
  };

  const handleCheckout = () => {
    navigate(ROUTE_PATHS.DELIVERY_INFORMATION);
  };

  return (
    <Box
      display="flex"
      flexDirection={{ xs: "column", md: "row" }}
      sx={{ p: { xs: 2, md: 4 }, gap: 4, minHeight: { md: "800px" } }}
    >
      <Box flex={1}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox" colSpan={2}>
                  <Box display="flex" alignItems="center" color="#52627C">
                    <Box display="flex" alignItems="center">
                      <Checkbox
                        checked={isAllChecked}
                        onChange={handleToggleAll}
                      />
                      <Typography mr={1}>Chọn tất cả</Typography>
                    </Box>
                    <Typography
                      onClick={handleClearCart}
                      sx={{ cursor: "pointer", ml: 1 }}
                    >
                      | Xóa giỏ hàng
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell>
                  <Typography fontSize={16} fontWeight={500} color="#52627C">
                    ĐƠN GIÁ
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography fontSize={16} fontWeight={500} color="#52627C">
                    SỐ LƯỢNG
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography fontSize={16} fontWeight={500} color="#52627C">
                    THÀNH TIỀN
                  </Typography>
                </TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cartItems.map((item) => {
                const id = item.product?.id_product;
                return (
                  <TableRow key={id} sx={{ "& td": { borderBottom: "none" } }}>
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={item.isCheck}
                        onChange={(e) =>
                          id !== undefined &&
                          handleToggleItemCheck(id, e.target.checked)
                        }
                      />
                    </TableCell>
                    <TableCell>
                      <Box display="flex" alignItems="center" gap={2}>
                        <img
                          src={item?.product?.product_image}
                          alt={item?.product?.product_name}
                          width={60}
                          height={60}
                        />
                        <Typography>{item?.product?.product_name}</Typography>
                      </Box>
                    </TableCell>
                    <TableCell sx={{ fontWeight: 700, fontSize: 16 }}>
                      {item?.product?.product_price_new.toLocaleString()} đ
                    </TableCell>
                    <TableCell>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          border: "1px solid #ccc",
                          borderRadius: "4px",
                          overflow: "hidden",
                          width: "fit-content",
                        }}
                      >
                        <IconButton
                          size="small"
                          onClick={() =>
                            id !== undefined && handleDecreaseQuantity(id)
                          }
                          sx={{
                            borderRight: "1px solid #ccc",
                            borderRadius: 0,
                            width: 36,
                            height: 36,
                          }}
                        >
                          <RemoveIcon fontSize="small" />
                        </IconButton>
                        <Box
                          sx={{
                            px: 2,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            minWidth: 10,
                            height: 36,
                            borderRight: "1px solid #ccc",
                          }}
                        >
                          <Typography>{item.quantity}</Typography>
                        </Box>
                        <IconButton
                          size="small"
                          onClick={() =>
                            id !== undefined && handleIncreaseQuantity(id)
                          }
                          sx={{
                            borderRadius: 0,
                            width: 36,
                            height: 36,
                          }}
                        >
                          <AddIcon fontSize="small" />
                        </IconButton>
                      </Box>
                    </TableCell>
                    <TableCell sx={{ fontWeight: 700, fontSize: 16 }}>
                      {(
                        (item?.product?.product_price_new ?? 0) * item.quantity
                      ).toLocaleString()}{" "}
                      đ
                    </TableCell>
                    <TableCell>
                      <IconButton
                        onClick={() => id !== undefined && handleRemoveItem(id)}
                      >
                        <Box component="img" src={ICDelete} />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      <Box width={{ xs: "100%", md: "30%" }} mt={{ xs: 2, md: 0 }}>
        <Paper
          elevation={3}
          sx={{
            display: "flex",
            flexDirection: "column",
            p: 2,
            gap: 2,
            boxShadow: "none",
          }}
        >
          <Typography variant="h6" mb={2}>
            TỔNG GIỎ HÀNG
          </Typography>
          <Box display="flex" justifyContent="space-between" mb={1}>
            <Typography>Tạm tính</Typography>
            <Typography>{total.toLocaleString()} đ</Typography>
          </Box>
          <Box display="flex" justifyContent="space-between" mb={1}>
            <Typography>Phí vận chuyển</Typography>
            <Typography>Miễn phí</Typography>
          </Box>
          <Divider sx={{ my: 1 }} />
          <Box display="flex" justifyContent="space-between" mb={2}>
            <Typography fontWeight="bold">Tổng cộng</Typography>
            <Typography fontWeight="bold" color="primary">
              {total.toLocaleString()} đ
            </Typography>
          </Box>
          <Button
            disabled={cartItems.filter((item) => item.isCheck).length <= 0}
            onClick={handleCheckout}
            variant="contained"
            fullWidth
          >
            Mua Hàng
          </Button>
        </Paper>
      </Box>
    </Box>
  );
}
