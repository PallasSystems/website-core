import { ReactNode } from 'react';

import { ExamplesPage, ExamplesPageProperties } from './examples.types';
import { SimpleBannerExamplesPage } from './simple';

export const ExamplePageData: ExamplesPage[] = [
  {
    link: '/example/simple',
    text: 'Simple Navbar Example',
    page: (data: ExamplesPageProperties): ReactNode => {
      return SimpleBannerExamplesPage(data);
    },
  },
];
