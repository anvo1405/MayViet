import {
  Alert,
  Box,
  Button,
  Divider,
  IconButton,
  Link,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ICFacebookColor, ICGoogleColor, ICTwitterColor } from "../../assets";
import { ROUTE_PATHS } from "../../config/Routes/routes";
import { LOCAL_STORAGE_KEY } from "../../enums";
import { authApi } from "../../services";

type FormValues = {
  phone: string;
  password: string;
};

export default function LoginForm() {
  const [loading, setLoading] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    try {
      setLoading(true);
      const response = await authApi.login(data);

      localStorage.setItem(LOCAL_STORAGE_KEY.ACCESS_TOKEN, response.token);
      localStorage.setItem(
        LOCAL_STORAGE_KEY.USER,
        JSON.stringify(response.user)
      );

      setLoginSuccess(true);
      setTimeout(() => {
        navigate(ROUTE_PATHS.HOME);
      }, 500);
    } catch (error: any) {
      console.error("Login failed:", error);
      alert(
        error?.response?.data?.message ||
          "Đăng nhập thất bại. Vui lòng thử lại."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box maxWidth={650} mx="auto" mt={6} px={3} py={4}>
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        ĐĂNG NHẬP
      </Typography>

      <Typography variant="body2" mb={2}>
        Bạn chưa có tài khoản?{"  "}
        <Link
          href={ROUTE_PATHS.REGISTER}
          color="primary"
          underline="hover"
          sx={{ color: "#00A79D" }}
        >
          Đăng Ký
        </Link>
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Typography fontSize={14} fontWeight={700}>
          Email / Số điện thoại
        </Typography>
        <TextField
          fullWidth
          placeholder="Email hoặc số điện thoại"
          variant="outlined"
          margin="dense"
          {...register("phone", {
            required: "Vui lòng nhập email hoặc số điện thoại",
          })}
          error={!!errors.phone}
          helperText={errors.phone?.message}
        />

        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mt="20px"
        >
          <Typography fontSize={14} fontWeight={700}>
            Mật khẩu
          </Typography>
          <Link
            href="#"
            color="primary"
            underline="hover"
            fontSize={14}
            sx={{ color: "#00A79D" }}
          >
            Quên mật khẩu?
          </Link>
        </Box>

        <TextField
          fullWidth
          type="password"
          placeholder="Mật khẩu chứa từ 6 đến 32 ký tự"
          variant="outlined"
          margin="dense"
          {...register("password", {
            required: "Vui lòng nhập mật khẩu",
            minLength: { value: 6, message: "Mật khẩu tối thiểu 6 ký tự" },
            maxLength: { value: 32, message: "Mật khẩu tối đa 32 ký tự" },
          })}
          error={!!errors.password}
          helperText={errors.password?.message}
          sx={{mb: 4}}
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 2, py: 2, backgroundColor: "#00A79D" }}
        >
          Đăng Nhập
        </Button>
      </form>

      <Divider sx={{ my: 3 }} />

      <Typography
        fontSize={14}
        textAlign="center"
        fontWeight={700}
        gutterBottom
      >
        Hoặc đăng nhập nhanh với tài khoản
      </Typography>

      <Box display="flex" justifyContent="center" gap={1}>
        <IconButton>
          <Box
            component="img"
            src={ICGoogleColor}
            alt="Google"
            sx={{ width: 24, height: 24 }}
          />
        </IconButton>
        <IconButton>
          <Box
            component="img"
            src={ICFacebookColor}
            alt="Facebook"
            sx={{ width: 24, height: 24 }}
          />
        </IconButton>
        <IconButton>
          <Box
            component="img"
            src={ICTwitterColor}
            alt="Twitter"
            sx={{ width: 24, height: 24 }}
          />
        </IconButton>
      </Box>
      <Snackbar
        open={loginSuccess}
        autoHideDuration={2000}
        onClose={() => setLoginSuccess(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={() => setLoginSuccess(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          Đăng nhập thành công!
        </Alert>
      </Snackbar>
    </Box>
  );
}
