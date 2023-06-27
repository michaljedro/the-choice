import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { Hero } from './Hero';
import { HeroHeading } from '@/components/Headings/HeroHeading';
import { TextEmphasis } from '@/components/TextEmphasis';

export function HeroSection(): React.ReactElement {
  return (
    <Hero
      title={
        <HeroHeading>
          Find the best <TextEmphasis>Choice</TextEmphasis>
        </HeroHeading>
      }
      subTitle={
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography component="p" variant="h5">
            Finding the right choice is crucial for being performant and achieve
            whatever is important to you. We're about to change that.
          </Typography>
          <Button
            color="primary"
            variant="contained"
            component={Link}
            to="/app"
            sx={{
              my: 4,
              alignSelf: 'center',
            }}
          >
            Check it now!
          </Button>
        </Box>
      }
    />
  );
}
