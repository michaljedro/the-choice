import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import { amber, blueGrey, brown, grey } from '@mui/material/colors';
import { Choice, Option } from '@/types';

type Props = {
  readonly options: Option[];
  readonly choices: Choice[];
};

type PickedOption = {
  readonly option: Option;
  readonly betterThan: number;
};

const getAvatarColor = (place: number): string => {
  const colors: Record<number, string> = {
    1: amber[400],
    2: blueGrey[100],
    3: brown[200],
  };
  return colors[place] ?? grey[100];
};

export function SummaryRanking({
  options,
  choices,
}: Props): React.ReactElement {
  const pickedOptions: PickedOption[] = React.useMemo(() => {
    const unsorted = options.map((option) => {
      const pickedAsA: Choice[] = choices.filter(
        (choice) => choice.optionA === option && choice.picked === 'A',
      );
      const pickedAsB: Choice[] = choices.filter(
        (choice) => choice.optionB === option && choice.picked === 'B',
      );
      const betterThan = pickedAsA.length + pickedAsB.length;
      return {
        option,
        betterThan,
      };
    });
    return unsorted.sort((a, b) => b.betterThan - a.betterThan);
  }, [options, choices]);

  return (
    <List dense>
      {pickedOptions.map(({ option, betterThan }, idx) => (
        <ListItem key={option}>
          <ListItemAvatar>
            <Avatar sx={{ bgcolor: getAvatarColor(idx + 1), color: grey[800] }}>
              {idx + 1}
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={option}
            secondary={`Better than ${betterThan} other.`}
          />
        </ListItem>
      ))}
    </List>
  );
}
