import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { PallasSVG } from './Common.components';

const imageBasicProps = { id: 'identifier' };
const imageProps = { id: 'identifier', className: 'bob', height: '5rem', width: '5rem' };

test('Blank Pallas Logo', () => {
  render(<PallasSVG {...imageBasicProps} />);

  const result = screen.getByTitle('Pallas Logo');
  expect(result).toBeValid();
});

test('Pallas Logo with properties', () => {
  render(<PallasSVG {...imageProps} />);

  const result = screen.getByTitle('Pallas Logo');
  expect(result).toBeValid();

  expect(result.parentElement).toHaveClass(imageProps.className);
  expect(result.parentElement).toHaveAttribute('id', imageProps.id);
  expect(result.parentElement).toHaveAttribute('height', imageProps.height);
  expect(result.parentElement).toHaveAttribute('width', imageProps.width);
});
