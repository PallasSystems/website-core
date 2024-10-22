import React, { FC, Suspense } from 'react';

import { PallasPageWrapperProperties } from './PallasPageWrapper.types';
import { BannerNavBar, Footer } from '../';
import { Spinner } from 'react-bootstrap';

const PallasPageWrapper: FC<PallasPageWrapperProperties> = ({
  authenticated,
  footerProps,
  navBarProps,
  children
}) => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <BannerNavBar {...navBarProps} />
      <main className={'flex-grow-1'} role={'main'}>
        {authenticated ? children : <p>test</p>}
      </main>
      <Footer {...footerProps} />
    </Suspense>
  );
};

/**
 *
 * @returns
 */
const LoadingSpinner: FC = () => {
  return (
    <Spinner animation='border' role='status'>
      <span className='visually-hidden'>Loading...</span>
    </Spinner>
  );
};

export { PallasPageWrapper };
