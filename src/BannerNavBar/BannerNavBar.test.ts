import '@testing-library/jest-dom';
import { GenerateBrandLogo, GenerateHeaderClassName } from './BannerNavBar.utils';

describe('GenerateHeaderClassName', () => {
  test('NoParams', () => {
    expect(GenerateHeaderClassName()).toBe('');
  });

  test('ClassNames Supplied', () => {
    expect(GenerateHeaderClassName('test')).toBe('test');
  });

  test('Fixed Type', () => {
    expect(GenerateHeaderClassName('', 'top')).toBe('fixed-top');
  });

  test('ClassName and Fixed Type', () => {
    expect(GenerateHeaderClassName('test', 'top')).toBe('fixed-top test');
  });

  test('Sticky Type', () => {
    expect(GenerateHeaderClassName('', '', 'top')).toBe('sticky-top');
  });

  test('Sticky Type', () => {
    expect(GenerateHeaderClassName('', 'top', 'footer')).toBe('sticky-footer fixed-top');
  });
});

describe('GenerateBrandLogo', () => {
  test('JustName', () => {
    expect(GenerateBrandLogo({ name: 'test' })).toBeFalsy();
  });
});
