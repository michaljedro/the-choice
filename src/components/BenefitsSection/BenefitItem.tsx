import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { SupportedIcon } from './types';
import { BenefitIcon } from './BenefitIcon';

type Props = {
  readonly icon: SupportedIcon;
  readonly title: string;
  readonly subtitle: string;
};

export function BenefitItem({
  icon,
  title,
  subtitle,
}: Props): React.ReactElement {
  return (
    <Box sx={{ display: 'flex', alignItems: 'start' }}>
      <Box sx={{ pr: 2 }}>
        <BenefitIcon icon={icon} fontSize="large" />
      </Box>
      <Box sx={{ flex: '1' }}>
        <Typography variant="h6" component="h4" sx={{ color: 'primary.main' }}>
          {title}
        </Typography>
        <Typography component="p">{subtitle}</Typography>
      </Box>
    </Box>
  );
}
