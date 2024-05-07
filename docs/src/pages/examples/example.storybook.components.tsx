import { FC } from 'react';

import { BannerNavBar, Footer } from '@pallassystems/website-core';

import { ExampleStorybookPageProperties } from './examples.types';

const ExampleStorybookPage: FC<ExampleStorybookPageProperties> = ({ footerProps, navBarProps, storybookId }) => {
  const srcLink = './storybook-static/iframe.html?id=' + storybookId + '&viewMode=docs&shortcuts=false';

  return (
    <>
      <BannerNavBar {...navBarProps} />
      <main className={'flex-grow-1'} role={'main'}>
        <iframe
          className='embed-responsive-item'
          src={srcLink}
          height='100%'
          width='100%'
          style={{ minHeight: '1150px' }}
        />
      </main>
      <Footer {...footerProps} />
    </>
  );
};

export { ExampleStorybookPage };
