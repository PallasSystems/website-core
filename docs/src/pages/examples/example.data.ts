import { ReactNode } from 'react';

import { ExampleStorybookPageProperties, ExamplesPage } from './examples.types';
import { ExampleStorybookPage } from './example.storybook.components';

export const ExamplePageData: ExamplesPage[] = [
  {
    link: '/example/bannernavbar/simple',
    text: 'Simple Banner NavBar',
    id: 'bannernavbar--simple',
    page: (data: ExampleStorybookPageProperties): ReactNode => {
      return ExampleStorybookPage(data);
    },
  },
  {
    link: '/example/bannernavbar/complex',
    text: 'Complex Banner NavBar Examples',
    id: 'bannernavbar--complete',
    page: (data: ExampleStorybookPageProperties): ReactNode => {
      return ExampleStorybookPage(data);
    },
  },
];
