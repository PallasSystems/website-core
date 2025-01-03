import React, { FC, useEffect } from 'react';
import Prism from 'prismjs';

import { PallasPageWrapper } from '@pallassystems/website-core';
import { RBTable } from '@pallassystems/react-bootstrap-table';

// Getting Started Page Properties
import { ApiTableColumns, ApiPageProperties, ApiTableEntry } from '../api.types';
import { Container, Row } from 'react-bootstrap';
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
    <PallasPageWrapper authenticated={true} footerProps={footerProps} navBarProps={navBarProps}>
      <Container id='intro' className={'my-2'}>
        <Row>
          <h1>NavbarBrand Options</h1>
        </Row>
        <Row>
          <p>Below we have provided the options you can supply to the BannerNavBar object.</p>
        </Row>
        <Row>
          <RBTable columns={ApiTableColumns} data={NavbarBrandData} />
        </Row>
        <Row>
          <h2>Example</h2>
        </Row>
        <Row>
          <pre className={'language-javascript'}>
            <code></code>
          </pre>
        </Row>
      </Container>
    </PallasPageWrapper>
  );
};

export { ApiNavbarBrandPage };
