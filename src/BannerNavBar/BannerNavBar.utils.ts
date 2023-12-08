import { ReactNode } from 'react';

import { NavbarBrand } from './BannerNavBar.types';

/**
 *
 * @param brand
 * @returns
 */
export const GenerateBrandLogo = (brand: NavbarBrand): ReactNode => {
  let result: ReactNode = null;

  if (brand) {
    if (typeof brand.imgFn === 'function') {
      result = brand.imgFn(brand.imgProps);
    } else {
      result = brand.imgFn;
    }
  }

  return result;
};

/**
 * This will combine css classes supplied and the sticky marker into a Class name string for the header element.
 * @param headerClassName any CSS Class names to be assigned to the header element
 * @param fixed The navbar fixed type class expect 'top' or 'footer'
 * @param sticky The navbar sticky type class expect 'top' or 'footer'
 * @returns an empty string if no class names are supplied.
 */
export const GenerateHeaderClassName = (headerClassName?: string, fixed?: string, sticky?: string): string => {
  let result = '';

  if (sticky && sticky.length > 0) {
    result = 'sticky-' + sticky;
  }

  if (fixed && fixed.length > 0) {
    result += (result.length > 0 ? ' ' : '') + 'fixed-' + fixed;
  }

  if (headerClassName && headerClassName.length > 0) {
    result += (result.length > 0 ? ' ' : '') + headerClassName;
  }

  return result;
};
