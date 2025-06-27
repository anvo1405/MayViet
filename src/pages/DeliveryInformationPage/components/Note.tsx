import { Typography, TextField, Divider } from "@mui/material";
import { Controller } from "react-hook-form";

const Note = ({ control }: any) => {
  return (
    <>
      <Divider sx={{ mt: 4, mb: 3 }} />
      <Typography fontSize={14} fontWeight={700}>
        Ghi chú
      </Typography>
      <Controller
        name="note"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="Ghi chú"
            fullWidth
            margin="normal"
            multiline
            rows={3}
          />
        )}
      />
    </>
  );
};

export default Note;
