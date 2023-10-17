import React, { FC } from 'react';

import { BannerNavBar, Footer } from '../../../../src/components';

// HomePage Properties
import { HomePageProperties } from './Home.types';

const HomePage: FC<HomePageProperties> = ({ footerProps, navBarProps }) => {
  return (
    <main role={'main'} className={'flex-shrink-0'}>
      <BannerNavBar {...navBarProps} />
      <Footer {...footerProps} />
    </main>
  );
};

export { HomePage };
