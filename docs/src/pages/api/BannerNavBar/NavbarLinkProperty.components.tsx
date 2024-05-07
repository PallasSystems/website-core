import { FC, useEffect } from 'react';
import Prism from 'prismjs';

import { BannerNavBar, Footer } from '@pallassystems/website-core';
import { RBTable } from '@pallassystems/react-bootstrap-table';

// Getting Started Page Properties
import { ApiTableColumns, ApiPageProperties, ApiTableEntry } from '../api.types';
import { Container, Row } from 'react-bootstrap';
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
    <>
      <BannerNavBar {...navBarProps} />
      <main className={'flex-grow-1'} role={'main'}>
        <Container id='intro' className={'my-2'}>
          <Row>
            <h1>NavbarLinkProperty Options</h1>
          </Row>
          <Row>
            <p>Below we have provided the options you can supply to the BannerNavBar object.</p>
          </Row>
          <Row>
            <RBTable columns={ApiTableColumns} data={NavbarLinkPropertyData} enablePagination={false} />
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
      </main>
      <Footer {...footerProps} />
    </>
  );
};

export { ApiNavbarLinkPropertyPage };
