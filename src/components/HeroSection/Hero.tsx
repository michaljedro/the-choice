import * as React from 'react';
import Box from '@mui/material/Box';
import { spacing } from '@/constants';

type Props = {
  readonly title: React.ReactNode;
  readonly subTitle: React.ReactNode;
};

export function Hero({ title, subTitle }: Props): React.ReactElement {
  return (
    <Box
      component="section"
      sx={{
        display: 'flex',
        gap: spacing,
        flexDirection: { xs: 'column', md: 'row' },
        py: { xs: 12, md: 30 },
      }}
    >
      <Box sx={{ flex: '1' }}>{title}</Box>
      <Box sx={{ flex: '1' }}>{subTitle}</Box>
    </Box>
  );
}
