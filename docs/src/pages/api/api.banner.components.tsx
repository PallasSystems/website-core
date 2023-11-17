import { FC, useMemo } from 'react';

import { BannerNavBar, Footer } from '@pallassystems/website-core';
import { RBTColumnDefs, RBTable } from '@pallassystems/react-bootstrap-table';

// Getting Started Page Properties
import { ApiPageProperties, ApiTableEntry } from './api.types';
import { Container, Row } from 'react-bootstrap';

const navbarData: ApiTableEntry[] = [
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

const navbarBrandData: ApiTableEntry[] = [
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

const navbarLinkData: ApiTableEntry[] = [
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

const ApiNavbarBannerPage: FC<ApiPageProperties> = ({ footerProps, navBarProps }) => {
  // Generate the props table
  const columns = useMemo<RBTColumnDefs<ApiTableEntry>[]>(
    () => [
      {
        accessorKey: 'field',
        header: 'Field',
      },
      {
        accessorKey: 'type',
        header: 'Type',
      },
      {
        accessorKey: 'required',
        header: 'Required',
      },
      {
        accessorKey: 'description',
        header: 'Description',
      },
    ],
    [],
  );

  return (
    <main role={'main'} className={'flex-shrink-0'}>
      <BannerNavBar {...navBarProps} />
      <Container id='intro' className={'content my-5'}>
        <Row>
          <h1>BannerNavBar Options</h1>
        </Row>
        <Row>Below we have provided the options you can supply to the BannerNavBar object.</Row>
        <Row>
          <RBTable columns={columns} data={navbarData} />
        </Row>
        <Row>
          <h2>Example</h2>
        </Row>
        <Row>
          <pre className={'language-javascript'}>
            <code>{}</code>
          </pre>
        </Row>
        <Row>
          <h1>NavbarBrand Options</h1>
        </Row>
        <Row>Below we have provided the options you can supply to the BannerNavBar object.</Row>
        <Row>
          <RBTable columns={columns} data={navbarBrandData} />
        </Row>

        <Row>
          <h1>NavbarLinkProperty Options</h1>
        </Row>
        <Row>Below we have provided the options you can supply to the BannerNavBar object.</Row>
        <Row>
          <RBTable columns={columns} data={navbarLinkData} />
        </Row>
      </Container>
      <Footer {...footerProps} />
    </main>
  );
};

export { ApiNavbarBannerPage };
