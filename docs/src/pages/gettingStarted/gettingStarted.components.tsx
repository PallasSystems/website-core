import { FC } from 'react';

import { BannerNavBar, Footer } from '@pallassystems/website-core';

// Getting Started Page Properties
import { GettingStartedPageProperties } from './gettingStarted.types';
import { Container, Row } from 'react-bootstrap';

import { GettingStartedInstallComponent } from './gettingStarted.install.components';
import { GettingStartedUsageComponent } from './gettingStarted.usage.components';

const GettingStartedPage: FC<GettingStartedPageProperties> = ({ footerProps, navBarProps }) => {
  return (
    <main role={'main'} className={'flex-shrink-0'}>
      <BannerNavBar {...navBarProps} />
      <Container id='intro' className={'content'}>
        <Row className={'my-2'}>
          <GettingStartedInstallComponent />
        </Row>
        <Row className={'my-2'}>
          <GettingStartedUsageComponent />
        </Row>
      </Container>
      <Footer {...footerProps} />
    </main>
  );
};

export { GettingStartedPage };
