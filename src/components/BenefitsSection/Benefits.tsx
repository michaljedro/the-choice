import React from 'react';
import Grid from '@mui/material/Grid';
import { spacing, verticalSpacing } from '@/constants';

type Props = {
  readonly title: React.ReactNode;
  readonly benefits: React.ReactNode;
};

export function Benefits({ title, benefits }: Props): React.ReactElement {
  return (
    <Grid
      container
      spacing={spacing}
      sx={{
        py: verticalSpacing,
      }}
    >
      <Grid item xs={12} md={6}>
        {title}
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        sx={{ display: 'flex', flexDirection: 'column', gap: spacing }}
      >
        {benefits}
      </Grid>
    </Grid>
  );
}
