import { Box, Grid, Typography } from "@mui/material";
import { IFeaturedProduct } from "../../../types/product.type";
import { ProductCard } from "../../../components";

interface IFeaturedProductProps {
  data: IFeaturedProduct[];
}

const FeaturedProduct = ({ data = [] }: IFeaturedProductProps) => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" gap={3} px={2}>
      <Typography fontSize={36} fontWeight={600}>
        SẢN PHẨM NỔI BẬT
      </Typography>
      <Typography
        fontSize={14}
        fontWeight={400}
        maxWidth={"650px"}
        textAlign="center"
        mb={4}
      >
        Với hơn 100 công nhân viên hoạt động sản xuất trong ngành nội thất mây,
        chúng tôi luôn nỗ lực và phấn đấu để cho ra đời những sản phẩm đẹp nhất,
        chất lượng nhất.
      </Typography>

      <Grid container spacing={2} justifyContent="center">
        {data.map((product) => (
          <Grid size={{xs:12, sm:6, md:3}}  key={product.id_product}>
            <ProductCard data={product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FeaturedProduct;
