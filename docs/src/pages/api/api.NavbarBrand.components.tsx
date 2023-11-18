import { FC, useEffect } from 'react';
import Prism from 'prismjs';

import { BannerNavBar, Footer } from '@pallassystems/website-core';
import { RBTable } from '@pallassystems/react-bootstrap-table';

// Getting Started Page Properties
import { ApiColumns, ApiPageProperties, ApiTableEntry } from './api.types';
import { Container, Row } from 'react-bootstrap';
import { SimpleBannerExamplesData } from '../examples';
// For code highlighting
import 'prismjs/themes/prism.min.css';

const NavbarBrandData: ApiTableEntry[] = [
  {
    field: 'name',
    type: 'String',
    required: 'true',
    description: 'The brand name for the website',
  },
  {
    field: 'imgFn',
    type: '(props?: ImageProperty) => ReactNode',
    required: 'false',
    description: 'Ability to return a React element to embed in the image location of the Brand.',
  },
  {
    field: 'imgProps',
    type: 'ImageProperty',
    required: 'false',
    description: 'Information to be supplied into the imgFn',
  },
];

const ApiNavbarBrandPage: FC<ApiPageProperties> = ({ footerProps, navBarProps }) => {
  useEffect(() => {
    Prism.highlightAll();
  });

  return (
    <main role={'main'} className={'flex-shrink-0'}>
      <BannerNavBar {...navBarProps} />
      <Container id='intro' className={'content my-5'}>
        <Row>
          <h1>NavbarBrand Options</h1>
        </Row>
        <Row>
          <p>Below we have provided the options you can supply to the BannerNavBar object.</p>
        </Row>
        <Row>
          <RBTable columns={ApiColumns} data={NavbarBrandData} enablePagination={false} />
        </Row>
        <Row>
          <h2>Example</h2>
        </Row>
        <Row>
          <pre className={'language-javascript'}>
            <code>{JSON.stringify(SimpleBannerExamplesData.brand, null, 2)}</code>
          </pre>
        </Row>
      </Container>
      <Footer {...footerProps} />
    </main>
  );
};

export { ApiNavbarBrandPage };
