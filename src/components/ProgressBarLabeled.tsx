import React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

type Props = {
  readonly step: number;
  readonly stepsCount: string[][];
};

export function ProgressBarLabeled({ step, stepsCount }: Props) {
  const progress = (step / (stepsCount.length - 1)) * 100;

  return (
    <Box>
      <Grid container alignItems="center" spacing={2} direction="row">
        <Grid item xs>
          <LinearProgress
            variant="determinate"
            value={progress}
            sx={{
              height: '0.4rem',
              borderRadius: '0.2rem',
            }}
          />
        </Grid>

        <Grid item xs="auto">
          <Typography noWrap>
            {step + 1} / {stepsCount.length}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
