import PropTypes from 'prop-types';
import React from 'react';

import { StyledHeader, StyledLink, StyledH1, StyledSubHeaderDiv } from './styled';

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <StyledSubHeaderDiv>
      <StyledH1>
        <StyledLink to="/">
          {siteTitle}
        </StyledLink>
      </StyledH1>
    </StyledSubHeaderDiv>
  </StyledHeader>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
