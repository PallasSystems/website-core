import React, { FC, Suspense } from 'react';

import { PallasPageWrapperProperties } from './PallasPageWrapper.types';
import { BannerNavBar, Footer } from '../';

const PallasPageWrapper: FC<PallasPageWrapperProperties> = ({ authenticated, footerProps, navBarProps, children }) => {
  return (
    <Suspense fallback={<div>hello</div>}>
      <BannerNavBar {...navBarProps} />
      <main className={'flex-grow-1'} role={'main'}>
        {authenticated ? children : <p>test</p>}
      </main>
      <Footer {...footerProps} />
    </Suspense>
  );
};

export { PallasPageWrapper };
