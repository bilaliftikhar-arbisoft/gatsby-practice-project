/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { useSelector } from 'react-redux';

import Header from '../header';
import { NavBar } from '../navigation';
import { selectHeader } from '../../selectors/header';
import { StyledBody, StyledFooter } from './styled';
import './layout.css';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  const { title } = useSelector(selectHeader);
  return (
    <>
      <Header siteTitle={title || data.site.siteMetadata.title || 'Title'} />
      <StyledBody>
        <NavBar />
        <main>{children}</main>
        <StyledFooter></StyledFooter>
      </StyledBody>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
