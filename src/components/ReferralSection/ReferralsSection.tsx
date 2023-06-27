import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { referralsData } from './components/referralsData';
import { ReferralItem } from './components/ReferralItem';
import { SectionMainHeading } from '@/components/Headings/SectionMainHeading';
import { TextEmphasis } from '@/components/TextEmphasis';
import { spacing, verticalSpacing } from '@/constants';

export function ReferralsSection(): React.ReactElement {
  return (
    <Box
      component="section"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: spacing,
        py: verticalSpacing,
      }}
    >
      <SectionMainHeading textAlign="center">
        Creating meaningful change in people's daily lives.
        <br />
        Here are some of our <TextEmphasis>success stories</TextEmphasis>.
      </SectionMainHeading>
      <Grid
        container
        spacing={{ xs: 8, md: 4 }}
        sx={{
          justifyContent: 'center',
        }}
      >
        {referralsData.map(({ quote, name, role, imageUrl }) => {
          return (
            <ReferralItem
              key={name}
              quote={quote}
              name={name}
              role={role}
              imageUrl={imageUrl}
            />
          );
        })}
      </Grid>
    </Box>
  );
}
