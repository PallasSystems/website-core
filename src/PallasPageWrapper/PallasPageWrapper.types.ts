import React, { ReactNode } from 'react';
import { UserManager } from 'oidc-client-ts';

import type { FooterProperties, NavbarProperty } from '../';

export type LoginConfiguration = {
  authenticated?: boolean;
  setAuthenticated?: (arg: boolean) => void;
  userManager?: UserManager;
};

export type PallasPageWrapperProperties = React.HTMLAttributes<HTMLDivElement> &
  LoginConfiguration & {
    footerProps?: FooterProperties;
    navBarProps?: NavbarProperty;
    children?: ReactNode;
  };
