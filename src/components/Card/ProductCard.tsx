import {
  Box,
  Typography,
  IconButton,
  Card,
  CardMedia,
  CardContent,
  Rating,
  Stack,
  Snackbar,
  Alert,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { IFeaturedProduct } from "../../types/product.type";
import { NewBadge } from "../Badge";
import { IS_ACTIVE, NEW_STATUS_PRODUCT } from "../../enums";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cartSlice";
import { useState } from "react";

interface IProductCardProps {
  data: IFeaturedProduct;
}

const ProductCard = ({ data }: IProductCardProps) => {
  const {
    product_name,
    product_price_old,
    product_price_new,
    product_image,
    rate,
    is_status,
    category_name,
    is_favourited,
    product_color,
    active,
  } = data;
  const dispatch = useDispatch();
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleAddToCart = () => {
    dispatch(addToCart({ product: data, quantity: 1 }));
    setOpenSnackbar(true);
  };
  const handleCloseSnackbar = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") return;
    setOpenSnackbar(false);
  };

  if (active !== IS_ACTIVE.ACTIVE) return null;

  return (
    <>
      <Card sx={{ position: "relative", height: "100%" }}>
        <Box sx={{ position: "relative" }}>
          <CardMedia
            component="img"
            width={"100%"}
            image={product_image}
            alt={product_name}
            sx={{ objectFit: "contain" }}
          />
          {is_status === NEW_STATUS_PRODUCT.NEW && (
            <NewBadge
              sx={{ position: "absolute", top: 10, left: 10 }}
              px={1.5}
              py={0.5}
            />
          )}
          <IconButton
            sx={{ position: "absolute", top: 10, right: 10 }}
            color={is_favourited ? "error" : "default"}
          >
            {is_favourited ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </IconButton>
        </Box>

        <CardContent sx={{ px: 2, py: 1 }}>
          <Typography variant="caption" color="text.secondary">
            {category_name.toUpperCase()}
          </Typography>
          <Rating value={rate} readOnly size="small" sx={{ float: "right" }} />
          <Typography
            variant="subtitle1"
            fontWeight={600}
            mt={0.5}
            mb={1}
            noWrap
          >
            {product_name}
          </Typography>

          <Stack direction="row" spacing={1} mb={1}>
            {product_color.map((color, index) => (
              <Box
                key={index}
                sx={{
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  bgcolor: color.color_code,
                  border: "1px solid #ccc",
                }}
              />
            ))}
          </Stack>

          <Box display="flex" flexDirection={"column"} gap={1}>
            {product_price_old > 0 && (
              <Typography
                variant="body2"
                color="text.disabled"
                sx={{ textDecoration: "line-through" }}
              >
                {product_price_old.toLocaleString()} đ
              </Typography>
            )}
            <Typography variant="body1" color="error" fontWeight={600}>
              {product_price_new.toLocaleString()} đ
            </Typography>
          </Box>

<Box
  sx={{
    position: "absolute",
    bottom: 12,
    right: 12,
  }}
>
  <IconButton
    onClick={handleAddToCart}
    sx={{
      p: "12px",
      border: 1,
      borderRadius: "4px",
      borderColor: "#F0EAEA",
      backgroundColor: "#fff",
    }}
  >
    <ShoppingBagOutlinedIcon />
  </IconButton>
</Box>

        </CardContent>
      </Card>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={2000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="success"
          sx={{ width: "100%" }}
        >
          Đã thêm sản phẩm vào giỏ hàng!
        </Alert>
      </Snackbar>
    </>
  );
};

export default ProductCard;
