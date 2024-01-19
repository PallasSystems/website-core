import React, { FC } from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';

import { NavbarProperty, NavbarLinkProperty } from './BannerNavBar.types';
import { GenerateBrandLogo, GenerateHeaderClassName } from './BannerNavBar.utils';
import { SCMIcon } from '../SCMIcon';

const BannerNavBar: FC<NavbarProperty> = ({
  brand,
  items,
  scm,
  sticky,
  fixed,
  headerClassName,
  prefixRow,
  suffixRow,
}) => {
  const links = undefined === items || null == items ? [] : items;
  if (scm?.className) {
    scm.className += ' active nav-link';
  } else if (scm) {
    scm.className = 'nav-link';
  }

  return (
    <header className={GenerateHeaderClassName(headerClassName, fixed, sticky)}>
      {typeof prefixRow === 'function' ? prefixRow() : null}
      <Navbar expand='sm' bg='dark' variant='dark'>
        <Container fluid>
          {brand ? (
            <>
              {brand.imgFn ? (
                <LinkContainer to='/'>
                  <Navbar.Brand id={'BannerNavBar.Brand.Link.Logo'} className='text-light'>
                    {GenerateBrandLogo(brand)} {brand.name}
                  </Navbar.Brand>
                </LinkContainer>
              ) : (
                <LinkContainer to='/'>
                  <Navbar.Brand id={'BannerNavBar.Brand.Link.Logo.text'} className='text-light'>
                    {brand.name}
                  </Navbar.Brand>
                </LinkContainer>
              )}
            </>
          ) : null}
          <Navbar.Toggle id='responsive-navbar-btn' aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav' className='justify-content-end'>
            <Nav className='d-flex'>
              {links.map((link: NavbarLinkProperty, index: number) => {
                return (
                  <LinkContainer key={'BannerNavBar.Link.' + index} to={link.path}>
                    <Nav.Link key={'BannerNavBar.Link.Text.' + index} id={'BannerNavBar.Link.Text.' + index}>
                      {link.text}
                    </Nav.Link>
                  </LinkContainer>
                );
              })}
              {scm ? <SCMIcon {...scm} /> : null}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {typeof suffixRow === 'function' ? suffixRow() : null}
    </header>
  );
};

export { BannerNavBar };
