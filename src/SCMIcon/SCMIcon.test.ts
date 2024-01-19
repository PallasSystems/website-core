import { IsGitHubRepository, GenerateGitBrowseURL } from './SCMIcon.utils';

describe('IsGitHubRepository', () => {
  test('NoParams', () => {
    expect(IsGitHubRepository('')).toBeFalsy();
    expect(IsGitHubRepository(' ')).toBeFalsy();
  });

  test('Github URL', () => {
    expect(IsGitHubRepository('github://bob.com')).toBeTruthy();
    expect(IsGitHubRepository('https://github.com/pallassystems/website-core')).toBeTruthy();
  });

  test('not gitbuh', () => {
    expect(IsGitHubRepository('https://gitlab.com/pallassystems/website-core')).toBeFalsy();
    expect(IsGitHubRepository('ssh://bitbucket.company.com/example/bob.git')).toBeFalsy;
  });
});

describe('GenerateGitBrowseURL', () => {
  test('NoParams', () => {
    expect(GenerateGitBrowseURL('', '')).toBe('https://github.com/');
  });

  test('Complete', () => {
    expect(GenerateGitBrowseURL('example', '')).toBe('https://github.com/example');
  });

  test('Complete', () => {
    expect(GenerateGitBrowseURL('example', 'test', 'https://gitlab.com')).toBe('https://gitlab.com/example/test');
  });
});
