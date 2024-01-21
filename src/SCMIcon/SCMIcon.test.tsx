import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { SCMIcon } from './SCMIcon.components';

test('Valid GitHub Credentials', () => {
  render(<SCMIcon project='proj' repository='repo' />);

  expect(screen.getByRole('link')).toHaveAttribute('href', 'https://github.com/proj/repo');
});

test('Valid Alternative Credentials', () => {
  render(<SCMIcon project='proj' repository='repo' endpoint='https://bitbucket.org/' />);

  expect(screen.getByRole('link')).toHaveAttribute('href', 'https://bitbucket.org/proj/repo');
});
