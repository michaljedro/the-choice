import React from 'react';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Hidden from '@mui/material/Hidden';
import Paper from '@mui/material/Paper';

import { SummaryTable } from '@/components/SummaryTable';
import { SummaryRanking } from '@/components/SummaryRanking';
import { useKey } from '@/hooks/useKey';
import { Choice, Option } from '@/types';
import { Criterion } from '@/components/Criterion';
import { spacing } from '@/constants';

type Props = {
  readonly criterion: string | null;
  readonly choices: Choice[];
  readonly options: Option[];
  readonly onChoiceToggle: (choiceId: number) => void;
  readonly onStartOverClick: () => void;
};

export function Result({
  criterion,
  choices,
  options,
  onChoiceToggle,
  onStartOverClick,
}: Props) {
  useKey('R', () => onStartOverClick());

  return (
    <Box sx={{ minWidth: 275, py: spacing }}>
      <Paper sx={{ display: 'flex', flexDirection: 'column', p: 2 }}>
        <Typography variant="h6" component="h2">
          Result
        </Typography>
        <Criterion value={criterion} />
        <Box>
          <SummaryTable
            options={options}
            choices={choices}
            onChoiceToggle={onChoiceToggle}
          />
        </Box>
        <Box>
          <SummaryRanking options={options} choices={choices} />
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
          }}
        >
          <Button variant="contained" onClick={onStartOverClick}>
            Start over
          </Button>
          <Hidden smDown>
            <Typography variant="caption" display="block">
              Press 'R' to start over
            </Typography>
          </Hidden>
        </Box>
      </Paper>
    </Box>
  );
}
