import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import React from 'react';
import { Link } from 'react-router-dom';
import { spacing } from '@/constants';

export function NotFound(): React.ReactElement {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: spacing,
      }}
    >
      <Typography
        component="h2"
        typography="h3"
        color="black"
        textAlign="center"
      >
        Page not found
      </Typography>
      <Button color="primary" variant="contained" component={Link} to="/">
        Return to home
      </Button>
    </Box>
  );
}
