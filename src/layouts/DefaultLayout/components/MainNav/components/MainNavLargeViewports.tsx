import * as React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import { AppLogo } from '../../AppLogo/AppLogo';
import { Page } from '../types';

type Props = {
  readonly pages: Page[];
};

export function MainNavLargeViewports({ pages }: Props): React.ReactElement {
  return (
    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
      <Box sx={{ flexGrow: 1, display: 'flex' }}>
        <AppLogo />
        {pages.map((page) => (
          <Button
            key={page.name}
            component={Link}
            to={page.to}
            color="inherit"
            sx={{ my: 2, display: 'block' }}
          >
            {page.name}
          </Button>
        ))}
      </Box>

      <Box sx={{ flexGrow: 0, display: 'flex' }}>
        <Button
          color="inherit"
          variant="outlined"
          component={Link}
          to="/app"
          sx={{
            my: 2,
            display: 'block',
            borderRadius: '24px',
          }}
        >
          Go to App
        </Button>
      </Box>
    </Box>
  );
}
