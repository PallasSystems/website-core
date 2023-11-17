import { FooterProperties, NavbarProperty } from '@pallassystems/website-core';

type ApiPageProperties = {
  footerProps?: FooterProperties;
  navBarProps?: NavbarProperty;
};

type ApiTableEntry = {
  field: String;
  type: String;
  required: String;
  description: string;
};

export type { ApiPageProperties, ApiTableEntry };
