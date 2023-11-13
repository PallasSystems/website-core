import { PallasSVG } from '@pallassystems/website-core';

import { HomePageProperties } from './pages';

export const PageData: HomePageProperties = {
  navBarProps: {
    brand: {
      name: 'Core Website Components',
      imgFn: PallasSVG({
        id: 'BannerNavBar.Brand.Link.Logo.SVG',
        alt: 'Pallas System Logo',
        height: '3.5rem',
        width: '4rem',
        className: 'd-inline-block',
      }),
    },
    items: [
      { path: '/gettingStarted', text: 'Getting Started' },
      { path: '/api', text: 'API' },
      { path: '/examples', text: 'Examples' },
    ],
  },
  footerProps: {
    socialMedia: {
      headerText: 'Get connected with us on social networks',
      facebook: '350073883439443',
      linkedin: 'pallas-systems-ltd',
      twitter: 'PallasUK',
      scm: {
        project: 'PallasSystems',
        repository: 'website-core',
        type: 'github',
      },
    },
    companyName: 'Pallas Systems',
    companyNameLink: 'https://www.pallas.uk',
  },
};
