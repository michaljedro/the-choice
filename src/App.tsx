import React from 'react';
import { Route, Routes } from 'react-router';

import { About } from '@/pages/About';
import { DefaultLayout } from '@/layouts/DefaultLayout/DefaultLayout';
import { Landing } from '@/pages/Landing';
import { MainPager } from '@/pages/MainPager';
import { NotFound } from './pages/NotFound';
import Container from '@mui/material/Container';

export function App(): React.ReactElement {
  return (
    <DefaultLayout>
      <Container fixed sx={{ py: 3 }}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/app" element={<MainPager />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </DefaultLayout>
  );
}
