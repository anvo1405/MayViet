import React from 'react';
import { Box, Typography, SxProps, Theme } from '@mui/material';

interface NewBadgeProps {
  px?: number | string;
  py?: number | string;
  sx?: SxProps<Theme>;
}

const NewBadge: React.FC<NewBadgeProps> = ({
  px = '20px',
  py = '8px',
  sx = {},
}) => {
  return (
    <Box
      sx={{
        display: 'inline-block',
        bgcolor: '#D71010',
        color: 'white',
        px,
        py,
        borderRadius: '4px',
        ...sx,
      }}
    >
      <Typography fontSize={14} fontWeight={700}>
        MỚI
      </Typography>
    </Box>
  );
};

export default NewBadge;
