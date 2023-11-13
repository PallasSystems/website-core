import React, { FC, ReactNode } from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { LinkContainer } from 'react-router-bootstrap';

import { NavbarProperty, NavbarLinkProperty, NavbarBrand } from './BannerNavBar.types';
import { ImageProperty } from '../Common';

const BannerNavBar: FC<NavbarProperty> = ({ brand, items }) => {
  const links = undefined === items || null == items ? [] : items;

  const GenerateBrandLogo = (brand: NavbarBrand): ReactNode => {
    let result: ReactNode = null;

    if (brand) {
      if (typeof brand.imgFn === 'function') {
        result = brand.imgFn(brand.imgProps);
      } else {
        result = brand.imgFn;
      }
    }

    return result;
  };

  return (
    <header>
      <Navbar expand='sm' bg='dark' variant='dark' fixed='top'>
        <Container fluid>
          {brand ? (
            <>
              {brand.imgFn ? (
                <LinkContainer to='/'>
                  <Navbar.Brand id={'BannerNavBar.Brand.Link.Logo'} className='text-light'>
                    {GenerateBrandLogo(brand)}
                  </Navbar.Brand>
                </LinkContainer>
              ) : null}
              <LinkContainer to='/'>
                <Navbar.Brand id={'BannerNavBar.Brand.Link.Logo.text'} className='text-light'>
                  {brand.name}
                </Navbar.Brand>
              </LinkContainer>{' '}
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
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export { BannerNavBar };
