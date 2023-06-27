import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';

import { MainNavSmallViewports } from './components/MainNavSmallViewports';
import { MainNavLargeViewports } from './components/MainNavLargeViewports';

const pages = [
  { name: 'Home', to: '/' },
  { name: 'About', to: '/about' },
];

const appPage = { name: 'Go to App', to: '/app' };

export function MainNav(): React.ReactElement {
  return (
    <AppBar position="sticky">
      <Container fixed>
        <Toolbar disableGutters>
          <MainNavSmallViewports pages={[...pages, appPage]} />
          <MainNavLargeViewports pages={pages} />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
