import { FC, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import Prism from 'prismjs';

import { BannerNavBar, Footer } from '@pallassystems/website-core';

// Getting Started Page Properties
import { ExamplesPageProperties } from '../examples.types';
import { GetSimpleBannerExample, SimpleBannerExamplesData } from './simple.data';

// For code highlighting
import 'prismjs/themes/prism.min.css';

const SimpleBannerExamplesPage: FC<ExamplesPageProperties> = ({ footerProps, navBarProps }) => {
  return (
    <>
    <BannerNavBar {...navBarProps} />
    <main className={'flex-grow-1'} role={'main'}>
      <Container id='intro' className={'my-2'}>
        <SimpleBannerExamplesComponent />
      </Container>
      </main>
      <Footer {...footerProps} />
    </>
  );
};

const SimpleBannerExamplesComponent: FC = () => {
  useEffect(() => {
    Prism.highlightAll();
  });

  return (
    <Container>
      <Row>
        <h4>Create a simple banner</h4>
      </Row>
      <Row>
        <p>By default this will include a simple:</p>
        <pre className={'language-javascript'}>
          <code>{GetSimpleBannerExample()}</code>
        </pre>
      </Row>
      <Row>
        <h5>Demonstration</h5>
      </Row>
      <Row>
        <BannerNavBar {...SimpleBannerExamplesData} />
      </Row>
    </Container>
  );
};

export { SimpleBannerExamplesPage, SimpleBannerExamplesComponent };
