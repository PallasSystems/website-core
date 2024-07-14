import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { SCMIcon } from './SCMIcon.components';

test('Valid GitHub Credentials', () => {
  render(<SCMIcon project='proj' repository='repo' />);

  expect(screen.getByTitle('Project Source Code'));
});
