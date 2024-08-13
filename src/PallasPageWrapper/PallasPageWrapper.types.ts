import React, { ReactNode } from 'react';

import type { AuthenticationConfiguration, FooterProperties, NavbarProperty } from '../';

export type PallasPageWrapperProperties = React.HTMLAttributes<HTMLDivElement> &
  AuthenticationConfiguration & {
    footerProps?: FooterProperties;
    navBarProps?: NavbarProperty;
    children?: ReactNode;
  };
