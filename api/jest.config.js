/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  setupFiles: ["./jest.setup.js"],
  testEnvironment: "node",
  transform: {
    "^.+.tsx?$": ["ts-jest", {}],
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  moduleNameMapper: {
    "^@infrastructure/(.*)$": "<rootDir>/src/infrastructure/$1",
    "^@domain/(.*)$": "<rootDir>/src/domain/$1",
    "^@controllers/(.*)$": "<rootDir>/src/application/controllers/$1",
    "^@middlewares/(.*)$": "<rootDir>/src/application/middlewares/$1",
    "^@routes/(.*)$": "<rootDir>/src/application/routes/$1",
    "^@config/(.*)$": "<rootDir>/src/config/$1",
    "^@utils/(.*)$": "<rootDir>/src/utils/$1",
  },
};
