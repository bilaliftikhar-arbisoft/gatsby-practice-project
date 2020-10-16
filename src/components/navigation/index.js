import React from 'react';
import { NavPrivate, NavPublic } from '.';

import { isLoggedIn } from '../../services/auth';

import { StyledNavContainer } from './styled';
export { NavPrivate } from './private';
export { NavPublic } from './public';

export const NavBar = () => {
  return (
    <StyledNavContainer>
      <nav>{isLoggedIn() ? <NavPrivate /> : <NavPublic />}</nav>
    </StyledNavContainer>
  );
};
