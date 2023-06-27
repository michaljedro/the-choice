import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import { spacing } from '@/constants';
import { SectionMainHeading } from '@/components/Headings/SectionMainHeading';

export function ReadyToGetStartedSection(): React.ReactElement {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: spacing,
        py: spacing,
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        textAlign: { xs: 'center', md: 'left' },
      }}
    >
      <Box
        sx={{
          flexGrow: 1,
        }}
      >
        <SectionMainHeading>Ready to get started?</SectionMainHeading>
      </Box>
      <Box>
        <Button component={Link} to="/app" variant="contained">
          GO TO APP
        </Button>
      </Box>
    </Box>
  );
}
