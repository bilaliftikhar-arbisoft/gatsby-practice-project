import React from 'react';
import { NavPrivate, NavPublic } from '.';

import { isLoggedIn } from '../../services/auth';

export { NavPrivate } from './private';
export { NavPublic } from './public';

export const NavBar = () => {
  return (
    <div
      style={{
        display: 'flex',
        flex: '1',
        justifyContent: 'flex-end',
        borderBottom: '1px solid #d1c1e0',
      }}
    >
      <nav>{isLoggedIn() ? <NavPrivate /> : <NavPublic />}</nav>
    </div>
  );
};
