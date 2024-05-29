import React, { ReactNode } from 'react';
import { UserManager } from "oidc-client-ts";

import type { FooterProperties, NavbarProperty } from '../';

export type LoginConfiguration = {
  authenticated: boolean;
  setAuthenticated: (arg: boolean) => void;
  userManager: UserManager;
};

export type PallasPageWrapperProperties<TData extends Record<string, unknown>> = React.HTMLAttributes<HTMLDivElement> & LoginConfiguration & {

  footerProps?: FooterProperties;
  navBarProps?: NavbarProperty;
  children?: (props: TData) => ReactNode;
  childProps: TData;
};
