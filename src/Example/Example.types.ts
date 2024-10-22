import { FooterProperties, NavbarLinkProperty, NavbarProperty, PallasPageWrapperProperties } from '../';

export type ExamplesPageProps = PallasPageWrapperProperties & {
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
