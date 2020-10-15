import React, { Fragment } from 'react';

import { routes } from './routes';
import { StyledLink } from './styled';

const basePath = '/app';

export const NavPrivate = () =>
  <Fragment>
    {routes.map(route => route.enabled &&
      <StyledLink to={basePath + route.path}>{route.name}
      </StyledLink>)}
  </Fragment>;
