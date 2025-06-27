import { Box, Grid } from "@mui/material";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import {
  DeliveryInformation,
  Note,
  PaymentMethod,
  Summary,
} from "./components";
import { useMemo } from "react";

const DeliveryInformationPage = () => {
  const rawItems = useSelector((state: RootState) => state.cart.items);

  const cartItems = useMemo(
    () => rawItems.filter((item) => item.isCheck),
    [rawItems]
  );

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log("Form submitted:", { buyer: data, cart: cartItems });
  };

  return (
    <Box p={4}>
      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 8 }}>
          <DeliveryInformation control={control} errors={errors} />
          <PaymentMethod control={control} />
          <Note control={control} />
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <Summary
            cartItems={cartItems}
            handleSubmit={handleSubmit(onSubmit)}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default DeliveryInformationPage;
