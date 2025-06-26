import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import Introduction from "./Introduction";
import { IntroductionBanner1, IntroductionBanner2 } from "../../assets";
import Collection from "./Collection";
import FeaturedProduct from "./FeaturedProduct";
import { IFeaturedProduct } from "../../types/product.type";
import { productApi } from "../../services/product.service";
import CustomerBenefits from "./CustomerBenefits";
import Article from "./Article";
import Gallery from "./Gallery";

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
        console.error('Failed to fetch products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <Box display={"flex"} flexDirection={"column"} gap={"40px"}>
      <Introduction data={introductionData} />
      <Collection />
      <FeaturedProduct data={products}/>
      <CustomerBenefits/>
      <Article/>
      <Gallery/>
    </Box>
  );
};

export default HomePage;
