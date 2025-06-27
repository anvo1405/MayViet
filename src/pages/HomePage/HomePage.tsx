import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { IntroductionBanner1, IntroductionBanner2 } from "../../assets";
import { IFeaturedProduct } from "../../types/product.type";
import { productApi } from "../../services/product.service";
import {
  Article,
  Collection,
  CustomerBenefits,
  FeaturedProduct,
  Gallery,
  Introduction,
} from "./components";

const HomePage = () => {
  const introductionData = [
    {
      image: IntroductionBanner1,
      label: "ẤM ÁP",
    },
    {
      image: IntroductionBanner2,
      label: "NGỌT NGÀO",
    },
  ];
  const [products, setProducts] = useState<IFeaturedProduct[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await productApi.getFeaturedProductList();
        setProducts(res.data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <Box display={"flex"} flexDirection={"column"} gap={"40px"}>
      <Introduction data={introductionData} />
      <Box sx={{ display: { xs: "none", sm: "block" } }}>
        <Collection />
      </Box>
      <FeaturedProduct data={products} />
      <CustomerBenefits />
      <Article />
      <Gallery />
    </Box>
  );
};

export default HomePage;
