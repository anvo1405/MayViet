import { Typography, TextField, Divider } from "@mui/material";
import { Controller } from "react-hook-form";

const DeliveryInformation = ({ control, errors }: any) => {
  return (
    <>
      <Typography fontSize={24} fontWeight={700} color="#52627C" gutterBottom>
        THÔNG TIN GIAO HÀNG
      </Typography>
      <Divider sx={{ mb: 2 }} />
      {[
        { name: "name", label: "Họ và tên", placeholder: "Họ và tên" },
        { name: "email", label: "Email", placeholder: "Email" },
        { name: "phone", label: "Số điện thoại", placeholder: "Số điện thoại" },
        { name: "province", label: "Tỉnh thành", placeholder: "Tỉnh thành" },
        { name: "address", label: "Địa chỉ", placeholder: "Địa chỉ" },
      ].map((field) => (
        <Controller
          key={field.name}
          name={field.name}
          control={control}
          rules={{ required: `Vui lòng nhập ${field.label.toLowerCase()}` }}
          render={({ field: inputField }) => (
            <>
              <Typography fontSize={14} fontWeight={700}>
                {field.label}
              </Typography>
              <TextField
                {...inputField}
                placeholder={field.placeholder}
                fullWidth
                margin="dense"
                error={!!errors[field.name]}
                helperText={errors[field.name]?.message as string}
              />
            </>
          )}
        />
      ))}
    </>
  );
};

export default DeliveryInformation;
