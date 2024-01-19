import { ReactNode } from 'react';
import { ImageProperty } from '../Common/index';
import { SCMProperties } from '../SCMIcon';

export interface NavbarLinkProperty {
  path: string;
  text: string;
}

/**
 * @typedef {object} NavbarProperty
 * @property {SCMProperties=} NavbarProperty.scm - Source Control Management information to go in the media bar,
 */
export interface NavbarProperty {
  brand?: NavbarBrand;
  items?: NavbarLinkProperty[];
  scm?: SCMProperties;
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
