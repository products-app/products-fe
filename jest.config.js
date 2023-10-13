const nextJest = require("next/jest");
const createJestConfig = nextJest({
  dir: "./",
});
const customJestConfig = {
  verbose: true,
  moduleDirectories: ["node_modules", "<rootDir>/"],
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ['<rootDir>/src/tests/setup.ts'],
};
module.exports = createJestConfig(customJestConfig);
