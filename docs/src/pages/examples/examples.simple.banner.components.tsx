import { FC, useEffect } from 'react';
import Prism from 'prismjs';

import { BannerNavBar, Footer } from '@pallassystems/website-core';

// Getting Started Page Properties
import { ExamplesPageProperties } from './examples.types';
import { Container, Row } from 'react-bootstrap';
// For code highlighting
import 'prismjs/themes/prism.min.css';

const SimpleBannerExamplesPage: FC<ExamplesPageProperties> = ({ footerProps, navBarProps }) => {
  return (
    <main role={'main'} className={'flex-shrink-0'}>
      <BannerNavBar {...navBarProps} />
      <Container id='intro' className={'content my-5'}>
        <SimpleBannerExamplesComponent />
      </Container>
      <Footer {...footerProps} />
    </main>
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

const SimpleBannerExamplesData: BannerNavBar = {
  brand: {
    name: 'example project',
  },
  items: [{ text: 'menu1', path: '/path' }],
};

const GetSimpleBannerExample = (): string => {
  return (
    'const GettingStartedUsagePage: FC = () => {\n' +
    '\treturn (\n' +
    "\t\t<main role={'main'} className={'flex-shrink-0'}>\n" +
    '\t\t\t<BannerNavBar />\n' +
    '\t\t</main>\n' +
    '\t);\n' +
    '};'
  );
};

export { SimpleBannerExamplesPage, SimpleBannerExamplesComponent, SimpleBannerExamplesData };
