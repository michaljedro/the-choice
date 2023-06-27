import React from 'react';
import Typography from '@mui/material/Typography';

type Props = {
  name: string;
  description: string;
};

export function AboutTeamCardBack({ name, description }: Props) {
  return (
    <>
      <Typography component="h3" variant="h6">
        {name}
      </Typography>
      <Typography>{description}</Typography>
    </>
  );
}
