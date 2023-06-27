import React from 'react';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { getDuplicatesIndexes } from '@/lib/core/getDuplicatesIndexes';
import { ModifierKey, useKey } from '@/hooks/useKey';
import {
  OperatingSystem,
  useOperatingSystem,
} from '@/hooks/useOperatingSystem';

type Props = {
  readonly options: string[];
  readonly onDuplicateDelete: () => void;
};

export function DuplicatesFoundAlert({
  options,
  onDuplicateDelete,
}: Props): React.ReactElement | null {
  const operatingSystem = useOperatingSystem();
  const modifierKey: ModifierKey =
    operatingSystem === OperatingSystem.macOS ? 'metaKey' : 'altKey';

  useKey('R', onDuplicateDelete, [modifierKey]);

  const duplicatesIndexes = getDuplicatesIndexes(options);

  const hasDuplicates = duplicatesIndexes.length > 0;
  if (!hasDuplicates) {
    return null;
  }

  const duplicatesFound = duplicatesIndexes.map(([i, ...rest]) => (
    <li key={i}>
      <strong>{options[i]}</strong>
      {rest.map((j) => (
        <React.Fragment key={j}>
          , <s>{options[j]}</s>
        </React.Fragment>
      ))}
    </li>
  ));

  return (
    <Alert
      sx={{
        mt: 1,
      }}
      severity="warning"
      aria-labelledby="alert-title"
      aria-describedby="alert-description"
      action={
        <Button color="inherit" size="small" onClick={onDuplicateDelete}>
          Remove
        </Button>
      }
    >
      <AlertTitle id="alert-dialog-title">
        Duplicates have been found.
      </AlertTitle>
      The following duplicates have been found. Click remove or press " Alt/Cmd
      + R" to delete them.
      <ul>{duplicatesFound}</ul>
    </Alert>
  );
}
