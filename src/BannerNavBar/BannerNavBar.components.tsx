import React, { FC } from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router';

import { NavbarProperty, NavbarLinkProperty, NavbarMenuProperty } from './BannerNavBar.types';
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
                <Link to='/'>
                  <Navbar.Brand id={'BannerNavBar.Brand.Link.Logo'} className='text-light'>
                    {GenerateBrandLogo(brand)} {brand.name}
                  </Navbar.Brand>
                </Link>
              ) : (
                <Link to='/'>
                  <Navbar.Brand id={'BannerNavBar.Brand.Link.Logo.text'} className='text-light'>
                    {brand.name}
                  </Navbar.Brand>
                </Link>
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
                  <BannerNavBarTopLevelMenu
                    key={'BannerNavBar.Link.Text.' + link.text}
                    css={'navbar_collapse_menu'}
                    {...link}
                  />
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
                return (
                  <BannerNavBarTopLevelMenu
                    key={'SuffixNavBar.Link.Text.' + link.text}
                    css={'navbar_suffix_menu'}
                    {...link}
                  />
                );
              })}
            </ul>
          </Container>
        </Navbar>
      )}
    </header>
  );
};

const BannerNavBarTopLevelMenu: FC<NavbarMenuProperty> = ({ css, text, path, items }) => {
  return (
    <li className={items && items.length > 0 ? 'nav-item dropdown' : 'nav-item'}>
      {items && items.length > 0 ? (
        <>
          <Link key={'BannerNavBar.Link.' + text} to={path ? path : ''}>
            <a
              id={css + '.NavBar.Link.Text.' + text}
              className={css + ' nav-link'}
              role='button'
              data-bs-toggle='dropdown'
              aria-expanded='false'
            >
              {text}
              <CaretDownFill />
            </a>
          </Link>
          <ul className='dropdown-menu submenu' aria-labelledby={css + '.NavBar.Link.Text.' + text}>
            {items.map((item: NavbarLinkProperty) => {
              return <BannerNavBarSubLevelMenu key={css + '.NavBar.Link.Text.' + text} {...item} />;
            })}
          </ul>
        </>
      ) : (
        <Link key={'BannerNavBar.Link.' + text} to={path ? path : ''}>
          <a id={css + '.NavBar.Link.Text.' + text} className={css + ' nav-link'} role='button' aria-expanded='false'>
            {text}
          </a>
        </Link>
      )}
    </li>
  );
};

const BannerNavBarSubLevelMenu: FC<NavbarLinkProperty> = ({ text, path, items }) => {
  return (
    <>
      {items && items.length > 0 ? (
        <li
          className={items && items.length > 0 ? 'nav-item dropdown-submenu' : 'nav-item'}
          key={'BannerNavBar.Link.' + text}
        >
          <Link to={path ? path : ''}>
            <a
              id={'NavBar.Link.Text.Sub.' + text}
              className={'dropdown-item'}
              role='button'
              data-bs-toggle='dropdown'
              aria-expanded='false'
            >
              {text}
            </a>
          </Link>
          <ul className='dropdown-menu submenu' aria-labelledby={'NavBar.Link.Text.' + text}>
            {items.map((item: NavbarLinkProperty) => {
              return (
                <li
                  className={'nav-item'}
                  key={'BannerNavBar.Link.' + item.text}
                >
                  <Link to={item.path ? item.path : ''}>
                    <a
                      id={'NavBar.Link.Text.Sub.' + item.text}
                      className={'dropdown-item'}
                      role='button'
                      aria-expanded='false'
                    >
                      {item.text}
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </li>
      ) : (
        <Link key={'BannerNavBar.Link.' + text} to={path ? path : ''}>
          <a id={'SuffixNavBar.Link.Text.' + text} className={'dropdown-item'} role='button' aria-expanded='false'>
            {text}
          </a>
        </Link>
      )}
    </>
  );
};

export { BannerNavBar };
