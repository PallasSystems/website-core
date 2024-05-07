import { ReactNode } from 'react';

import { ExampleStorybookPageProperties, ExamplesPage } from './examples.types';
import { ExampleStorybookPage } from './example.storybook.components';

export const ExamplePageData: ExamplesPage[] = [
  {
    link: '/example/bannernavbar',
    text: 'Banner NavBar Examples',
    id: 'bannernavbar--documentation',
    page: (data: ExampleStorybookPageProperties): ReactNode => {
      return ExampleStorybookPage(data);
    },
  },
];
