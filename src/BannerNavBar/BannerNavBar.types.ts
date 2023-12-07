import { ReactNode } from 'react';
import { ImageProperty } from '../Common/index';

export interface NavbarLinkProperty {
  path: string;
  text: string;
}

export interface NavbarProperty {
  brand?: NavbarBrand;
  items?: NavbarLinkProperty[];
  headerClassName?: string;
  prefixRow?: () => ReactNode;
  suffixRow?: () => ReactNode;
  fixed?: 'top' | 'bottom';
  sticky?: 'top';
}

export interface NavbarBrand {
  name: string;
  imgFn?: (props?: ImageProperty) => ReactNode;
  imgProps?: ImageProperty;
}
