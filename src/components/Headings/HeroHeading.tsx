import React, { ReactElement, ReactNode } from 'react';
import Typography from '@mui/material/Typography';

type Props = {
  readonly children: ReactNode;
};

export function HeroHeading({ children }: Props): ReactElement {
  return <Typography variant="h2">{children}</Typography>;
}
