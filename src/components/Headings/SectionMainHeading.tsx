import React, { ReactElement, ReactNode } from 'react';
import Typography from '@mui/material/Typography';

type Props = {
  readonly children: ReactNode;
  readonly textAlign?:
    | 'left'
    | 'right'
    | 'center'
    | 'justify'
    | 'initial'
    | 'inherit';
};

export function SectionMainHeading({
  children,
  textAlign,
}: Props): ReactElement {
  return (
    <Typography component="h3" variant="h4" sx={{ textAlign }}>
      {children}
    </Typography>
  );
}
