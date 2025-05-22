export default {
    preset: 'ts-jest',
    testEnvironment: "jsdom",
    testPathIgnorePatterns: ["/node_modules/"],
    moduleNameMapper: {
        ".(css|less|scss)$": "identity-obj-proxy",
    },
    transform: {
        '^.+\\.(ts|tsx)?$': 'ts-jest',
        // babel needed to transpile mermaid.core.mjs
        '^.+\\.(js|jsx|mjs)$': 'babel-jest',
    },
    transformIgnorePatterns: [
        "/node_modules/(?!(mermaid))/"
    ],
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts']
};