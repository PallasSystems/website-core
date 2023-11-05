import { FC } from 'react';

import { BannerNavBar, Footer } from '@pallassystems/website-core';

// Getting Started Page Properties
import { ExamplesPageProperties } from './examples.types';
import { Container, Row } from 'react-bootstrap';

const ExamplesPage: FC<ExamplesPageProperties> = ({ footerProps, navBarProps }) => {
  return (
    <main role={'main'} className={'flex-shrink-0'}>
      <BannerNavBar {...navBarProps} />
      <Container id='intro' className={'content text-center my-5'}>
        <Row className={'my-2'}>
          <h1>Examples</h1>
        </Row>
      </Container>
      <Footer {...footerProps} />
    </main>
  );
};

export { ExamplesPage };
