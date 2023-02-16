import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

import { Choice, Option } from '../types';
import { SummaryTable } from '../components/SummaryTable';
import { useKey } from '../hooks/useKey';

type Props = {
  choices: Choice[];
  options: Option[];
  onStartOverClick: () => void;
};

export function Result({ choices, options, onStartOverClick }: Props) {
  useKey('R', () => onStartOverClick());

  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h6" component="div">
            The Right Choice ™ - Result
          </Typography>
          <Box>
            <SummaryTable options={options} choices={choices} />
          </Box>
        </CardContent>
        <CardActions>
          <Box>
            <Button onClick={onStartOverClick}>Start over</Button>
            <Typography variant="caption" display="block">
              Press 'R' to start over
            </Typography>
          </Box>
        </CardActions>
      </Card>
    </Box>
  );
}
