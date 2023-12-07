import React, { FC, ReactNode } from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { LinkContainer } from 'react-router-bootstrap';

import { NavbarProperty, NavbarLinkProperty, NavbarBrand } from './BannerNavBar.types';
import { Col, Row } from 'react-bootstrap';

const BannerNavBar: FC<NavbarProperty> = ({ brand, items, sticky, fixed, headerClassName, prefixRow, suffixRow }) => {
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

  /**
   * This will combine css classes supplied and the sticky marker into a Class name string for the header element.
   * @param headerClassName any CSS Class names to be assigned to the header element
   * @param sticky
   * @returns
   */
  const generateHeaderClassName = (headerClassName?: string, fixed?: string, sticky?: string): string => {
    let result = '';
    if (sticky && sticky.length > 0) {
      result = 'sticky-' + sticky;

      if (headerClassName && headerClassName.length > 0) {
        result += ' ' + headerClassName;
      }
    } else if (fixed && fixed.length > 0) {
      result = 'fixed-' + fixed;

      if (headerClassName && headerClassName.length > 0) {
        result += ' ' + headerClassName;
      }
    } else if (headerClassName && headerClassName.length > 0) {
      result = headerClassName;
    }

    return result;
  };

  return (
    <header className={generateHeaderClassName(sticky)}>
      {typeof prefixRow === 'function' ? prefixRow() : null}
      <Navbar expand='sm' bg='dark' variant='dark' fixed={fixed}>
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
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {typeof suffixRow === 'function' ? suffixRow() : null}
    </header>
  );
};

export { BannerNavBar };
