import React, { FC } from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';

import { NavbarProperty, NavbarLinkProperty } from './BannerNavBar.types';
import { GenerateBrandLogo, GenerateHeaderClassName } from './BannerNavBar.utils';
import { GenerateGitBrowseURL, SCMIcon } from '../SCMIcon';
import { CaretDownFill } from 'react-bootstrap-icons';

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
                <Nav.Link
                  key={'BannerNavBar.Link.scm'}
                  id={'BannerNavBar.Link.scm'}
                  href={GenerateGitBrowseURL(scm.repository, scm.project, scm.endpoint)}
                >
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
        <Navbar id='projectBar' expand='sm' bg='dark' variant='dark' className={'navbar_suffix_menu border-top'}>
          <Container fluid>
            <ul id='projectBar.navbar.list' className='navbar-nav navbar_suffix_menu'>
              {links.map((link: NavbarLinkProperty) => {
                return <BannerNavBarMenuItems key={'SuffixNavBar.Link.Text.' + link.text} {...link} />;
              })}
            </ul>
          </Container>
        </Navbar>
      )}
    </header>
  );
};

const BannerNavBarMenuItems: FC<NavbarLinkProperty> = ({ text, path, items }) => {
  return (
    <Nav.Item className={items && items.length > 0 ? 'dropdown' : ''}>
      {items && items.length > 0 ? (
        <>
          <Nav.Link id={'SuffixNavBar.Link.Text.' + text} role='button' data-bs-toggle='dropdown' aria-expanded='false'>
            {text}
            <CaretDownFill />
          </Nav.Link>
          <ul className='dropdown-menu' aria-labelledby={'SuffixNavBar.Link.Text.' + text}>
            {items.map((item: NavbarLinkProperty) => {
              return <BannerNavBarSubMenuItem {...item} />;
            })}
          </ul>
        </>
      ) : (
        <BannerNavBarMenuItem text={text} path={path} />
      )}
    </Nav.Item>
  );
};

const BannerNavBarSubMenuItem: FC<NavbarLinkProperty> = ({ text, path, items }) => {
  return (
    <li className={items && items.length > 0 ? 'nav-item dropdown-item dropdown-submenu' : 'dropdown-item'}>
      {items && items.length > 0 ? (
        <>
          <a id={'SuffixNavBar.Link.Text.' + text} className={'nav-link dropdown-item'} title={text}>
            {text}
          </a>
          <ul className='dropdown-menu submenu'>
            {items.map((item: NavbarLinkProperty) => {
              return (
                <li className='nav-item dropdown-item'>
                  <LinkContainer key={'SuffixNavBar.Link.' + item.text} to={item.path ? item.path : '/unspecified'}>
                    <a
                      id={'SuffixNavBar.Dropdown.Link.Text.' + item.text}
                      className={'dropdown-item'}
                      href={item.path}
                      title={item.text}
                    >
                      {item.text}
                    </a>
                  </LinkContainer>
                </li>
              );
            })}
          </ul>
        </>
      ) : (
        <BannerNavBarMenuItem text={text} path={path} />
      )}
    </li>
  );
};

const BannerNavBarMenuItem: FC<NavbarLinkProperty> = ({ text, path }) => {
  return (
    <LinkContainer key={'SuffixNavBar.Link.' + text} to={path ? path : '/unspecified'}>
      <Nav.Link id={'SuffixNavBar.Link.Text.' + text}>{text}</Nav.Link>
    </LinkContainer>
  );
};

export { BannerNavBar };
