import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import React from 'react';
import { ReferralsData } from '../types';
import Avatar from '@mui/material/Avatar';

type Props = ReferralsData;

export function ReferralItem({ quote, name, role, imageUrl }: Props) {
  return (
    <Grid key={name} item xs={12} md={4}>
      <Box
        sx={{
          textAlign: 'center',
        }}
      >
        <Typography component="q" variant="body1">
          {quote}
        </Typography>
        <Typography
          component="h4"
          variant="subtitle1"
          sx={{
            mt: { xs: 2, md: 3 },
            color: 'primary.main',
          }}
        >
          {name}
        </Typography>
        <Typography
          component="p"
          variant="body2"
          sx={{
            fontStyle: 'italic',
          }}
        >
          {role}
        </Typography>
        <Avatar
          src={imageUrl}
          alt={name}
          sx={{
            mt: { xs: 2, md: 3 },
            mx: 'auto',
            width: 62,
            height: 62,
            objectFit: 'contain',
          }}
        />
      </Box>
    </Grid>
  );
}
