import React from 'react';
import { MainNav } from './components/MainNav/MainNav';
import { MainFooter } from './components/MainFooter/MainFooter';

type Props = {
  readonly children: React.ReactElement;
};
export function DefaultLayout({ children }: Props): React.ReactElement {
  return (
    <>
      <MainNav />
      <main>{children}</main>
      <MainFooter />
    </>
  );
}
