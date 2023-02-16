import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { Choice, Option } from '../types';
import { useKey } from '../hooks/useKey';
import { PersistenceKey, usePersistedState } from '../hooks/usePersistedState';

type Props = {
  pairs: [Option, Option][];
  onFinish: (choices: Choice[]) => void;
};

export function Quiz({ pairs, onFinish }: Props): React.ReactElement | null {
  const [choices, setChoices] = usePersistedState<Choice[]>(
    PersistenceKey.QuizChoices,
    [],
    true,
  );

  useKey('A', () => handlePairClick('A'));
  useKey('B', () => handlePairClick('B'));

  const currentStep = choices.length;
  const hasAllChoices = currentStep === pairs.length;

  React.useEffect(() => {
    if (hasAllChoices) {
      onFinish(choices);
    }
  }, [hasAllChoices, onFinish, choices]);

  if (hasAllChoices) {
    return null;
  }

  const [optionA, optionB] = pairs[currentStep];

  const handlePairClick = (picked: 'A' | 'B'): void => {
    setChoices((prev) => [...prev, { optionA, optionB, picked }]);
  };

  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h6" component="div">
            The Right Choice ™ - Quiz
          </Typography>
        </CardContent>
        <CardActions>
          <Box>
            <Button onClick={() => handlePairClick('A')}>{optionA}</Button>
            <Typography variant="caption" display="block">
              Press 'A' to pick this option
            </Typography>
          </Box>
          <Box>
            <Button onClick={() => handlePairClick('B')}>{optionB}</Button>
            <Typography variant="caption" display="block">
              Press 'B' to pick this option
            </Typography>
          </Box>
        </CardActions>
      </Card>
    </Box>
  );
}
