import { ReactNode } from 'react';
// Getting Started Page Properties
import { ApiPage, ApiPageProperties } from '../api.types';
import { ApiNavbarPropertyPage } from './NavbarProperty.components';
import { ApiNavbarBrandPage } from './NavbarBrand.components';
import { ApiNavbarLinkPropertyPage } from './NavbarLinkProperty.components';

export const ApiBannerNavBarPageData: ApiPage[] = [
  {
    link: '/api/navbarproperty',
    text: 'Navbar Property',
    page: (data: ApiPageProperties): ReactNode => {
      return ApiNavbarPropertyPage(data);
    },
  },
  {
    link: '/api/navbarbrand',
    text: 'Navbar Brand',
    page: (data: ApiPageProperties) => {
      return ApiNavbarBrandPage(data);
    },
  },
  {
    link: '/api/navbarlinkproperty',
    text: 'Navbar Link Item',
    page: (data: ApiPageProperties) => {
      return ApiNavbarLinkPropertyPage(data);
    },
  },
];
