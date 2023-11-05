import { FC } from 'react';

import { BannerNavBar, Footer } from '@pallassystems/website-core';

// Getting Started Page Properties
import { GettingStartedPageProperties } from './gettingStarted.types';
import { Container, Row } from 'react-bootstrap';

const GettingStartedPage: FC<GettingStartedPageProperties> = ({ footerProps, navBarProps }) => {
  return (
    <main role={'main'} className={'flex-shrink-0'}>
      <BannerNavBar {...navBarProps} />
      <Container id='intro' className={'content my-3'}>
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

const GettingStartedInstallComponent: FC = () => {
  return (
    <Container>
      <Row>
        <h1>Install</h1>
      </Row>
      <Row>
        <p>
          The best way to use Pallas Systems Core Website Components is via the npm package which you can install with
          npm, pnpm or yarn.
        </p>
        <p>
          If you are already using React Bootstrap, you probably already have most of these peer dependencies installed.
        </p>
      </Row>
      <Row className={'px-3'}>
        <ol>
          <li>bootstrap (v15)</li>
          <li>react (v18)</li>
          <li>react-dom (v18)</li>
          <li>react-router (v6)</li>
        </ol>
      </Row>
      <Row className={'my-3'}>
        <h2>Quick Install</h2>
      </Row>
      <Row className={'my-3'}>
        <h4>NPM</h4>
      </Row>
      <Row>
        <code>npm install @pallassystems/website-core</code>
      </Row>
      <Row className={'my-3'}>
        <h4>PNPM</h4>
      </Row>
      <Row>
        <code>pnpm add @pallassystems/website-core</code>
      </Row>
      <Row className={'my-3'}>
        <h4>Yarn</h4>
      </Row>
      <Row>
        <code>yarn add @pallassystems/website-core</code>{' '}
      </Row>

      <Row className={'my-3'}>
        <h2>Install With Required Peer Dependencies</h2>
      </Row>
      <Row className={'my-3'}>
        <h4>NPM</h4>
      </Row>
      <Row>
        <code>npm install @pallassystems/website-core bootstrap react react-dom react-router react-router</code>
      </Row>
      <Row className={'my-3'}>
        <h4>PNPM</h4>
      </Row>
      <Row>
        <code>pnpm add @pallassystems/website-core bootstrap react react-dom react-router react-router</code>
      </Row>
      <Row className={'my-3'}>
        <h4>Yarn</h4>
      </Row>
      <Row>
        <code>yarn add @pallassystems/website-core bootstrap react react-dom react-router react-router</code>{' '}
      </Row>
    </Container>
  );
};

const GettingStartedInstallPage: FC<GettingStartedPageProperties> = ({ footerProps, navBarProps }) => {
  return (
    <main role={'main'} className={'flex-shrink-0'}>
      <BannerNavBar {...navBarProps} />
      <Container id='intro' className={'content my-5'}>
        <GettingStartedInstallComponent />
      </Container>
      <Footer {...footerProps} />
    </main>
  );
};

const GettingStartedUsageComponent: FC = () => {
  return (
    <Container>
      <Row>
        <h1>Usage</h1>
      </Row>
      <Row>
        <p>
          Here is a brief overview of how to use Material React Table. This is a very simple example, and will not cover
          all features of the library, but it is a great starting point.
        </p>
      </Row>
      <Row>
        <h4>Setup</h4>
      </Row>
      <Row>
        <p>
          Here is a brief overview of how to use Material React Table. This is a very simple example, and will not cover
          all features of the library, but it is a great starting point.
        </p>
      </Row>
      <Row>
        <h4>Import Component</h4>
      </Row>
      <Row>
        <p>
          Here is a brief overview of how to use Material React Table. This is a very simple example, and will not cover
          all features of the library, but it is a great starting point.
        </p>
      </Row>
    </Container>
  );
};

const GettingStartedUsagePage: FC<GettingStartedPageProperties> = ({ footerProps, navBarProps }) => {
  return (
    <main role={'main'} className={'flex-shrink-0'}>
      <BannerNavBar {...navBarProps} />
      <Container id='intro' className={'content my-5'}>
        <GettingStartedInstallComponent />
      </Container>
      <Footer {...footerProps} />
    </main>
  );
};

export { GettingStartedPage, GettingStartedInstallPage, GettingStartedUsagePage };
