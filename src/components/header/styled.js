import styled from 'styled-components';
import { Link } from 'gatsby';

export const StyledHeader = styled.header`
  background: rebeccapurple;
  margin-bottom: 1.45em;
`;

export const StyledSubHeaderDiv = styled.header`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45em 1.0875em;   
`;

export const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
`;

export const StyledH1 = styled.h1`
  margin: 0;
`;
