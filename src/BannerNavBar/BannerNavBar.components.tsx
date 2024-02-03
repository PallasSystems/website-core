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
              {scm ? (
                <Nav.Link key={'BannerNavBar.Link.scm'} id={'BannerNavBar.Link.scm'}>
                  <SCMIcon {...scm} />
                </Nav.Link>
              ) : null}
              {links.map((link: NavbarLinkProperty) => {
                return (
                  <LinkContainer key={'BannerNavBar.Link.' + link.text} to={link.path}>
                    <Nav.Link
                      key={'BannerNavBar.Link.Text.' + link.text}
                      id={'BannerNavBar.Link.Text.' + link.text}
                      className={typeof suffixRow === 'function' ? '' : 'navbar_collapse_menu'}
                    >
                      {link.text}
                    </Nav.Link>
                  </LinkContainer>
                );
              })}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {typeof suffixRow === 'function' ? (
        suffixRow()
      ) : (
        <Navbar expand='sm' bg='dark' variant='dark' className={'navbar_suffix_menu'}>
          <Container fluid className={'border-top'}>
            <Nav className='d-flex'>
              {links.map((link: NavbarLinkProperty) => {
                return (
                  <LinkContainer key={'SuffixNavBar.Link.' + link.text} to={link.path}>
                    <Nav.Link key={'SuffixNavBar.Link.Text.' + link.text} id={'SuffixNavBar.Link.Text.' + link.text}>
                      {link.text}
                    </Nav.Link>
                  </LinkContainer>
                );
              })}
            </Nav>
          </Container>
        </Navbar>
      )}
    </header>
  );
};

export { BannerNavBar };
