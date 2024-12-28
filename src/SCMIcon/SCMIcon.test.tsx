import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { SCMIcon } from './SCMIcon.components';

test('Valid GitHub Credentials', () => {
  const result = render(<SCMIcon project='proj' repository='repo' />);

  expect(result.getByTitle('Project Source Code'));
});
