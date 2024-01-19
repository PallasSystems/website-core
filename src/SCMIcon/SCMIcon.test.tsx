import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { SCMIcon } from './SCMIcon.components';

test('Valid GitHub Credentials', () => {
  const renderedResult = render(<SCMIcon project='proj' repository='repo' />);

  const link = renderedResult.findByRole('link');
  expect(link).toHaveAttribute('href', 'https://github.com/proj/repo');
});

test('Blank GitHub Credentials', () => {
  const renderedResult = render(<SCMIcon project='' repository='' />);

  const link = renderedResult.findByRole('link');
  expect(link).toHaveAttribute('href', '');
});

test('Valid Alternative Credentials', () => {
  const renderedResult = render(<SCMIcon project='proj' repository='repo' endpoint='https://bitbucket.org/' />);

  const link = renderedResult.findByRole('link');
  expect(link).toHaveAttribute('href', 'https://bitbucket.org/proj/repo');
});
