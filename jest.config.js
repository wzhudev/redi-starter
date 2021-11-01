module.exports = {
  roots: ['<rootDir>/test'],
  testMatch: ['**/*.test.ts', '**/*.test.tsx', '**/*.spec.ts', '**/*.spec.tsx'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  collectCoverageFrom: ['**/src/**/*.{ts,tsx}'],
  moduleNameMapper: {},
  moduleDirectories: ['.', 'src', 'node_modules'],
}
