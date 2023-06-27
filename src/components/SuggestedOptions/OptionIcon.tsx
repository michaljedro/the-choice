import React from 'react';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import DownhillSkiingIcon from '@mui/icons-material/DownhillSkiing';
import TranslateIcon from '@mui/icons-material/Translate';
import { SupportedIcon } from './types';

type Props = {
  readonly icon: SupportedIcon;
};

export function OptionIcon({ icon }: Props): React.ReactElement {
  switch (icon) {
    case 'Translate':
      return <TranslateIcon />;
    case 'BeachAccess':
      return <BeachAccessIcon />;
    case 'DownhillSkiing':
      return <DownhillSkiingIcon />;
    default:
      return unreachable(icon);
  }
}
