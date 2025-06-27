import {
  Typography,
  Divider,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import { Controller } from "react-hook-form";
import { PAYMENT_METHOD } from "../../../enums";

const PaymentMethod = ({ control }: any) => {
  return (
    <>
      <Typography fontSize={24} fontWeight={700} color="#52627C" mt={4}>
        PHƯƠNG THỨC THANH TOÁN
      </Typography>
      <Divider sx={{ my: 2 }} />
      <Controller
        name="paymentMethod"
        control={control}
        defaultValue="cod"
        render={({ field }) => (
          <RadioGroup {...field}>
            <FormControlLabel
              value={PAYMENT_METHOD.COD}
              control={<Radio />}
              label="Thanh toán khi nhận hàng (COD)"
            />
            <FormControlLabel
              value={PAYMENT_METHOD.ATM}
              control={<Radio />}
              label="Thẻ ATM nội địa/Internet Banking"
            />
            <FormControlLabel
              value={PAYMENT_METHOD.VISA}
              control={<Radio />}
              label="Thanh toán bằng thẻ quốc tế Visa, Master, JCB"
            />
          </RadioGroup>
        )}
      />
    </>
  );
};

export default PaymentMethod;
