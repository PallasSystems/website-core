import { FC, useEffect } from 'react';
import Prism from 'prismjs';

import { BannerNavBar, Footer } from '@pallassystems/website-core';
import { RBTable } from '@pallassystems/react-bootstrap-table';

// Getting Started Page Properties
import { ApiTableColumns, ApiPageProperties, ApiTableEntry } from '../api.types';
import { Container, Row } from 'react-bootstrap';
import { SimpleBannerExamplesData } from '../../examples';
// For code highlighting
import 'prismjs/themes/prism.min.css';

const NavbarPropertyData: ApiTableEntry[] = [
  {
    field: 'brand',
    type: 'NavbarBrand',
    required: 'false',
    description: 'Information for the Branding on the navigation bar.',
  },
  {
    field: 'items',
    type: 'NavbarLinkProperty[]',
    required: 'false',
    description: 'Menu bar links to be embedded',
  },
];

const ApiNavbarPropertyPage: FC<ApiPageProperties> = ({ footerProps, navBarProps }) => {
  useEffect(() => {
    Prism.highlightAll();
  });

  return (
    <main role={'main'} className={'flex-shrink-0'}>
      <BannerNavBar {...navBarProps} />
      <Container id='intro' className={'content'}>
        <Row>
          <h1>NavbarProperty Options</h1>
        </Row>
        <Row>
          <p>Below we have provided the options you can supply to the BannerNavBar object.</p>
        </Row>
        <Row>
          <RBTable columns={ApiTableColumns} data={NavbarPropertyData} enablePagination={false} />
        </Row>
        <Row>
          <h2>Example</h2>
        </Row>
        <Row>
          <pre className={'language-javascript'}>
            <code>{JSON.stringify(SimpleBannerExamplesData, null, 2)}</code>
          </pre>
        </Row>
      </Container>
      <Footer {...footerProps} />
    </main>
  );
};

export { ApiNavbarPropertyPage };
