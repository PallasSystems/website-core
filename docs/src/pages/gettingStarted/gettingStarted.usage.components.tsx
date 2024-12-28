import React, { FC, useEffect } from 'react';
import Prism from 'prismjs';

import { PallasPageWrapper } from '@pallassystems/website-core';

// Getting Started Page Properties
import { GettingStartedPageProperties } from './gettingStarted.types';
import { Container, Row } from 'react-bootstrap';

// Project dependencies
import projectProps from '../../../../package.json';
// For code highlighting
import 'prismjs/themes/prism.min.css';

const GetImportStatement = (): string => {
  return "import { BannerNavBar, Footer } from '@pallassystems/website-core';";
};

const GettingStartedUsageComponent: FC = () => {
  useEffect(() => {
    Prism.highlightAll();
  });

  return (
    <Container>
      <Row>
        <h1>Usage</h1>
      </Row>
      <Row>
        <p>
          Here is a brief overview of how to use WebSite Components. This is a very simple example, which should cover
          the common uses of the library.
        </p>
      </Row>
      <Row>
        <h4>Import Component</h4>
      </Row>
      <Row>
        <p>Once you have everything installed, you can import from {projectProps.name} like this:</p>
        <pre className={'language-javascript'}>
          <code>{GetImportStatement()}</code>
        </pre>
      </Row>
    </Container>
  );
};

const GettingStartedUsagePage: FC<GettingStartedPageProperties> = ({ footerProps, navBarProps }) => {
  return (
    <PallasPageWrapper authenticated={true} footerProps={footerProps} navBarProps={navBarProps}>
      <Container id='intro' className={'content'}>
        <GettingStartedUsageComponent />
      </Container>
    </PallasPageWrapper>
  );
};

export { GettingStartedUsageComponent, GettingStartedUsagePage };
