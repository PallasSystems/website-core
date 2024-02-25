import { FC } from 'react';

import { BannerNavBar, Footer } from '@pallassystems/website-core';

// Getting Started Page Properties
import { GettingStartedPageProperties } from './gettingStarted.types';
import { Container, Row } from 'react-bootstrap';

import { GettingStartedInstallComponent } from './gettingStarted.install.components';
import { GettingStartedUsageComponent } from './gettingStarted.usage.components';

const GettingStartedPage: FC<GettingStartedPageProperties> = ({ footerProps, navBarProps }) => {
  return (
    <>
    <BannerNavBar {...navBarProps} />
    <main className={'flex-grow-1'} role={'main'}>
      <Container id='intro'>
        <Row className={'my-2'}>
          <GettingStartedInstallComponent />
        </Row>
        <Row className={'my-2'}>
          <GettingStartedUsageComponent />
        </Row>
      </Container>
      </main>
      <Footer {...footerProps} />
    </>
  );
};

export { GettingStartedPage };
