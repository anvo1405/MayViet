import React from 'react';
import { Box, Typography } from '@mui/material';

interface ImageWithLabelCardProps {
  src: string;
  label: string;
  width?: number | string;
  height?: number | string;
}

const ImageWithLabelCard: React.FC<ImageWithLabelCardProps> = ({
  src,
  label,
  width = '100%',
}) => {
  return (
    <Box
      sx={{
        position: 'relative',
        width,
        overflow: 'hidden',
        borderRadius: 1,
      }}
    >
      <Box
        component="img"
        src={src}
        alt={label}
        sx={{
          width: '100%',
          objectFit: 'contain',
          display: 'block',
        }}
      />

      <Box
        sx={{
          position: 'absolute',
          bottom: 16,
          right: 16,
          bgcolor: 'rgba(255, 255, 255, 0.9)',
          px: '60px',
          py: '16px',
          borderRadius: 2,
        }}
      >
        <Typography fontSize={16} fontWeight={600}>
          {label}
        </Typography>
      </Box>
    </Box>
  );
};

export default ImageWithLabelCard;
