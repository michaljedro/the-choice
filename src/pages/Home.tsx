import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { Option } from '../types';
import { SuggestedOptions } from '../components/SuggestedOptions';
import { ModifierKey, useKey } from '../hooks/useKey';
import { PersistenceKey, usePersistedState } from '../hooks/usePersistedState';
import {
  OperatingSystem,
  useOperatingSystem,
} from '../hooks/useOperatingSystem';

type Props = {
  onStartClick: (options: Option[]) => void;
};

const MIN_OPTIONS_COUNT = 3;

export const Home = ({ onStartClick }: Props): React.ReactElement => {
  const [text, setText] = usePersistedState(PersistenceKey.HomeText, '');
  const [isButtonDisabled, setIsButtonDisabled] = React.useState(true);

  const operatingSystem = useOperatingSystem();
  const modifierKey: ModifierKey =
    operatingSystem === OperatingSystem.macOS ? 'metaKey' : 'ctrlKey';

  useKey('Enter', () => handleStartClick(), [modifierKey]);

  const options: Option[] = text
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean);

  const hasNotEnoughOptions = options.length < MIN_OPTIONS_COUNT;

  React.useEffect(() => {
    setIsButtonDisabled(hasNotEnoughOptions);
  }, [text]);

  const handleStartClick = () => {
    if (hasNotEnoughOptions) {
      return;
    }
    onStartClick(options);
  };

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const prependOptions = (options: Option[]) => {
    setText((prev) => {
      const optionsString = options.join('\n');
      return [optionsString, prev].join('\n');
    });
  };

  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h6" component="div">
            The Right Choice ™ - Home
          </Typography>
          <Box sx={{ m: 1, mt: 2 }}>
            <Typography variant="body1" component="div">
              Please, write options you want to decide on:
            </Typography>
            <Typography variant="caption" component="div">
              Keep each in a separate line.
            </Typography>
          </Box>
          <Box>
            <TextField
              autoFocus
              multiline
              fullWidth
              minRows={5}
              label="Possible options"
              variant="outlined"
              value={text}
              onChange={handleTextChange}
              helperText={`Press '${
                modifierKey === 'metaKey' ? 'Cmd' : 'Ctrl'
              } + Enter' to start!`}
            />
          </Box>
          <Box>
            <SuggestedOptions onPresetPick={prependOptions} />
          </Box>
        </CardContent>
        <CardActions>
          <Button onClick={handleStartClick} disabled={isButtonDisabled}>
            Help me decide!
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};
