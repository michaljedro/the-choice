import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { spacing } from '@/constants';

type Props = {
  readonly onBackClick: () => void;
  readonly onSkipClick: () => void;
};

export function ActionButtons({ onBackClick, onSkipClick }: Props) {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: 1,
        alignItems: 'center',
      }}
    >
      <Button onClick={onBackClick}>Back</Button>

      <Button onClick={onSkipClick}>Skip</Button>
    </Box>
  );
}
