import * as React from 'react';

import appIcon from './app-icon.svg';

export function AppIcon(): React.ReactElement {
  return (
    <img
      src={appIcon}
      style={{ verticalAlign: 'middle' }}
      alt="The Right Choice logo"
    />
  );
}
