import React from 'react';
import { SvgIconProps } from '@mui/material/SvgIcon/SvgIcon';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';

import { SupportedIcon } from './types';

type Props = {
  readonly icon: SupportedIcon;
} & SvgIconProps;

export function BenefitIcon({ icon, ...props }: Props): React.ReactElement {
  switch (icon) {
    case 'currency-exchange':
      return <CurrencyExchangeIcon {...props} />;
    case 'done-all':
      return <DoneAllIcon {...props} />;
    case 'psychology-alt':
      return <PsychologyAltIcon {...props} />;
    default:
      return unreachable(icon);
  }
}
