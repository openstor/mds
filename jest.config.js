module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: [
    "<rootDir>/src/utils/TestIcon.tsx",
    "<rootDir>/src/utils/StoryThemeProvider.tsx",
  ],
};
