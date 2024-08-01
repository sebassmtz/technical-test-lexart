"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
exports.default = {
    coverageProvider: "v8",
    moduleDirectories: ["node_modules", "src"],
    testEnvironment: "node",
    transform: {
        "^.+\\.ts?$": "ts-jest",
    },
    setupFilesAfterEnv: ["jest-extended/all"],
    testMatch: ["**/**/*.test.ts"],
    verbose: true,
    forceExit: true,
    clearMocks: true,
    resetMocks: true,
    restoreMocks: true,
};
//# sourceMappingURL=jest.config.js.map