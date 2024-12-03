import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { TextEncoder, TextDecoder } from 'util';
Object.assign(global, { TextDecoder, TextEncoder });

import { BannerNavBar } from './BannerNavBar.components';

test('Blank Social Media Credentials', () => {
  const result = render(<BannerNavBar />);

  expect(result.container).toBeValid();
});

test('Confirm the correct label is added.', () => {
  const scmProps = { project: 'proj', repository: 'repo' };
  const socialProps = { scm: scmProps };

  const result = render(<BannerNavBar {...socialProps} />);

  const githubURL = '[href="https://github.com/' + scmProps.project + '/' + scmProps.repository + '"';
  expect(result.container.querySelector(githubURL)).toBeValid();
});
