import { FooterProperties, NavbarLinkProperty, NavbarProperty } from '../';

export type ExamplesPageProps = {
  footerProps?: FooterProperties;
  navBarProps?: NavbarProperty;
  exampleProps: NavbarLinkProperty[];
  headerText?: String;
  headerMessage?: String;
};

export type ExamplesSubPageProps = {
  footerProps?: FooterProperties;
  navBarProps?: NavbarProperty;
  exampleProps: NavbarLinkProperty;
};

export type ExamplesStorybookPageProps = {
  footerProps?: FooterProperties;
  navBarProps?: NavbarProperty;
  exampleProps: NavbarLinkProperty;
};
