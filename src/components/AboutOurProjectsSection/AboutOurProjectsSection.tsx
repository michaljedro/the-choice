import React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

import { ourProjectsData } from './data';
import { SectionMainHeading } from '@/components/Headings/SectionMainHeading';
import { TextEmphasis } from '@/components/TextEmphasis';
import { spacing, verticalSpacing } from '@/constants';

export function AboutOurProjectsSection(): React.ReactElement {
  return (
    <Box
      component="section"
      sx={{
        textAlign: 'center',
        py: verticalSpacing,
      }}
    >
      <SectionMainHeading>
        Our other <TextEmphasis>projects</TextEmphasis>
      </SectionMainHeading>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: { xs: 'column', md: 'row' },
          mt: 2,
          gap: spacing,
        }}
      >
        {ourProjectsData.map(({ title, projectUrl }) => {
          return (
            <Link
              key={title}
              href={projectUrl}
              target="_blank"
              variant="h6"
              sx={{
                'textDecoration': 'none',
                'fontWeight': 'bold',
                'color': 'black',
                '&:hover': {
                  color: 'primary.main',
                },
              }}
            >
              {title}
            </Link>
          );
        })}
      </Box>
    </Box>
  );
}
