import { FC, useEffect } from 'react';
import Prism from 'prismjs';

import { BannerNavBar, Footer } from '@pallassystems/website-core';

// Getting Started Page Properties
import { GettingStartedPageProperties } from './gettingStarted.types';
import { Container, Row, Tabs, Tab } from 'react-bootstrap';

// Package properties
import projectProps from '../../../../package.json';
import 'prismjs/themes/prism.min.css';

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
  const dependencies = Object.keys(projectProps.peerDependencies);
  let depString = '';
  dependencies.forEach((value) => {
    depString += ' ' + value;
  });

  useEffect(() => {
    Prism.highlightAll();
  });

  return (
    <Container>
      <Row>
        <h1>Install</h1>
      </Row>
      <Row>
        <p>
          The best way to use Pallas Systems Core Website Components is via the npm package which you can install with
          bun, npm, pnpm or yarn. If you are already using React Bootstrap, you probably already have most of these peer
          dependencies installed.
        </p>
      </Row>
      <Row className={'px-3'}>
        <ul>
          {dependencies.map(function (value) {
            return <li>{value}</li>;
          })}
        </ul>
      </Row>
      <Row>
        <h1>Quick Install</h1>
      </Row>
      <Row>
        <Tabs defaultActiveKey='npm' id='quick-install-commands' className='mb-3'>
          <Tab eventKey='bun' title='Bun'>
            <pre className={'language-bash'}>
              <code>
                bun add {projectProps.name} {depString.trim()}
              </code>
            </pre>
          </Tab>
          <Tab eventKey='npm' title='NPM'>
            <pre className={'language-bash'}>
              <code>
                npm install --save {projectProps.name} {depString.trim()}
              </code>
            </pre>
          </Tab>
          <Tab eventKey='pnpm' title='PNPM'>
            <pre className={'language-bash'}>
              <code>
                pnpm add {projectProps.name} {depString.trim()}
              </code>
            </pre>
          </Tab>
          <Tab eventKey='yarn' title='Yarn'>
            <pre className={'language-bash'}>
              <code>
                yarn add {projectProps.name} {depString.trim()}
              </code>
            </pre>
          </Tab>
        </Tabs>
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
