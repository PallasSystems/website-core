import { FC } from 'react';

import { BannerNavBar, Footer } from '@pallassystems/website-core';

// Getting Started Page Properties
import { ApiPageProperties } from './api.types';
import { Container, Row } from 'react-bootstrap';

const ApiPage: FC<ApiPageProperties> = ({ footerProps, navBarProps }) => {
  return (
    <main role={'main'} className={'flex-shrink-0'}>
      <BannerNavBar {...navBarProps} />
      <Container id='intro' className={'content my-5'}>
        <Row className={'my-2'}>
          <h1>API Reference</h1>
        </Row>
      </Container>
      <Footer {...footerProps} />
    </main>
  );
};

export { ApiPage };
