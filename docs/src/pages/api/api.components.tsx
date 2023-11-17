import { FC } from 'react';

import { BannerNavBar, Footer } from '@pallassystems/website-core';

// Getting Started Page Properties
import { ApiPageProperties } from './api.types';
import { Container, Row } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const ApiPage: FC<ApiPageProperties> = ({ footerProps, navBarProps }) => {
  return (
    <main role={'main'} className={'flex-shrink-0'}>
      <BannerNavBar {...navBarProps} />
      <Container id='intro' className={'content my-5'}>
        <Row className={'my-2'}>
          <h1>API Reference</h1>
        </Row>
        <Row className={'my-2'}>
          <h2>Properties</h2>
        </Row>
        <Row className={'mx-3'}>
          <ul>
            <li>
              <LinkContainer to='/api/navbarbanner'>
                <a> Navbar Banner </a>
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
