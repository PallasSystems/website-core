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

const NavbarLinkPropertyData: ApiTableEntry[] = [
  {
    field: 'path',
    type: 'String',
    required: 'true',
    description: 'The URL to use for the menu item',
  },
  {
    field: 'text',
    type: 'String',
    required: 'true',
    description: 'The text to use for the menu item',
  },
];

const ApiNavbarLinkPropertyPage: FC<ApiPageProperties> = ({ footerProps, navBarProps }) => {
  useEffect(() => {
    Prism.highlightAll();
  });

  return (
    <main role={'main'} className={'flex-shrink-0'}>
      <BannerNavBar {...navBarProps} />
      <Container id='intro' className={'content my-5'}>
        <Row>
          <h1>NavbarLinkProperty Options</h1>
        </Row>
        <Row>
          <p>Below we have provided the options you can supply to the BannerNavBar object.</p>
        </Row>
        <Row>
          <RBTable columns={ApiColumns} data={NavbarLinkPropertyData} enablePagination={false} />
        </Row>
        <Row>
          <h2>Example</h2>
        </Row>
        <Row>
          <pre className={'language-javascript'}>
            <code>{JSON.stringify(SimpleBannerExamplesData.items, null, 2)}</code>
          </pre>
        </Row>
      </Container>
      <Footer {...footerProps} />
    </main>
  );
};

export { ApiNavbarLinkPropertyPage };
