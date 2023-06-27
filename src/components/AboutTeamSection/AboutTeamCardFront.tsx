import React from 'react';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { spacing } from '@/constants';

type Props = {
  imageUrl: string;
  name: string;
  role: string;
};

export function AboutTeamCardFront({ imageUrl, name, role }: Props) {
  return (
    <>
      <Avatar
        src={imageUrl}
        alt={name}
        sx={{
          mt: spacing,
          width: 96,
          height: 96,
          objectFit: 'contain',
        }}
      />
      <Typography component="h4" variant="h6">
        {name}
      </Typography>
      <Typography component="h5">{role}</Typography>
    </>
  );
}
