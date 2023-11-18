import { FC } from 'react';

import { BannerNavBar, Footer } from '@pallassystems/website-core';

// Getting Started Page Properties
import { ApiPageProperties } from './api.types';
import { Container, Row } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { ApiNavbarPropertyPage } from '.';

const ApiBannerNavBarLinks = [
  { link: '/api/navbarproperty', text: 'Navbar Property', component: <ApiNavbarPropertyPage /> },
];

const ApiPage: FC<ApiPageProperties> = ({ footerProps, navBarProps }) => {
  return (
    <main role={'main'} className={'flex-shrink-0'}>
      <BannerNavBar {...navBarProps} />
      <Container id='intro' className={'content my-5'}>
        <Row className={'my-2'}>
          <h1>API Reference</h1>
        </Row>
        <Row className={'my-2'}>
          <h2>BannerNavBar Properties</h2>
        </Row>
        <Row className={'mx-3'}>
          <ul>
            <li>
              <LinkContainer to='/api/navbarproperty'>
                <a> Navbar Property </a>
              </LinkContainer>
            </li>
            <li>
              <LinkContainer to='/api/navbarbrand'>
                <a> Navbar Brand </a>
              </LinkContainer>
            </li>
            <li>
              <LinkContainer to='/api/navbarlinkproperty'>
                <a>NavbarLinkProperty</a>
              </LinkContainer>
            </li>
          </ul>
        </Row>
      </Container>
      <Footer {...footerProps} />
    </main>
  );
};

export { ApiPage };
