import Typography from '@mui/material/Typography';
import React from 'react';

import { Hero } from '../HeroSection/Hero';
import { HeroHeading } from '@/components/Headings/HeroHeading';

export function AboutHeroSection(): React.ReactElement {
  return (
    <Hero
      title={<HeroHeading>About</HeroHeading>}
      subTitle={
        <Typography component="p" variant="h5">
          Our team is a community of people who want to develop their
          programming skills. Our group reflects the best everyday practices at
          software developer work.
        </Typography>
      }
    />
  );
}
