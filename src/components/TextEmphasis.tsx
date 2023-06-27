import Box from '@mui/material/Box';
import React from 'react';

type Props = {
  readonly children: string;
};

export function TextEmphasis({ children }: Props): React.ReactElement {
  return (
    <Box
      component="span"
      sx={{
        color: 'primary.main',
      }}
    >
      {children}
    </Box>
  );
}
