import { ReactNode } from 'react';
import { ImageProperty } from '../Common/index';

export interface NavbarLinkProperty {
  path: string;
  text: string;
}

export interface NavbarProperty {
  brand?: NavbarBrand;
  items?: NavbarLinkProperty[];
}

export interface NavbarBrand {
  name: string;
  imgFn?: (props?: ImageProperty) => ReactNode;
  imgProps?: ImageProperty;
}
