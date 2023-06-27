import React from 'react';

export enum OperatingSystem {
  Unknown,
  Android,
  iOS,
  Linux,
  macOS,
  Windows,
}

export function useOperatingSystem() {
  const userAgent = window.navigator.userAgent;
  const platform = window.navigator.platform;
  const macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'];
  const windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'];
  const iosPlatforms = ['iPhone', 'iPad', 'iPod'];

  return React.useMemo(() => {
    if (macosPlatforms.indexOf(platform) !== -1) {
      return OperatingSystem.macOS;
    } else if (iosPlatforms.indexOf(platform) !== -1) {
      return OperatingSystem.iOS;
    } else if (windowsPlatforms.indexOf(platform) !== -1) {
      return OperatingSystem.Windows;
    } else if (/Android/.test(userAgent)) {
      return OperatingSystem.Android;
    } else if (/Linux/.test(platform)) {
      return OperatingSystem.Linux;
    }

    return OperatingSystem.Unknown;
  }, []);
}
