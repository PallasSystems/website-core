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
    scm: {
      project: 'PallasSystems',
      repository: 'website-core',
      imgProps: {
        id: 'website-core-github',
        height: '2rem',
        width: '2.5rem',
        className: 'd-inline-block',
      },
    },
  },
  footerProps: {
    socialMedia: {
      headerText: 'Contact Us',
      facebook: '350073883439443',
      linkedin: 'pallas-systems-ltd',
      twitter: 'PallasUK',
    },
    companyName: 'Pallas Systems',
    companyNameLink: 'https://www.pallas.uk',
  },
};
