import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import { CriterionForm } from '@/components/CriterionForm';
import { CriterionSubmit } from '@/types';
import { spacing } from '@/constants';

type Props = {
  readonly onSubmit: (criterion: CriterionSubmit) => void;
};

export function CriterionPage({ onSubmit }: Props): React.ReactElement {
  return (
    <Box sx={{ py: spacing }}>
      <Paper sx={{ display: 'flex', flexDirection: 'column', gap: 1, p: 2 }}>
        <Typography component="h2" variant="h6">
          Criterion
        </Typography>
        <CriterionForm onCriterionSubmit={onSubmit} />
      </Paper>
    </Box>
  );
}
