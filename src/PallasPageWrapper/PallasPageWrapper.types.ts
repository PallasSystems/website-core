import React, { ReactNode } from 'react';

import type { FooterProperties, NavbarProperty } from '../';

export type LoginConfiguration = {
  authenticated?: boolean;
  setAuthenticated?: (arg: boolean) => void;
};

export type PallasPageWrapperProperties = React.HTMLAttributes<HTMLDivElement> &
  LoginConfiguration & {
    footerProps?: FooterProperties;
    navBarProps?: NavbarProperty;
    children?: ReactNode;
  };
