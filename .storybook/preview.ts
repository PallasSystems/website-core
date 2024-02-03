import type { Preview } from '@storybook/react';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/css/base.css';
import '../src/css/bootstrap.solar.css';
import '../src/css/bootstrap.pallas.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
