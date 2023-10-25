const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  clearMocks: true,
  verbose: true,
  collectCoverage: true,
  coverageDirectory: './coverage/',
  coverageProvider: 'v8',
  preset: 'ts-jest',
  moduleDirectories: ['node_modules', '<rootDir>/'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js', '<rootDir>/tests/__mocks__/index.ts'],
  testEnvironment: 'jest-environment-jsdom',
}

module.exports = createJestConfig(customJestConfig)
