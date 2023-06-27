import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Hidden from '@mui/material/Hidden';
import { QuizRestartDialog } from '@/components/QuizRestartDialog';
import { useGenerateId } from '@/hooks/useGenerateId';
import { useKey } from '@/hooks/useKey';
import { PersistenceKey, usePersistedState } from '@/hooks/usePersistedState';
import { Choice, Option } from '@/types';
import { Criterion } from '@/components/Criterion';
import { ProgressBarLabeled } from '@/components/ProgressBarLabeled';
import { ActionButtons } from '@/components/ActionButtons';
import { spacing } from '@/constants';

type Props = {
  readonly criterion: string | null;
  readonly pairs: [Option, Option][];
  readonly onFinish: (choices: Choice[]) => void;
  readonly onRestartClick: () => void;
};

export function Quiz({
  criterion,
  pairs,
  onFinish,
  onRestartClick,
}: Props): React.ReactElement | null {
  const [choices, setChoices] = usePersistedState<Choice[]>(
    PersistenceKey.QuizChoices,
    [],
    true,
  );
  const [open, setOpen] = React.useState(false);
  const [pairsToChooseFrom, setPairsToChooseFrom] = React.useState(pairs);
  useKey('A', () => handlePairClick('A'));
  useKey('B', () => handlePairClick('B'));

  const generateId = useGenerateId();

  const currentStep = choices.length;
  const hasAllChoices = currentStep === pairs.length;
  const handleBackClick = () => {
    setChoices((prevState) => {
      const newChoices = [...prevState];
      newChoices.pop();
      return newChoices;
    });
  };
  const handleSkipPairClick = () => {
    setPairsToChooseFrom((prevState) => {
      const pairsToChoose = [...prevState];
      const [currentPair] = pairsToChoose.splice(currentStep, 1);
      const changedPairsToChoose = [...pairsToChoose, currentPair];
      return changedPairsToChoose;
    });
  };

  React.useEffect(() => {
    if (hasAllChoices) {
      onFinish(choices);
    }
  }, [hasAllChoices, onFinish, choices]);
  if (hasAllChoices) {
    return null;
  }

  const [optionA, optionB] = pairsToChooseFrom[currentStep];
  const handlePairClick = (picked: 'A' | 'B'): void => {
    setChoices((prev) => [
      ...prev,
      { id: generateId(), optionA, optionB, picked },
    ]);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ minWidth: 275, py: spacing }}>
      <Paper
        variant="outlined"
        sx={{ display: 'flex', flexDirection: 'column', p: 2 }}
      >
        <Typography variant="h6" component="h2">
          Quiz
        </Typography>
        <Criterion value={criterion} />

        <ProgressBarLabeled step={currentStep} stepsCount={pairsToChooseFrom} />

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: {
              xs: 'column',
              md: 'row',
            },
            my: 4,
            gap: spacing,
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: {
                xs: '75%',
                md: '25%',
              },
            }}
          >
            <Button variant="contained" onClick={() => handlePairClick('A')}>
              {optionA}
            </Button>
            <Hidden mdDown>
              <Typography
                variant="caption"
                display="block"
                sx={{ alignSelf: 'center' }}
              >
                Press 'A' to pick this option
              </Typography>
            </Hidden>
          </Box>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: {
                xs: '75%',
                md: '25%',
              },
            }}
          >
            <Button variant="contained" onClick={() => handlePairClick('B')}>
              {optionB}
            </Button>
            <Hidden mdDown>
              <Typography
                variant="caption"
                display="block"
                sx={{ alignSelf: 'center' }}
              >
                Press 'B' to pick this option
              </Typography>
            </Hidden>
          </Box>
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            alignContent: 'center',
          }}
        >
          <Box>
            <QuizRestartDialog
              currentStep={currentStep}
              handleClickOpen={handleClickOpen}
              open={open}
              handleClose={handleClose}
              onRestartClick={onRestartClick}
            />
          </Box>
          <ActionButtons
            onBackClick={handleBackClick}
            onSkipClick={handleSkipPairClick}
          />
        </Box>
      </Paper>
    </Box>
  );
}
