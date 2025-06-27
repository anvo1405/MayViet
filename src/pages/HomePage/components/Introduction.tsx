import React from "react";
import { Box, Typography } from "@mui/material";
import { ImageWithLabelCard } from "../../../components";

interface IntroductionItem {
  image: string;
  label: string;
}

interface IntroductionProps {
  data?: IntroductionItem[];
}

const Introduction = ({ data = [] }: IntroductionProps) => {
  const rows = [];
  for (let i = 0; i < data.length; i += 2) {
    rows.push(data.slice(i, i + 2));
  }

  return (
    <Box display="flex" flexDirection="column" gap={"40px"} sx={{ px: "20px" }}>
      {rows.map((row, rowIndex) => (
        <Box key={rowIndex} display="flex" gap={"40px"}>
          {row.map((item, index) => (
            <Box key={index} flex={1}>
              <ImageWithLabelCard src={item.image} label={item.label} />
            </Box>
          ))}
          {row.length === 1 && <Box flex={1} />}
        </Box>
      ))}
    </Box>
  );
};

export default Introduction;
