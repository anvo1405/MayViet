import { Box } from "@mui/material";
import {
  GalleryImage1,
  GalleryImage2,
  GalleryImage3,
  GalleryImage4,
  GalleryImage5,
} from "../../assets";

const Gallery = () => {
  const galleryData = [
    GalleryImage1,
    GalleryImage2,
    GalleryImage3,
    GalleryImage4,
    GalleryImage5,
  ];

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexWrap="wrap"
      sx={{
        width: "100%",
        backgroundColor: "#F3F2F4",
        py: 8,
        gap: "40px",
      }}
    >
      {galleryData.map((item, index) => (
        <Box
          key={index}
          component="img"
          src={item}
          alt={`gallery-${index}`}
          sx={{
            height: index % 2 === 0 ? "180px" : "280px",
            width: "auto",
            objectFit: "cover",
            borderRadius: 2,
            transition: "transform 0.3s",
            "&:hover": {
              transform: "scale(1.03)",
            },
          }}
        />
      ))}
    </Box>
  );
};

export default Gallery;
