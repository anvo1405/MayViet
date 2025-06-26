import { Box, Typography } from "@mui/material";
import { IFeaturedProduct } from "../../types/product.type";
import { ProductCard } from "../../components";

interface IFeaturedProductProps{
    data: IFeaturedProduct[]
}

const FeaturedProduct = ({data = []} : IFeaturedProductProps) => {
      const rows = [];
  for (let i = 0; i < data.length; i += 4) {
    rows.push(data.slice(i, i + 4));
  }
  return (
    <Box display={"flex"} flexDirection={"column"} alignItems={"center"} gap={3}>
      <Typography fontSize={36} fontWeight={600}>
        SẢN PHẨM NỔI BẬT
      </Typography>
      <Typography
        fontSize={14}
        fontWeight={400}
        maxWidth={"650px"}
        textAlign={"center"}
        mb={4}
      >
        Với hơn 100 công nhân viên hoạt động sản xuất trong ngành nội thất mây,
        chúng tôi luôn nỗ lực và phấn đấu để cho ra đời những sản phẩm đẹp nhất,
        chất lượng nhất.
      </Typography>
    <Box display="flex" flexDirection="column" gap={4} px={2}>
      {rows.map((row, rowIndex) => (
        <Box key={rowIndex} display="flex" gap={2}>
          {row.map((product, index) => (
            <Box key={product.id_product} flex={1}>
              <ProductCard data={product}/>
            </Box>
          ))}
          {Array.from({ length: 4 - row.length }).map((_, i) => (
            <Box key={`empty-${i}`} flex={1} />
          ))}
        </Box>
      ))}
    </Box>
    </Box>
  );
};

export default FeaturedProduct;
