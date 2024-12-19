import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

import { AppLogo } from '../AppLogo/AppLogo';
import { Link } from 'react-router-dom';
import { spacing } from '@/constants';

const pages = [
  { name: 'Home', to: '/' },
  { name: 'About', to: '/about' },
];
export function MainFooter(): React.ReactElement {
  return (
    <Container fixed>
      <Grid
        container
        sx={{
          py: spacing,
          alignItems: 'flex-end',
        }}
      >
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            textAlign: {
              xs: 'center',
              md: 'left',
            },
          }}
        >
          <Box>
            <AppLogo />
          </Box>
          <Box>
            {pages.map((page) => (
              <Button
                key={page.name}
                component={Link}
                to={page.to}
                color="inherit"
              >
                {page.name}
              </Button>
            ))}
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            textAlign: { xs: 'center', md: 'right' },
          }}
        >
          <Typography>Copyright 2024. All Rights Reserved</Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
