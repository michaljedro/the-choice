import React from 'react';
import Box from '@mui/material/Box';
import { AboutTeamCard } from './AboutTeamCard';
import { SectionMainHeading } from '@/components/Headings/SectionMainHeading';
import { verticalSpacing } from '@/constants';

export function AboutTeamSection() {
  return (
    <Box sx={{ py: verticalSpacing }}>
      <SectionMainHeading textAlign="center">
        Meet the directors
      </SectionMainHeading>
      <AboutTeamCard />
    </Box>
  );
}
