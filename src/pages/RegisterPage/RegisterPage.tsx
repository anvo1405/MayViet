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
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ICFacebookColor, ICGoogleColor, ICTwitterColor } from "../../assets";

type FormValues = {
  email: string;
  phone: string;
  password: string;
};

const RegisterPage = () => {
  const [loading, setLoading] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <Box maxWidth={650} mx="auto" mt={6} px={3} py={4}>
      <Typography
        fontSize={24}
        fontWeight={700}
        mb={4}
        color="#52627C"
        gutterBottom
      >
        ĐĂNG KÝ
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Typography fontSize={14} fontWeight={700}>
          Email
        </Typography>
        <TextField
          fullWidth
          placeholder="Email"
          variant="outlined"
          margin="dense"
          {...register("email", {
            required: "Vui lòng nhập email",
          })}
          error={!!errors.phone}
          helperText={errors.phone?.message}
          sx={{ marginBottom: 4 }}
        />
        <Typography fontSize={14} fontWeight={700}>
          Số điện thoại
        </Typography>
        <TextField
          fullWidth
          placeholder="Số điện thoại"
          variant="outlined"
          margin="dense"
          {...register("phone", {
            required: "Vui lòng nhập email hoặc số điện thoại",
          })}
          error={!!errors.phone}
          helperText={errors.phone?.message}
          sx={{ marginBottom: 4 }}
        />

        <Typography fontSize={14} fontWeight={700}>
          Mật khẩu
        </Typography>

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
          sx={{ marginBottom: 4 }}
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 2, py: 2, backgroundColor: "#00A79D" }}
        >
          Đăng ký
        </Button>
      </form>

      <Divider sx={{ my: 3 }} />

      <Typography
        fontSize={14}
        textAlign="center"
        fontWeight={700}
        gutterBottom
      >
        Hoặc đăng ký nhanh với tài khoản
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
          Đăng ký thành công!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default RegisterPage;
