/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
   // Automatically clear mock calls, instances, contexts and results before every test
   clearMocks: true,

   // Indicates whether the coverage information should be collected while executing the test
   collectCoverage: true,
 
   // An array of glob patterns indicating a set of files for which coverage information should be collected
   // collectCoverageFrom: undefined,
   collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/**/*stories.{ts,tsx}'],
 
   // The directory where Jest should output its coverage files
   coverageDirectory: 'coverage',

  // Indicates which provider should be used to instrument code for coverage
  coverageProvider: 'babel',

  // A list of reporter names that Jest uses when writing coverage reports
  coverageReporters: ['json', 'text', 'lcov', 'clover'],

  // Use this configuration option to add custom reporters to Jest
  reporters: ['default', 'jest-junit'],

  // The test environment that will be used for testing
  testEnvironment: 'jest-environment-jsdom',

  // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
  testPathIgnorePatterns: ['/node_modules/', '/docs/'],

  transform: {
    "^.+.tsx?$": ["ts-jest",{}],
  },
};