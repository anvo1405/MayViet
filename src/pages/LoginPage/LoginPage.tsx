import React from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Link,
  Divider,
  IconButton,
} from "@mui/material";
import { useForm } from "react-hook-form";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

type FormValues = {
  email: string;
  password: string;
};

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log("Form Submitted:", data);
  };

  return (
    <Box maxWidth={650} mx="auto" mt={6} px={3} py={4}>
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        ĐĂNG NHẬP
      </Typography>

      <Typography variant="body2" mb={2}>
        Bạn chưa có tài khoản?{"  "}
        <Link
          href="#"
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
          {...register("email", {
            required: "Vui lòng nhập email hoặc số điện thoại",
          })}
          error={!!errors.email}
          helperText={errors.email?.message}
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
          placeholder="Mật khẩu chứa từ 8 đến 32 ký tự"
          variant="outlined"
          margin="dense"
          {...register("password", {
            required: "Vui lòng nhập mật khẩu",
            minLength: { value: 8, message: "Mật khẩu tối thiểu 8 ký tự" },
            maxLength: { value: 32, message: "Mật khẩu tối đa 32 ký tự" },
          })}
          error={!!errors.password}
          helperText={errors.password?.message}
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 2, backgroundColor: "#00b9ad" }}
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

      <Box display="flex" justifyContent="center" gap={2}>
        <IconButton color="primary">
          <GoogleIcon />
        </IconButton>
        <IconButton color="primary">
          <FacebookIcon />
        </IconButton>
        <IconButton color="primary">
          <TwitterIcon />
        </IconButton>
      </Box>
    </Box>
  );
}
