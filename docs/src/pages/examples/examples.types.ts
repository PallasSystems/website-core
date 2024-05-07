import { ReactNode } from 'react';
import { FooterProperties, NavbarProperty } from '@pallassystems/website-core';

type ExamplesPageProperties = {
  footerProps?: FooterProperties;
  navBarProps?: NavbarProperty;
};

type ExampleStorybookPageProperties = {
  footerProps?: FooterProperties;
  navBarProps?: NavbarProperty;
  storybookId: string;
};

type ExamplesPage = {
  link: string;
  text: string;
  id: string;
  page: (properties: ExampleStorybookPageProperties) => ReactNode;
};

export type { ExamplesPage, ExamplesPageProperties, ExampleStorybookPageProperties };
