import { Box, Typography, Link } from "@mui/material";
import { ArticleImage1, ArticleImage2, ArticleImage3 } from "../../assets";

const Article = () => {
  const data = [
    {
      image: ArticleImage1,
      title: "Cuộc thi ảnh Nhà Đẹp Cùng Mây Xinh",
      postedDate: "09/01/2019",
      poster: "CUỘC THI",
      content:
        "Một ngôi nhà đẹp thường có đồ xinh điểm tô cho không gian sống. Sau cánh cửa nhà chúng ta đều mong mỏi tìm tới...",
    },
    {
      image: ArticleImage2,
      title: "3 Món Nội Thất Tặng Quà Tân Gia Được Yêu Thích Nhất",
      postedDate: "09/01/2019",
      poster: "MÂY VIỆT",
      content:
        "Tân gia nhà được xem là niềm vui gia chủ sau những năm tháng ấm ủ, dành dụm, đạt thành tựu của gia chủ để có được ...",
    },
    {
      image: ArticleImage3,
      title: "5 Lựa Chọn Sofa Mây Cho Phòng Khách Nhỏ",
      postedDate: "09/01/2019",
      poster: "CUỘC THI",
      content:
        "Một ngôi nhà đẹp thường có đồ xinh điểm tô cho không gian sống. Sau cánh cửa nhà chúng ta đều mong mỏi tìm tới...",
    },
  ];

  return (
    <Box width="100%" py={8}>
      <Box textAlign="center" mb={5}>
        <Typography variant="h5" fontWeight={600}>
          BÀI VIẾT
        </Typography>
        <Typography mt={1} color="text.secondary">
          Nơi chia sẻ kiến thức bổ ích, cuộc thi và các chương trình khuyến mãi.
        </Typography>
      </Box>

      <Box display="flex" flexWrap="wrap" justifyContent="center" gap={"40px"}>
        {data.map((item, index) => (
          <Box
            key={index}
            width={{ xs: "100%", sm: "48%", md: "30%" }}
            minWidth={280}
          >
            <Box
              component="img"
              src={item.image}
              alt={item.title}
              sx={{ width: "100%", height: "auto", borderRadius: 1 }}
            />
            <Box mt={2}>
              <Typography
                variant="subtitle1"
                fontWeight={600}
                gutterBottom
                sx={{
                  overflow: "hidden",
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: 2,
                }}
              >
                {item.title}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                {item.postedDate} · {item.poster}
              </Typography>
              <Typography
                variant="body2"
                mt={1}
                mb={1}
                color="text.secondary"
                sx={{
                  overflow: "hidden",
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: 2,
                }}
              >
                {item.content}
              </Typography>
              <Link href="/" underline="hover" color="inherit" fontWeight={600}>
                XEM TIẾP
              </Link>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Article;
